'use client'

import Link from 'next/link'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-genesis-navy via-genesis-midnight to-genesis-navy">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          {/* 404 Number */}
          <div className="mb-8">
            <h1 className="text-9xl font-bold gradient-text">404</h1>
          </div>

          {/* Message */}
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-xl text-genesis-silver mb-12">
            The page you're looking for doesn't exist or has been moved.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-genesis-royal to-genesis-steel text-white font-semibold rounded-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Home size={20} className="mr-2" />
              Go Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center px-8 py-4 bg-genesis-slate/30 text-white font-semibold rounded-lg border border-genesis-steel/30 hover:bg-genesis-steel/30 transition-all duration-300"
            >
              <ArrowLeft size={20} className="mr-2" />
              Go Back
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
