'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  Brain,
  Workflow,
  TrendingUp,
  BarChart3,
  Network,
  Building2,
} from 'lucide-react'
import { TECHNOLOGY_PILLARS } from '@/lib/constants'

const iconMap = {
  Brain,
  Workflow,
  TrendingUp,
  BarChart3,
  Network,
  Building2,
}

export default function TechnologyPillars() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="section-padding bg-genesis-navy relative">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-bold text-white mb-6"
          >
            Built on Six Core{' '}
            <span className="gradient-text">Technology Pillars</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-genesis-silver max-w-3xl mx-auto"
          >
            Our technology foundation combines multiple disciplines to create
            comprehensive, intelligent automation solutions.
          </motion.p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TECHNOLOGY_PILLARS.map((pillar, index) => {
            const Icon = iconMap[pillar.icon as keyof typeof iconMap]
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="group relative"
              >
                <div className="h-full p-8 bg-gradient-to-br from-genesis-midnight to-genesis-slate/50 rounded-2xl border border-genesis-steel/20 hover:border-genesis-royal/50 transition-all duration-300 hover:shadow-2xl hover:shadow-genesis-royal/10 card-shine">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-genesis-royal to-genesis-steel flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={28} className="text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-genesis-silver leading-relaxed">
                    {pillar.description}
                  </p>

                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-genesis-royal/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
