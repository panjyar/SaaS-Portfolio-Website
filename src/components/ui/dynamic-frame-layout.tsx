"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Frame {
  id: number
  video: string
  label: string
  defaultPos: { x: number; y: number; w: number; h: number }
  mediaSize: number
  isHovered: boolean
}

interface FrameComponentProps {
  video: string
  label: string
  width: number | string
  height: number | string
  className?: string
  mediaSize: number
  showFrame: boolean
  isHovered: boolean
}

function FrameComponent({
  video,
  label,
  width,
  height,
  className = "",
  mediaSize,
  isHovered,
}: FrameComponentProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (isHovered) {
      if (videoRef.current) {
        const playPromise = videoRef.current.play()
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            // Ignore error from interrupting play() with pause() on fast un-hover
          })
        }
      }
    } else {
      if (videoRef.current) {
        videoRef.current.pause()
        videoRef.current.currentTime = 0
      }
    }
  }, [isHovered])

  return (
    <div
      className={`relative ${className}`}
      style={{
        width,
        height,
        transition: "width 0.3s ease-in-out, height 0.3s ease-in-out",
      }}
    >
      <div className="relative w-full h-full overflow-hidden rounded-lg">
        {/* Video layer */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            zIndex: 1,
            transition: "all 0.3s ease-in-out",
            width: "100%",
            height: "100%",
          }}
        >
          <div
            className="w-full h-full overflow-hidden"
            style={{
              transform: `scale(${mediaSize})`,
              transformOrigin: "center",
              transition: "transform 0.3s ease-in-out",
            }}
          >
            <video
              className="w-full h-full object-cover"
              src={video}
              loop
              muted
              playsInline
              ref={videoRef}
            />
          </div>
        </div>

        {/* Dark overlay + label */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            zIndex: 2,
            background: isHovered
              ? "linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.5) 100%)"
              : "linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%)",
            transition: "background 0.4s ease-in-out",
          }}
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={isHovered ? "hovered" : "default"}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="text-white font-semibold tracking-wide text-center px-3"
              style={{
                fontSize: isHovered ? "1.35rem" : "1rem",
                textShadow: "0 2px 12px rgba(0,0,0,0.6)",
                transition: "font-size 0.3s ease",
              }}
            >
              {label}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* Green accent border on hover */}
        <div
          className="absolute inset-0 rounded-lg pointer-events-none"
          style={{
            zIndex: 3,
            border: isHovered ? "2px solid rgba(0, 167, 85, 0.6)" : "2px solid transparent",
            transition: "border-color 0.3s ease-in-out",
          }}
        />
      </div>
    </div>
  )
}

interface DynamicFrameLayoutProps {
  frames: Frame[]
  className?: string
  showFrames?: boolean
  hoverSize?: number
  gapSize?: number
}

export function DynamicFrameLayout({
  frames: initialFrames,
  className,
  showFrames = false,
  hoverSize = 6,
  gapSize = 4,
}: DynamicFrameLayoutProps) {
  const [frames] = useState<Frame[]>(initialFrames)
  const [hovered, setHovered] = useState<{ row: number; col: number } | null>(null)

  const getRowSizes = () => {
    if (hovered === null) return "4fr 4fr 4fr"
    const { row } = hovered
    const nonHoveredSize = (12 - hoverSize) / 2
    return [0, 1, 2].map((r) => (r === row ? `${hoverSize}fr` : `${nonHoveredSize}fr`)).join(" ")
  }

  const getColSizes = () => {
    if (hovered === null) return "4fr 4fr 4fr"
    const { col } = hovered
    const nonHoveredSize = (12 - hoverSize) / 2
    return [0, 1, 2].map((c) => (c === col ? `${hoverSize}fr` : `${nonHoveredSize}fr`)).join(" ")
  }

  const getTransformOrigin = (x: number, y: number) => {
    const vertical = y === 0 ? "top" : y === 4 ? "center" : "bottom"
    const horizontal = x === 0 ? "left" : x === 4 ? "center" : "right"
    return `${vertical} ${horizontal}`
  }

  return (
    <div
      className={`relative w-full h-full ${className}`}
      style={{
        display: "grid",
        gridTemplateRows: getRowSizes(),
        gridTemplateColumns: getColSizes(),
        gap: `${gapSize}px`,
        transition: "grid-template-rows 0.4s ease, grid-template-columns 0.4s ease",
      }}
    >
      {frames.map((frame) => {
        const row = Math.floor(frame.defaultPos.y / 4)
        const col = Math.floor(frame.defaultPos.x / 4)
        const transformOrigin = getTransformOrigin(frame.defaultPos.x, frame.defaultPos.y)

        return (
          <motion.div
            key={frame.id}
            className="relative"
            style={{
              transformOrigin,
              transition: "transform 0.4s ease",
            }}
            onMouseEnter={() => setHovered({ row, col })}
            onMouseLeave={() => setHovered(null)}
          >
            <FrameComponent
              video={frame.video}
              label={frame.label}
              width="100%"
              height="100%"
              className="absolute inset-0"
              mediaSize={frame.mediaSize}
              showFrame={showFrames}
              isHovered={hovered?.row === row && hovered?.col === col}
            />
          </motion.div>
        )
      })}
    </div>
  )
}
