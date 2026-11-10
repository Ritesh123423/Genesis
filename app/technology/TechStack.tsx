'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, Server, Database, Shield } from 'lucide-react'

const techCategories = [
  {
    icon: Code2,
    title: 'Development Approach',
    items: [
      'Modern web technologies',
      'API-first architecture',
      'Microservices design',
      'Cloud-native development',
    ],
  },
  {
    icon: Server,
    title: 'Infrastructure',
    items: [
      'Scalable cloud infrastructure',
      'Containerized deployments',
      'Load balancing',
      'High availability design',
    ],
  },
  {
    icon: Database,
    title: 'Data Management',
    items: [
      'Relational databases',
      'Data validation',
      'Transaction management',
      'Backup and recovery',
    ],
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    items: [
      'Authentication and authorization',
      'Data encryption',
      'Audit logging',
      'Compliance frameworks',
    ],
  },
]

export default function TechStack() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="section-padding bg-genesis-navy">
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
              Built with <span className="gradient-text">Modern Standards</span>
            </h2>
            <p className="text-xl text-genesis-silver max-w-3xl mx-auto">
              We use proven technologies and industry best practices to build reliable, scalable and secure systems.
            </p>
          </motion.div>

          {/* Tech Stack Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="p-6 bg-genesis-midnight/50 rounded-2xl border border-genesis-steel/20"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-genesis-royal/20 to-genesis-steel/20 flex items-center justify-center mb-5">
                    <Icon size={26} className="text-genesis-royal" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {category.title}
                  </h3>
                  <ul className="space-y-2">
                    {category.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center text-genesis-silver text-sm"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-genesis-royal mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
