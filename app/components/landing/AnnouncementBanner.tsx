'use client';

import { useState, useEffect, useRef } from 'react';
import { X, Wrench, Clock, AlertTriangle } from 'lucide-react';
import { useTranslation } from '@/src/i18n';
import { MAINTENANCE_CONFIG } from '@/app/lib/maintenance-config';

// ─── Timezone helpers (no external library needed) ────────────────────────────

function zonedTimeToUtc(date: string, time: string, tz: string): Date {
  const [year, month, day] = date.split('-').map(Number);
  const [hour, minute] = time.split(':').map(Number);
  let guess = new Date(Date.UTC(year, month - 1, day, hour, minute));
  for (let i = 0; i < 3; i++) {
    const parts = new Intl.DateTimeFormat('en', {
      timeZone: tz, year: 'numeric', month: '2-digit', day: '2-digit',
      hour: '2-digit', minute: '2-digit', hour12: false,
    })
      .formatToParts(guess)
      .reduce<Record<string, number>>((acc, p) => {
        if (p.type !== 'literal') acc[p.type] = Number(p.value);
        return acc;
      }, {});
    const h = parts.hour === 24 ? 0 : parts.hour;
    const desired = Date.UTC(year, month - 1, day, hour, minute);
    const actual = Date.UTC(parts.year, parts.month - 1, parts.day, h, parts.minute);
    guess = new Date(guess.getTime() - (actual - desired));
  }
  return guess;
}

function formatLocalTime(utcDate: Date, localTz: string): string {
  return new Intl.DateTimeFormat('en', {
    timeZone: localTz, hour: 'numeric', minute: '2-digit', hour12: true,
  }).format(utcDate);
}

function getLocalTzAbbr(utcDate: Date, localTz: string): string {
  return (
    new Intl.DateTimeFormat('en', { timeZone: localTz, timeZoneName: 'short' })
      .formatToParts(utcDate)
      .find((p) => p.type === 'timeZoneName')?.value ?? ''
  );
}

function formatCountdown(totalSeconds: number): string {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

// ─── Types ────────────────────────────────────────────────────────────────────

type BannerStatus = 'scheduled' | 'imminent' | 'in_progress' | 'full_time';

interface BannerData {
  status: BannerStatus;
  timeRange: string;
  secondsLeft: number;
}

export function isMaintenanceActive(data: BannerData | null): boolean {
  if (!data) return false;
  return data.status === 'in_progress' || data.status === 'full_time';
}

// ─── Component ────────────────────────────────────────────────────────────────

export function AnnouncementBanner() {
  const { t } = useTranslation();
  const a = t.announcement;
  const [bannerData, setBannerData] = useState<BannerData | null>(null);
  const bannerRef = useRef<HTMLDivElement>(null);
  const dismissedRef = useRef(false);

  // ── Real state machine ──────────────────────────────────────────────────────
  useEffect(() => {
    if (!MAINTENANCE_CONFIG.enabled) return;

    if (MAINTENANCE_CONFIG.fullTimeMaintenance) {
      const id = window.setTimeout(() => {
        setBannerData({ status: 'full_time', timeRange: '', secondsLeft: 0 });
      }, 0);
      return () => window.clearTimeout(id);
    }

    const localTz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const { startTime, endTime, sourceTimeZone, warningMinutes } = MAINTENANCE_CONFIG;

    function getWindowUtc(offsetDays = 0) {
      const base = new Date(Date.now() + offsetDays * 86_400_000);
      const dateStr = new Intl.DateTimeFormat('sv', { timeZone: sourceTimeZone }).format(base);
      return {
        start: zonedTimeToUtc(dateStr, startTime, sourceTimeZone),
        end:   zonedTimeToUtc(dateStr, endTime,   sourceTimeZone),
      };
    }

    // If today's window already ended, show tomorrow's window as "scheduled".
    const today = getWindowUtc(0);
    const { start: startUtc, end: endUtc } =
      Date.now() >= today.end.getTime() ? getWindowUtc(1) : today;

    const startMs  = startUtc.getTime();
    const endMs    = endUtc.getTime();
    const warnMs   = startMs - warningMinutes * 60 * 1000;

    const timeRange =
      `${formatLocalTime(startUtc, localTz)}` +
      `–${formatLocalTime(endUtc, localTz)} ` +
      `${getLocalTzAbbr(startUtc, localTz)}`;

    function tick() {
      const now = Date.now();
      if (now >= endMs) {
        setBannerData(null);
        return;
      }
      if (now >= startMs) {
        setBannerData((prev) =>
          prev?.status === 'in_progress'
            ? prev
            : { status: 'in_progress', timeRange, secondsLeft: 0 },
        );
        return;
      }
      if (now >= warnMs) {
        const secondsLeft = Math.ceil((startMs - now) / 1000);
        setBannerData({ status: 'imminent', timeRange, secondsLeft });
        return;
      }
      if (!dismissedRef.current) {
        setBannerData((prev) =>
          prev?.status === 'scheduled'
            ? prev
            : { status: 'scheduled', timeRange, secondsLeft: 0 },
        );
      }
    }

    const intervalId = setInterval(tick, 1000);
    const timeoutId  = window.setTimeout(tick, 0);
    return () => {
      clearInterval(intervalId);
      window.clearTimeout(timeoutId);
    };
  }, []);

  // ── CSS variable for navbar offset ─────────────────────────────────────────
  useEffect(() => {
    const el = bannerRef.current;
    if (!el || !bannerData) {
      document.documentElement.style.setProperty('--banner-h', '0px');
      return;
    }
    const sync = () => {
      document.documentElement.style.setProperty('--banner-h', `${el.offsetHeight}px`);
    };
    const ro = new ResizeObserver(sync);
    ro.observe(el);
    sync();
    return () => {
      ro.disconnect();
      document.documentElement.style.setProperty('--banner-h', '0px');
    };
  }, [bannerData]);

  // ── Dismiss ────────────────────────────────────────────────────────────────
  function dismiss() {
    dismissedRef.current = true;
    setBannerData(null);
  }

  // ── Render ─────────────────────────────────────────────────────────────────

  const { status, timeRange, secondsLeft } = bannerData ?? {};
  const isUrgent = status === 'imminent' || status === 'in_progress' || status === 'full_time';
  const countdown = formatCountdown(secondsLeft ?? 0);

  // Text content rendered once for real and once aria-hidden for the ticker loop.
  // Both copies sit side-by-side in a flex row; the CSS animation translates by
  // -50% (= one copy width) so the loop is seamless.
  function tickerCopy(ariaHidden?: true, ghost?: true) {
    return (
      <span
        className={`pr-20 shrink-0${ghost ? ' banner-ticker-ghost' : ''}`}
        aria-hidden={ariaHidden}
      >
        {status === 'scheduled' && (
          <>
            <span className="font-semibold text-white mr-1">{a.title}:</span>
            {/* Mobile — short */}
            <span className="sm:hidden">
              {a.mobileShortWindow} <span className="text-sky-300" dir="ltr">{timeRange}</span> {a.yourLocalTime}
            </span>
            {/* Desktop — full */}
            <span className="hidden sm:inline">
              {a.message}{' '}
              {a.windowLabel}{' '}
              <span className="font-medium text-sky-300" dir="ltr">{timeRange}</span>{' '}
              {a.yourLocalTime}
            </span>
          </>
        )}

        {status === 'imminent' && (
          <>
            <span className="font-semibold text-amber-300 mr-1">{a.imminentTitle}</span>
            {/* Mobile */}
            <span className="sm:hidden">
              {a.imminentShort}{' '}
              <span className="font-mono font-bold text-white tabular-nums" dir="ltr">{countdown}</span>
            </span>
            {/* Desktop */}
            <span className="hidden sm:inline">
              {a.imminentLong}{' '}
              <span className="font-mono font-bold text-white tabular-nums tracking-wider" dir="ltr">{countdown}</span>
              {' '}{a.imminentWindow}{' '}
              <span className="font-medium text-amber-200" dir="ltr">{timeRange}</span>{' '}
              {a.windowSuffix}
            </span>
          </>
        )}

        {status === 'in_progress' && (
          <>
            <span className="font-semibold text-amber-300 mr-1">{a.inProgressTitle}</span>
            {/* Mobile */}
            <span className="sm:hidden">{a.inProgressShort}</span>
            {/* Desktop */}
            <span className="hidden sm:inline">
              {a.inProgressLong}{' '}
              {a.windowLabel2}{' '}
              <span className="font-medium text-amber-200" dir="ltr">{timeRange}</span>{' '}
              {a.windowSuffix}
            </span>
          </>
        )}

        {status === 'full_time' && (
          <>
            <span className="font-semibold text-amber-300 mr-1">{a.fullTimeTitle}</span>
            <span>{a.fullTimeMessage}</span>
          </>
        )}
      </span>
    );
  }

  if (!bannerData) return null;

  return (
    <div
      ref={bannerRef}
      role="banner"
      style={{ colorScheme: 'dark', color: '#e2e8f0' }}
      className={[
        'fixed top-0 left-0 right-0 z-[60] border-b transition-colors duration-500',
        isUrgent
          ? 'bg-[linear-gradient(135deg,#1c0e00_0%,#2d1800_100%)] border-amber-500/35'
          : 'bg-[linear-gradient(135deg,#0c1829_0%,#0d2040_100%)] border-sky-500/20',
      ].join(' ')}
    >
      <div className="mx-auto flex items-center gap-3 px-4 py-2.5 sm:px-6 max-w-7xl xl:max-w-[1400px]">

        {/* Status icon — shrink-0 keeps it out of the scrolling area */}
        {status === 'scheduled'   && <Wrench       className="shrink-0 w-3.5 h-3.5 text-sky-400" aria-hidden="true" />}
        {status === 'imminent'    && <Clock         className="shrink-0 w-3.5 h-3.5 text-amber-400 animate-pulse" aria-hidden="true" />}
        {status === 'in_progress' && <AlertTriangle className="shrink-0 w-3.5 h-3.5 text-amber-400 animate-pulse" aria-hidden="true" />}
        {status === 'full_time'   && <Wrench        className="shrink-0 w-3.5 h-3.5 text-amber-400" aria-hidden="true" />}

        {/* Scrolling text area */}
        <div className="flex-1 overflow-hidden min-w-0">
          {/*
            w-max makes the element size to its content, so translateX(-50%)
            = exactly one copy's width → loop is perfectly seamless.
          */}
          <div style={{ color: 'inherit' }} className="banner-ticker flex w-max whitespace-nowrap text-xs sm:text-sm leading-snug">
            {tickerCopy()}
            {tickerCopy(true, true)}
          </div>
        </div>

        {/* Close — only for non-urgent scheduled state */}
        {status === 'scheduled' && (
          <button
            type="button"
            onClick={dismiss}
            aria-label={a.closeLabel}
            className="shrink-0 rounded-full p-1 text-slate-400 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60"
          >
            <X className="w-4 h-4" aria-hidden="true" />
          </button>
        )}
      </div>
    </div>
  );
}
