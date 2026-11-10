'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import { ENQUIRY_TYPES } from '@/lib/constants'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    organisation: '',
    subject: '',
    enquiryType: 'General Enquiry',
    message: '',
  })

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong')
      }

      setStatus('success')
      setFormData({
        fullName: '',
        email: '',
        organisation: '',
        subject: '',
        enquiryType: 'General Enquiry',
        message: '',
      })
    } catch (error) {
      setStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message')
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="max-w-2xl">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-white font-medium mb-2">
            Full Name <span className="text-genesis-royal">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-genesis-slate/20 border border-genesis-steel/30 rounded-lg text-white placeholder-genesis-silver/50 focus:outline-none focus:border-genesis-royal transition-colors"
            placeholder="Your full name"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-white font-medium mb-2">
            Email Address <span className="text-genesis-royal">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-genesis-slate/20 border border-genesis-steel/30 rounded-lg text-white placeholder-genesis-silver/50 focus:outline-none focus:border-genesis-royal transition-colors"
            placeholder="your.email@example.com"
          />
        </div>

        {/* Organisation */}
        <div>
          <label htmlFor="organisation" className="block text-white font-medium mb-2">
            Organisation
          </label>
          <input
            type="text"
            id="organisation"
            name="organisation"
            value={formData.organisation}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-genesis-slate/20 border border-genesis-steel/30 rounded-lg text-white placeholder-genesis-silver/50 focus:outline-none focus:border-genesis-royal transition-colors"
            placeholder="Your company or organisation"
          />
        </div>

        {/* Enquiry Type */}
        <div>
          <label htmlFor="enquiryType" className="block text-white font-medium mb-2">
            Enquiry Type <span className="text-genesis-royal">*</span>
          </label>
          <select
            id="enquiryType"
            name="enquiryType"
            value={formData.enquiryType}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-genesis-slate/20 border border-genesis-steel/30 rounded-lg text-white focus:outline-none focus:border-genesis-royal transition-colors"
          >
            {ENQUIRY_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="subject" className="block text-white font-medium mb-2">
            Subject <span className="text-genesis-royal">*</span>
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-genesis-slate/20 border border-genesis-steel/30 rounded-lg text-white placeholder-genesis-silver/50 focus:outline-none focus:border-genesis-royal transition-colors"
            placeholder="Brief subject of your enquiry"
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-white font-medium mb-2">
            Message <span className="text-genesis-royal">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-4 py-3 bg-genesis-slate/20 border border-genesis-steel/30 rounded-lg text-white placeholder-genesis-silver/50 focus:outline-none focus:border-genesis-royal transition-colors resize-none"
            placeholder="Tell us more about your enquiry..."
          />
        </div>

        {/* Status Messages */}
        {status === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg flex items-center text-green-400"
          >
            <CheckCircle size={20} className="mr-3 flex-shrink-0" />
            <span>Thank you! Your message has been received. We'll get back to you soon.</span>
          </motion.div>
        )}

        {status === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg flex items-center text-red-400"
          >
            <AlertCircle size={20} className="mr-3 flex-shrink-0" />
            <span>{errorMessage}</span>
          </motion.div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-genesis-royal to-genesis-steel text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-genesis-royal/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? (
            <>
              <Loader2 size={20} className="mr-2 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send size={20} className="mr-2" />
              Send Message
            </>
          )}
        </button>
      </form>
    </div>
  )
}
