import type { Metadata } from 'next'
import { Mail, MapPin, Phone } from 'lucide-react'
import ContactForm from './ContactForm'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with GENESIS. We would love to hear from you about our products, partnerships, or any enquiries.',
}

export default function ContactPage() {
  return (
    <main className="pt-32 pb-20 bg-gradient-to-b from-genesis-navy via-genesis-midnight to-genesis-navy">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
              Let's <span className="gradient-text">Connect</span>
            </h1>
            <p className="text-xl sm:text-2xl text-genesis-silver max-w-3xl mx-auto">
              Have a question about our products, interested in a partnership, or want to learn more about GENESIS? We're here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="p-8 bg-genesis-midnight/50 rounded-3xl border border-genesis-steel/20">
                <h2 className="text-3xl font-bold text-white mb-6">
                  Send Us a Message
                </h2>
                <ContactForm />
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Email */}
              <div className="p-6 bg-genesis-midnight/50 rounded-2xl border border-genesis-steel/20">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-genesis-royal/20 to-genesis-steel/20 flex items-center justify-center mb-4">
                  <Mail size={24} className="text-genesis-royal" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                <a
                  href={`mailto:${SITE_CONFIG.contactEmail}`}
                  className="text-genesis-silver hover:text-white transition-colors break-all"
                >
                  {SITE_CONFIG.contactEmail}
                </a>
              </div>

              {/* Note about contact info */}
              <div className="p-6 bg-genesis-slate/10 rounded-2xl border border-genesis-steel/10">
                <p className="text-sm text-genesis-silver leading-relaxed">
                  <strong className="text-white">Note:</strong> Additional contact information such as phone numbers and office locations can be configured as GENESIS expands its operations.
                </p>
              </div>

              {/* Response Time */}
              <div className="p-6 bg-genesis-midnight/50 rounded-2xl border border-genesis-steel/20">
                <h3 className="text-lg font-bold text-white mb-2">
                  Response Time
                </h3>
                <p className="text-genesis-silver text-sm">
                  We typically respond to enquiries within 1-2 business days. For urgent matters, please indicate this in your message subject.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
