import { Github, Mail, Twitter, Code2, Star } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Footer() {
  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/yourusername/argo',
      ariaLabel: 'GitHub',
    },
    {
      icon: Twitter,
      href: 'https://twitter.com/argodev',
      ariaLabel: 'Twitter',
    },
    {
      icon: Mail,
      href: 'mailto:hello@argo.dev',
      ariaLabel: 'Email',
    },
  ]

  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center space-x-2 mb-4"
            >
              <Code2 className="w-6 h-6 text-neon-cyan" />
              <span className="text-xl font-bold bg-gradient-to-r from-neon-cyan to-neon-green bg-clip-text text-transparent">
                Argo
              </span>
            </motion.div>
            <p className="text-zinc-400 text-sm mb-4">
              Your AI Agent, living in the command line. Run tests, debug logs, and generate code with natural language.
            </p>
          </div>

          {/* Product Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-1"
          >
            <h3 className="text-sm font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-zinc-400 hover:text-neon-cyan transition-colors text-sm">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-zinc-400 hover:text-neon-cyan transition-colors text-sm">
                  Pricing
                </a>
              </li>
              <li>
                <a href="https://github.com/yourusername/argo" className="text-zinc-400 hover:text-neon-cyan transition-colors text-sm" target="_blank" rel="noopener noreferrer">
                  Documentation
                </a>
              </li>
              <li>
                <a href="https://github.com/yourusername/argo" className="text-zinc-400 hover:text-neon-cyan transition-colors text-sm" target="_blank" rel="noopener noreferrer">
                  Changelog
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-1"
          >
            <h3 className="text-sm font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://github.com/yourusername/argo" className="text-zinc-400 hover:text-neon-cyan transition-colors text-sm" target="_blank" rel="noopener noreferrer">
                  About
                </a>
              </li>
              <li>
                <a href="https://github.com/yourusername/argo" className="text-zinc-400 hover:text-neon-cyan transition-colors text-sm" target="_blank" rel="noopener noreferrer">
                  Blog
                </a>
              </li>
              <li>
                <a href="https://github.com/yourusername/argo" className="text-zinc-400 hover:text-neon-cyan transition-colors text-sm" target="_blank" rel="noopener noreferrer">
                  Careers
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Legal Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-1"
          >
            <h3 className="text-sm font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-zinc-400 hover:text-neon-cyan transition-colors text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-400 hover:text-neon-cyan transition-colors text-sm">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-400 hover:text-neon-cyan transition-colors text-sm">
                  License
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-zinc-800 my-8 pt-8" />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <p className="text-zinc-400 text-sm">
            © 2026 Argo. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center space-x-6">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={social.href}
                  href={social.href}
                  aria-label={social.ariaLabel}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-zinc-400 hover:text-neon-cyan transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              )
            })}
          </div>
        </motion.div>

        {/* Star on GitHub */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 flex items-center justify-center space-x-2"
        >
          <Star className="w-4 h-4 text-neon-green" />
          <a
            href="https://github.com/yourusername/argo"
            className="text-zinc-400 hover:text-neon-green transition-colors text-sm flex items-center space-x-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Give us a star on GitHub</span>
          </a>
        </motion.div>
      </div>
    </footer>
  )
}