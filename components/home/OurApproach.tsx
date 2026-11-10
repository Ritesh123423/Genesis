'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { APPROACH_STEPS } from '@/lib/constants'

export default function OurApproach() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="section-padding bg-genesis-midnight relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-genesis-royal rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-genesis-steel rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-bold text-white mb-6"
          >
            Our <span className="gradient-text">Approach</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-genesis-silver max-w-3xl mx-auto"
          >
            How we develop intelligent automation solutions
          </motion.p>
        </div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto space-y-8">
          {APPROACH_STEPS.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6 p-6 md:p-8 bg-genesis-slate/20 backdrop-blur-sm rounded-2xl border border-genesis-steel/20 hover:border-genesis-royal/50 transition-all duration-300 hover:shadow-xl hover:shadow-genesis-royal/10">
                {/* Number */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-genesis-royal to-genesis-steel flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-genesis-royal transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-genesis-silver leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connecting Line (desktop) */}
                {index < APPROACH_STEPS.length - 1 && (
                  <div className="hidden md:block absolute left-14 w-px h-8 bg-gradient-to-b from-genesis-royal to-transparent translate-y-full opacity-30" />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
