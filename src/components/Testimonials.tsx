"use client";

import { motion } from "framer-motion";
import { Star, Quote, Users } from "lucide-react";

const testimonials = [
  {
    name: "Budi Santoso",
    role: "Pemilik - Fresh Laundry Semarang",
    avatar: "BS",
    rating: 5,
    text: "Sejak pakai LaundryMate, omzet naik 20% karena tidak ada lagi transaksi yang tidak tercatat. Sistem PIN-nya bikin kasir lebih disiplin.",
  },
  {
    name: "Sari Dewi",
    role: "Owner - Clean Express Jogja",
    avatar: "SD",
    rating: 5,
    text: "Fitur offline-nya luar biasa! Listrik mati, internet mati, tapi kasir tetap jalan. Begitu online, semua data langsung sync. Mantap!",
  },
  {
    name: "Ahmad Rizky",
    role: "Pemilik - Sparkle Laundry Solo",
    avatar: "AR",
    rating: 5,
    text: "AI Insight-nya membantu saya sadar bahwa pengeluaran deterjen terlalu tinggi. Setelah ganti supplier, profit naik 15% dalam sebulan.",
  },
  {
    name: "Linda Permata",
    role: "Owner - Wangi Laundry",
    avatar: "LP",
    rating: 5,
    text: "Split payment sangat memudahkan. Pelanggan yang bayar setengah cash setengah transfer bisa diproses dalam satu struk. Simpel banget!",
  },
  {
    name: "Hendra Wijaya",
    role: "Pemilik - QuickWash Magelang",
    avatar: "HW",
    rating: 5,
    text: "Dashboard owner-nya bikin saya bisa pantau bisnis dari rumah. Nggak perlu lagi bolak-balik ke outlet cuma buat cek omzet.",
  },
  {
    name: "Ratna Sari",
    role: "Owner - Bright Laundry Klaten",
    avatar: "RS",
    rating: 5,
    text: "Inventaris otomatis tercatat, pengeluaran terpantau, dan semua transaksi transparan. LaundryMate benar-benar mengubah cara saya kelola bisnis.",
  },
];

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className="glass-card rounded-3xl p-6 w-[340px] sm:w-[380px] flex-shrink-0 group hover:border-primary-500/30 transition-all duration-300">
      <div className="flex items-start gap-3 mb-4">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
          {testimonial.avatar}
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-bold text-white truncate">
            {testimonial.name}
          </h4>
          <p className="text-xs text-primary-300/50 truncate">
            {testimonial.role}
          </p>
        </div>
        <Quote className="w-5 h-5 text-primary-500/30 flex-shrink-0" />
      </div>
      <div className="flex gap-0.5 mb-3">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star
            key={i}
            className="w-4 h-4 text-amber-400 fill-amber-400"
          />
        ))}
      </div>
      <p className="text-sm text-primary-200/60 leading-relaxed">
        &ldquo;{testimonial.text}&rdquo;
      </p>
    </div>
  );
}

export default function Testimonials() {
  const doubled = [...testimonials, ...testimonials];

  return (
    <section id="testimoni" className="relative py-24 overflow-hidden">
      <div className="blob w-[400px] h-[400px] bg-primary-600/10 bottom-[10%] right-[-10%] animate-blob" />

      <div className="relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 px-4"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-light text-xs font-semibold text-primary-300 mb-4">
            <Users className="w-3.5 h-3.5" />
            Testimoni
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            Dipercaya Pemilik Laundry{" "}
            <span className="gradient-text">Se-Jawa Tengah.</span>
          </h2>
          <p className="text-base text-primary-200/50 max-w-2xl mx-auto">
            Dengarkan langsung dari para pemilik laundry yang sudah merasakan
            transformasi bisnis mereka.
          </p>
        </motion.div>

        {/* Marquee Row 1 */}
        <div className="marquee-container mb-5 overflow-hidden">
          <div className="flex gap-5 marquee-track animate-marquee w-max">
            {doubled.map((t, i) => (
              <TestimonialCard key={`row1-${i}`} testimonial={t} />
            ))}
          </div>
        </div>

        {/* Marquee Row 2 (reverse) */}
        <div className="marquee-container overflow-hidden">
          <div className="flex gap-5 marquee-track animate-marquee-reverse w-max">
            {[...doubled].reverse().map((t, i) => (
              <TestimonialCard key={`row2-${i}`} testimonial={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
