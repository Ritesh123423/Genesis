import type { Metadata } from 'next'
import { FileText } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'GENESIS Terms of Use - Terms and conditions for using our website and services.',
}

export default function TermsPage() {
  return (
    <main className="pt-32 pb-20 bg-gradient-to-b from-genesis-navy via-genesis-midnight to-genesis-navy">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-genesis-royal to-genesis-steel mb-6">
              <FileText size={28} className="text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Terms of Use
            </h1>
            <p className="text-genesis-silver">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg prose-invert max-w-none">
            <div className="p-8 bg-genesis-midnight/50 rounded-2xl border border-genesis-steel/20 mb-8">
              <p className="text-genesis-silver leading-relaxed">
                <strong className="text-white">Important Note:</strong> These are placeholder terms of use. GENESIS should engage qualified legal counsel to draft comprehensive terms that protect the company's interests and comply with applicable laws.
              </p>
            </div>

            <section className="mb-8 p-6 bg-genesis-slate/10 rounded-2xl">
              <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
              <p className="text-genesis-silver leading-relaxed">
                By accessing and using this website, you accept and agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use this website.
              </p>
            </section>

            <section className="mb-8 p-6 bg-genesis-slate/10 rounded-2xl">
              <h2 className="text-2xl font-bold text-white mb-4">2. Website Content</h2>
              <p className="text-genesis-silver leading-relaxed mb-4">
                The content on this website is for general information purposes only. It is subject to change without notice.
              </p>
              <p className="text-genesis-silver leading-relaxed">
                Product information, features, and availability are provided for informational purposes and do not constitute a binding offer or guarantee of service availability.
              </p>
            </section>

            <section className="mb-8 p-6 bg-genesis-slate/10 rounded-2xl">
              <h2 className="text-2xl font-bold text-white mb-4">3. Intellectual Property</h2>
              <p className="text-genesis-silver leading-relaxed">
                All content on this website, including text, graphics, logos, images, and software, is the property of GENESIS or its content suppliers and is protected by intellectual property laws.
              </p>
            </section>

            <section className="mb-8 p-6 bg-genesis-slate/10 rounded-2xl">
              <h2 className="text-2xl font-bold text-white mb-4">4. Limitation of Liability</h2>
              <p className="text-genesis-silver leading-relaxed">
                GENESIS shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from your use of this website or reliance on information provided herein.
              </p>
            </section>

            <section className="mb-8 p-6 bg-genesis-slate/10 rounded-2xl">
              <h2 className="text-2xl font-bold text-white mb-4">5. External Links</h2>
              <p className="text-genesis-silver leading-relaxed">
                This website may contain links to external websites. GENESIS is not responsible for the content or practices of third-party websites.
              </p>
            </section>

            <section className="mb-8 p-6 bg-genesis-slate/10 rounded-2xl">
              <h2 className="text-2xl font-bold text-white mb-4">6. Changes to Terms</h2>
              <p className="text-genesis-silver leading-relaxed">
                GENESIS reserves the right to modify these terms at any time. Changes will be effective immediately upon posting to this website.
              </p>
            </section>

            <div className="p-6 bg-red-500/10 border border-red-500/30 rounded-2xl">
              <p className="text-red-400 text-sm">
                <strong>Legal Review Required:</strong> These terms of use are a template and must be reviewed and customized by legal counsel before being used in production. They should reflect your specific business model, services, and comply with applicable laws.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
