'use client';

import { useEffect, useState } from 'react';
import { MAINTENANCE_CONFIG } from '@/app/lib/maintenance-config';

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

export function useMaintenanceStatus(): boolean {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!MAINTENANCE_CONFIG.enabled) return;
    if (MAINTENANCE_CONFIG.fullTimeMaintenance) {
      const id = window.setTimeout(() => setActive(true), 0);
      return () => window.clearTimeout(id);
    }

    const { startTime, endTime, sourceTimeZone } = MAINTENANCE_CONFIG;

    function check() {
      const now = Date.now();
      const base = new Date(now);
      const dateStr = new Intl.DateTimeFormat('sv', { timeZone: sourceTimeZone }).format(base);
      const startUtc = zonedTimeToUtc(dateStr, startTime, sourceTimeZone);
      const endUtc = zonedTimeToUtc(dateStr, endTime, sourceTimeZone);
      setActive(now >= startUtc.getTime() && now < endUtc.getTime());
    }

    check();
    const id = setInterval(check, 30_000);
    return () => clearInterval(id);
  }, []);

  return active;
}
