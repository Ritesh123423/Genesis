'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface Node {
  id: number
  x: number
  y: number
  vx: number
  vy: number
}

export default function HeroBackground() {
  const [nodes, setNodes] = useState<Node[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    // Generate initial nodes
    const initialNodes: Node[] = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
    }))
    
    setNodes(initialNodes)

    // Animate nodes
    const interval = setInterval(() => {
      setNodes(prevNodes =>
        prevNodes.map(node => {
          let newX = node.x + node.vx
          let newY = node.y + node.vy
          let newVx = node.vx
          let newVy = node.vy

          // Bounce off edges
          if (newX <= 0 || newX >= 100) {
            newVx = -newVx
            newX = Math.max(0, Math.min(100, newX))
          }
          if (newY <= 0 || newY >= 100) {
            newVy = -newVy
            newY = Math.max(0, Math.min(100, newY))
          }

          return {
            ...node,
            x: newX,
            y: newY,
            vx: newVx,
            vy: newVy,
          }
        })
      )
    }, 50)

    return () => clearInterval(interval)
  }, [])

  if (!mounted) return null

  return (
    <div className="absolute inset-0 overflow-hidden opacity-30">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#315A83" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#3977B8" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#315A83" stopOpacity="0.1" />
          </linearGradient>
          <radialGradient id="nodeGradient">
            <stop offset="0%" stopColor="#3977B8" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#315A83" stopOpacity="0.2" />
          </radialGradient>
        </defs>

        {/* Draw connections */}
        {nodes.map((node, i) =>
          nodes.slice(i + 1).map((otherNode, j) => {
            const dx = node.x - otherNode.x
            const dy = node.y - otherNode.y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < 20) {
              const opacity = 1 - distance / 20
              return (
                <motion.line
                  key={`${i}-${j}`}
                  x1={`${node.x}%`}
                  y1={`${node.y}%`}
                  x2={`${otherNode.x}%`}
                  y2={`${otherNode.y}%`}
                  stroke="url(#lineGradient)"
                  strokeWidth="1"
                  opacity={opacity * 0.5}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.5 }}
                />
              )
            }
            return null
          })
        )}

        {/* Draw nodes */}
        {nodes.map(node => (
          <motion.circle
            key={node.id}
            cx={`${node.x}%`}
            cy={`${node.y}%`}
            r="3"
            fill="url(#nodeGradient)"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        ))}
      </svg>

      {/* Ambient light effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-genesis-royal/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-genesis-steel/5 rounded-full blur-3xl" />
    </div>
  )
}
