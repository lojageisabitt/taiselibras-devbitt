// src/client/home/sections/Highlights.tsx

import {
  BookOpen,
  HeartHandshake,
  MessageCircle,
  Users,
} from "lucide-react";

const highlights = [
  {
    icon: BookOpen,
    title: "Aprendizado prático",
    description:
      "Conteúdos claros e aplicáveis para você começar a se comunicar em Libras.",
  },
  {
    icon: Users,
    title: "Para diferentes níveis",
    description:
      "Aulas e materiais para quem está começando ou deseja continuar evoluindo.",
  },
  {
    icon: MessageCircle,
    title: "Comunicação de verdade",
    description:
      "Aprenda além dos sinais isolados e desenvolva mais segurança nas conversas.",
  },
  {
    icon: HeartHandshake,
    title: "Ensino acolhedor",
    description:
      "Uma forma leve, humana e acessível de aprender uma nova maneira de se comunicar.",
  },
];

export default function Highlights() {
  return (
    <section
      aria-labelledby="highlights-title"
      className="relative py-16 sm:py-20 lg:py-24"
      style={{ backgroundColor: "var(--color-bg-primary)" }}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <span
            className="text-sm font-bold tracking-[0.18em] uppercase"
            style={{ color: "var(--color-accent)" }}
          >
            Aprender Libras transforma
          </span>

          <h2
            id="highlights-title"
            className="mt-4 text-3xl leading-tight font-bold tracking-tight sm:text-4xl lg:text-5xl"
            style={{ color: "var(--color-text-primary)" }}
          >
            Um ensino pensado para aproximar pessoas
          </h2>

          <p
            className="mt-5 text-base leading-7 sm:text-lg"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Aprenda Libras com conteúdos organizados, prática constante e uma
            metodologia que respeita o seu ritmo.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {highlights.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="group rounded-3xl border p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{
                borderColor: "var(--color-border-light)",
                backgroundColor: "var(--color-bg-card)",
              }}
            >
              <div
                className="flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-105"
                style={{
                  backgroundColor:
                    "color-mix(in srgb, var(--color-accent-light) 32%, var(--color-bg-card))",
                  color: "var(--color-accent-hover)",
                }}
              >
                <Icon aria-hidden="true" className="h-7 w-7" />
              </div>

              <h3
                className="mt-6 text-xl font-bold"
                style={{ color: "var(--color-text-primary)" }}
              >
                {title}
              </h3>

              <p
                className="mt-3 text-sm leading-6 sm:text-base"
                style={{ color: "var(--color-text-secondary)" }}
              >
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}