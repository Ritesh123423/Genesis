'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'
import HeroBackground from '@/components/animations/HeroBackground'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-genesis-navy via-genesis-midnight to-genesis-navy">
      {/* Animated Background */}
      <HeroBackground />

      {/* Content */}
      <div className="container-custom relative z-10 py-32">
        <div className="max-w-5xl mx-auto text-center">
          {/* Sparkle Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-genesis-slate/30 border border-genesis-steel/30 mb-8"
          >
            <Sparkles size={16} className="text-genesis-royal" />
            <span className="text-sm text-genesis-silver font-medium">
              Intelligence. Automation. Transformation.
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Intelligence That{' '}
            <span className="gradient-text">Transforms</span>
            <br />
            the Way We Work.
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl sm:text-2xl text-genesis-silver leading-relaxed mb-12 max-w-3xl mx-auto"
          >
            At GENESIS, we are building intelligent technology that connects
            artificial intelligence, automation and professional expertise to
            simplify complexity and redefine how businesses operate.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/about"
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-genesis-royal to-genesis-steel text-white font-semibold rounded-lg hover:shadow-2xl hover:shadow-genesis-royal/30 transition-all duration-300 hover:scale-105"
            >
              Explore Our Vision
              <ArrowRight
                size={20}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <Link
              href="/solutions"
              className="inline-flex items-center px-8 py-4 bg-genesis-slate/30 backdrop-blur-sm text-white font-semibold rounded-lg border border-genesis-steel/30 hover:bg-genesis-steel/30 hover:shadow-lg transition-all duration-300"
            >
              Discover Our Solutions
            </Link>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-20"
          >
            <div className="flex flex-col items-center">
              <span className="text-sm text-genesis-silver mb-2">
                Scroll to explore
              </span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-6 h-10 rounded-full border-2 border-genesis-steel/50 flex items-start justify-center p-2"
              >
                <motion.div
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-1.5 h-1.5 bg-genesis-royal rounded-full"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-genesis-navy to-transparent" />
    </section>
  )
}
