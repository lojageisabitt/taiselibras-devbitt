import {
  ArrowUpRight,
  Instagram,
  Mail,
  MessageCircle,
  Sparkles,
  Youtube,
} from "lucide-react";

import { siteConfig } from "@/client/config/site.config";

const socialLinks = [
  {
    icon: Instagram,
    label: "Instagram",
    username: "@thaiselibras",
    href: "https://www.instagram.com/thaiselibras/",
  },
  {
    icon: Youtube,
    label: "YouTube",
    username: "Thaís Libras",
    href: "https://www.youtube.com/@thais.libras",
  },
];

export default function FinalCTA() {
  const whatsappNumber = siteConfig.whatsapp.replace(/\D/g, "");

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Olá, Thaís! Conheci seu trabalho pelo site e gostaria de saber mais sobre seus cursos e serviços.",
  )}`;

  return (
    <section
      id="contato"
      aria-labelledby="final-cta-title"
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24"
      style={{ backgroundColor: "var(--color-bg-secondary)" }}
    >
      <div
        aria-hidden="true"
        className="absolute -left-32 -top-28 h-80 w-80 rounded-full blur-3xl"
        style={{
          backgroundColor:
            "color-mix(in srgb, var(--color-accent-light) 24%, transparent)",
        }}
      />

      <div
        aria-hidden="true"
        className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full blur-3xl"
        style={{
          backgroundColor:
            "color-mix(in srgb, var(--color-accent) 16%, transparent)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div
          className="relative overflow-hidden rounded-[2rem] border px-6 py-12 shadow-xl sm:px-10 sm:py-16 lg:px-16 lg:py-20"
          style={{
            borderColor: "var(--color-border-light)",
            background:
              "linear-gradient(135deg, var(--color-bg-card) 0%, var(--color-bg-primary) 55%, var(--color-bg-tertiary) 100%)",
          }}
        >
          <div
            aria-hidden="true"
            className="absolute -right-16 -top-16 h-56 w-56 rounded-full border-[28px] opacity-40"
            style={{ borderColor: "var(--color-accent-light)" }}
          />

          <div
            aria-hidden="true"
            className="absolute bottom-12 left-10 h-10 w-10 rounded-full"
            style={{ backgroundColor: "var(--color-accent-light)" }}
          />

          <div className="relative mx-auto max-w-4xl text-center">
            <div
              className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold"
              style={{
                borderColor: "var(--color-border)",
                backgroundColor: "var(--color-bg-card)",
                color: "var(--color-accent-hover)",
              }}
            >
              <Sparkles aria-hidden="true" className="h-4 w-4" />

              Comece sua jornada na Libras
            </div>

            <h2
              id="final-cta-title"
              className="mt-6 text-3xl leading-tight font-bold tracking-tight sm:text-4xl lg:text-6xl"
              style={{ color: "var(--color-text-primary)" }}
            >
              Aprenda uma nova forma de se comunicar e aproximar pessoas
            </h2>

            <p
              className="mx-auto mt-6 max-w-2xl text-base leading-7 sm:text-lg"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Fale com a Thaís para conhecer os cursos, consultar aulas
              particulares ou solicitar um orçamento de interpretação em
              Libras.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Falar com a Thaís pelo WhatsApp"
                className="inline-flex min-h-13 items-center justify-center gap-2 rounded-2xl px-7 font-semibold shadow-lg transition duration-200 hover:-translate-y-0.5 hover:brightness-95"
                style={{
                  backgroundColor: "var(--color-success)",
                  color: "var(--color-text-light)",
                }}
              >
                <MessageCircle aria-hidden="true" className="h-5 w-5" />

                Falar pelo WhatsApp
              </a>

              <a
                href="#cursos"
                className="inline-flex min-h-13 items-center justify-center gap-2 rounded-2xl border px-7 font-semibold transition duration-200 hover:-translate-y-0.5"
                style={{
                  borderColor: "var(--color-border)",
                  backgroundColor: "var(--color-bg-card)",
                  color: "var(--color-text-primary)",
                }}
              >
                Conhecer os cursos

                <ArrowUpRight aria-hidden="true" className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="relative mt-12 grid gap-4 border-t pt-8 sm:grid-cols-2 lg:grid-cols-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-3xl border p-5 transition duration-200 hover:-translate-y-1 hover:shadow-lg"
              style={{
                borderColor: "var(--color-border-light)",
                backgroundColor: "var(--color-bg-card)",
              }}
            >
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl"
                style={{
                  backgroundColor:
                    "color-mix(in srgb, var(--color-success) 14%, var(--color-bg-card))",
                  color: "var(--color-success)",
                }}
              >
                <MessageCircle aria-hidden="true" className="h-6 w-6" />
              </div>

              <div className="min-w-0 text-left">
                <p
                  className="text-sm font-semibold"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  Atendimento
                </p>

                <p
                  className="mt-1 font-bold"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  WhatsApp
                </p>
              </div>

              <ArrowUpRight
                aria-hidden="true"
                className="ml-auto h-5 w-5 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                style={{ color: "var(--color-success)" }}
              />
            </a>

            {socialLinks.map(({ icon: Icon, label, username, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-3xl border p-5 transition duration-200 hover:-translate-y-1 hover:shadow-lg"
                style={{
                  borderColor: "var(--color-border-light)",
                  backgroundColor: "var(--color-bg-card)",
                }}
              >
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl"
                  style={{
                    backgroundColor:
                      "color-mix(in srgb, var(--color-accent-light) 30%, var(--color-bg-card))",
                    color: "var(--color-accent-hover)",
                  }}
                >
                  <Icon aria-hidden="true" className="h-6 w-6" />
                </div>

                <div className="min-w-0 text-left">
                  <p
                    className="text-sm font-semibold"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {label}
                  </p>

                  <p
                    className="mt-1 truncate font-bold"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    {username}
                  </p>
                </div>

                <ArrowUpRight
                  aria-hidden="true"
                  className="ml-auto h-5 w-5 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  style={{ color: "var(--color-accent)" }}
                />
              </a>
            ))}
          </div>

          {siteConfig.email && (
            <div className="relative mt-6 text-center">
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-70"
                style={{ color: "var(--color-text-secondary)" }}
              >
                <Mail aria-hidden="true" className="h-4 w-4" />

                {siteConfig.email}
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}