import { motion } from 'framer-motion'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/home/Hero'
import TrustedBy from '@/components/home/TrustedBy'
import Features from '@/components/home/Features'
import DemoSection from '@/components/home/DemoSection'
import Pricing from '@/components/home/Pricing'
import CTABanner from '@/components/home/CTABanner'

export default function App() {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-zinc-950 text-zinc-100"
    >
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Hero />
        <TrustedBy />
        <Features />
        <DemoSection />
        <Pricing />
        <CTABanner />
      </main>

      {/* Footer */}
      <Footer />
    </motion.div>
  )
}