'use client'

import { motion } from 'framer-motion'

export default function AboutHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-b from-genesis-navy via-genesis-midnight to-genesis-navy pt-32 pb-16">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-genesis-royal rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-genesis-steel rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
              Building the Future of{' '}
              <span className="gradient-text">Intelligent Work</span>
            </h1>
            <p className="text-xl sm:text-2xl text-genesis-silver leading-relaxed">
              At GENESIS, we're developing technology that transforms how businesses operate, how professionals work, and how intelligence meets automation.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
