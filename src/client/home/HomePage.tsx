// src/client/home/HomePage.tsx
import Image from "next/image";
import Link from "next/link";
// import { prisma } from "@/core/lib/prisma";
import { siteConfig } from "@/client/config/site.config"; // ← import que faltava
import Hero from "./sections/Hero";
import Highlights from "./sections/Highlights";
import LearningOptions from "./sections/LearningOptions";
import PrivateClasses from "./sections/PrivateClasses";
import InterpreterService from "./sections/InterpreterService";
import About from "./sections/About";
import FreeContent from "./sections/FreeContent";
import FAQ from "./sections/FAQ";
import FinalCTA from "./sections/FinalCTA";

export default async function HomePage() {
  // const categories = await prisma.blogCategory.findMany({
  //   where: { showOnHome: true },
  //   orderBy: { order: "asc" },
  //   take: 3,
  // });

  return (
    <section className="w-full" style={{ backgroundColor: 'var(--color-bg-primary)', color: 'var(--color-text-primary)' }}>

      <Hero />
      <Highlights />
      <LearningOptions />
      <PrivateClasses />
      <InterpreterService />
      <About />
      <FreeContent />
      <FAQ />
      <FinalCTA />

    </section>
  );
}