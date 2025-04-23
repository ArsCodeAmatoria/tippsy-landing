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
      <main className="flex min-h-screen flex-col w-full bg-gradient-to-b from-white via-slate-50 to-primary/10 dark:from-gray-950 dark:via-gray-900 dark:to-primary/10">
        <Hero />
        <Features />
        <CTA />
        <Contact />
      </main>

    </>
  );
}
