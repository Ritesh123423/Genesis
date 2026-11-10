'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { SOLUTION_CATEGORIES } from '@/lib/constants'
import {
  Briefcase,
  TrendingUp,
  Building2,
  Brain,
} from 'lucide-react'
import { ArrowRight } from 'lucide-react'

const iconMap = {
  Briefcase,
  TrendingUp,
  Building2,
  Brain,
}

export default function SolutionCategories() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="section-padding bg-genesis-midnight">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Comprehensive <span className="gradient-text">Solution Areas</span>
            </h2>
            <p className="text-xl text-genesis-silver max-w-3xl mx-auto">
              Four key solution domains where GENESIS technology creates value
            </p>
          </motion.div>

          {/* Solution Categories Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {SOLUTION_CATEGORIES.map((category, index) => {
              const Icon = iconMap[category.icon as keyof typeof iconMap]
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                  className="group"
                >
                  <div className="h-full p-8 bg-gradient-to-br from-genesis-navy to-genesis-slate/30 rounded-3xl border border-genesis-steel/20 hover:border-genesis-royal/50 transition-all duration-300 hover:shadow-2xl hover:shadow-genesis-royal/10">
                    {/* Icon & Title */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-genesis-royal to-genesis-steel flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon size={28} className="text-white" />
                      </div>
                    </div>

                    <h3 className="text-3xl font-bold text-white mb-3">
                      {category.title}
                    </h3>
                    <p className="text-genesis-silver mb-6">
                      {category.description}
                    </p>

                    {/* Solutions List */}
                    <ul className="space-y-3 mb-6">
                      {category.solutions.map((solution) => (
                        <li
                          key={solution}
                          className="flex items-center text-white"
                        >
                          <span className="w-2 h-2 rounded-full bg-genesis-royal mr-3" />
                          <span className="text-lg">{solution}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Link */}
                    <Link
                      href="/products"
                      className="inline-flex items-center text-genesis-royal hover:text-white font-medium transition-colors group"
                    >
                      View Related Products
                      <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
