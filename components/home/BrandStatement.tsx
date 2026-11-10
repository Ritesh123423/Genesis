'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function BrandStatement() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="section-padding bg-genesis-navy relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-genesis-royal/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-genesis-steel/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight"
          >
            Technology Should Do More Than{' '}
            <span className="gradient-text">Execute</span>.
            <br />
            It Should <span className="gradient-text">Empower</span>.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl sm:text-2xl text-genesis-silver leading-relaxed"
          >
            At GENESIS, we believe that intelligent technology should make
            complex processes simpler, repetitive work more meaningful, and
            professional environments more efficient. We're building systems
            that don't just automate—they understand, adapt, and enhance the
            way work gets done.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
