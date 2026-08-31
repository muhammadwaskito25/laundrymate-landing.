"use client";

import { motion } from "framer-motion";
import {
  UserCheck,
  ShoppingCart,
  BarChart3,
  ArrowRight,
  Fingerprint,
  Receipt,
  Eye,
} from "lucide-react";
import Image from "next/image";

const steps = [
  {
    number: "01",
    icon: Fingerprint,
    title: "Kasir Absen Masuk",
    description:
      "Kasir memasukkan PIN unik untuk mulai shift. Setiap transaksi tercatat atas nama kasir yang aktif.",
    color: "primary",
    image: "/screenshots/pin-screen.png",
  },
  {
    number: "02",
    icon: Receipt,
    title: "Proses Pesanan Pelanggan",
    description:
      "Pilih jenis layanan, tambah add-on, proses pembayaran cash atau QRIS dalam hitungan detik.",
    color: "emerald",
    image: "/screenshots/pos-dashboard.png",
  },
  {
    number: "03",
    icon: Eye,
    title: "Owner Pantau Omzet dari Rumah",
    description:
      "Dashboard real-time menampilkan omzet, pengeluaran, dan AI insight. Kontrol bisnis dari mana saja.",
    color: "amber",
    image: "/screenshots/owner-dashboard.png",
  },
];

const colorMap: Record<string, { icon: string; bg: string; ring: string; text: string; line: string }> = {
  primary: {
    icon: "text-primary-400",
    bg: "bg-primary-500/20",
    ring: "ring-primary-500/30",
    text: "text-primary-400",
    line: "from-primary-500/50",
  },
  emerald: {
    icon: "text-emerald-400",
    bg: "bg-emerald-500/20",
    ring: "ring-emerald-500/30",
    text: "text-emerald-400",
    line: "from-emerald-500/50",
  },
  amber: {
    icon: "text-amber-400",
    bg: "bg-amber-500/20",
    ring: "ring-amber-500/30",
    text: "text-amber-400",
    line: "from-amber-500/50",
  },
};

export default function HowItWorks() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="blob w-[400px] h-[400px] bg-primary-600/10 top-[30%] left-[-10%] animate-blob" />

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
            <ShoppingCart className="w-3.5 h-3.5" />
            Cara Kerja
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            Semudah{" "}
            <span className="gradient-text">1, 2, 3.</span>
          </h2>
          <p className="text-base text-primary-200/50 max-w-2xl mx-auto">
            Dari absen masuk sampai pantau omzet, semuanya dirancang agar
            simpel dan cepat.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-24 left-[16.67%] right-[16.67%] h-[2px]">
            <div className="w-full h-full bg-gradient-to-r from-primary-500/30 via-emerald-500/30 to-amber-500/30" />
          </div>

          {steps.map((step, i) => {
            const colors = colorMap[step.color];
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                className="relative"
              >
                <div className="text-center mb-6">
                  {/* Step number */}
                  <div className="relative inline-flex">
                    <div
                      className={`w-16 h-16 rounded-2xl ${colors.bg} ring-4 ${colors.ring} flex items-center justify-center mb-4 mx-auto relative z-10`}
                    >
                      <step.icon className={`w-7 h-7 ${colors.icon}`} />
                    </div>
                    <span
                      className={`absolute -top-2 -right-2 w-7 h-7 rounded-full bg-[#0D0B1A] ${colors.text} text-xs font-bold flex items-center justify-center ring-2 ${colors.ring}`}
                    >
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white tracking-tight mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-primary-200/50 leading-relaxed max-w-xs mx-auto">
                    {step.description}
                  </p>
                </div>

                {/* Step screenshot */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="mockup-frame rounded-xl overflow-hidden mx-auto max-w-sm"
                >
                  <Image
                    src={step.image}
                    alt={step.title}
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </motion.div>

                {/* Arrow (desktop, between steps) */}
                {i < steps.length - 1 && (
                  <div className="hidden md:flex absolute top-[88px] -right-5 z-10 items-center justify-center">
                    <ArrowRight className={`w-5 h-5 ${colors.icon} opacity-40`} />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
