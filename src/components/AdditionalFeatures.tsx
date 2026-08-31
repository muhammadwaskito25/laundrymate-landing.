"use client";

import { motion } from "framer-motion";
import {
  Package,
  FileText,
  DollarSign,
  ClipboardList,
  Truck,
  UserCog,
  Timer,
  Receipt,
  Smartphone,
  MessageCircle,
} from "lucide-react";
import Image from "next/image";

const additionalFeatures = [
  {
    icon: ClipboardList,
    title: "Manajemen Inventaris",
    desc: "Catat stok deterjen, softener, plastik, dan kebutuhan operasional. Notifikasi saat stok hampir habis.",
    image: "/screenshots/inventaris.png",
  },
  {
    icon: Receipt,
    title: "Catat Pengeluaran",
    desc: "Catat setiap pengeluaran operasional (gas, listrik, deterjen) langsung dari kasir. Semua tercatat rapi.",
    image: "/screenshots/catat-pengeluaran.png",
  },
  {
    icon: FileText,
    title: "Riwayat Transaksi",
    desc: "Akses seluruh riwayat transaksi kapan saja. Filter berdasarkan tanggal, kasir, atau jenis layanan.",
    image: "/screenshots/riwayat-transaksi.png",
  },
];

const moreFeatures = [
  {
    icon: Truck,
    title: "Layanan Drop-off",
    desc: "Terima pesanan drop-off dengan mudah, catat berat dan jenis cucian.",
  },
  {
    icon: Timer,
    title: "Add-on Xtra Time",
    desc: "Tambah durasi mesin dengan fleksibel sesuai kebutuhan pelanggan.",
  },
  {
    icon: UserCog,
    title: "Multi-Kasir",
    desc: "Dukung banyak kasir dalam satu sistem dengan akuntabilitas penuh.",
  },
  {
    icon: DollarSign,
    title: "Laporan Keuangan",
    desc: "Rekap harian, mingguan, bulanan otomatis. Export data kapan saja.",
  },
  {
    icon: Smartphone,
    title: "PWA Responsive",
    desc: "Akses dari tablet, HP, atau laptop. Tampilan responsif di semua device.",
  },
  {
    icon: MessageCircle,
    title: "Nota via WhatsApp",
    desc: "Kirim nota digital langsung ke WhatsApp pelanggan. Hemat kertas, lebih praktis, dan terlihat profesional.",
  },
];

export default function AdditionalFeatures() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="blob w-[400px] h-[400px] bg-primary-600/10 top-[20%] right-[-10%] animate-blob" />

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
            <Package className="w-3.5 h-3.5" />
            Fitur Lengkap
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            Dan Masih{" "}
            <span className="gradient-text">Banyak Lagi.</span>
          </h2>
          <p className="text-base text-primary-200/50 max-w-2xl mx-auto">
            Setiap fitur dirancang untuk menyederhanakan operasional laundry
            Anda sehari-hari.
          </p>
        </motion.div>

        {/* Feature cards with screenshots */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {additionalFeatures.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="glass-card rounded-3xl overflow-hidden group"
            >
              <div className="p-6">
                <div className="w-12 h-12 rounded-2xl bg-primary-500/20 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-sm text-primary-200/50 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
              <div className="px-4 pb-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="mockup-frame rounded-xl overflow-hidden"
                >
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={600}
                    height={400}
                    className="w-full h-auto opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More feature grid (icons only) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {moreFeatures.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-light rounded-2xl p-5 flex gap-4 group hover:border-primary-500/20 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-primary-500/15 flex-shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform">
                <feature.icon className="w-5 h-5 text-primary-400" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-1">
                  {feature.title}
                </h4>
                <p className="text-xs text-primary-200/50 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
