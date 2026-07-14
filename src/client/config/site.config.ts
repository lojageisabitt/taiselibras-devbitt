// src/client/config/site.config.ts
// ⚠️ PREENCHA ESSES DADOS PARA CADA CLIENTE

export const siteConfig = {
  nome: "Nome do Negócio",

  // Logo
  logoHorizontal: "/logo-horizontal.png",
  logoVertical: "/logo-vertical.png",
  logoAlt: "Logo do negócio",

  // WhatsApp
  whatsapp: "5521999999999",
  whatsappDisplay: "(21) 99999-9999",
  whatsappMensagem: "Olá! Vim pelo site e gostaria de mais informações.",
  email: "contato@thaiselibras.com.br",

  // Header
  headerCta: "Fale conosco",

  // Redes sociais
  instagram: "@instagram",
  facebook: "",
  tiktok: "",

  cidade: "Cidade, Estado",

  // Navegação desktop
  navLinks: [
  { label: "Início", href: "#inicio" },
  { label: "Cursos", href: "#cursos" },
  { label: "Aulas", href: "#aulas" },
  { label: "Interpretação", href: "#interpretacao" },
  { label: "Sobre", href: "#sobre" },
  ],

  // Navegação mobile
  mobileNavLinks: [
  { label: "Início", href: "#inicio" },
  { label: "Cursos", href: "#cursos" },
  { label: "Aulas", href: "#aulas" },
  { label: "Interpretação", href: "#interpretacao" },
  { label: "Sobre", href: "#sobre" },
  ],

  // Footer — benefícios
  benefits: [
    { title: "Benefício 1", description: "Descrição do benefício" },
    { title: "Benefício 2", description: "Descrição do benefício" },
    { title: "Benefício 3", description: "Descrição do benefício" },
  ],

  // Footer — links
  footerNavLinks: [
    { label: "Início",  href: "#inicio" },
    { label: "Sobre",   href: "#sobre" },
    { label: "Contato", href: "#contato" },
  ],

  footerDescription: "Descrição do seu negócio aqui.",
  copyrightTagline: "",

    seo: {
titulo: "Thaís Libras | Cursos de Libras Online, Aulas e Interpretação",
    descricao:
  "Aprenda Libras com cursos online, turmas ao vivo e aulas particulares. Conheça também os serviços de interpretação em Libras da professora Thaís.",

    url: "https://www.seudominio.com.br",
    ogImage: "/og-image.png",        // ← adicionar
keywords: [
  "curso de Libras",
  "curso de Libras online",
  "aula particular de Libras",
  "professora de Libras",
  "intérprete de Libras",
  "aprender Libras",
]
    },

  // ─── TEMA VISUAL ────────────────────────────────────────
 theme: {
  bgPrimary:       "#FFF9F5",
  bgSecondary:     "#FDF1EA",
  bgTertiary:      "#F7E3DA",
  bgCard:          "#FFFFFF",
  bgHover:         "#F4D7CC",
  overlay:         "#2E1A16",

  textPrimary:     "#2E1A16",
  textSecondary:   "#5A3831",
  textTertiary:    "#76554D",
  textMuted:       "#8E6F68",
  textLight:       "#FFFFFF",
  textHeroMuted:   "#F6E7E1",

  accent:          "#C86650",
  accentHover:     "#A94F3B",
  accentLight:     "#E8A99A",

  error:           "#C0392B",
  success:         "#3F7D58",
  info:            "#A85D78",

  border:          "#E4C4BA",
  borderLight:     "#F1DDD6",

  adminBg:         "#2E1A16",
  adminText:       "#FFF9F5",
  adminBorder:     "#5A3831",
},

}