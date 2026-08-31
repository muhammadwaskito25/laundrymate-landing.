"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="relative rounded-[2rem] overflow-hidden"
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />

          {/* Glow effects */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/30 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-emerald-500/20 rounded-full blur-[80px]" />

          <div className="relative z-10 px-8 py-16 sm:px-16 sm:py-20 text-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-xs font-semibold text-white/80 mb-6 backdrop-blur-sm border border-white/10"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              Gratis Konsultasi & Demo
            </motion.div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight">
              Siap Mengubah Cara Anda
              <br />
              <span className="text-primary-200">Mengelola Laundry?</span>
            </h2>

            <p className="text-base sm:text-lg text-primary-200/60 max-w-2xl mx-auto mb-10">
              Hubungi kami sekarang untuk demo gratis dan konsultasi
              langsung. Tanpa biaya, tanpa komitmen.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://wa.me/628886604648?text=Halo%2C%20saya%20tertarik%20dengan%20LaundryMate.%20Bisa%20minta%20demo%20gratis%3F"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-base shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all cursor-pointer"
              >
                <MessageCircle className="w-5 h-5" />
                Hubungi via WhatsApp
              </motion.a>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
