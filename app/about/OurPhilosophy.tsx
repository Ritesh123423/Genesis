'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Sparkles, Shield, Rocket, Users } from 'lucide-react'

const principles = [
  {
    icon: Sparkles,
    title: 'Innovation with Purpose',
    description: 'We innovate not for the sake of novelty, but to solve real problems and create genuine value.',
  },
  {
    icon: Shield,
    title: 'Accuracy and Reliability',
    description: 'Precision is non-negotiable. Every system we build is engineered for accuracy and verification.',
  },
  {
    icon: Users,
    title: 'Human-Centric Design',
    description: 'Technology should enhance human capability, not replace human judgment. We build tools that empower professionals.',
  },
  {
    icon: Rocket,
    title: 'Continuous Evolution',
    description: 'We believe in constant improvement, learning from usage, and adapting to changing needs.',
  },
]

export default function OurPhilosophy() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="section-padding bg-genesis-midnight">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Our <span className="gradient-text">Philosophy</span>
            </h2>
            <p className="text-xl text-genesis-silver max-w-3xl mx-auto">
              Guiding principles that shape how we build technology
            </p>
          </motion.div>

          {/* Principles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((principle, index) => {
              const Icon = principle.icon
              return (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="p-8 bg-gradient-to-br from-genesis-navy to-genesis-slate/30 rounded-2xl border border-genesis-steel/20 hover:border-genesis-royal/50 transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-genesis-royal/20 to-genesis-steel/20 flex items-center justify-center mb-6">
                    <Icon size={28} className="text-genesis-royal" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {principle.title}
                  </h3>
                  <p className="text-genesis-silver leading-relaxed">
                    {principle.description}
                  </p>
                </motion.div>
              )
            })}
          </div>

          {/* Closing Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 text-center"
          >
            <p className="text-xl text-genesis-silver leading-relaxed">
              GENESIS represents intelligence that understands, automation that simplifies, technology that empowers, innovation that transforms, and systems built for accuracy and progress.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
