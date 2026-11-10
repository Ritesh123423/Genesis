'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Link from 'next/link'
import {
  Receipt,
  FileCheck,
  Users,
  CreditCard,
  BookOpen,
  DollarSign,
  FileText,
  Shield,
  ArrowRight,
} from 'lucide-react'
import { PRODUCTS } from '@/lib/constants'

const iconMap = {
  Receipt,
  FileCheck,
  Users,
  CreditCard,
  BookOpen,
  DollarSign,
  FileText,
  Shield,
}

export default function ProductEcosystem() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null)

  return (
    <section ref={ref} className="section-padding bg-genesis-midnight relative">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-bold text-white mb-6"
          >
            One Vision.{' '}
            <span className="gradient-text">Multiple Intelligent Solutions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-genesis-silver max-w-3xl mx-auto"
          >
            The GENESIS ecosystem of intelligent automation products designed to
            transform professional workflows and business processes.
          </motion.p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {PRODUCTS.map((product, index) => {
            const Icon = iconMap[product.icon as keyof typeof iconMap]
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.05 }}
                className="group"
              >
                <Link
                  href={`/products#${product.id}`}
                  className="block h-full p-6 bg-gradient-to-br from-genesis-navy to-genesis-slate/30 rounded-2xl border border-genesis-steel/20 hover:border-genesis-royal/50 transition-all duration-300 hover:shadow-2xl hover:shadow-genesis-royal/10 card-shine"
                  onMouseEnter={() => setSelectedProduct(product.id)}
                  onMouseLeave={() => setSelectedProduct(null)}
                >
                  {/* Icon & Status Badge */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-genesis-royal to-genesis-steel flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon size={24} className="text-white" />
                    </div>
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-genesis-steel/20 text-genesis-silver border border-genesis-steel/30">
                      {product.status}
                    </span>
                  </div>

                  {/* Product Name */}
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-genesis-royal transition-colors">
                    {product.shortName}
                  </h3>

                  {/* Tagline */}
                  <p className="text-sm text-genesis-silver mb-4">
                    {product.tagline}
                  </p>

                  {/* Category */}
                  <div className="text-xs text-genesis-steel font-medium">
                    {product.category}
                  </div>

                  {/* Hover Arrow */}
                  <div className="mt-4 flex items-center text-genesis-royal opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-sm font-medium">Learn more</span>
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>

        {/* View All Products CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <Link
            href="/products"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-genesis-royal to-genesis-steel text-white font-semibold rounded-lg hover:shadow-2xl hover:shadow-genesis-royal/30 transition-all duration-300 hover:scale-105"
          >
            Explore All Products
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
