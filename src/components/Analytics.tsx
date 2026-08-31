"use client";

import { motion } from "framer-motion";
import {
  Brain,
  TrendingUp,
  AlertTriangle,
  PieChart,
  BarChart3,
  ArrowUpRight,
  Lightbulb,
  ShieldAlert,
} from "lucide-react";
import Image from "next/image";

export default function Analytics() {
  return (
    <section id="keunggulan" className="relative py-24 overflow-hidden">
      {/* Background accents */}
      <div className="blob w-[500px] h-[500px] bg-primary-600/15 top-[20%] right-[-15%] animate-blob" />
      <div className="blob w-[300px] h-[300px] bg-emerald-500/10 bottom-[10%] left-[-10%] animate-blob" style={{ animationDelay: "4s" }} />

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
            <Brain className="w-3.5 h-3.5" />
            AI-Powered Analytics
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            Keputusan Bisnis Berbasis{" "}
            <span className="gradient-text">Data,</span>
            <br />
            <span className="gradient-text-emerald">Bukan Tebakan.</span>
          </h2>
          <p className="text-base text-primary-200/50 max-w-2xl mx-auto">
            Dashboard cerdas yang memberikan insight real-time tentang
            kesehatan bisnis laundry Anda.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Text and features */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            {/* Feature cards */}
            {[
              {
                icon: PieChart,
                iconColor: "text-primary-400",
                iconBg: "bg-primary-500/20",
                title: "Rekap Keuangan Visual",
                desc: "Pie chart interaktif menampilkan perbandingan Pemasukan vs Pengeluaran. Lihat profit margin dalam sekejap.",
              },
              {
                icon: Lightbulb,
                iconColor: "text-amber-400",
                iconBg: "bg-amber-500/20",
                title: "AI Insight Otomatis",
                desc: "Sistem otomatis memperingatkan jika rasio pengeluaran (deterjen/gas) melebihi 30%, dan menyarankan peluang upsell.",
              },
              {
                icon: TrendingUp,
                iconColor: "text-emerald-400",
                iconBg: "bg-emerald-500/20",
                title: "Tren Omzet Real-Time",
                desc: "Pantau tren pendapatan harian, mingguan, dan bulanan. Identifikasi hari-hari terbaik dan optimasi jadwal operasional.",
              },
              {
                icon: ShieldAlert,
                iconColor: "text-red-400",
                iconBg: "bg-red-500/20",
                title: "Deteksi Anomali Transaksi",
                desc: "Sistem mendeteksi pola transaksi mencurigakan dan memberikan notifikasi langsung ke owner.",
              },
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex gap-4 group"
              >
                <div
                  className={`w-12 h-12 rounded-2xl ${feature.iconBg} flex-shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform`}
                >
                  <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-1 tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-primary-200/50 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right: Mockup dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-emerald-500/10 rounded-3xl blur-3xl" />

            {/* Main dashboard image */}
            <div className="relative mockup-frame rounded-2xl">
              <Image
                src="/screenshots/owner-dashboard.png"
                alt="Owner Dashboard Analytics"
                width={1024}
                height={768}
                className="w-full h-auto"
              />
            </div>

            {/* Floating AI insight card */}
            <motion.div
              animate={{ y: [-5, 8, -5] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-4 lg:-left-8 z-20"
            >
              <div className="glass-card px-5 py-4 rounded-2xl max-w-[260px]">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-bold text-amber-400">
                    AI Insight
                  </span>
                </div>
                <p className="text-xs text-primary-200/60 leading-relaxed">
                  Pengeluaran deterjen naik <span className="text-amber-400 font-semibold">32%</span> bulan ini.
                  Pertimbangkan supplier baru.
                </p>
              </div>
            </motion.div>

            {/* Floating profit card */}
            <motion.div
              animate={{ y: [8, -5, 8] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5,
              }}
              className="absolute -top-4 -right-4 lg:-right-6 z-20"
            >
              <div className="glass-card px-4 py-3 rounded-2xl">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-medium text-primary-300/60">
                    Profit Margin
                  </span>
                </div>
                <div className="flex items-center gap-1 mt-1">
                  <span className="text-lg font-extrabold text-emerald-400">
                    68%
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-emerald-400" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
