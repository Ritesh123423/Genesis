'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Rocket, Globe, Lightbulb } from 'lucide-react'

export default function FutureVision() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="section-padding bg-genesis-navy relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-genesis-royal/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-genesis-steel/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-genesis-royal to-genesis-steel mb-8">
              <Rocket size={36} className="text-white" />
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              The Future Is Not Just{' '}
              <span className="gradient-text">Automated</span>.
              <br />
              It Is <span className="gradient-text">Intelligent</span>.
            </h2>

            <p className="text-xl sm:text-2xl text-genesis-silver leading-relaxed mb-12">
              While GENESIS began with a focus on professional services, audit
              automation and financial technology, our ambition reaches far
              beyond these initial domains.
            </p>
          </motion.div>

          {/* Vision Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 bg-gradient-to-br from-genesis-midnight to-genesis-slate/50 rounded-2xl border border-genesis-steel/20"
            >
              <Globe size={32} className="text-genesis-royal mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">
                Expanding Horizons
              </h3>
              <p className="text-genesis-silver leading-relaxed">
                We're building technology that will serve multiple industries,
                organizations and business environments. From professional
                services to enterprise operations, from compliance to analytics,
                from data processing to intelligent workflows.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-8 bg-gradient-to-br from-genesis-midnight to-genesis-slate/50 rounded-2xl border border-genesis-steel/20"
            >
              <Lightbulb size={32} className="text-genesis-royal mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">
                Continuous Innovation
              </h3>
              <p className="text-genesis-silver leading-relaxed">
                Our long-term vision is to develop a comprehensive ecosystem of
                intelligent automation products that transform how businesses
                operate, how professionals work, and how technology creates
                value across every sector.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
