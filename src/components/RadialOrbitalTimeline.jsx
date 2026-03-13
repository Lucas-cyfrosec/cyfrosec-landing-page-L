import { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowRight, Link2 } from 'lucide-react';

export default function RadialOrbitalTimeline({ items = [] }) {
  const [expandedId, setExpandedId] = useState(null);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);
  const [pulsingIds, setPulsingIds] = useState(new Set());
  const [orbitRadius, setOrbitRadius] = useState(200);
  const [containerHeight, setContainerHeight] = useState(540);
  const [detailView, setDetailView] = useState('benefits');
  const [detailAnimKey, setDetailAnimKey] = useState(0);

  const containerRef = useRef(null);
  const autoRotateRef = useRef(true);
  const rotationRef = useRef(0);
  const animFrameRef = useRef(null);
  const lastTimeRef = useRef(0);
  const targetRotationRef = useRef(null);
  const swapTimerRef = useRef(null);

  const updateSize = useCallback(() => {
    if (!containerRef.current) return;
    const w = containerRef.current.clientWidth;
    if (w >= 1920) {
      setOrbitRadius(300); setContainerHeight(740);
    } else if (w >= 1280) {
      setOrbitRadius(240); setContainerHeight(620);
    } else if (w >= 1024) {
      setOrbitRadius(200); setContainerHeight(540);
    } else if (w >= 768) {
      setOrbitRadius(170); setContainerHeight(480);
    } else {
      setOrbitRadius(130); setContainerHeight(400);
    }
  }, []);

  const pausedRef = useRef(false);

  useEffect(() => {
    // Disable auto-rotation for users who prefer reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      autoRotateRef.current = false;
      setAutoRotate(false);
    }

    updateSize();
    const observer = new ResizeObserver(updateSize);
    if (containerRef.current) observer.observe(containerRef.current);

    // Pause when tab is hidden
    function onVisibilityChange() {
      pausedRef.current = document.hidden;
    }
    document.addEventListener('visibilitychange', onVisibilityChange);

    let lastRenderTime = 0;
    function tick(time) {
      if (!pausedRef.current) {
        if (autoRotateRef.current) {
          const delta = lastTimeRef.current ? (time - lastTimeRef.current) / 1000 : 0;
          // Always advance the ref so rotation accumulates at any frame rate
          rotationRef.current = (rotationRef.current + delta * 6) % 360;
          // Only trigger React re-render at ~30fps to reduce React work
          if (time - lastRenderTime >= 33) {
            lastRenderTime = time;
            setRotationAngle(rotationRef.current);
          }
        } else if (targetRotationRef.current !== null) {
          const target = targetRotationRef.current;
          const current = rotationRef.current;
          let diff = ((target - current) % 360 + 360) % 360;
          if (diff > 180) diff -= 360;
          if (Math.abs(diff) < 0.3) {
            rotationRef.current = target;
            targetRotationRef.current = null;
            setRotationAngle(target);
          } else {
            const next = (current + diff * 0.08 + 360) % 360;
            rotationRef.current = next;
            setRotationAngle(next);
          }
        }
      }
      lastTimeRef.current = time;
      animFrameRef.current = requestAnimationFrame(tick);
    }
    animFrameRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      document.removeEventListener('visibilitychange', onVisibilityChange);
      observer.disconnect();
    };
  }, [updateSize]);

  function getRelatedIds(id) {
    return items.find((i) => i.id === id)?.relatedIds ?? [];
  }

  function toggleItem(id) {
    if (expandedId === id) {
      setExpandedId(null);
      setAutoRotate(true);
      autoRotateRef.current = true;
      setPulsingIds(new Set());
      setDetailView('benefits');
    } else {
      setExpandedId(id);
      setAutoRotate(false);
      autoRotateRef.current = false;
      setPulsingIds(new Set(getRelatedIds(id)));
      const idx = items.findIndex((i) => i.id === id);
      const targetAngle = (idx / items.length) * 360;
      targetRotationRef.current = ((270 - targetAngle) % 360 + 360) % 360;
      setDetailView('benefits');
      setDetailAnimKey((prev) => prev + 1);
    }
  }

  function handleBgClick(e) {
    if (e.target === containerRef.current || e.currentTarget === e.target) {
      setExpandedId(null);
      setAutoRotate(true);
      autoRotateRef.current = true;
      setPulsingIds(new Set());
      setDetailView('benefits');
    }
  }

  useEffect(() => {
    clearInterval(swapTimerRef.current);
    if (!expandedId) return;

    const expandedItem = items.find((i) => i.id === expandedId);
    const hasBenefits = Boolean(expandedItem?.keyBenefits?.length);
    const hasCapabilities = Boolean(expandedItem?.capabilities?.length);

    if (hasBenefits && hasCapabilities) {
      swapTimerRef.current = setInterval(() => {
        setDetailView((prev) => (prev === 'benefits' ? 'capabilities' : 'benefits'));
        setDetailAnimKey((prev) => prev + 1);
      }, 4200);
    } else if (hasCapabilities) {
      setDetailView('capabilities');
    } else {
      setDetailView('benefits');
    }

    return () => clearInterval(swapTimerRef.current);
  }, [expandedId, items]);

  function nodePosition(index) {
    const angle = ((index / items.length) * 360 + rotationAngle) % 360;
    const rad = (angle * Math.PI) / 180;
    const x = orbitRadius * Math.cos(rad);
    const y = orbitRadius * Math.sin(rad);
    const zIndex = Math.round(100 + 50 * Math.cos(rad));
    const opacity = Math.max(0.4, Math.min(1, 0.4 + 0.6 * ((1 + Math.sin(rad)) / 2)));
    return { x, y, zIndex, opacity };
  }

  function statusStyle(status) {
    switch (status) {
      case 'completed': return 'text-white bg-primary-600';
      case 'in-progress': return 'text-primary-800 dark:text-primary-900 bg-primary-100 dark:bg-primary-200';
      default: return 'text-surface-500 dark:text-surface-300 bg-surface-100 dark:bg-surface-800';
    }
  }

  function statusLabel(status) {
    if (status === 'completed') return 'ACTIVE';
    if (status === 'in-progress') return 'IN PROGRESS';
    return 'COMING SOON';
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full hidden lg:flex items-center justify-center"
      style={{ height: `${containerHeight}px` }}
      onClick={handleBgClick}
    >
      <div
        className="absolute w-full h-full flex items-center justify-center"
        style={{ perspective: '1000px' }}
        onClick={handleBgClick}
      >
        {/* Center orb — explicitly centered at 50%/50% */}
        <div
          className="absolute w-12 h-12 lg:w-16 lg:h-16 3xl:w-20 3xl:h-20 rounded-full bg-gradient-to-br from-primary-400 via-primary-600 to-[#fe904d] animate-pulse flex items-center justify-center z-10 shadow-lg shadow-primary-500/20"
          style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
        >
          <div className="absolute w-16 h-16 lg:w-20 lg:h-20 3xl:w-24 3xl:h-24 rounded-full border border-primary-400/30 dark:border-primary-400/20 animate-ping opacity-70"></div>
          <div className="absolute w-20 h-20 lg:w-24 lg:h-24 3xl:w-28 3xl:h-28 rounded-full border border-primary-400/20 dark:border-primary-400/10 animate-ping opacity-50" style={{ animationDelay: '0.5s' }}></div>
          <div className="w-6 h-6 lg:w-8 lg:h-8 3xl:w-10 3xl:h-10 rounded-full bg-white/90 dark:bg-white/80 backdrop-blur-md"></div>
        </div>

        {/* Orbit ring — explicitly centered */}
        <div
          className="absolute rounded-full border border-surface-200 dark:border-white/10"
          style={{ width: `${orbitRadius * 2}px`, height: `${orbitRadius * 2}px`, left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
        ></div>

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
              style={{
                /* Anchor node center at orbit position: 50%+offset from orbit div's top-left */
                left: `calc(50% + ${pos.x}px)`,
                top: `calc(50% + ${pos.y}px)`,
                transform: 'translate(-50%, -50%)',
                zIndex: isExpanded ? 200 : pos.zIndex,
                opacity: isExpanded ? 1 : pos.opacity
              }}
              onClick={(e) => { e.stopPropagation(); toggleItem(item.id); }}
            >
              {/* Energy glow */}
              <div
                className={`absolute rounded-full ${isPulsing ? 'animate-pulse' : ''}`}
                style={{
                  background: 'radial-gradient(circle, rgba(3,155,224,0.2) 0%, rgba(3,155,224,0) 70%)',
                  width: `${item.energy * 0.5 + 40}px`,
                  height: `${item.energy * 0.5 + 40}px`,
                  left: `-${(item.energy * 0.5) / 2}px`,
                  top: `-${(item.energy * 0.5) / 2}px`
                }}
              ></div>

              {/* Node circle */}
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300
                  ${isExpanded
                    ? 'bg-primary-500 text-white border-primary-300 shadow-lg shadow-primary-500/30 scale-150'
                    : isRelated
                      ? 'bg-primary-500/50 text-white border-primary-400 animate-pulse'
                      : 'bg-white dark:bg-surface-900 text-surface-700 dark:text-white border-surface-300 dark:border-white/40 shadow-md dark:shadow-none'
                  }`}
              >
                <Icon size={16} />
              </div>

              {/* Label — positioned below the node circle, centered horizontally */}
              <div
                className={`absolute whitespace-nowrap text-xs font-semibold tracking-wider transition-all duration-300
                  ${isExpanded ? 'text-surface-900 dark:text-white' : 'text-surface-500 dark:text-white/70'}`}
                style={{ top: '2.75rem', left: '50%', transform: 'translateX(-50%)' }}
              >
                {item.title}
              </div>

              {/* Expanded card — opened below the node */}
              {isExpanded && (
                <div className="absolute left-1/2 -translate-x-1/2 w-64 lg:w-72 3xl:w-80 bg-white dark:bg-surface-900/95 backdrop-blur-lg border border-surface-200 dark:border-white/15 rounded-xl shadow-2xl shadow-surface-900/10 dark:shadow-primary-500/10 overflow-visible z-50" style={{ top: '3.5rem' }}>
                  {/* Connector line */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-px h-3 bg-surface-300 dark:bg-white/40"></div>

                  <div className="p-3 lg:p-4 pb-2">
                    <div className="flex justify-between items-center">
                      <span className={`px-2 py-0.5 text-[10px] font-semibold rounded-full ${statusStyle(item.status)}`}>
                        {statusLabel(item.status)}
                      </span>
                      <span className="text-[10px] font-mono text-surface-400 dark:text-white/50">{item.date}</span>
                    </div>
                    <h4 className="text-sm font-bold text-surface-900 dark:text-white mt-2">{item.title}</h4>
                  </div>

                  <div className="px-3 lg:px-4 pb-3 lg:pb-4 text-xs text-surface-600 dark:text-white/80">
                    <p>{item.content}</p>

                    {(item.keyBenefits?.length > 0 || item.capabilities?.length > 0) && (
                      <div className="mt-3 pt-3 border-t border-surface-100 dark:border-white/10">
                        <div key={`${item.id}-${detailView}-${detailAnimKey}`} className="animate-priceFade">
                          {detailView === 'capabilities' && item.capabilities?.length > 0 ? (
                            <div>
                              <div className="mb-2 text-[10px] text-primary-500 uppercase tracking-[0.16em] font-semibold">
                                Capabilities
                              </div>
                              <p className="text-[11px] text-surface-600 dark:text-white/70 mb-2.5">
                                What {item.title} does
                              </p>
                              <ul className="space-y-2">
                                {item.capabilities.map((capability) => (
                                  <li
                                    key={capability}
                                    className="rounded-lg border border-surface-200 dark:border-white/10 bg-surface-50 dark:bg-[#0c1a2d]/80 p-2.5"
                                  >
                                    <p className="text-xs text-surface-700 dark:text-white/80 leading-relaxed">{capability}</p>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ) : item.keyBenefits?.length > 0 ? (
                            <div>
                              <div className="mb-2 text-[10px] text-primary-500 uppercase tracking-[0.16em] font-semibold">
                                Key Benefits
                              </div>
                              <div className="space-y-2">
                                {item.keyBenefits.map((benefit) => (
                                  <div
                                    key={benefit.title}
                                    className="rounded-lg border border-surface-200 dark:border-white/10 bg-surface-50 dark:bg-[#0c1a2d]/80 p-2.5"
                                  >
                                    <p className="text-xs font-semibold text-surface-900 dark:text-white">{benefit.title}</p>
                                    <p className="text-[11px] text-surface-600 dark:text-white/75 mt-1 leading-relaxed">{benefit.description}</p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ) : null}
                        </div>
                      </div>
                    )}


                    {/* Related nodes */}
                    {item.relatedIds.length > 0 && (
                      <div className="mt-3 pt-3 border-t border-surface-100 dark:border-white/10">
                        <div className="flex items-center gap-1 mb-2 text-[10px] text-surface-400 dark:text-white/60 uppercase tracking-wider font-medium">
                          <Link2 size={10} />
                          Connected Modules
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {item.relatedIds.map((relId) => {
                            const related = items.find((i) => i.id === relId);
                            if (!related) return null;
                            return (
                              <button
                                key={relId}
                                className="flex items-center gap-1 h-6 px-2 text-[10px] border border-surface-200 dark:border-white/20 rounded text-surface-600 dark:text-white/80 hover:bg-surface-100 dark:hover:bg-white/10 hover:text-surface-900 dark:hover:text-white transition-colors"
                                onClick={(e) => { e.stopPropagation(); toggleItem(relId); }}
                              >
                                {related.title}
                                <ArrowRight size={8} className="text-surface-400 dark:text-white/50" />
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
