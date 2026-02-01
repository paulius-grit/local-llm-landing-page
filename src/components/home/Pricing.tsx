import { motion } from "framer-motion";
import {
  Terminal,
  Check,
  Zap,
  Shield,
  Cpu,
  Globe,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const pricingPlans = [
  {
    title: "Open Source",
    description: "Free for individual usage and learning.",
    price: "$0",
    period: "forever",
    features: [
      "Full AI capabilities",
      "Local execution",
      "Community support",
      "Standard performance",
      "Basic documentation",
      "GitHub contributions welcome",
    ],
    cta: "Clone on GitHub",
    featured: false,
    color: "zinc",
  },
  {
    title: "Pro",
    description: "Professional features for serious developers and teams.",
    price: "$9",
    period: "month",
    features: [
      "Everything in Open Source",
      "Extended context window",
      "Priority AI responses",
      "Advanced analytics",
      "Dedicated email support",
      "Priority bug fixes",
      "Custom integrations",
      "Early access to new features",
    ],
    cta: "Start Free Trial",
    featured: true,
    color: "neon-cyan",
  },
];

const popularFeatures = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Execute commands in milliseconds",
  },
  {
    icon: Shield,
    title: "Private & Secure",
    description: "All processing happens locally",
  },
  {
    icon: Cpu,
    title: "Context Aware",
    description: "Deep understanding of your codebase",
  },
  {
    icon: Globe,
    title: "Multi Language",
    description: "Supports 20+ programming languages",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 relative">
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
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-full px-6 py-3 mb-6"
          >
            <Terminal className="w-5 h-5 text-neon-cyan" />
            <span className="text-sm font-medium">
              Simple, Transparent Pricing
            </span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-neon-cyan to-neon-green bg-clip-text text-transparent">
              Choose Your Plan
            </span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Start with our open-source version. Upgrade anytime for advanced
            features and priority support.
          </p>
        </motion.div>

        {/* Popular Features Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {popularFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-zinc-900/30 rounded-xl border border-zinc-800 hover:border-zinc-700 transition-all duration-300"
              >
                <div className="w-14 h-14 mb-4 rounded-lg bg-gradient-to-br from-neon-cyan/20 to-neon-green/20 flex items-center justify-center">
                  <Icon className="w-7 h-7 text-neon-cyan" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-zinc-400">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative rounded-xl border p-8 transition-all duration-300 ${
                plan.featured
                  ? "bg-gradient-to-br from-zinc-900/80 to-zinc-800/80 border-neon-cyan/30 shadow-2xl shadow-neon-cyan/10"
                  : "bg-zinc-900/30 border-zinc-800"
              }`}
            >
              {/* Featured Badge */}
              {plan.featured && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                >
                  <div className="bg-gradient-to-r from-neon-cyan to-neon-green text-black font-semibold px-4 py-1 rounded-full text-sm">
                    Most Popular
                  </div>
                </motion.div>
              )}

              {/* Card Content */}
              <CardHeader className="pb-4">
                <h3
                  className={`text-2xl font-bold mb-2 ${plan.featured ? "text-neon-cyan" : "text-white"}`}
                >
                  {plan.title}
                </h3>
                <p className="text-zinc-400 text-sm mb-6">{plan.description}</p>
                <div className="flex items-baseline mb-6">
                  <span className="text-5xl font-bold text-white">
                    {plan.price}
                  </span>
                  <span className="text-zinc-400 ml-2">/ {plan.period}</span>
                </div>
              </CardHeader>

              <CardContent>
                <Button
                  variant={plan.featured ? "neon" : "outline"}
                  size="lg"
                  className={`w-full ${plan.featured ? "neon-btn" : ""}`}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>

                {/* Features List */}
                <ul className="mt-8 space-y-3">
                  {plan.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="flex items-center"
                    >
                      <Check
                        className={`w-5 h-5 mr-3 ${
                          plan.featured ? "text-neon-cyan" : "text-zinc-400"
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          plan.featured ? "text-zinc-300" : "text-zinc-400"
                        }`}
                      >
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-neon-cyan/10 to-neon-green/10 rounded-2xl p-8 md:p-12 border border-zinc-800">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Still have questions?
            </h3>
            <p className="text-zinc-400 mb-8 max-w-2xl mx-auto text-lg">
              We're here to help you get started. Check our documentation or
              reach out to our team.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="neon" className="neon-btn">
                View Documentation
              </Button>
              <Button variant="ghost">Contact Sales</Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
