'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { PRODUCTS } from '@/lib/constants'
import {
  Receipt,
  FileCheck,
  Users,
  CreditCard,
  BookOpen,
  DollarSign,
  FileText,
  Shield,
  X,
  Check,
} from 'lucide-react'

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

export default function ProductGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null)

  const selectedProductData = PRODUCTS.find((p) => p.id === selectedProduct)

  return (
    <section ref={ref} className="section-padding bg-genesis-midnight">
      <div className="container-custom">
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((product, index) => {
            const Icon = iconMap[product.icon as keyof typeof iconMap]
            return (
              <motion.div
                key={product.id}
                id={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                <button
                  onClick={() => setSelectedProduct(product.id)}
                  className="w-full h-full p-6 bg-gradient-to-br from-genesis-navy to-genesis-slate/30 rounded-2xl border border-genesis-steel/20 hover:border-genesis-royal/50 transition-all duration-300 hover:shadow-2xl hover:shadow-genesis-royal/10 text-left group"
                >
                  {/* Icon & Status */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-genesis-royal to-genesis-steel flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon size={24} className="text-white" />
                    </div>
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-genesis-steel/20 text-genesis-silver border border-genesis-steel/30">
                      {product.status}
                    </span>
                  </div>

                  {/* Product Name */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-genesis-royal transition-colors">
                    {product.shortName}
                  </h3>

                  {/* Tagline */}
                  <p className="text-sm text-genesis-silver mb-3">
                    {product.tagline}
                  </p>

                  {/* Category */}
                  <div className="text-xs text-genesis-steel font-medium">
                    {product.category}
                  </div>
                </button>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && selectedProductData && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-genesis-navy/95 backdrop-blur-md"
          onClick={() => setSelectedProduct(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-genesis-midnight to-genesis-slate rounded-3xl border border-genesis-steel/30 shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-6 right-6 p-2 rounded-lg bg-genesis-slate/30 hover:bg-genesis-steel/30 text-white transition-colors"
              aria-label="Close"
            >
              <X size={24} />
            </button>

            {/* Modal Content */}
            <div className="p-8 sm:p-12">
              {/* Icon & Status */}
              <div className="flex items-start justify-between mb-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-genesis-royal to-genesis-steel flex items-center justify-center">
                  {(() => {
                    const Icon = iconMap[selectedProductData.icon as keyof typeof iconMap]
                    return <Icon size={32} className="text-white" />
                  })()}
                </div>
                <span className="px-4 py-2 text-sm font-medium rounded-full bg-genesis-steel/20 text-genesis-silver border border-genesis-steel/30">
                  {selectedProductData.status}
                </span>
              </div>

              {/* Product Name & Category */}
              <h2 className="text-4xl font-bold text-white mb-3">
                {selectedProductData.name}
              </h2>
              <div className="text-genesis-royal font-medium mb-6">
                {selectedProductData.category}
              </div>

              {/* Tagline */}
              <p className="text-xl text-white mb-6">
                {selectedProductData.tagline}
              </p>

              {/* Description */}
              <p className="text-lg text-genesis-silver leading-relaxed mb-8">
                {selectedProductData.description}
              </p>

              {/* Capabilities */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Key Capabilities
                </h3>
                <ul className="space-y-3">
                  {selectedProductData.capabilities.map((capability) => (
                    <li
                      key={capability}
                      className="flex items-start text-genesis-silver"
                    >
                      <Check size={20} className="text-genesis-royal mr-3 mt-1 flex-shrink-0" />
                      <span className="text-lg">{capability}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="mt-10 pt-8 border-t border-genesis-steel/20">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-genesis-royal to-genesis-steel text-white font-semibold rounded-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Enquire About This Product
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  )
}
