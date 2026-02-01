import { useState, useEffect } from 'react'
import { Terminal, ArrowDown, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

const terminalCommands = [
  { command: 'argo "optimize the database connection pool"', output: '✅ Database optimization complete. Improved performance by 45%' },
  { command: 'argo "find unused imports"', output: '🔍 Found 12 unused imports\n   1. utils/helpers.ts:45\n   2. components/Button.tsx:23' },
  { command: 'argo "run all tests"', output: '🧪 Running tests...\n   ✓ UserAuthentication: 12 tests passed\n   ✓ PaymentProcessing: 8 tests passed\n   ✓ DatabaseOperations: 5 tests passed\n   Total time: 2.3s' },
]

export default function Hero() {
  const [activeCommand, setActiveCommand] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCommand((prev) => (prev + 1) % terminalCommands.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900/50 to-zinc-950" />

      {/* Animated Background Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 2 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="w-[800px] h-[800px] bg-neon-cyan/10 rounded-full blur-3xl" />
        <div className="absolute w-[600px] h-[600px] bg-neon-purple/10 rounded-full blur-3xl" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo and Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex justify-center"
        >
          <div className="flex items-center space-x-3 bg-zinc-900/50 backdrop-blur-md border border-zinc-800 rounded-full px-6 py-3">
            <Terminal className="w-5 h-5 text-neon-cyan" />
            <span className="text-sm font-medium">Argo v1.0 Now Available</span>
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
        >
          <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
            Your AI Agent,
          </span>
          <br />
          <span className="bg-gradient-to-r from-neon-cyan via-emerald-400 to-neon-green bg-clip-text text-transparent">
            Living in the Command Line
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg sm:text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-12"
        >
          Stop switching tabs. Run tests, debug logs, and refactor code with
          <span className="text-neon-cyan"> natural language commands</span>
          directly in your terminal.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Button
            variant="neon"
            size="lg"
            className="neon-btn text-lg px-8 py-4"
          >
            <Terminal className="w-5 h-5 mr-2" />
            Download for Mac & Linux
          </Button>
          <Button
            variant="ghost"
            size="lg"
            className="text-zinc-400 hover:text-white hover:bg-zinc-800"
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            View on GitHub
          </Button>
        </motion.div>

        {/* Terminal Demo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden shadow-2xl shadow-neon-cyan/20">
            {/* Terminal Header */}
            <div className="bg-zinc-900 border-b border-zinc-800 px-4 py-3 flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors" />
                <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors" />
                <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 transition-colors" />
              </div>
              <div className="bg-zinc-800 rounded px-4 py-1 text-zinc-500 text-sm flex-1">
                user@argo-terminal — zsh — 80x24
              </div>
            </div>

            {/* Terminal Content */}
            <div className="p-6 font-mono text-sm leading-relaxed">
              {terminalCommands.map((item, index) => (
                <div key={index} className="mb-2">
                  {index === activeCommand ? (
                    <motion.div
                      key="active"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.1 }}
                      className="text-zinc-300"
                    >
                      <span className="text-neon-green">$</span> {item.command}
                    </motion.div>
                  ) : (
                    <motion.div
                      key={index}
                      initial={{ opacity: index < activeCommand ? 1 : 0 }}
                      animate={{ opacity: index < activeCommand ? 1 : 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-zinc-300"
                    >
                      <span className="text-neon-green">$</span> {item.command}
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="text-zinc-500 text-xs ml-2">
                        ✓
                      </motion.span>
                      <br />
                      <span className="text-zinc-400 ml-4">{item.output}</span>
                    </motion.div>
                  )}
                </div>
              ))}
              <motion.div
                key="cursor"
                initial={{ opacity: 0 }}
                animate={{ opacity: [1, 0] }}
                transition={{ loop: true, duration: 1 }}
                className="text-neon-cyan inline-block w-2 h-20 ml-3"
              >
                ▼
              </motion.div>
            </div>
          </div>

          {/* Tech Stack Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex flex-wrap justify-center gap-4 mt-8 text-zinc-500"
          >
            <span className="px-3 py-1 bg-zinc-900 rounded-full text-sm">macOS (Intel & Apple Silicon)</span>
            <span className="px-3 py-1 bg-zinc-900 rounded-full text-sm">Linux (Ubuntu, Debian)</span>
          </motion.div>
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.a
            href="#features"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-zinc-500 hover:text-white transition-colors"
          >
            <ArrowDown className="w-6 h-6" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}