'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  Brain,
  Workflow,
  DollarSign,
  Database,
  GitBranch,
  BarChart3,
  Building2,
  Shield,
} from 'lucide-react'

const technologyAreas = [
  {
    icon: Brain,
    title: 'Artificial Intelligence',
    description: 'Developing AI systems that can analyse complex data, identify patterns, make intelligent recommendations and learn from usage. Our focus is on practical AI that solves real business problems.',
  },
  {
    icon: Workflow,
    title: 'Intelligent Automation',
    description: 'Creating automation solutions that go beyond simple task execution. Our systems understand context, handle exceptions, adapt to variations and maintain accuracy across complex workflows.',
  },
  {
    icon: DollarSign,
    title: 'Financial Technology',
    description: 'Building specialized technology for financial processes including reconciliation, audit automation, compliance verification and financial analytics. Designed for accuracy and regulatory requirements.',
  },
  {
    icon: Database,
    title: 'Data Processing',
    description: 'Developing systems that can ingest, transform, validate and analyse large volumes of structured and semi-structured data from multiple sources with high accuracy.',
  },
  {
    icon: GitBranch,
    title: 'Workflow Orchestration',
    description: 'Creating intelligent workflow engines that coordinate multiple processes, manage dependencies, handle approvals and maintain audit trails across complex business operations.',
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description: 'Building analytical capabilities that transform raw data into meaningful insights, identify anomalies, detect trends and support decision-making with evidence-based intelligence.',
  },
  {
    icon: Building2,
    title: 'Enterprise Systems',
    description: 'Developing scalable, secure and maintainable enterprise-grade technology that integrates with existing systems, supports collaboration and grows with organizational needs.',
  },
  {
    icon: Shield,
    title: 'Compliance & Controls',
    description: 'Creating technology that embeds compliance requirements, maintains audit trails, supports control verification and helps organizations meet regulatory obligations.',
  },
]

export default function TechnologyAreas() {
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
              Our <span className="gradient-text">Technology Focus</span>
            </h2>
            <p className="text-xl text-genesis-silver max-w-3xl mx-auto">
              Eight core technology areas that define our development approach
            </p>
          </motion.div>

          {/* Technology Areas Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technologyAreas.map((area, index) => {
              const Icon = area.icon
              return (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 + index * 0.05 }}
                  className="group p-8 bg-gradient-to-br from-genesis-navy to-genesis-slate/30 rounded-2xl border border-genesis-steel/20 hover:border-genesis-royal/50 transition-all duration-300 hover:shadow-xl hover:shadow-genesis-royal/10"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-genesis-royal to-genesis-steel flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {area.title}
                  </h3>
                  <p className="text-genesis-silver leading-relaxed">
                    {area.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
