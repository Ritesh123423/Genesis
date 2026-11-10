import Link from 'next/link'
import Image from 'next/image'
import { SITE_CONFIG, NAVIGATION_ITEMS, PRODUCTS } from '@/lib/constants'
import { Linkedin, Twitter, Github } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const productLinks = PRODUCTS.slice(0, 4)
  const companyLinks = [
    { label: 'About Us', href: '/about' },
    { label: 'Our Technology', href: '/technology' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'Products', href: '/products' },
  ]
  const legalLinks = [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Use', href: '/terms' },
  ]

  return (
    <footer className="bg-genesis-midnight border-t border-genesis-slate/20">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-4">
              <Link href="/" className="inline-block mb-6 group">
                <div className="flex items-center space-x-3">
                  <div className="relative w-10 h-10 transition-transform group-hover:scale-105">
                    <Image
                      src="/images/genesis-logo.png"
                      alt="GENESIS"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="font-bold text-xl tracking-tight text-white">
                    GENESIS
                  </span>
                </div>
              </Link>
              <p className="text-genesis-silver text-sm leading-relaxed mb-6">
                {SITE_CONFIG.tagline}
              </p>
              <p className="text-genesis-silver/80 text-sm leading-relaxed mb-6">
                Building intelligent technology that connects artificial intelligence, automation and professional expertise.
              </p>
              
              {/* Social Links */}
              <div className="flex items-center space-x-4">
                {SITE_CONFIG.social.linkedin && (
                  <a
                    href={SITE_CONFIG.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-genesis-slate/30 flex items-center justify-center text-genesis-silver hover:text-white hover:bg-genesis-royal transition-all duration-300"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={18} />
                  </a>
                )}
                {SITE_CONFIG.social.twitter && (
                  <a
                    href={SITE_CONFIG.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-genesis-slate/30 flex items-center justify-center text-genesis-silver hover:text-white hover:bg-genesis-royal transition-all duration-300"
                    aria-label="Twitter"
                  >
                    <Twitter size={18} />
                  </a>
                )}
                {SITE_CONFIG.social.github && (
                  <a
                    href={SITE_CONFIG.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-genesis-slate/30 flex items-center justify-center text-genesis-silver hover:text-white hover:bg-genesis-royal transition-all duration-300"
                    aria-label="GitHub"
                  >
                    <Github size={18} />
                  </a>
                )}
              </div>
            </div>

            {/* Company Links */}
            <div className="lg:col-span-2">
              <h3 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">
                Company
              </h3>
              <ul className="space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-genesis-silver hover:text-white text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/contact"
                    className="text-genesis-silver hover:text-white text-sm transition-colors duration-200"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Products */}
            <div className="lg:col-span-3">
              <h3 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">
                Products
              </h3>
              <ul className="space-y-3">
                {productLinks.map((product) => (
                  <li key={product.id}>
                    <Link
                      href={`/products#${product.id}`}
                      className="text-genesis-silver hover:text-white text-sm transition-colors duration-200"
                    >
                      {product.shortName}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/products"
                    className="text-genesis-royal hover:text-white text-sm font-medium transition-colors duration-200"
                  >
                    View All Products →
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-3">
              <h3 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">
                Get in Touch
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href={`mailto:${SITE_CONFIG.contactEmail}`}
                    className="text-genesis-silver hover:text-white text-sm transition-colors duration-200 break-all"
                  >
                    {SITE_CONFIG.contactEmail}
                  </a>
                </li>
                <li className="pt-2">
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-4 py-2 bg-genesis-steel/20 text-white text-sm font-medium rounded-lg hover:bg-genesis-royal transition-all duration-300"
                  >
                    Contact Form
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-genesis-slate/20">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-genesis-silver/80 text-sm text-center sm:text-left">
              © {currentYear} {SITE_CONFIG.name}. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-genesis-silver hover:text-white text-sm transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
