// src/client/home/sections/Hero.tsx

import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  Sparkles,
} from "lucide-react";

import { siteConfig } from "@/client/config/site.config";

const highlights = [
  "Conteúdo para iniciantes e intermediários",
  "Aprendizado leve, prático e acessível",
  "Estude no seu ritmo e ganhe confiança",
];

export default function Hero() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    siteConfig.whatsappMensagem,
  )}`;

  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, var(--color-bg-primary) 0%, var(--color-bg-secondary) 58%, var(--color-bg-tertiary) 100%)",
      }}
    >
      <div
        aria-hidden="true"
        className="absolute -left-32 top-10 h-72 w-72 rounded-full blur-3xl"
        style={{
          backgroundColor:
            "color-mix(in srgb, var(--color-accent-light) 28%, transparent)",
        }}
      />

      <div
        aria-hidden="true"
        className="absolute -right-28 bottom-0 h-80 w-80 rounded-full blur-3xl"
        style={{
          backgroundColor:
            "color-mix(in srgb, var(--color-accent) 18%, transparent)",
        }}
      />

      <div className="relative mx-auto grid min-h-[calc(100svh-80px)] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-20">
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <div
            className="mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold"
            style={{
              borderColor: "var(--color-border)",
              backgroundColor: "var(--color-bg-card)",
              color: "var(--color-accent-hover)",
            }}
          >
            <Sparkles aria-hidden="true" className="h-4 w-4" />

            <span>Professora e intérprete de Libras</span>
          </div>

          <h1
            id="hero-title"
            className="text-4xl leading-[1.08] font-bold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl"
            style={{ color: "var(--color-text-primary)" }}
          >
            Aprenda Libras de forma{" "}
            <span style={{ color: "var(--color-accent)" }}>
              leve, prática
            </span>{" "}
            e do seu jeito.
          </h1>

          <p
            className="mx-auto mt-6 max-w-2xl text-base leading-7 sm:text-lg lg:mx-0 lg:text-xl lg:leading-8"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Cursos, aulas e conteúdos pensados para ajudar você a se
            comunicar em Libras com mais segurança, naturalidade e confiança.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <a
              href="#cursos"
              className="btn-accent inline-flex min-h-12 items-center justify-center gap-2 !rounded-3xl font-semibold"
            >
              Conhecer os cursos

              <ArrowRight aria-hidden="true" className="h-5 w-5" />
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Falar com a Thaise pelo WhatsApp"
              className="btn-success inline-flex min-h-12 items-center justify-center gap-2"
            >
              <MessageCircle aria-hidden="true" className="h-5 w-5" />

              Falar com a Thaise
            </a>
          </div>

          <ul
            aria-label="Benefícios"
            className="mt-8 grid gap-3 text-left sm:grid-cols-2 lg:max-w-2xl"
          >
            {highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex items-start gap-2 text-sm leading-6 sm:text-base"
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
        </div>

        <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
          <div className="relative w-full max-w-[470px]">
            <div
              aria-hidden="true"
              className="absolute inset-4 rounded-full"
              style={{
                backgroundColor:
                  "color-mix(in srgb, var(--color-accent-light) 36%, transparent)",
                transform: "rotate(-6deg) scale(1.04)",
              }}
            />

            <div
              aria-hidden="true"
              className="absolute -right-2 top-8 h-20 w-20 rounded-full border-2 sm:h-24 sm:w-24"
              style={{
                borderColor: "var(--color-accent)",
              }}
            />

            <div
              aria-hidden="true"
              className="absolute bottom-10 -left-3 h-12 w-12 rounded-full"
              style={{
                backgroundColor: "var(--color-accent-light)",
              }}
            />

            <div
              className="relative aspect-square overflow-hidden rounded-full border-[10px] shadow-2xl"
              style={{
                borderColor: "var(--color-bg-card)",
                backgroundColor: "var(--color-bg-card)",
              }}
            >
              <Image
                src="/images/thaise/thaise-perfil.png"
                alt="Thaise, professora e intérprete de Libras"
                fill
                priority
                sizes="(max-width: 768px) 86vw, 470px"
                className="object-cover object-top"
              />
            </div>

            <div
              className="absolute right-0 bottom-3 max-w-[210px] rounded-2xl border px-4 py-3 text-left shadow-lg sm:right-2 sm:bottom-8"
              style={{
                borderColor: "var(--color-border-light)",
                backgroundColor: "var(--color-bg-card)",
              }}
            >
              <p
                className="text-xs font-semibold tracking-wider uppercase"
                style={{ color: "var(--color-accent)" }}
              >
                Thaise Libras
              </p>

              <p
                className="mt-1 text-sm font-semibold"
                style={{ color: "var(--color-text-primary)" }}
              >
                Comunicação que aproxima pessoas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}