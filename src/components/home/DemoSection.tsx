import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Terminal, CheckCircle, Activity, Code, Zap, Cpu } from 'lucide-react'

interface TerminalLine {
  command: string
  output: string
  delay: number
}

const demoLines: TerminalLine[] = [
  {
    command: 'argo "Find all TODO comments in the codebase"',
    output: 'Found 5 TODO comments across 3 files:\n  src/utils.ts:42\n  src/components/Button.tsx:15\n  src/pages/Home.tsx:89\n\nWould you like me to fix them automatically?',
    delay: 2000,
  },
  {
    command: 'argo "Yes, fix all TODO comments"',
    output: '✓ Processing TODO comments...\n✓ Replaced legacy implementations\n✓ Updated comments to use modern patterns\n✓ Ran linting to ensure code quality',
    delay: 3000,
  },
  {
    command: 'argo "Add unit tests for the new authentication module"',
    output: '🧪 Generating unit tests...\n✓ Created auth.test.ts\n✓ Mocked all dependencies\n✓ Added test cases for success/error scenarios\n✓ Ready to run with `npm test`',
    delay: 3500,
  },
  {
    command: 'argo "Run the tests"',
    output: 'Running authentication tests...\n\n  ✓ UserAuthentication.test.ts:12 passed\n  ✓ UserAuthentication.test.ts:45 passed\n  ✓ UserAuthentication.test.ts:78 passed\n\nTotal: 3 tests passed | Time: 1.2s',
    delay: 2500,
  },
  {
    command: 'argo "Optimize the database connection pool"',
    output: '🔍 Database optimization analysis...\n\n  Current pool size: 20\n  Current idle connections: 15\n  Recommended size: 50\n\n  ↳ Max connections increased to 50\n  ↳ Timeout interval reduced from 30s to 10s\n  ✓ Optimization complete\n  ▶ Performance improved by 45%',
    delay: 3500,
  },
  {
    command: 'argo "Review and push changes"',
    output: '🤖 AI code review\n\n  ℹ️  Found 3 potential improvements:\n    - Replace deprecated functions\n    - Add error handling for edge cases\n    - Improve variable names\n\n  ✓ Changes committed to git\n  📤 Pushed to main branch\n  🎉 Ready to deploy!',
    delay: 2500,
  },
]

export default function DemoSection() {
  const [activeLine, setActiveLine] = useState(0)
  const [isTyping, setIsTyping] = useState(false)
  const [showComplete, setShowComplete] = useState(false)

  useEffect(() => {
    if (activeLine >= demoLines.length) {
      setShowComplete(true)
      return
    }

    setIsTyping(true)
    const timeout = setTimeout(() => {
      setActiveLine(prev => prev + 1)
      setIsTyping(false)
    }, demoLines[activeLine].delay)

    return () => clearTimeout(timeout)
  }, [activeLine])

  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
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
              How It Works
            </span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Speak naturally to Argo, watch it understand your intent, and execute complex tasks in your terminal.
          </p>
        </motion.div>

        {/* Demo Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden shadow-2xl shadow-neon-cyan/10">
            {/* Terminal Header */}
            <div className="bg-zinc-900 border-b border-zinc-800 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="bg-zinc-800 rounded-full px-4 py-1 text-zinc-500 text-xs">
                Interactive Demo
              </div>
              <div className="flex items-center space-x-2">
                <Activity className="w-4 h-4 text-neon-cyan animate-pulse" />
                <span className="text-sm text-zinc-400">
                  {getProgress()}%
                </span>
              </div>
            </div>

            {/* Terminal Content */}
            <div className="p-6 font-mono text-sm leading-relaxed h-[600px] overflow-y-auto">
              <div className="mb-4 pb-4 border-b border-zinc-800">
                <div className="space-y-3">
                  {demoLines.map((line, index) => {
                    const isCurrent = index === activeLine
                    const isPrevious = index < activeLine

                    return (
                      <div key={index} className={isCurrent ? 'relative' : ''}>
                        {isCurrent && isTyping && (
                          <motion.span
                            key="cursor"
                            className="inline-block w-2 h-4 ml-2"
                            initial={{ opacity: [1, 0] }}
                            animate={{ opacity: [1, 0] }}
                            transition={{ loop: true, duration: 1 }}
                          >
                            ▼
                          </motion.span>
                        )}

                        <span className="text-neon-green ml-2">
                          {isTyping ? '$ ' : getSymbol(index)}
                        </span>

                        {isPrevious ? (
                          <motion.div
                            key={line.command}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="text-zinc-300"
                          >
                            {line.command}
                            <CheckCircle className="inline w-4 h-4 ml-2 text-neon-cyan" />
                            <br />
                            <span className="text-zinc-400 ml-6 whitespace-pre-line">
                              {line.output}
                            </span>
                          </motion.div>
                        ) : isCurrent && !isTyping ? (
                          <motion.div
                            key={line.command}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-white"
                          >
                            {line.command}
                            <span className="inline-block w-2 h-4 ml-1 text-neon-cyan animate-pulse" />
                          </motion.div>
                        ) : (
                          <div key={index} className="text-zinc-600">
                            {line.command}
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Next Command Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [1, 0.5] }}
                  transition={{ loop: Infinity, duration: 1 }}
                  className="text-neon-cyan text-sm"
                >
                  ⋯ AI is thinking
                </motion.div>
              )}
            </div>

            {/* Progress Bar */}
            <div className="h-1 bg-zinc-900">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${((activeLine + 1) / demoLines.length) * 100}%` }}
                transition={{ duration: (activeLine + 1) * 0.5 }}
                className={`h-full bg-gradient-to-r from-neon-cyan to-neon-green ${
                  showComplete ? 'bg-green-500' : ''
                }`}
              />
            </div>
          </div>

          {/* Features List */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Terminal,
                title: 'Natural Language',
                description: 'Just describe what you want, and Argo understands',
              },
              {
                icon: Zap,
                title: 'Instant Results',
                description: 'No waiting for API responses or slow processing',
              },
              {
                icon: Cpu,
                title: 'Smart Context',
                description: 'AI reads your entire codebase for accurate results',
              },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-6 bg-zinc-900/30 rounded-xl border border-zinc-800"
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-br from-neon-cyan/20 to-neon-green/20 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-neon-cyan" />
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-zinc-400">
                    {item.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )

  function getSymbol(index: number) {
    if (index === 0) return '✓'
    if (index === 3) return '✓'
    if (index === 5) return '✓'
    return '➜'
  }

  function getProgress() {
    return Math.round(((activeLine + 1) / demoLines.length) * 100)
  }
}