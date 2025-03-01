import Header from "@/components/header";
import { Metadata } from "next";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { CTA } from "@/components/cta";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { getHomeMetadata } from "@/lib/metadata";

export const metadata: Metadata = getHomeMetadata();

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center">
        <Hero />
        <Features />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
