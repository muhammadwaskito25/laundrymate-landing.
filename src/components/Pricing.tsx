"use client";

import { motion } from "framer-motion";
import { Check, Sparkles, Zap, Smartphone, ArrowRight } from "lucide-react";

export default function Pricing() {
  return (
    <section id="harga" className="relative py-24 overflow-hidden">
      {/* Background accents */}
      <div className="blob w-[600px] h-[600px] bg-emerald-500/10 top-[20%] left-[-20%] animate-blob" />
      <div className="blob w-[400px] h-[400px] bg-primary-600/15 bottom-[-10%] right-[-10%] animate-blob" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-light text-xs font-semibold text-emerald-300 mb-4">
            <Zap className="w-3.5 h-3.5" />
            Harga Terjangkau
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            Investasi Cerdas untuk{" "}
            <span className="gradient-text-emerald">Bisnis Anda.</span>
          </h2>
          <p className="text-base text-primary-200/50 max-w-2xl mx-auto">
            Nikmati semua fitur premium tanpa biaya setup yang mahal. Lebih murah dari biaya parkir sehari.
          </p>
        </motion.div>

        {/* Pricing Card */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
            className="relative glass-card rounded-[2.5rem] p-1 shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-primary-500/20 to-cyan-500/20 rounded-[2.5rem] blur-xl" />
            
            <div className="relative bg-[#17112E]/90 backdrop-blur-2xl rounded-[2.25rem] p-8 md:p-12 overflow-hidden border border-white/5">
              {/* Shine effect */}
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-emerald-500/20 via-primary-500/5 to-transparent rounded-full translate-x-1/3 -translate-y-1/3" />
              
              <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                {/* Left: Price */}
                <div className="text-center md:text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-bold border border-emerald-500/20 mb-6">
                    <Sparkles className="w-4 h-4" />
                    Best Value
                  </div>
                  
                  <div className="flex items-baseline justify-center md:justify-start gap-2 mb-2">
                    <span className="text-lg font-medium text-primary-200">Mulai dari</span>
                  </div>
                  
                  <div className="flex items-baseline justify-center md:justify-start gap-2 mb-4">
                    <span className="text-2xl font-bold text-emerald-400">Rp</span>
                    <span className="text-6xl md:text-7xl font-extrabold text-white tracking-tighter">
                      3.499
                    </span>
                    <span className="text-xl font-medium text-primary-200/50">/ hari</span>
                  </div>
                  
                  <p className="text-primary-200/60 mb-8 max-w-sm mx-auto md:mx-0">
                    Ditagih bulanan (Rp 105.000/bulan). Bebas batasan transaksi, akses ke semua fitur premium.
                  </p>

                  <a
                    href="https://wa.me/628886604648?text=Halo%2C%20saya%20tertarik%20dengan%20paket%20LaundryMate%20105rb/bulan.%20Bisa%20minta%20info%20lebih%20lanjut%3F"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-bold text-lg shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all cursor-pointer"
                  >
                    Mulai Berlangganan
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>

                {/* Right: Features */}
                <div className="bg-[#0D0B1A]/40 rounded-3xl p-6 md:p-8 border border-white/5">
                  <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                    <Smartphone className="w-5 h-5 text-primary-400" />
                    Semua Fitur Termasuk:
                  </h4>
                  <ul className="space-y-4">
                    {[
                      "Smart POS (Cuci, Kering, Drop-off)",
                      "Kirim Nota via WhatsApp",
                      "Sistem Absensi PIN Kasir",
                      "Split Payment & Dukungan QRIS",
                      "Mode Offline-First Auto Sync",
                      "Dashboard Owner & AI Insight",
                      "Laporan Keuangan & Inventaris",
                      "Support Teknis 24/7",
                    ].map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + (i * 0.1) }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                        </div>
                        <span className="text-sm text-primary-100/80 leading-relaxed">
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
