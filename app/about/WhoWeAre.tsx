'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Target, Compass, Lightbulb } from 'lucide-react'

export default function WhoWeAre() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="section-padding bg-genesis-midnight">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Who We <span className="gradient-text">Are</span>
            </h2>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="prose prose-lg prose-invert max-w-none"
          >
            <p className="text-xl text-genesis-silver leading-relaxed mb-6">
              GENESIS is an emerging technology brand focused on developing intelligent automation solutions for professional and business environments.
            </p>

            <p className="text-xl text-genesis-silver leading-relaxed mb-6">
              We combine artificial intelligence, intelligent automation, financial technology, advanced analytics and business process automation to create systems that understand complexity, simplify repetitive work, and empower professionals to focus on what truly matters.
            </p>

            <p className="text-xl text-genesis-silver leading-relaxed">
              While our initial focus has been on professional services—including auditing, accounting, taxation, financial operations and compliance—our ambition extends far beyond. We're building a technology foundation that can transform workflows across multiple industries, organisations and business environments.
            </p>
          </motion.div>

          {/* Core Values Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-6 bg-genesis-slate/20 rounded-2xl border border-genesis-steel/20"
            >
              <Target size={32} className="text-genesis-royal mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Our Focus</h3>
              <p className="text-genesis-silver">
                Building intelligent systems that solve real problems with precision and purpose.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-6 bg-genesis-slate/20 rounded-2xl border border-genesis-steel/20"
            >
              <Compass size={32} className="text-genesis-royal mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Our Direction</h3>
              <p className="text-genesis-silver">
                Expanding from professional services to broader enterprise automation and AI technology.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="p-6 bg-genesis-slate/20 rounded-2xl border border-genesis-steel/20"
            >
              <Lightbulb size={32} className="text-genesis-royal mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Our Belief</h3>
              <p className="text-genesis-silver">
                Technology should empower people, simplify complexity, and create opportunities for meaningful work.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
