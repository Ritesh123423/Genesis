import type { Metadata } from 'next'
import { Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'GENESIS Privacy Policy - How we collect, use, and protect your information.',
}

export default function PrivacyPage() {
  return (
    <main className="pt-32 pb-20 bg-gradient-to-b from-genesis-navy via-genesis-midnight to-genesis-navy">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-genesis-royal to-genesis-steel mb-6">
              <Shield size={28} className="text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-genesis-silver">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg prose-invert max-w-none">
            <div className="p-8 bg-genesis-midnight/50 rounded-2xl border border-genesis-steel/20 mb-8">
              <p className="text-genesis-silver leading-relaxed">
                <strong className="text-white">Important Note:</strong> This is a placeholder privacy policy. GENESIS should engage qualified legal counsel to draft a comprehensive privacy policy that complies with applicable data protection regulations including GDPR, CCPA, and other relevant privacy laws in jurisdictions where the company operates.
              </p>
            </div>

            <section className="mb-8 p-6 bg-genesis-slate/10 rounded-2xl">
              <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
              <p className="text-genesis-silver leading-relaxed mb-4">
                When you use our website or contact us, we may collect:
              </p>
              <ul className="text-genesis-silver space-y-2 ml-6">
                <li>Personal information you provide (name, email, organisation)</li>
                <li>Technical information (IP address, browser type, device information)</li>
                <li>Usage data (pages visited, time spent, interactions)</li>
              </ul>
            </section>

            <section className="mb-8 p-6 bg-genesis-slate/10 rounded-2xl">
              <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
              <p className="text-genesis-silver leading-relaxed mb-4">
                We use collected information to:
              </p>
              <ul className="text-genesis-silver space-y-2 ml-6">
                <li>Respond to your enquiries and communications</li>
                <li>Improve our website and services</li>
                <li>Send relevant information about our products (with your consent)</li>
                <li>Maintain security and prevent fraud</li>
              </ul>
            </section>

            <section className="mb-8 p-6 bg-genesis-slate/10 rounded-2xl">
              <h2 className="text-2xl font-bold text-white mb-4">3. Data Protection</h2>
              <p className="text-genesis-silver leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section className="mb-8 p-6 bg-genesis-slate/10 rounded-2xl">
              <h2 className="text-2xl font-bold text-white mb-4">4. Your Rights</h2>
              <p className="text-genesis-silver leading-relaxed mb-4">
                Depending on your jurisdiction, you may have rights including:
              </p>
              <ul className="text-genesis-silver space-y-2 ml-6">
                <li>Access to your personal data</li>
                <li>Correction of inaccurate data</li>
                <li>Deletion of your data</li>
                <li>Objection to processing</li>
                <li>Data portability</li>
              </ul>
            </section>

            <section className="mb-8 p-6 bg-genesis-slate/10 rounded-2xl">
              <h2 className="text-2xl font-bold text-white mb-4">5. Contact Us</h2>
              <p className="text-genesis-silver leading-relaxed">
                For questions about this privacy policy or how we handle your data, please contact us through our contact form or email.
              </p>
            </section>

            <div className="p-6 bg-red-500/10 border border-red-500/30 rounded-2xl">
              <p className="text-red-400 text-sm">
                <strong>Legal Review Required:</strong> This privacy policy is a template and must be reviewed and customized by legal counsel before being used in production. It should comply with all applicable data protection laws in your jurisdiction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
