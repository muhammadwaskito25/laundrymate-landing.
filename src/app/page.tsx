import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Analytics from "@/components/Analytics";
import HowItWorks from "@/components/HowItWorks";
import AdditionalFeatures from "@/components/AdditionalFeatures";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <div className="gradient-line" />
      <Features />
      <div className="gradient-line" />
      <Analytics />
      <div className="gradient-line" />
      <HowItWorks />
      <div className="gradient-line" />
      <AdditionalFeatures />
      <div className="gradient-line" />
      <Pricing />
      <div className="gradient-line" />
      <Testimonials />
      <CTABanner />
      <Footer />
    </main>
  );
}
