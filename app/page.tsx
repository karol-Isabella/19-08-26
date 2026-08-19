import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CallToAction from "@/components/CallToAction";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <CallToAction />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
