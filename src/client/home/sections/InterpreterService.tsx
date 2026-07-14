import {
  ArrowRight,
  Building2,
  CalendarCheck,
  CheckCircle2,
  Church,
  MessageCircle,
  MonitorPlay,
  Presentation,
  Video,
} from "lucide-react";

import { siteConfig } from "@/client/config/site.config";

const serviceTypes = [
  {
    icon: CalendarCheck,
    title: "Eventos",
    description:
      "Interpretação para palestras, encontros, congressos e cerimônias.",
  },
  {
    icon: Church,
    title: "Igrejas",
    description:
      "Acessibilidade em cultos, conferências, apresentações e eventos cristãos.",
  },
  {
    icon: Building2,
    title: "Empresas",
    description:
      "Interpretação para reuniões, treinamentos, entrevistas e atendimentos.",
  },
  {
    icon: Video,
    title: "Vídeos e conteúdos",
    description:
      "Interpretação em Libras para aulas, campanhas, vídeos e materiais digitais.",
  },
];

const benefits = [
  "Atendimento presencial ou online",
  "Serviço adaptado ao formato do evento",
  "Mais acessibilidade para o público surdo",
  "Orçamento personalizado para cada projeto",
];

export default function InterpreterService() {
  const whatsappNumber = siteConfig.whatsapp.replace(/\D/g, "");

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Olá, Thaís! Gostaria de solicitar um orçamento para interpretação em Libras.",
  )}`;

  return (
    <section
      id="interpretacao"
      aria-labelledby="interpreter-service-title"
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24"
      style={{ backgroundColor: "var(--color-bg-secondary)" }}
    >
      <div
        aria-hidden="true"
        className="absolute -right-32 top-0 h-80 w-80 rounded-full blur-3xl"
        style={{
          backgroundColor:
            "color-mix(in srgb, var(--color-accent-light) 22%, transparent)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <div
              className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold"
              style={{
                borderColor: "var(--color-border)",
                backgroundColor: "var(--color-bg-card)",
                color: "var(--color-accent-hover)",
              }}
            >
              <Presentation aria-hidden="true" className="h-4 w-4" />

              Serviço profissional
            </div>

            <h2
              id="interpreter-service-title"
              className="mt-5 text-3xl leading-tight font-bold tracking-tight sm:text-4xl lg:text-5xl"
              style={{ color: "var(--color-text-primary)" }}
            >
              Interpretação em Libras para tornar sua comunicação acessível
            </h2>

            <p
              className="mt-5 text-base leading-7 sm:text-lg"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Leve mais inclusão e acessibilidade para eventos, igrejas,
              empresas, aulas, vídeos e diferentes projetos de comunicação.
            </p>

            <p
              className="mt-4 text-base leading-7"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Cada atendimento é organizado de acordo com o formato, duração,
              localização e necessidades específicas do trabalho.
            </p>

            <ul className="mt-7 space-y-3">
              {benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-3 text-sm leading-6 sm:text-base"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  <CheckCircle2
                    aria-hidden="true"
                    className="mt-0.5 h-5 w-5 shrink-0"
                    style={{ color: "var(--color-success)" }}
                  />

                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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

                Solicitar orçamento
              </a>

              <a
                href="#contato"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border px-6 font-semibold transition duration-200 hover:-translate-y-0.5"
                style={{
                  borderColor: "var(--color-border)",
                  backgroundColor: "var(--color-bg-card)",
                  color: "var(--color-text-primary)",
                }}
              >
                Ver formas de contato

                <ArrowRight aria-hidden="true" className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div
            className="rounded-[2rem] border p-5 shadow-xl sm:p-8"
            style={{
              borderColor: "var(--color-border-light)",
              backgroundColor: "var(--color-bg-card)",
            }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              {serviceTypes.map(({ icon: Icon, title, description }) => (
                <article
                  key={title}
                  className="group rounded-3xl border p-5 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                  style={{
                    borderColor: "var(--color-border-light)",
                    backgroundColor: "var(--color-bg-primary)",
                  }}
                >
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-105"
                    style={{
                      backgroundColor:
                        "color-mix(in srgb, var(--color-accent-light) 30%, var(--color-bg-card))",
                      color: "var(--color-accent-hover)",
                    }}
                  >
                    <Icon aria-hidden="true" className="h-6 w-6" />
                  </div>

                  <h3
                    className="mt-4 text-lg font-bold"
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

            <div
              className="mt-5 flex flex-col gap-5 rounded-3xl p-6 sm:flex-row sm:items-center"
              style={{ backgroundColor: "var(--color-bg-secondary)" }}
            >
              <div
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl"
                style={{
                  backgroundColor: "var(--color-bg-card)",
                  color: "var(--color-accent)",
                }}
              >
                <MonitorPlay aria-hidden="true" className="h-7 w-7" />
              </div>

              <div>
                <h3
                  className="text-lg font-bold"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  Atendimento online ou presencial
                </h3>

                <p
                  className="mt-1 text-sm leading-6"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  Consulte disponibilidade, valores e condições para o seu
                  projeto ou evento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}