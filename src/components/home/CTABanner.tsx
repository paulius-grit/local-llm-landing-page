import { motion } from 'framer-motion'
import { Terminal, Rocket, Zap, Users, Download } from 'lucide-react'

export default function CTABanner() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/10 via-neon-purple/10 to-neon-green/10">
        <div className="absolute inset-0 bg-zinc-950/50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          {/* Glow Effects */}
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-neon-cyan/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-neon-green/20 rounded-full blur-3xl" />

          {/* Main Content */}
          <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-3xl border border-zinc-800 p-12 md:p-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-neon-cyan to-neon-green bg-clip-text text-transparent">
                  Transform Your Development
                </span>
                {' '}
                <br />
                <span className="bg-gradient-to-r from-neon-cyan to-neon-green bg-clip-text text-transparent">
                  Experience Today
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-8">
                Join thousands of developers already using Argo to code faster, smarter, and with less effort.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-neon-green rounded-xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity" />
                <button className="relative bg-gradient-to-r from-neon-cyan to-neon-green text-black font-bold px-12 py-4 rounded-xl text-lg group-hover:shadow-2xl transition-shadow">
                  <Download className="w-5 h-5 inline mr-2" />
                  Download for Mac & Linux
                </button>
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-zinc-400 hover:text-white px-8 py-4 rounded-xl border border-zinc-700 hover:border-zinc-600 transition-all duration-300 text-lg"
              >
                Watch on YouTube
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {[
                { icon: Rocket, value: '50K+', label: 'Active Developers' },
                { icon: Terminal, value: '1M+', label: 'Commands Executed' },
                { icon: Users, value: '99%', label: 'Uptime SLA' },
                { icon: Zap, value: '0.5s', label: 'Response Time' },
              ].map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <Icon className="w-8 h-8 mx-auto mb-3 text-neon-cyan" />
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-zinc-400">
                      {stat.label}
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}