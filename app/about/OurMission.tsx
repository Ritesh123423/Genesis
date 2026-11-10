'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function OurMission() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="section-padding bg-genesis-navy relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-genesis-royal/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-genesis-steel/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8 text-center">
              Our <span className="gradient-text">Mission</span>
            </h2>
            <div className="p-10 bg-gradient-to-br from-genesis-midnight to-genesis-slate/50 rounded-3xl border border-genesis-steel/20">
              <p className="text-2xl text-white leading-relaxed text-center">
                To transform complex, repetitive and time-consuming work through intelligent automation that understands, adapts and empowers.
              </p>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8 text-center">
              Our <span className="gradient-text">Vision</span>
            </h2>
            <div className="p-10 bg-gradient-to-br from-genesis-midnight to-genesis-slate/50 rounded-3xl border border-genesis-steel/20">
              <p className="text-2xl text-white leading-relaxed text-center mb-6">
                A world where intelligent systems work alongside people, where technology simplifies complexity, and where businesses operate with unprecedented efficiency and insight.
              </p>
              <p className="text-xl text-genesis-silver leading-relaxed text-center">
                We envision GENESIS as a leading provider of intelligent automation technology—serving organizations across industries with solutions that combine AI, automation, analytics and enterprise technology.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
