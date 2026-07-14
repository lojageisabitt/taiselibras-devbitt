import {
  ArrowRight,
  BookOpenCheck,
  Clock3,
  GraduationCap,
  MonitorPlay,
  UsersRound,
} from "lucide-react";

const learningOptions = [
  {
    icon: MonitorPlay,
    title: "Libras em Casa",
    description:
      "Aprenda Libras online, no seu ritmo, com aulas organizadas e acesso aos conteúdos de onde estiver.",
    features: [
      "Aulas online",
      "Estude no seu ritmo",
      "Ideal para iniciantes",
    ],
    label: "Curso online",
    href: "#contato",
  },
  {
    icon: UsersRound,
    title: "Turmas ao Vivo",
    description:
      "Participe de encontros online com acompanhamento, interação e prática junto com outros alunos.",
    features: [
      "Acompanhamento da professora",
      "Prática em grupo",
      "Encontros ao vivo",
    ],
    label: "Turmas",
    href: "#contato",
  },
  {
    icon: GraduationCap,
    title: "Curso Intermediário",
    description:
      "Continue evoluindo na Libras, amplie seu vocabulário e desenvolva mais naturalidade na comunicação.",
    features: [
      "Para quem já conhece o básico",
      "Mais vocabulário",
      "Prática de conversação",
    ],
    label: "Próximo nível",
    href: "#contato",
  },
  {
    icon: BookOpenCheck,
    title: "Aulas Particulares",
    description:
      "Tenha aulas personalizadas de acordo com seu nível, seus objetivos e sua disponibilidade.",
    features: [
      "Conteúdo personalizado",
      "Horários combinados",
      "Acompanhamento individual",
    ],
    label: "Aula personalizada",
    href: "#aulas-particulares",
  },
];

export default function LearningOptions() {
  return (
    <section
      id="cursos"
      aria-labelledby="learning-options-title"
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24"
      style={{ backgroundColor: "var(--color-bg-secondary)" }}
    >
      <div
        aria-hidden="true"
        className="absolute -top-24 right-0 h-72 w-72 rounded-full blur-3xl"
        style={{
          backgroundColor:
            "color-mix(in srgb, var(--color-accent-light) 20%, transparent)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <span
              className="text-sm font-bold tracking-[0.18em] uppercase"
              style={{ color: "var(--color-accent)" }}
            >
              Escolha como aprender
            </span>

            <h2
              id="learning-options-title"
              className="mt-4 text-3xl leading-tight font-bold tracking-tight sm:text-4xl lg:text-5xl"
              style={{ color: "var(--color-text-primary)" }}
            >
              Encontre a opção que combina com o seu momento
            </h2>

            <p
              className="mt-5 max-w-2xl text-base leading-7 sm:text-lg"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Do primeiro contato com a Libras ao desenvolvimento da
              conversação, existe uma forma de aprendizado preparada para você.
            </p>
          </div>

          <div
            className="inline-flex w-fit items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold"
            style={{
              borderColor: "var(--color-border)",
              backgroundColor: "var(--color-bg-card)",
              color: "var(--color-text-secondary)",
            }}
          >
            <Clock3
              aria-hidden="true"
              className="h-4 w-4"
              style={{ color: "var(--color-accent)" }}
            />

            Aprenda respeitando o seu ritmo
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-16">
          {learningOptions.map(
            ({ icon: Icon, title, description, features, label, href }) => (
              <article
                key={title}
                className="group flex h-full flex-col rounded-3xl border p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8"
                style={{
                  borderColor: "var(--color-border-light)",
                  backgroundColor: "var(--color-bg-card)",
                }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl"
                    style={{
                      backgroundColor:
                        "color-mix(in srgb, var(--color-accent-light) 32%, var(--color-bg-card))",
                      color: "var(--color-accent-hover)",
                    }}
                  >
                    <Icon aria-hidden="true" className="h-7 w-7" />
                  </div>

                  <span
                    className="rounded-full px-3 py-1 text-xs font-bold tracking-wide uppercase"
                    style={{
                      backgroundColor:
                        "color-mix(in srgb, var(--color-accent-light) 24%, var(--color-bg-card))",
                      color: "var(--color-accent-hover)",
                    }}
                  >
                    {label}
                  </span>
                </div>

                <h3
                  className="mt-6 text-2xl font-bold"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  {title}
                </h3>

                <p
                  className="mt-3 text-base leading-7"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {description}
                </p>

                <ul className="mt-6 space-y-3">
                  {features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-sm sm:text-base"
                      style={{ color: "var(--color-text-secondary)" }}
                    >
                      <span
                        aria-hidden="true"
                        className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
                        style={{
                          backgroundColor:
                            "color-mix(in srgb, var(--color-success) 14%, transparent)",
                          color: "var(--color-success)",
                        }}
                      >
                        <BookOpenCheck className="h-3.5 w-3.5" />
                      </span>

                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-8">
                  <a
                    href={href}
                    className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl px-5 font-semibold transition duration-200 hover:brightness-95 sm:w-auto"
                    style={{
                      backgroundColor: "var(--color-accent)",
                      color: "var(--color-text-light)",
                    }}
                  >
                    Conhecer esta opção
                    <ArrowRight aria-hidden="true" className="h-5 w-5" />
                  </a>
                </div>
              </article>
            ),
          )}
        </div>

        <div
          className="mt-10 flex flex-col items-center justify-between gap-5 rounded-3xl border p-6 text-center sm:p-8 lg:flex-row lg:text-left"
          style={{
            borderColor: "var(--color-border)",
            backgroundColor: "var(--color-bg-card)",
          }}
        >
          <div>
            <h3
              className="text-xl font-bold sm:text-2xl"
              style={{ color: "var(--color-text-primary)" }}
            >
              Está em dúvida sobre qual opção escolher?
            </h3>

            <p
              className="mt-2 text-sm leading-6 sm:text-base"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Fale com a Thaise para entender qual formato combina melhor com
              seus objetivos.
            </p>
          </div>

          <a
            href="#contato"
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-2xl px-6 font-semibold transition duration-200 hover:brightness-95"
            style={{
              backgroundColor: "var(--color-success)",
              color: "var(--color-text-light)",
            }}
          >
            Falar com a Thaise
            <ArrowRight aria-hidden="true" className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}