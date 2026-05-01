"use client"

import { useState, type ReactNode } from "react"
import { motion, AnimatePresence, LayoutGroup, type PanInfo } from "framer-motion"
import { cn } from "@/lib/utils"
import { Layers, LayoutList } from "lucide-react"

export type LayoutMode = "stack" | "list"

export interface CardData {
  id: string
  title: string
  description?: string
  points?: string[]
  badge?: string
  icon?: ReactNode
  accentColor?: string
}

export interface MorphingCardStackProps {
  cards?: CardData[]
  className?: string
  defaultLayout?: LayoutMode
  onCardClick?: (card: CardData) => void
}

const layoutIcons = {
  stack: Layers,
  list: LayoutList,
}

const SWIPE_THRESHOLD = 50

// Per-card accent colours (top strip + dot)
const ACCENT_COLORS = [
  { strip: "from-primary-400/80 to-primary-600/60", dot: "bg-primary-400" },
  { strip: "from-cyan-400/70 to-cyan-600/50",       dot: "bg-cyan-400"    },
  { strip: "from-violet-400/70 to-violet-600/50",   dot: "bg-violet-400"  },
]

export function MorphingCardStack({
  cards = [],
  className,
  defaultLayout = "stack",
  onCardClick,
}: MorphingCardStackProps) {
  const [layout, setLayout]           = useState<LayoutMode>(defaultLayout)
  const [expandedCard, setExpandedCard] = useState<string | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isDragging, setIsDragging]   = useState(false)

  if (!cards || cards.length === 0) return null

  const handleDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const { offset, velocity } = info
    const swipe = Math.abs(offset.x) * velocity.x
    if (offset.x < -SWIPE_THRESHOLD || swipe < -1000)
      setActiveIndex((prev) => (prev + 1) % cards.length)
    else if (offset.x > SWIPE_THRESHOLD || swipe > 1000)
      setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length)
    setIsDragging(false)
  }

  const getStackOrder = () => {
    const reordered = []
    for (let i = 0; i < cards.length; i++) {
      const index = (activeIndex + i) % cards.length
      reordered.push({ ...cards[index], stackPosition: i, originalIndex: (activeIndex + i) % cards.length })
    }
    return reordered.reverse()
  }

  const getLayoutStyles = (stackPosition: number) => {
    if (layout === "stack") {
      return {
        top:    stackPosition * 14,
        left:   stackPosition * 14,
        zIndex: cards.length - stackPosition,
        rotate: (stackPosition - 1) * 1.5,
      }
    }
    return { top: 0, left: 0, zIndex: 1, rotate: 0 }
  }

  const containerStyles = {
    stack: "relative h-72 w-full max-w-lg",
    list:  "flex flex-col gap-3",
  }

  const displayCards =
    layout === "stack"
      ? getStackOrder()
      : cards.map((c, i) => ({ ...c, stackPosition: i, originalIndex: i }))

  return (
    <div className={cn("space-y-4", className)}>
      {/* Layout toggle */}
      <div className="flex items-center justify-end gap-1 rounded-xl border border-white/8 bg-white/4 p-1 w-fit ml-auto">
        {(Object.keys(layoutIcons) as LayoutMode[]).map((mode) => {
          const Icon = layoutIcons[mode]
          return (
            <button
              key={mode}
              onClick={() => setLayout(mode)}
              className={cn(
                "rounded-lg p-1.5 transition-all",
                layout === mode
                  ? "bg-primary-500/20 text-primary-400 ring-1 ring-primary-500/30"
                  : "text-white/30 hover:text-white/60 hover:bg-white/5",
              )}
              aria-label={`Switch to ${mode} layout`}
            >
              <Icon className="size-3.5" />
            </button>
          )
        })}
      </div>

      {/* Cards */}
      <LayoutGroup>
        <motion.div layout className={cn(containerStyles[layout], layout === "stack" && "mx-auto")}>
          <AnimatePresence mode="popLayout">
            {displayCards.map((card) => {
              const styles      = getLayoutStyles(card.stackPosition)
              const isExpanded  = expandedCard === card.id
              const isTopCard   = layout === "stack" && card.stackPosition === 0
              const accent      = ACCENT_COLORS[card.originalIndex % ACCENT_COLORS.length]

              return (
                <motion.div
                  key={card.id}
                  layoutId={card.id}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: isExpanded ? 1.03 : 1, x: 0, ...styles }}
                  exit={{ opacity: 0, scale: 0.85, x: -200 }}
                  transition={{ type: "spring", stiffness: 280, damping: 26 }}
                  drag={isTopCard ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.6}
                  onDragStart={() => setIsDragging(true)}
                  onDragEnd={handleDragEnd}
                  whileDrag={{ scale: 1.02, cursor: "grabbing" }}
                  onClick={() => {
                    if (isDragging) return
                    setExpandedCard(isExpanded ? null : card.id)
                    onCardClick?.(card)
                  }}
                  className={cn(
                    "overflow-hidden rounded-2xl border border-white/10 backdrop-blur-sm transition-colors",
                    "hover:border-white/20",
                    layout === "stack" && "absolute w-[90%] h-56 cursor-grab active:cursor-grabbing",
                    layout === "list"  && "w-full",
                    isExpanded && "ring-1 ring-primary-500/40",
                  )}
                  style={{
                    background: "linear-gradient(160deg,#111f35 0%,#0c1628 60%,#080f1e 100%)",
                    // Subtle ruled-line texture
                    backgroundImage:
                      "linear-gradient(160deg,#111f35 0%,#0c1628 60%,#080f1e 100%), repeating-linear-gradient(transparent,transparent 27px,rgba(255,255,255,0.03) 27px,rgba(255,255,255,0.03) 28px)",
                    backgroundBlendMode: "normal",
                  }}
                >
                  {/* Coloured top strip */}
                  <div className={cn("h-1 w-full bg-gradient-to-r", accent.strip)} />

                  <div className="px-5 py-4 flex flex-col h-[calc(100%-4px)]">
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-3 pb-3 border-b border-white/6">
                      {card.icon && (
                        <div className={cn(
                          "flex shrink-0 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10",
                          layout === "stack" ? "size-10" : "size-8",
                        )}>
                          {card.icon}
                        </div>
                      )}
                      <div className="flex items-center gap-2 min-w-0">
                        <h3 className={cn(
                          "font-bold text-white truncate",
                          layout === "stack" ? "text-base" : "text-sm",
                        )}>
                          {card.title}
                        </h3>
                        {card.badge && (
                          <span className={cn(
                            "shrink-0 rounded-full border border-white/10 bg-white/5 font-semibold uppercase tracking-wider text-white/50",
                            layout === "stack" ? "px-2.5 py-0.5 text-[11px]" : "px-2 py-0.5 text-[10px]",
                          )}>
                            {card.badge}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Bullet points / description */}
                    {card.points && card.points.length > 0 ? (
                      <ul className="space-y-2.5 flex-1">
                        {card.points.map((point) => (
                          <li key={point} className={cn(
                            "flex items-start gap-2.5 leading-relaxed text-white/60",
                            layout === "stack" ? "text-sm" : "text-xs",
                          )}>
                            <span className={cn("mt-1.5 size-1.5 shrink-0 rounded-full", accent.dot)} />
                            {point}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className={cn(
                        "leading-relaxed text-white/60 flex-1",
                        layout === "stack" ? "text-sm line-clamp-4" : "text-xs line-clamp-2",
                      )}>
                        {card.description}
                      </p>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>
      </LayoutGroup>

      {/* Dots + hint (stack only) */}
      {layout === "stack" && cards.length > 1 && (
        <div className="flex flex-col items-center gap-2 pt-2">
          <div className="flex gap-1.5">
            {cards.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "h-1 rounded-full transition-all duration-300",
                  index === activeIndex
                    ? "w-5 bg-primary-500"
                    : "w-1 bg-white/20 hover:bg-white/40",
                )}
                aria-label={`Go to card ${index + 1}`}
              />
            ))}
          </div>
          <p className="text-xs text-white/60 tracking-wide">Swipe card to view more</p>
        </div>
      )}
    </div>
  )
}
