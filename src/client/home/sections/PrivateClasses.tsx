import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  MessageCircle,
  Sparkles,
  Target,
  UserRoundCheck,
  Video,
} from "lucide-react";

import { siteConfig } from "@/client/config/site.config";

const benefits = [
  {
    icon: Target,
    title: "Conteúdo personalizado",
    description:
      "As aulas são planejadas de acordo com seu nível, suas dificuldades e seus objetivos.",
  },
  {
    icon: CalendarDays,
    title: "Horários combinados",
    description:
      "Escolha dias e horários que funcionem melhor para a sua rotina.",
  },
  {
    icon: Video,
    title: "Aulas online e ao vivo",
    description:
      "Aprenda de onde estiver com acompanhamento direto durante toda a aula.",
  },
  {
    icon: UserRoundCheck,
    title: "Acompanhamento individual",
    description:
      "Receba orientações, correções e atenção exclusiva durante seu aprendizado.",
  },
];

const idealFor = [
  "Quem deseja começar Libras do zero",
  "Quem precisa aprender para o trabalho",
  "Familiares de pessoas surdas",
  "Profissionais da educação e atendimento",
  "Quem deseja melhorar a conversação",
];

export default function PrivateClasses() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    "Olá, Thaise! Gostaria de saber mais sobre as aulas particulares de Libras.",
  )}`;

  return (
    <section
      id="aulas-particulares"
      aria-labelledby="private-classes-title"
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24"
      style={{ backgroundColor: "var(--color-bg-primary)" }}
    >
      <div
        aria-hidden="true"
        className="absolute -left-32 bottom-0 h-80 w-80 rounded-full blur-3xl"
        style={{
          backgroundColor:
            "color-mix(in srgb, var(--color-accent-light) 20%, transparent)",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-10">
        <div>
          <div
            className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold"
            style={{
              borderColor: "var(--color-border)",
              backgroundColor: "var(--color-bg-card)",
              color: "var(--color-accent-hover)",
            }}
          >
            <Sparkles aria-hidden="true" className="h-4 w-4" />

            Aprendizado personalizado
          </div>

          <h2
            id="private-classes-title"
            className="mt-5 text-3xl leading-tight font-bold tracking-tight sm:text-4xl lg:text-5xl"
            style={{ color: "var(--color-text-primary)" }}
          >
            Aulas particulares de Libras pensadas para você
          </h2>

          <p
            className="mt-5 text-base leading-7 sm:text-lg"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Tenha aulas individuais, com conteúdo adaptado ao seu nível, ritmo
            de aprendizado e objetivo pessoal ou profissional.
          </p>

          <p
            className="mt-4 text-base leading-7"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Você aprende com mais liberdade para perguntar, praticar e receber
            correções durante todo o processo.
          </p>

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

              Consultar disponibilidade
            </a>

            <a
              href="#cursos"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border px-6 font-semibold transition duration-200 hover:-translate-y-0.5"
              style={{
                borderColor: "var(--color-border)",
                backgroundColor: "var(--color-bg-card)",
                color: "var(--color-text-primary)",
              }}
            >
              Ver outras opções

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
            {benefits.map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="rounded-3xl border p-5"
                style={{
                  borderColor: "var(--color-border-light)",
                  backgroundColor: "var(--color-bg-primary)",
                }}
              >
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-2xl"
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
            className="mt-5 rounded-3xl p-6"
            style={{ backgroundColor: "var(--color-bg-secondary)" }}
          >
            <h3
              className="text-xl font-bold"
              style={{ color: "var(--color-text-primary)" }}
            >
              As aulas particulares são ideais para:
            </h3>

            <ul className="mt-5 space-y-3">
              {idealFor.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm leading-6 sm:text-base"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  <CheckCircle2
                    aria-hidden="true"
                    className="mt-0.5 h-5 w-5 shrink-0"
                    style={{ color: "var(--color-success)" }}
                  />

                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}