'use client';

import Image from 'next/image';
import { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowRight, Link2, X } from 'lucide-react';
import type { ComponentType } from 'react';

interface KeyBenefit { title: string; description: string; }
type DetailView = 'benefits' | 'capabilities';

export interface TimelineItem {
  id: number;
  title: string;
  date: string;
  content: string;
  capabilities?: string[];
  keyBenefits?: KeyBenefit[];
  category: string;
  icon: ComponentType<{ size?: number; className?: string }>;
  relatedIds: number[];
  status: 'completed' | 'in-progress' | 'planned';
  energy: number;
}

interface TimelineDetailContentProps {
  item: TimelineItem;
  items: TimelineItem[];
  detailView: DetailView;
  detailAnimKey: number;
  animationKeyPrefix: string;
  variant: 'desktop' | 'mobile';
  onToggleDetailView: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onSelectRelated: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
}

function TimelineDetailContent({
  item,
  items,
  detailView,
  detailAnimKey,
  animationKeyPrefix,
  variant,
  onToggleDetailView,
  onSelectRelated,
}: TimelineDetailContentProps) {
  const toggleClassName =
    variant === 'desktop'
      ? 'flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-medium text-white/50 hover:text-white/80 transition-colors'
      : 'flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-medium text-surface-500 dark:text-white/50 hover:text-primary-500 dark:hover:text-white/80 transition-colors';

  return (
    <>
      <p className="leading-relaxed">{item.content}</p>

      {(item.keyBenefits?.length || item.capabilities?.length) ? (
        <div className="mt-3 pt-3 border-t border-surface-100 dark:border-white/10">
          <div className="flex items-center justify-between mb-2.5">
            <span className="text-[10px] text-primary-500 uppercase tracking-[0.16em] font-semibold">
              {detailView === 'capabilities' ? 'Capabilities' : 'Key Benefits'}
            </span>
            {item.keyBenefits?.length && item.capabilities?.length ? (
              <button onClick={onToggleDetailView} className={toggleClassName}>
                {detailView === 'benefits' ? (
                  <>
                    Capabilities <ArrowRight size={10} />
                  </>
                ) : (
                  <>
                    <ArrowRight size={10} className="rotate-180" /> Benefits
                  </>
                )}
              </button>
            ) : null}
          </div>
          <div key={`${animationKeyPrefix}-${item.id}-${detailView}-${detailAnimKey}`} className="animate-priceFade">
            {detailView === 'capabilities' && item.capabilities?.length ? (
              <div>
                <p className="text-[11px] text-surface-600 dark:text-white/70 mb-2.5">What {item.title} does</p>
                <ul className="space-y-2">
                  {item.capabilities.map((capability) => (
                    <li key={capability} className="rounded-lg border border-surface-200 dark:border-white/10 bg-surface-50 dark:bg-[#0c1a2d]/80 p-2.5">
                      <p className="text-xs text-surface-700 dark:text-white/80 leading-relaxed">{capability}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ) : item.keyBenefits?.length ? (
              <div className="space-y-2">
                {item.keyBenefits.map((benefit) => (
                  <div key={benefit.title} className="rounded-lg border border-surface-200 dark:border-white/10 bg-surface-50 dark:bg-[#0c1a2d]/80 p-2.5">
                    <p className="text-xs font-semibold text-surface-900 dark:text-white">{benefit.title}</p>
                    <p className="text-[11px] text-surface-600 dark:text-white/75 mt-1 leading-relaxed">{benefit.description}</p>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      ) : null}

      {item.relatedIds.length > 0 ? (
        <div className="mt-3 pt-3 border-t border-surface-100 dark:border-white/10">
          <div className="flex items-center gap-1 mb-2 text-[10px] text-surface-400 dark:text-white/60 uppercase tracking-wider font-medium">
            <Link2 size={10} />
            Connected Modules
          </div>
          <div className="flex flex-wrap gap-1">
            {item.relatedIds.map((relatedId) => {
              const related = items.find((candidate) => candidate.id === relatedId);
              if (!related) return null;

              return (
                <button
                  key={relatedId}
                  className="flex items-center gap-1 h-6 px-2 text-[10px] border border-surface-200 dark:border-white/20 rounded text-surface-600 dark:text-white/80 hover:bg-surface-100 dark:hover:bg-white/10 transition-colors"
                  onClick={(event) => onSelectRelated(event, relatedId)}
                >
                  {related.title}
                  <ArrowRight size={8} className="text-surface-400 dark:text-white/50" />
                </button>
              );
            })}
          </div>
        </div>
      ) : null}
    </>
  );
}

export default function RadialOrbitalTimeline({ items = [] }: { items?: TimelineItem[] }) {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [pulsingIds, setPulsingIds] = useState(new Set<number>());
  const [orbitRadius, setOrbitRadius] = useState(200);
  const [containerHeight, setContainerHeight] = useState(540);
  const [detailView, setDetailView] = useState<DetailView>('benefits');
  const [detailAnimKey, setDetailAnimKey] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const autoRotateRef = useRef(true);
  const rotationRef = useRef(0);
  const animFrameRef = useRef<number | null>(null);
  const lastTimeRef = useRef(0);
  const targetRotationRef = useRef<number | null>(null);

  const updateSize = useCallback(() => {
    if (!containerRef.current) return;
    const w = containerRef.current.clientWidth;
    if (w >= 1920) { setOrbitRadius(300); setContainerHeight(740); }
    else if (w >= 1280) { setOrbitRadius(240); setContainerHeight(620); }
    else if (w >= 1024) { setOrbitRadius(200); setContainerHeight(540); }
    else if (w >= 768)  { setOrbitRadius(170); setContainerHeight(480); }
    else if (w >= 480)  { setOrbitRadius(150); setContainerHeight(420); }
    else                { setOrbitRadius(120); setContainerHeight(360); }
  }, []);

  const pausedRef = useRef(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      autoRotateRef.current = false;
    }
    const sizeFrame = requestAnimationFrame(updateSize);
    const observer = new ResizeObserver(updateSize);
    if (containerRef.current) observer.observe(containerRef.current);
    function onVisibilityChange() { pausedRef.current = document.hidden; }
    document.addEventListener('visibilitychange', onVisibilityChange);
    let lastRenderTime = 0;
    function tick(time: number) {
      if (!pausedRef.current) {
        if (autoRotateRef.current) {
          const delta = lastTimeRef.current ? (time - lastTimeRef.current) / 1000 : 0;
          rotationRef.current = (rotationRef.current + delta * 6) % 360;
          if (time - lastRenderTime >= 33) { lastRenderTime = time; setRotationAngle(rotationRef.current); }
        } else if (targetRotationRef.current !== null) {
          const target = targetRotationRef.current, current = rotationRef.current;
          let diff = ((target - current) % 360 + 360) % 360;
          if (diff > 180) diff -= 360;
          if (Math.abs(diff) < 0.3) { rotationRef.current = target; targetRotationRef.current = null; setRotationAngle(target); }
          else { const next = (current + diff * 0.08 + 360) % 360; rotationRef.current = next; setRotationAngle(next); }
        }
      }
      lastTimeRef.current = time;
      animFrameRef.current = requestAnimationFrame(tick);
    }
    animFrameRef.current = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(sizeFrame);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      document.removeEventListener('visibilitychange', onVisibilityChange);
      observer.disconnect();
    };
  }, [updateSize]);

  function getRelatedIds(id: number) { return items.find(i => i.id === id)?.relatedIds ?? []; }
  function getDefaultDetailView(item?: TimelineItem | null) {
    const hasBenefits = Boolean(item?.keyBenefits?.length);
    const hasCapabilities = Boolean(item?.capabilities?.length);
    return hasCapabilities && !hasBenefits ? 'capabilities' : 'benefits';
  }

  function toggleItem(id: number) {
    if (expandedId === id) {
      setExpandedId(null); autoRotateRef.current = true;
      setPulsingIds(new Set()); setDetailView('benefits');
    } else {
      const nextItem = items.find(i => i.id === id);
      setExpandedId(id); autoRotateRef.current = false;
      setPulsingIds(new Set(getRelatedIds(id)));
      const idx = items.findIndex(i => i.id === id);
      const targetAngle = (idx / items.length) * 360;
      targetRotationRef.current = ((270 - targetAngle) % 360 + 360) % 360;
      setDetailView(getDefaultDetailView(nextItem)); setDetailAnimKey(prev => prev + 1);
    }
  }

  function handleBgClick(e: React.MouseEvent) {
    if (e.target === containerRef.current || e.currentTarget === e.target) {
      setExpandedId(null); autoRotateRef.current = true;
      setPulsingIds(new Set()); setDetailView('benefits');
    }
  }

  const orbitPadding = Math.max(0, items.length - 6) * 18;
  const effectiveOrbitRadius = orbitRadius + orbitPadding;
  const effectiveContainerHeight = containerHeight + Math.max(0, items.length - 6) * 28;

  function nodePosition(index: number) {
    const angle = ((index / items.length) * 360 + rotationAngle) % 360;
    const rad = (angle * Math.PI) / 180;
    const x = effectiveOrbitRadius * Math.cos(rad), y = effectiveOrbitRadius * Math.sin(rad);
    const zIndex = Math.round(100 + 50 * Math.cos(rad));
    const opacity = Math.max(0.75, Math.min(1, 0.75 + 0.25 * ((1 + Math.sin(rad)) / 2)));
    return { x, y, zIndex, opacity };
  }

  function statusStyle(status: string) {
    if (status === 'completed') return 'text-white bg-primary-600';
    if (status === 'in-progress') return 'text-primary-800 dark:text-primary-900 bg-primary-100 dark:bg-primary-200';
    return 'text-surface-500 dark:text-surface-300 bg-surface-100 dark:bg-surface-800';
  }
  function statusLabel(status: string) {
    if (status === 'completed') return 'ACTIVE';
    if (status === 'in-progress') return 'IN PROGRESS';
    return 'COMING SOON';
  }

  const expandedItem = expandedId !== null ? items.find(i => i.id === expandedId) : null;

  return (
    <div className="w-full">
      {/* Orbit canvas */}
      <div
        ref={containerRef}
        className="relative w-full flex items-center justify-center"
        style={{ height: `${effectiveContainerHeight}px` }}
        onClick={handleBgClick}
      >
        <div className="absolute w-full h-full flex items-center justify-center" style={{ perspective: '1000px' }} onClick={handleBgClick}>
          {/* Center orb */}
          <div className="absolute w-12 h-12 lg:w-16 lg:h-16 3xl:w-20 3xl:h-20 rounded-full bg-gradient-to-br from-primary-400 via-primary-600 to-[#fe904d] animate-pulse flex items-center justify-center z-10 shadow-lg shadow-primary-500/20" style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
            <div className="absolute w-16 h-16 lg:w-20 lg:h-20 3xl:w-24 3xl:h-24 rounded-full border border-primary-400/30 dark:border-primary-400/20 animate-ping opacity-70" />
            <div className="absolute w-20 h-20 lg:w-24 lg:h-24 3xl:w-28 3xl:h-28 rounded-full border border-primary-400/20 dark:border-primary-400/10 animate-ping opacity-50" style={{ animationDelay: '0.5s' }} />
            <div className="w-8 h-8 lg:w-12 lg:h-12 3xl:w-14 3xl:h-14 rounded-full bg-white/90 dark:bg-white/80 backdrop-blur-md flex items-center justify-center">
              <Image src="/favicon.ico" alt="CyfroSec" width={56} height={56} className="w-6 h-6 lg:w-9 lg:h-9 3xl:w-11 3xl:h-11 object-contain" draggable={false} />
            </div>
          </div>

          {/* Orbit ring */}
          <div className="absolute rounded-full border border-surface-200 dark:border-white/10" style={{ width: `${effectiveOrbitRadius*2}px`, height: `${effectiveOrbitRadius*2}px`, left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }} />

          {/* Nodes */}
          {items.map((item, index) => {
            const pos = nodePosition(index);
            const isExpanded = expandedId === item.id;
            const isRelated = expandedId !== null && pulsingIds.has(item.id);
            const isPulsing = pulsingIds.has(item.id);
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="absolute cursor-pointer"
                style={{ left: `calc(50% + ${pos.x}px)`, top: `calc(50% + ${pos.y}px)`, transform: 'translate(-50%, -50%)', zIndex: isExpanded ? 200 : pos.zIndex, opacity: isExpanded ? 1 : pos.opacity }}
                onClick={e => { e.stopPropagation(); toggleItem(item.id); }}
              >
                <div className="absolute rounded-full" style={{ background: 'radial-gradient(circle, rgba(3,155,224,0.2) 0%, rgba(3,155,224,0) 70%)', width: `${item.energy*0.5+40}px`, height: `${item.energy*0.5+40}px`, left: `-${(item.energy*0.5)/2}px`, top: `-${(item.energy*0.5)/2}px` }} />
                <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${isExpanded ? 'bg-primary-500 text-white border-primary-300 shadow-lg shadow-primary-500/30 scale-150' : isRelated ? 'bg-primary-500/50 text-white border-primary-400 animate-pulse' : 'bg-white dark:bg-surface-800 text-surface-700 dark:text-white border-surface-300 dark:border-white/60 shadow-md dark:shadow-none'} ${isPulsing ? 'animate-pulse' : ''}`}>
                  <Icon size={16} />
                </div>
                <div className={`absolute whitespace-nowrap text-xs font-semibold tracking-wider transition-all duration-300 ${isExpanded ? 'text-surface-900 dark:text-white' : 'text-surface-500 dark:text-white/90'}`} style={{ top: '2.75rem', left: '50%', transform: 'translateX(-50%)' }}>
                  {item.title}
                </div>

                {/* Desktop popup — shown inline near node (lg+) */}
                {isExpanded && (
                  <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 w-64 lg:w-72 3xl:w-80 bg-white dark:bg-surface-900/95 backdrop-blur-lg border border-surface-200 dark:border-white/15 rounded-xl shadow-2xl overflow-visible z-50" style={{ top: '3.5rem' }}>
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-px h-3 bg-surface-300 dark:bg-white/40" />
                    <div className="p-3 lg:p-4 pb-2">
                      <div className="flex justify-between items-center">
                        <span className={`px-2 py-0.5 text-[10px] font-semibold rounded-full ${statusStyle(item.status)}`}>{statusLabel(item.status)}</span>
                        <span className="text-[10px] font-mono text-surface-400 dark:text-white/50">{item.date}</span>
                      </div>
                      <h4 className="text-sm font-bold text-surface-900 dark:text-white mt-2">{item.title}</h4>
                    </div>
                    <div className="px-3 lg:px-4 pb-3 lg:pb-4 text-xs text-surface-600 dark:text-white/80">
                      <TimelineDetailContent
                        item={item}
                        items={items}
                        detailView={detailView}
                        detailAnimKey={detailAnimKey}
                        animationKeyPrefix="desktop"
                        variant="desktop"
                        onToggleDetailView={(event) => {
                          event.stopPropagation();
                          setDetailView((value) => (value === 'benefits' ? 'capabilities' : 'benefits'));
                          setDetailAnimKey((key) => key + 1);
                        }}
                        onSelectRelated={(event, relatedId) => {
                          event.stopPropagation();
                          toggleItem(relatedId);
                        }}
                      />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile detail panel — shown below orbit, only on small screens */}
      {expandedItem && (
        <div className="lg:hidden mx-3 sm:mx-4 mb-4 rounded-xl border border-surface-200 dark:border-white/15 bg-white dark:bg-surface-900/95 backdrop-blur-lg shadow-2xl overflow-hidden animate-priceFade">
          <div className="flex items-start justify-between gap-2 p-4 pb-2">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap mb-1">
                <span className={`px-2 py-0.5 text-[10px] font-semibold rounded-full ${statusStyle(expandedItem.status)}`}>{statusLabel(expandedItem.status)}</span>
                <span className="text-[10px] font-mono text-surface-400 dark:text-white/50">{expandedItem.date}</span>
              </div>
              <h4 className="text-sm font-bold text-surface-900 dark:text-white">{expandedItem.title}</h4>
            </div>
            <button
              onClick={() => { setExpandedId(null); autoRotateRef.current = true; setPulsingIds(new Set()); }}
              className="shrink-0 mt-0.5 p-1 rounded-lg text-surface-400 hover:text-surface-700 dark:text-white/40 dark:hover:text-white/80 hover:bg-surface-100 dark:hover:bg-white/10 transition-colors"
              aria-label="Close"
            >
              <X size={14} />
            </button>
          </div>
          <div className="px-4 pb-4 text-xs text-surface-600 dark:text-white/80">
            <TimelineDetailContent
              item={expandedItem}
              items={items}
              detailView={detailView}
              detailAnimKey={detailAnimKey}
              animationKeyPrefix="mobile"
              variant="mobile"
              onToggleDetailView={() => {
                setDetailView((value) => (value === 'benefits' ? 'capabilities' : 'benefits'));
                setDetailAnimKey((key) => key + 1);
              }}
              onSelectRelated={(_, relatedId) => toggleItem(relatedId)}
            />
          </div>
        </div>
      )}
    </div>
  );
}
