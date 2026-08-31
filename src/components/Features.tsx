"use client";

import { motion, Variants } from "framer-motion";
import {
  Monitor,
  CreditCard,
  KeyRound,
  WifiOff,
  Droplets,
  Clock,
  QrCode,
  Shield,
  Cloud,
  Zap,
} from "lucide-react";
import Image from "next/image";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Features() {
  return (
    <section id="fitur" className="relative py-24 overflow-hidden">
      {/* Background accents */}
      <div className="blob w-[400px] h-[400px] bg-primary-600/15 top-[10%] left-[-10%] animate-blob" />
      <div className="blob w-[300px] h-[300px] bg-emerald-500/10 bottom-[5%] right-[-5%] animate-blob" style={{ animationDelay: "3s" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-light text-xs font-semibold text-primary-300 mb-4">
            <Monitor className="w-3.5 h-3.5" />
            Fitur Unggulan
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            Semua yang Anda Butuhkan,{" "}
            <span className="gradient-text">Satu Platform.</span>
          </h2>
          <p className="text-base text-primary-200/50 max-w-2xl mx-auto">
            Dirancang khusus untuk operasional laundry mandiri dan drop-off.
            Setiap fitur dibuat berdasarkan kebutuhan nyata pemilik laundry.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5"
        >
          {/* Card 1 - Smart POS (Large, 2 cols 2 rows) */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 md:row-span-2 glass-card rounded-3xl p-6 lg:p-8 group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary-600/20 transition-colors duration-700" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-primary-500/20 flex items-center justify-center mb-5">
                <Monitor className="w-6 h-6 text-primary-400" />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 tracking-tight">
                Smart POS Terintegrasi
              </h3>
              <p className="text-sm text-primary-200/50 mb-5 leading-relaxed">
                Proses pesanan Cuci, Kering, Cuci+Kering dalam hitungan detik.
                Mendukung layanan Drop-off dan Add-on Dinamis (Sabun, Softener, Xtra Time).
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Cuci", "Kering", "Drop-off", "Add-on"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-primary-500/15 text-primary-300 border border-primary-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="space-y-3 mb-6">
                {[
                  { Icon: Droplets, text: "Sabun & Softener otomatis" },
                  { Icon: Clock, text: "Xtra Time fleksibel" },
                  { Icon: Zap, text: "Proses < 3 detik" },
                ].map((sf) => (
                  <div key={sf.text} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center">
                      <sf.Icon className="w-4 h-4 text-primary-400" />
                    </div>
                    <span className="text-sm text-primary-200/60">{sf.text}</span>
                  </div>
                ))}
              </div>
              <div className="mockup-frame rounded-xl overflow-hidden">
                <Image
                  src="/screenshots/pos-dashboard.png"
                  alt="Smart POS Dashboard"
                  width={600}
                  height={400}
                  className="w-full h-auto opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                />
              </div>
            </div>
          </motion.div>

          {/* Card 2 - Split Payment */}
          <motion.div
            variants={itemVariants}
            className="glass-card rounded-3xl p-6 group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-colors duration-700" />
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 flex items-center justify-center">
                  <CreditCard className="w-6 h-6 text-emerald-400" />
                </div>
                <QrCode className="w-8 h-8 text-emerald-400/30" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 tracking-tight">
                Split Payment & QRIS
              </h3>
              <p className="text-sm text-primary-200/50 mb-4 leading-relaxed">
                Pisahkan pembayaran cash dan transfer dalam satu struk.
                Dukungan penuh QRIS untuk pembayaran digital.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Cash", "Transfer", "QRIS"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/15 text-emerald-300 border border-emerald-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 3 - PIN Absensi */}
          <motion.div
            variants={itemVariants}
            className="glass-card rounded-3xl p-6 group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl group-hover:bg-amber-500/20 transition-colors duration-700" />
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/20 flex items-center justify-center">
                  <KeyRound className="w-6 h-6 text-amber-400" />
                </div>
                <Shield className="w-8 h-8 text-amber-400/30" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 tracking-tight">
                Sistem Absensi PIN
              </h3>
              <p className="text-sm text-primary-200/50 mb-4 leading-relaxed">
                Kasir wajib login dengan PIN unik. Ucapkan selamat tinggal pada
                kecurangan shift. Setiap transaksi tercatat atas nama kasir.
              </p>
              <div className="flex flex-wrap gap-2">
                {["PIN Unik", "Anti-Curang", "Shift Log"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-amber-500/15 text-amber-300 border border-amber-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 4 - Offline First (2 cols wide) */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 glass-card rounded-3xl p-6 lg:p-8 group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-colors duration-700" />
            <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 flex items-center justify-center">
                    <WifiOff className="w-6 h-6 text-cyan-400" />
                  </div>
                  <Cloud className="w-8 h-8 text-cyan-400/30" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                  Offline-First Technology
                </h3>
                <p className="text-sm text-primary-200/50 mb-4 leading-relaxed">
                  Internet mati? Tidak masalah. Transaksi tersimpan secara lokal
                  dan otomatis sinkronisasi ke cloud (Supabase) saat online.
                  Bisnis Anda tidak pernah berhenti.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["LocalStorage", "Auto-Sync", "Supabase"].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/15 text-cyan-300 border border-cyan-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex-shrink-0 flex items-center gap-3">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 rounded-2xl bg-red-500/15 flex items-center justify-center border border-red-500/20">
                    <WifiOff className="w-8 h-8 text-red-400" />
                  </div>
                  <span className="text-xs text-red-400/70 font-medium">Offline</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <div className="w-8 h-[2px] bg-gradient-to-r from-red-400/40 to-emerald-400/40" />
                  <span className="text-xs text-primary-300/40">auto-sync</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/15 flex items-center justify-center border border-emerald-500/20">
                    <Cloud className="w-8 h-8 text-emerald-400" />
                  </div>
                  <span className="text-xs text-emerald-400/70 font-medium">Cloud</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
