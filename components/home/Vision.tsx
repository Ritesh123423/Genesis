'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Lightbulb, Users, Target, Zap } from 'lucide-react'

const visionPoints = [
  {
    icon: Lightbulb,
    title: 'Intelligent Systems',
    description: 'Technology that understands context and learns from patterns',
  },
  {
    icon: Users,
    title: 'Human-Centric',
    description: 'Working alongside people, not replacing them',
  },
  {
    icon: Target,
    title: 'Purpose-Driven',
    description: 'Solving real problems with meaningful impact',
  },
  {
    icon: Zap,
    title: 'Future-Ready',
    description: 'Building for tomorrow's challenges today',
  },
]

export default function Vision() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="section-padding bg-genesis-midnight relative">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-bold text-white mb-6"
            >
              A New Foundation for{' '}
              <span className="gradient-text">Intelligent Work</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-genesis-silver max-w-3xl mx-auto leading-relaxed"
            >
              We envision a world where intelligent systems work alongside
              people, where complex processes become simpler, information
              becomes more meaningful and technology creates opportunities to
              focus on what truly matters.
            </motion.p>
          </div>

          {/* Vision Points Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {visionPoints.map((point, index) => {
              const Icon = point.icon
              return (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="group relative"
                >
                  <div className="h-full p-6 bg-genesis-slate/20 backdrop-blur-sm rounded-2xl border border-genesis-steel/20 hover:border-genesis-royal/50 transition-all duration-300 hover:shadow-xl hover:shadow-genesis-royal/10">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-genesis-royal to-genesis-steel flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon size={24} className="text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {point.title}
                    </h3>
                    <p className="text-genesis-silver text-sm leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
