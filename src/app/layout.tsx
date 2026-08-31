import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "LaundryMate — Smart POS & Kasir Laundry #1 di Indonesia",
  description:
    "Sistem Point of Sale (POS) pertama yang dirancang khusus untuk bisnis laundry mandiri dan drop-off. Pantau omzet real-time, cegah kecurangan dengan absen PIN, dan tetap berjalan meski internet mati.",
  keywords: [
    "POS Laundry",
    "Kasir Laundry",
    "Sistem Kasir",
    "Laundry Management",
    "Self Service Laundry",
    "Drop Off Laundry",
    "Smart POS",
  ],
  openGraph: {
    title: "LaundryMate — Smart POS & Kasir Laundry #1 di Indonesia",
    description:
      "Revolusi Kasir Laundry Anda. Lebih Cerdas, Lebih Cepat, Tanpa Kebocoran.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className={`${plusJakarta.variable} antialiased`}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
