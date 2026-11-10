'use client'

import { motion } from 'framer-motion'
import { Package } from 'lucide-react'

export default function ProductsHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-b from-genesis-navy via-genesis-midnight to-genesis-navy pt-32 pb-16">
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-genesis-royal to-genesis-steel mb-8">
              <Package size={36} className="text-white" />
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
              The GENESIS{' '}
              <span className="gradient-text">Product Ecosystem</span>
            </h1>
            <p className="text-xl sm:text-2xl text-genesis-silver leading-relaxed">
              Eight intelligent automation products designed to transform professional workflows and business operations.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
