import {
  ArrowUpRight,
  BookOpen,
  Hand,
  Instagram,
  MessageSquareText,
  PlayCircle,
  Sparkles,
  Youtube,
} from "lucide-react";

const contentTypes = [
  {
    icon: Hand,
    title: "Sinais e vocabulário",
    description:
      "Aprenda sinais úteis para situações comuns e amplie seu vocabulário em Libras.",
  },
  {
    icon: MessageSquareText,
    title: "Comunicação na prática",
    description:
      "Entenda como usar os sinais em contextos reais e desenvolver conversas mais naturais.",
  },
  {
    icon: BookOpen,
    title: "Dicas de aprendizado",
    description:
      "Conteúdos para ajudar você a estudar melhor, praticar e continuar evoluindo.",
  },
];

const socialChannels = [
  {
    icon: Instagram,
    name: "Instagram",
    username: "@thaiselibras",
    description:
      "Vídeos curtos, sinais, expressões e conteúdos para aprender Libras todos os dias.",
    href: "https://www.instagram.com/thaiselibras/",
    buttonLabel: "Seguir no Instagram",
  },
  {
    icon: Youtube,
    name: "YouTube",
    username: "Thaise Libras",
    description:
      "Aulas e conteúdos mais completos para aprofundar seus conhecimentos em Libras.",
    href: "https://www.youtube.com/@thais.libras",
    buttonLabel: "Assistir no YouTube",
  },
];

export default function FreeContent() {
  return (
    <section
      id="conteudos"
      aria-labelledby="free-content-title"
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24"
      style={{ backgroundColor: "var(--color-bg-secondary)" }}
    >
      <div
        aria-hidden="true"
        className="absolute -right-32 bottom-0 h-80 w-80 rounded-full blur-3xl"
        style={{
          backgroundColor:
            "color-mix(in srgb, var(--color-accent-light) 22%, transparent)",
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
            <Sparkles aria-hidden="true" className="h-4 w-4" />

            Aprenda também gratuitamente
          </div>

          <h2
            id="free-content-title"
            className="mt-5 text-3xl leading-tight font-bold tracking-tight sm:text-4xl lg:text-5xl"
            style={{ color: "var(--color-text-primary)" }}
          >
            Conteúdos de Libras para aprender um pouco todos os dias
          </h2>

          <p
            className="mt-5 text-base leading-7 sm:text-lg"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Acompanhe a Thaise nas redes sociais e tenha acesso a sinais,
            expressões, explicações e dicas práticas para continuar evoluindo.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3 lg:mt-16">
          {contentTypes.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="rounded-3xl border p-6"
              style={{
                borderColor: "var(--color-border-light)",
                backgroundColor: "var(--color-bg-card)",
              }}
            >
              <div
                className="flex h-13 w-13 items-center justify-center rounded-2xl"
                style={{
                  backgroundColor:
                    "color-mix(in srgb, var(--color-accent-light) 30%, var(--color-bg-card))",
                  color: "var(--color-accent-hover)",
                }}
              >
                <Icon aria-hidden="true" className="h-6 w-6" />
              </div>

              <h3
                className="mt-5 text-xl font-bold"
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

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {socialChannels.map(
            ({
              icon: Icon,
              name,
              username,
              description,
              href,
              buttonLabel,
            }) => (
              <article
                key={name}
                className="group relative overflow-hidden rounded-[2rem] border p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8"
                style={{
                  borderColor: "var(--color-border-light)",
                  backgroundColor: "var(--color-bg-card)",
                }}
              >
                <div
                  aria-hidden="true"
                  className="absolute -right-12 -top-12 h-36 w-36 rounded-full"
                  style={{
                    backgroundColor:
                      "color-mix(in srgb, var(--color-accent-light) 20%, transparent)",
                  }}
                />

                <div className="relative">
                  <div className="flex items-start justify-between gap-5">
                    <div
                      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl"
                      style={{
                        backgroundColor:
                          "color-mix(in srgb, var(--color-accent-light) 34%, var(--color-bg-card))",
                        color: "var(--color-accent-hover)",
                      }}
                    >
                      <Icon aria-hidden="true" className="h-7 w-7" />
                    </div>

                    <PlayCircle
                      aria-hidden="true"
                      className="h-8 w-8 opacity-40 transition duration-300 group-hover:scale-110 group-hover:opacity-100"
                      style={{ color: "var(--color-accent)" }}
                    />
                  </div>

                  <p
                    className="mt-6 text-sm font-bold tracking-[0.14em] uppercase"
                    style={{ color: "var(--color-accent)" }}
                  >
                    {name}
                  </p>

                  <h3
                    className="mt-2 text-2xl font-bold"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    {username}
                  </h3>

                  <p
                    className="mt-3 max-w-xl text-base leading-7"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {description}
                  </p>

                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl px-6 font-semibold transition duration-200 hover:brightness-95"
                    style={{
                      backgroundColor: "var(--color-accent)",
                      color: "var(--color-text-light)",
                    }}
                  >
                    {buttonLabel}

                    <ArrowUpRight
                      aria-hidden="true"
                      className="h-5 w-5"
                    />
                  </a>
                </div>
              </article>
            ),
          )}
        </div>

        <div
          className="mt-8 flex flex-col items-center justify-between gap-5 rounded-[2rem] border p-6 text-center sm:p-8 lg:flex-row lg:text-left"
          style={{
            borderColor: "var(--color-border)",
            backgroundColor: "var(--color-bg-primary)",
          }}
        >
          <div>
            <h3
              className="text-xl font-bold sm:text-2xl"
              style={{ color: "var(--color-text-primary)" }}
            >
              Gostou dos conteúdos e quer aprender com acompanhamento?
            </h3>

            <p
              className="mt-2 text-sm leading-6 sm:text-base"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Conheça os cursos e escolha a melhor forma de começar ou continuar
              seus estudos em Libras.
            </p>
          </div>

          <a
            href="#cursos"
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-2xl px-6 font-semibold transition duration-200 hover:brightness-95"
            style={{
              backgroundColor: "var(--color-accent)",
              color: "var(--color-text-light)",
            }}
          >
            Conhecer os cursos

            <ArrowUpRight aria-hidden="true" className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}