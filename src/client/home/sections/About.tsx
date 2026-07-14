import Image from "next/image";
import {
  Accessibility,
  CheckCircle2,
  HeartHandshake,
  MessageCircle,
  Sparkles,
  UsersRound,
} from "lucide-react";

import { siteConfig } from "@/client/config/site.config";

const values = [
  {
    icon: HeartHandshake,
    title: "Ensino acolhedor",
    description:
      "Um espaço seguro para perguntar, praticar e aprender sem medo de errar.",
  },
  {
    icon: UsersRound,
    title: "Comunicação prática",
    description:
      "Conteúdos voltados para situações reais e para a comunicação do dia a dia.",
  },
  {
    icon: Accessibility,
    title: "Mais acessibilidade",
    description:
      "Ensinar Libras também é contribuir para relações mais inclusivas e humanas.",
  },
];

const highlights = [
  "Cursos de Libras para diferentes níveis",
  "Aulas particulares e acompanhamento individual",
  "Conteúdos educativos nas redes sociais",
  "Serviços profissionais de interpretação",
];

export default function About() {
  const whatsappNumber = siteConfig.whatsapp.replace(/\D/g, "");

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Olá, Thaís! Conheci seu trabalho pelo site e gostaria de saber mais.",
  )}`;

  return (
    <section
      id="sobre"
      aria-labelledby="about-title"
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24"
      style={{ backgroundColor: "var(--color-bg-primary)" }}
    >
      <div
        aria-hidden="true"
        className="absolute -left-32 top-20 h-80 w-80 rounded-full blur-3xl"
        style={{
          backgroundColor:
            "color-mix(in srgb, var(--color-accent-light) 22%, transparent)",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-10">
        <div className="relative mx-auto w-full max-w-[520px]">
          <div
            aria-hidden="true"
            className="absolute -left-4 top-8 h-full w-full rounded-[2rem] sm:-left-6"
            style={{ backgroundColor: "var(--color-bg-tertiary)" }}
          />

          <div
            className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border shadow-xl"
            style={{
              borderColor: "var(--color-border-light)",
              backgroundColor: "var(--color-bg-card)",
            }}
          >
            <Image
              src="/images/thaise/thaise-sobre.jpg"
              alt="Thaís, professora e intérprete de Libras"
              fill
              sizes="(max-width: 1024px) 90vw, 520px"
              className="object-cover object-top"
            />
          </div>

          <div
            className="absolute -right-2 bottom-5 max-w-[240px] rounded-3xl border p-4 shadow-xl sm:-right-5 sm:bottom-8 sm:p-5"
            style={{
              borderColor: "var(--color-border-light)",
              backgroundColor: "var(--color-bg-card)",
            }}
          >
            <div className="flex items-start gap-3">
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl"
                style={{
                  backgroundColor:
                    "color-mix(in srgb, var(--color-accent-light) 30%, var(--color-bg-card))",
                  color: "var(--color-accent-hover)",
                }}
              >
                <Sparkles aria-hidden="true" className="h-5 w-5" />
              </div>

              <div>
                <p
                  className="text-sm font-bold"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  Libras aproxima pessoas
                </p>

                <p
                  className="mt-1 text-xs leading-5 sm:text-sm"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  Uma comunicação mais acessível começa com conhecimento e
                  disposição para aprender.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <span
            className="text-sm font-bold tracking-[0.18em] uppercase"
            style={{ color: "var(--color-accent)" }}
          >
            Conheça a Thaís
          </span>

          <h2
            id="about-title"
            className="mt-4 text-3xl leading-tight font-bold tracking-tight sm:text-4xl lg:text-5xl"
            style={{ color: "var(--color-text-primary)" }}
          >
            Ensino de Libras com leveza, prática e propósito
          </h2>

          <p
            className="mt-5 text-base leading-7 sm:text-lg"
            style={{ color: "var(--color-text-secondary)" }}
          >
            A Thaís trabalha para tornar o aprendizado de Libras mais próximo,
            acessível e possível para pessoas com diferentes objetivos e níveis
            de conhecimento.
          </p>

          <p
            className="mt-4 text-base leading-7"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Por meio de cursos, aulas particulares, conteúdos educativos e
            serviços de interpretação, ela ajuda a construir uma comunicação
            mais segura, humana e inclusiva.
          </p>

          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex items-start gap-3 text-sm leading-6 sm:text-base"
                style={{ color: "var(--color-text-secondary)" }}
              >
                <CheckCircle2
                  aria-hidden="true"
                  className="mt-0.5 h-5 w-5 shrink-0"
                  style={{ color: "var(--color-success)" }}
                />

                <span>{highlight}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {values.map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="rounded-3xl border p-5"
                style={{
                  borderColor: "var(--color-border-light)",
                  backgroundColor: "var(--color-bg-card)",
                }}
              >
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-2xl"
                  style={{
                    backgroundColor:
                      "color-mix(in srgb, var(--color-accent-light) 28%, var(--color-bg-card))",
                    color: "var(--color-accent-hover)",
                  }}
                >
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </div>

                <h3
                  className="mt-4 font-bold"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  {title}
                </h3>

                <p
                  className="mt-2 text-sm leading-6"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl px-6 font-semibold transition duration-200 hover:brightness-95"
              style={{
                backgroundColor: "var(--color-success)",
                color: "var(--color-text-light)",
              }}
            >
              <MessageCircle aria-hidden="true" className="h-5 w-5" />

              Falar com a Thaís
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}