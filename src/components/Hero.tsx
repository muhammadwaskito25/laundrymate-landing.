"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Coins,
  Shirt,
  CheckCircle2,
  Zap,
} from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background blobs */}
      <div className="blob w-[600px] h-[600px] bg-primary-600/30 top-[-200px] left-[-200px] animate-blob" />
      <div className="blob w-[500px] h-[500px] bg-emerald-500/20 bottom-[-100px] right-[-150px] animate-blob" style={{ animationDelay: "2s" }} />
      <div className="blob w-[300px] h-[300px] bg-primary-400/20 top-[40%] right-[10%] animate-blob" style={{ animationDelay: "4s" }} />

      {/* Dot pattern */}
      <div className="absolute inset-0 dot-pattern opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-light text-xs font-semibold text-primary-300 mb-6"
            >
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              <span>Smart POS #1 untuk Bisnis Laundry</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6">
              Revolusi Kasir{" "}
              <span className="gradient-text">Laundry Anda.</span>
              <br />
              <span className="text-white/90">
                Lebih Cerdas, Lebih Cepat,{" "}
              </span>
              <span className="gradient-text-emerald">Tanpa Kebocoran.</span>
            </h1>

            <p className="text-base sm:text-lg text-primary-200/60 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Sistem Point of Sale (POS) pertama yang dirancang khusus untuk
              bisnis laundry mandiri dan drop-off. Pantau omzet real-time, cegah
              kecurangan dengan absen PIN, dan tetap berjalan{" "}
              <span className="text-emerald-400 font-semibold">
                meski internet mati.
              </span>
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.a
                href="https://wa.me/628886604648"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="gradient-btn px-8 py-3.5 rounded-2xl text-base font-bold text-white flex items-center justify-center gap-2 cursor-pointer"
              >
                Mulai Sekarang
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#fitur"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3.5 rounded-2xl text-base font-semibold text-primary-300 border border-primary-500/30 hover:border-primary-400/50 hover:bg-primary-500/10 transition-all flex items-center justify-center gap-2"
              >
                Lihat Fitur
                <ChevronDown className="w-4 h-4" />
              </motion.a>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex gap-8 mt-10 justify-center lg:justify-start"
            >
              {[
                { value: "500+", label: "Transaksi/hari" },
                { value: "99.9%", label: "Uptime" },
                { value: "0", label: "Kebocoran" },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-2xl font-extrabold text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs text-primary-300/50 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40, rotateY: -10 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="relative flex justify-center"
          >
            {/* Floating elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -left-4 lg:left-8 z-20"
            >
              <div className="glass-card px-4 py-3 rounded-2xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                  <Coins className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <div className="text-xs text-primary-300/60 font-medium">
                    Omzet Hari Ini
                  </div>
                  <div className="text-sm font-bold text-emerald-400">
                    Rp 2.450.000
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -bottom-2 -right-2 lg:right-4 z-20"
            >
              <div className="glass-card px-4 py-3 rounded-2xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary-500/20 flex items-center justify-center">
                  <Shirt className="w-5 h-5 text-primary-400" />
                </div>
                <div>
                  <div className="text-xs text-primary-300/60 font-medium">
                    Pesanan Baru
                  </div>
                  <div className="text-sm font-bold text-white">
                    +12 Drop-off
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [-8, 12, -8] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
              className="absolute top-1/2 -right-8 lg:right-0 z-20 hidden sm:block"
            >
              <div className="glass-card px-3 py-2 rounded-xl flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-semibold text-emerald-400">
                  Synced ✓
                </span>
              </div>
            </motion.div>

            {/* Main mockup */}
            <div className="relative w-full max-w-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600/30 to-emerald-500/20 rounded-3xl blur-3xl" />
              <div className="relative mockup-frame rounded-2xl">
                <Image
                  src="/screenshots/pos-dashboard.png"
                  alt="LaundryMate POS Dashboard"
                  width={1024}
                  height={768}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="w-6 h-6 text-primary-400/40" />
      </motion.div>
    </section>
  );
}
