import { motion } from 'framer-motion'
import { Terminal, Zap, Shield, Cpu, BarChart3, Globe } from 'lucide-react'

const features = [
  {
    icon: Terminal,
    title: 'Natural Language Commands',
    description: 'Speak to your files in plain English. No more memorizing complex commands or searching through documentation.',
    color: 'neon-cyan',
  },
  {
    icon: Zap,
    title: 'Autonomous Debugging',
    description: 'Watch as Argo identifies and fixes bugs automatically. It learns from your codebase and suggests solutions.',
    color: 'neon-green',
  },
  {
    icon: Shield,
    title: 'Local Execution',
    description: 'Zero API keys required. Argo runs entirely on your machine, keeping your code and data secure.',
    color: 'neon-blue',
  },
  {
    icon: Cpu,
    title: 'Context-Aware AI',
    description: 'Understands your entire codebase context, references, and project structure for intelligent suggestions.',
    color: 'neon-purple',
  },
  {
    icon: Globe,
    title: 'Multi-Language Support',
    description: 'Works with JavaScript, TypeScript, Python, Go, Rust, and dozens more programming languages.',
    color: 'neon-cyan',
  },
  {
    icon: BarChart3,
    title: 'Performance Analytics',
    description: 'Get insights into your development performance. Track your coding velocity and identify bottlenecks.',
    color: 'neon-green',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900/50 to-zinc-950" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-neon-cyan to-neon-green bg-clip-text text-transparent">
              Supercharge Your
            </span>
            {' '}
            Development Workflow
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Experience the future of development with Argo's powerful AI capabilities
            right in your terminal.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-8 transition-all duration-300 hover:border-zinc-700 hover:shadow-lg hover:shadow-zinc-800/50">
                  {/* Icon */}
                  <div className={`mb-6 p-3 rounded-lg bg-gradient-to-br from-${feature.color}/10 to-${feature.color}/5`}>
                    <Icon className={`w-8 h-8 text-${feature.color}`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-semibold mb-3 group-hover:text-neon-cyan transition-colors">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-zinc-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Additional Visual Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-20 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/10 via-neon-purple/10 to-neon-green/10 rounded-3xl blur-3xl" />

          <div className="relative bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-12 text-center">
            <Terminal className="w-16 h-16 text-neon-cyan mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-neon-cyan to-neon-green bg-clip-text text-transparent">
              Ready to transform your workflow?
            </h3>
            <p className="text-xl text-zinc-400 mb-8">
              Join thousands of developers already using Argo to code faster and smarter.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-neon-cyan to-neon-green text-black font-semibold px-8 py-3 rounded-lg hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all duration-300">
                Download Now
              </button>
              <button className="text-zinc-400 hover:text-white px-8 py-3 rounded-lg transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}