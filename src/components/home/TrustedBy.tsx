import { motion } from "framer-motion";

const logos = [
  { name: "Vercel", color: "text-zinc-300" },
  { name: "Stripe", color: "text-zinc-300" },
  { name: "Linear", color: "text-zinc-300" },
  { name: "Notion", color: "text-zinc-300" },
  { name: "Figma", color: "text-zinc-300" },
];

export default function TrustedBy() {
  return (
    <section className="py-20 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-medium text-neon-cyan uppercase tracking-widest mb-4">
            Trusted by developers at
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-100 via-zinc-200 to-zinc-100 opacity-10 rounded-2xl blur-3xl" />

          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {logos.map((logo, index) => {
              const staggerDelay = index * 0.1;
              return (
                <motion.div
                  key={logo.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: staggerDelay }}
                  whileHover={{ scale: 1.05 }}
                  className={`text-3xl font-bold ${logo.color} text-center`}
                >
                  {logo.name}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
