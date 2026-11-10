'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, Mail } from 'lucide-react'

export default function ClosingCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="section-padding bg-gradient-to-b from-genesis-midnight to-genesis-navy relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-genesis-royal/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-genesis-steel/10 rounded-full blur-3xl" />
        </div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Main Content */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Let's Build What{' '}
            <span className="gradient-text">Comes Next</span>
          </h2>

          <p className="text-xl sm:text-2xl text-genesis-silver leading-relaxed mb-12">
            Explore a new generation of intelligent technology with GENESIS.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-genesis-royal to-genesis-steel text-white font-semibold rounded-lg hover:shadow-2xl hover:shadow-genesis-royal/30 transition-all duration-300 hover:scale-105"
            >
              <Mail size={20} className="mr-2" />
              Get in Touch
              <ArrowRight
                size={20}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center px-8 py-4 bg-genesis-slate/30 backdrop-blur-sm text-white font-semibold rounded-lg border border-genesis-steel/30 hover:bg-genesis-steel/30 hover:shadow-lg transition-all duration-300"
            >
              Explore Our Products
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
