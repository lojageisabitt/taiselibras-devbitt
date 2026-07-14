import {
  CheckCircle2,
  HelpCircle,
  MessageCircle,
  Sparkles,
} from "lucide-react";

import { siteConfig } from "@/client/config/site.config";

const questions = [
  {
    question: "Preciso saber Libras antes de começar?",
    answer:
      "Não. Existem opções para quem está começando do zero e também para quem já possui conhecimento básico e deseja continuar evoluindo.",
  },
  {
    question: "As aulas são online ou presenciais?",
    answer:
      "Os formatos podem variar conforme o curso ou serviço escolhido. Há opções de aprendizado online e atendimentos que podem ser combinados diretamente com a Thaís.",
  },
  {
    question: "Como funcionam as aulas particulares?",
    answer:
      "As aulas são planejadas de acordo com seu nível, objetivo e disponibilidade. O conteúdo pode ser direcionado para comunicação cotidiana, trabalho, estudos ou necessidades específicas.",
  },
  {
    question: "O curso é indicado para iniciantes?",
    answer:
      "Sim. Quem nunca teve contato com Libras pode começar pelas opções destinadas ao nível iniciante e avançar gradualmente.",
  },
  {
    question: "Existe curso para quem já sabe o básico?",
    answer:
      "Sim. O curso intermediário é voltado para quem deseja ampliar o vocabulário, melhorar a compreensão e desenvolver mais naturalidade na comunicação.",
  },
  {
    question: "Como faço para saber qual curso escolher?",
    answer:
      "Você pode entrar em contato pelo WhatsApp, informar seu nível atual e seu objetivo. Assim, a Thaís poderá orientar sobre a opção mais adequada.",
  },
  {
    question: "A Thaís oferece interpretação em Libras?",
    answer:
      "Sim. É possível solicitar interpretação para eventos, igrejas, empresas, vídeos, aulas e outros projetos. A disponibilidade e o orçamento são avaliados individualmente.",
  },
  {
    question: "Como solicitar um orçamento de interpretação?",
    answer:
      "Entre em contato pelo WhatsApp informando a data, o horário, a duração, o formato, a localização e o tipo de evento ou conteúdo.",
  },
];

export default function FAQ() {
  const whatsappNumber = siteConfig.whatsapp.replace(/\D/g, "");

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Olá, Thaís! Visitei seu site e ainda tenho algumas dúvidas sobre os cursos e serviços.",
  )}`;

  return (
    <section
      id="duvidas"
      aria-labelledby="faq-title"
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24"
      style={{ backgroundColor: "var(--color-bg-primary)" }}
    >
      <div
        aria-hidden="true"
        className="absolute -left-32 top-0 h-80 w-80 rounded-full blur-3xl"
        style={{
          backgroundColor:
            "color-mix(in srgb, var(--color-accent-light) 20%, transparent)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <div
            className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold"
            style={{
              borderColor: "var(--color-border)",
              backgroundColor: "var(--color-bg-card)",
              color: "var(--color-accent-hover)",
            }}
          >
            <HelpCircle aria-hidden="true" className="h-4 w-4" />

            Perguntas frequentes
          </div>

          <h2
            id="faq-title"
            className="mt-5 text-3xl leading-tight font-bold tracking-tight sm:text-4xl lg:text-5xl"
            style={{ color: "var(--color-text-primary)" }}
          >
            Tire suas dúvidas sobre cursos, aulas e interpretação
          </h2>

          <p
            className="mt-5 text-base leading-7 sm:text-lg"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Confira as respostas para as dúvidas mais comuns antes de escolher
            uma opção ou solicitar atendimento.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-4xl space-y-4 lg:mt-16">
          {questions.map(({ question, answer }, index) => (
            <details
              key={question}
              className="group rounded-3xl border"
              style={{
                borderColor: "var(--color-border-light)",
                backgroundColor: "var(--color-bg-card)",
              }}
            >
              <summary
                className="flex min-h-20 cursor-pointer list-none items-center justify-between gap-5 px-5 py-5 sm:px-7 [&::-webkit-details-marker]:hidden"
                style={{ color: "var(--color-text-primary)" }}
              >
                <span className="flex items-center gap-4">
                  <span
                    aria-hidden="true"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl text-sm font-bold"
                    style={{
                      backgroundColor:
                        "color-mix(in srgb, var(--color-accent-light) 30%, var(--color-bg-card))",
                      color: "var(--color-accent-hover)",
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-left text-base font-bold sm:text-lg">
                    {question}
                  </span>
                </span>

                <span
                  aria-hidden="true"
                  className="relative h-6 w-6 shrink-0 rounded-full"
                  style={{
                    backgroundColor:
                      "color-mix(in srgb, var(--color-accent) 12%, transparent)",
                  }}
                >
                  <span
                    className="absolute left-1/2 top-1/2 h-0.5 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full"
                    style={{ backgroundColor: "var(--color-accent)" }}
                  />

                  <span
                    className="absolute left-1/2 top-1/2 h-3 w-0.5 -translate-x-1/2 -translate-y-1/2 rounded-full transition-transform duration-200 group-open:rotate-90 group-open:opacity-0"
                    style={{ backgroundColor: "var(--color-accent)" }}
                  />
                </span>
              </summary>

              <div
                className="border-t px-5 pb-6 pt-5 sm:px-7"
                style={{ borderColor: "var(--color-border-light)" }}
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2
                    aria-hidden="true"
                    className="mt-0.5 h-5 w-5 shrink-0"
                    style={{ color: "var(--color-success)" }}
                  />

                  <p
                    className="text-sm leading-7 sm:text-base"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {answer}
                  </p>
                </div>
              </div>
            </details>
          ))}
        </div>

        <div
          className="mx-auto mt-10 flex max-w-4xl flex-col items-center justify-between gap-6 rounded-[2rem] border p-6 text-center sm:p-8 lg:flex-row lg:text-left"
          style={{
            borderColor: "var(--color-border)",
            backgroundColor: "var(--color-bg-secondary)",
          }}
        >
          <div className="flex flex-col items-center gap-4 sm:flex-row lg:items-start">
            <div
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl"
              style={{
                backgroundColor: "var(--color-bg-card)",
                color: "var(--color-accent)",
              }}
            >
              <Sparkles aria-hidden="true" className="h-7 w-7" />
            </div>

            <div>
              <h3
                className="text-xl font-bold sm:text-2xl"
                style={{ color: "var(--color-text-primary)" }}
              >
                Ainda ficou com alguma dúvida?
              </h3>

              <p
                className="mt-2 text-sm leading-6 sm:text-base"
                style={{ color: "var(--color-text-secondary)" }}
              >
                Fale diretamente com a Thaís para receber uma orientação
                personalizada.
              </p>
            </div>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-2xl px-6 font-semibold transition duration-200 hover:brightness-95"
            style={{
              backgroundColor: "var(--color-success)",
              color: "var(--color-text-light)",
            }}
          >
            <MessageCircle aria-hidden="true" className="h-5 w-5" />

            Tirar uma dúvida
          </a>
        </div>
      </div>
    </section>
  );
}