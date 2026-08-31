"use client";

import { WashingMachine, Mail, Phone, MapPin, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-primary-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#" className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center shadow-lg shadow-primary-600/20">
                <WashingMachine className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-lg font-extrabold tracking-tight text-white">
                  Laundry<span className="gradient-text">Mate</span>
                </span>

              </div>
            </a>
            <p className="text-sm text-primary-200/40 leading-relaxed mb-6">
              Smart POS & Cashier Management System untuk bisnis laundry
              mandiri dan drop-off. Offline-first, AI-powered.
            </p>

          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4 tracking-tight">
              Produk
            </h4>
            <ul className="space-y-3">
              {[
                "Smart POS",
                "Manajemen Kasir",
                "Inventaris",
                "Laporan Keuangan",
                "AI Insight",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#fitur"
                    className="text-sm text-primary-200/40 hover:text-primary-300 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4 tracking-tight">
              Dukungan
            </h4>
            <ul className="space-y-3">
              {[
                "Panduan Pengguna",
                "FAQ",
                "Hubungi Kami",
                "Demo Gratis",
                "Syarat & Ketentuan",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-primary-200/40 hover:text-primary-300 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4 tracking-tight">
              Kontak
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-primary-200/40">
                  Yogyakarta
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary-400 flex-shrink-0" />
                <a
                  href="tel:08886604648"
                  className="text-sm text-primary-200/40 hover:text-primary-300 transition-colors"
                >
                  0888-6604-648
                </a>
              </li>

            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="gradient-line mt-12 mb-8" />
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-200/30">
            © 2024 LaundryMate. All rights reserved.
          </p>
          <p className="text-xs text-primary-200/30">
            Made with 💜 di Yogyakarta
          </p>
        </div>
      </div>
    </footer>
  );
}
