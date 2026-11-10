'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { NAVIGATION_ITEMS } from '@/lib/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-genesis-midnight/95 backdrop-blur-md shadow-lg border-b border-genesis-slate/20'
          : 'bg-transparent'
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link href="/" className="relative z-10 group">
            <div className="flex items-center space-x-3">
              <div className="relative w-10 h-10 lg:w-12 lg:h-12 transition-transform group-hover:scale-105">
                <img
                  src="/images/genesis-logo.webp"
                  alt="GENESIS"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-bold text-xl lg:text-2xl tracking-tight text-white">
                GENESIS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {NAVIGATION_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                  pathname === item.href
                    ? 'text-white bg-genesis-steel/20'
                    : 'text-genesis-silver hover:text-white hover:bg-genesis-slate/30'
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-genesis-royal to-genesis-steel text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-genesis-royal/20 transition-all duration-300 hover:scale-105"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative z-10 p-2 text-white hover:text-genesis-royal transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-genesis-navy/98 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Content */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="fixed top-20 left-0 right-0 z-40 lg:hidden"
            >
              <div className="container-custom py-8">
                <div className="bg-genesis-midnight/95 backdrop-blur-md rounded-2xl border border-genesis-slate/20 shadow-2xl overflow-hidden">
                  <div className="p-6 space-y-2">
                    {NAVIGATION_ITEMS.map((item, index) => (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          href={item.href}
                          className={cn(
                            'block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200',
                            pathname === item.href
                              ? 'text-white bg-genesis-steel/20'
                              : 'text-genesis-silver hover:text-white hover:bg-genesis-slate/30'
                          )}
                        >
                          {item.label}
                        </Link>
                      </motion.div>
                    ))}

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: NAVIGATION_ITEMS.length * 0.05 }}
                      className="pt-4"
                    >
                      <Link
                        href="/contact"
                        className="block w-full text-center px-4 py-3 bg-gradient-to-r from-genesis-royal to-genesis-steel text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-genesis-royal/20 transition-all duration-300"
                      >
                        Get in Touch
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
