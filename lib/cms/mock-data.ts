import type { Banner, Brand, CatalogSection, EditorialGuide, Product } from "@/lib/cms/types";

export const brands: Brand[] = [
  {
    id: "afnan",
    slug: "afnan",
    name: "Afnan",
    origin: "EAU",
    description:
      "Fragancias de gran presencia, perfumeria moderna y perfiles que suelen destacar por rendimiento y estela.",
  },
  {
    id: "lattafa",
    slug: "lattafa",
    name: "Lattafa",
    origin: "EAU",
    description:
      "Una de las casas mas relevantes del universo arabe accesible, con propuestas dulces, ambaradas, especiadas y versatiles.",
  },
  {
    id: "rasasi",
    slug: "rasasi",
    name: "Rasasi",
    origin: "EAU",
    description:
      "Linea con historia, acabados mas refinados y perfumes que equilibran elegancia, identidad y firma aromatica.",
  },
];

export const products: Product[] = [
  {
    id: "9pm",
    slug: "afnan-9pm",
    name: "9PM",
    brand: brands[0],
    shortDescription:
      "Dulce, vibrante y nocturno. Una opcion de alto impacto para quien busca presencia desde la primera salida.",
    story:
      "9PM es una fragancia pensada para destacar en salidas nocturnas, clima fresco y escenarios donde la proyeccion y el dulzor controlado juegan a favor.",
    productType: "Perfume",
    family: "Dulce especiado",
    occasions: ["Noche", "Citas", "Eventos"],
    topNotes: ["Manzana", "Canela", "Bergamota"],
    heartNotes: ["Flor de azahar", "Lavanda"],
    baseNotes: ["Vainilla", "Haba tonka", "Pachuli"],
    performance: {
      duration: "Alta duracion",
      projection: "Proyeccion marcada",
    },
    priceFromLabel: "S/ 145",
    presentations: [
      { label: "Perfume completo", value: "100 ml", priceLabel: "S/ 145" },
      { label: "Decant", value: "5 ml", priceLabel: "S/ 18" },
    ],
    accentGradient: "linear-gradient(135deg, #7d4c2c 0%, #1f1714 100%)",
    featured: true,
  },
  {
    id: "khamrah",
    slug: "lattafa-khamrah",
    name: "Khamrah",
    brand: brands[1],
    shortDescription:
      "Un perfil gourmand ambarado con aura opulenta. Ideal para quien quiere una experiencia sensorial envolvente.",
    story:
      "Khamrah funciona muy bien como fragancia de firma para clima fresco o noche, con un perfil dulce especiado y un fondo cremoso de gran recordacion.",
    productType: "Perfume",
    family: "Ambar gourmand",
    occasions: ["Noche", "Clima fresco", "Regalo"],
    topNotes: ["Canela", "Nuez moscada", "Bergamota"],
    heartNotes: ["Datin", "Praline", "Tuberosa"],
    baseNotes: ["Vainilla", "Ambar", "Madera de akigala"],
    performance: {
      duration: "Muy alta duracion",
      projection: "Estela amplia",
    },
    priceFromLabel: "S/ 179",
    presentations: [
      { label: "Perfume completo", value: "100 ml", priceLabel: "S/ 179" },
      { label: "Decant", value: "10 ml", priceLabel: "S/ 30" },
    ],
    accentGradient: "linear-gradient(135deg, #a87443 0%, #3d2618 100%)",
    featured: true,
  },
  {
    id: "hawas",
    slug: "rasasi-hawas",
    name: "Hawas",
    brand: brands[2],
    shortDescription:
      "Fresco, acuatico y magnetico. Una puerta de entrada ideal para quien busca versatilidad con personalidad.",
    story:
      "Hawas se mueve muy bien entre uso diario, climas calidos y escenarios sociales, manteniendo un perfil limpio con giro seductor.",
    productType: "Perfume",
    family: "Acuatico aromatico",
    occasions: ["Diario", "Clima calido", "Oficina"],
    topNotes: ["Bergamota", "Limon", "Manzana"],
    heartNotes: ["Canela", "Notas acuaticas", "Ciruela"],
    baseNotes: ["Ambar gris", "Almizcle", "Maderas"],
    performance: {
      duration: "Duracion media alta",
      projection: "Proyeccion versatil",
    },
    priceFromLabel: "S/ 198",
    presentations: [
      { label: "Perfume completo", value: "100 ml", priceLabel: "S/ 198" },
      { label: "Decant", value: "5 ml", priceLabel: "S/ 22" },
    ],
    accentGradient: "linear-gradient(135deg, #66705a 0%, #243139 100%)",
    featured: true,
  },
  {
    id: "discovery-set",
    slug: "jr-discovery-set",
    name: "Discovery Set",
    brand: brands[1],
    shortDescription:
      "Una seleccion de decants para descubrir tres perfiles distintos antes de comprar botella completa.",
    story:
      "La opcion ideal para nuevos clientes o para quienes quieren explorar sin comprometerse de inmediato con una presentacion completa.",
    productType: "Decant",
    family: "Seleccion curada",
    occasions: ["Descubrimiento", "Regalo", "Comparacion"],
    topNotes: ["Seleccion variable"],
    heartNotes: ["Seleccion variable"],
    baseNotes: ["Seleccion variable"],
    performance: {
      duration: "Variable por fragancia",
      projection: "Variable por fragancia",
    },
    priceFromLabel: "S/ 45",
    presentations: [
      { label: "Set de decants", value: "3 x 5 ml", priceLabel: "S/ 45" },
    ],
    accentGradient: "linear-gradient(135deg, #d8c2a0 0%, #7f5c39 100%)",
  },
];

export const catalogSections: CatalogSection[] = [
  {
    id: "impacto",
    title: "Fragancias de impacto",
    description: "Perfiles intensos, presencia marcada y mejor desempeno en noche o eventos.",
  },
  {
    id: "diario",
    title: "Selecciones de uso diario",
    description: "Opciones versatiles para oficina, reuniones o clima calido con excelente balance.",
  },
  {
    id: "decants",
    title: "Decants para descubrir",
    description: "Formatos ideales para probar antes de invertir en botella completa.",
  },
];

export const banners: Banner[] = [
  {
    id: "home-banner-1",
    title: "Encuentra una fragancia que vaya contigo.",
    subtitle:
      "Perfumes completos y decants para probar con calma, elegir mejor y sentirte seguro con lo que llevas.",
    ctaLabel: "Ver perfumes disponibles",
    ctaHref: "/catalogo",
    priority: 1,
  },
];

export const editorialGuides: EditorialGuide[] = [
  {
    id: "guia-primer-perfume-arabe",
    title: "Como elegir tu primer perfume arabe",
    slug: "como-elegir-tu-primer-perfume-arabe",
    excerpt:
      "Una guia simple para empezar segun tu estilo, el tipo de presencia que buscas y el momento en que vas a usar tu fragancia.",
    content: [
      {
        _key: "intro",
        children: [
          {
            _key: "intro-text",
            text: "Si recien estas empezando, conviene mirar tres cosas: cuanto dura, en que ocasiones la usaras y si prefieres algo fresco, dulce o mas intenso.",
          },
        ],
      },
      {
        _key: "tip-1",
        children: [
          {
            _key: "tip-1-text",
            text: "Los decants son la forma mas facil de probar antes de comprar el frasco completo. Asi puedes usar la fragancia varios dias y decidir con mas seguridad.",
          },
        ],
      },
    ],
  },
  {
    id: "guia-decants",
    title: "Que es un decant y por que conviene",
    slug: "que-es-un-decant-y-por-que-conviene",
    excerpt:
      "Conoce por que los decants te ayudan a ahorrar, comparar fragancias y comprar con mas confianza.",
    content: [
      {
        _key: "content-1",
        children: [
          {
            _key: "content-1-text",
            text: "Un decant es una porcion del perfume original en un formato pequeno. Sirve para probar, llevar contigo o descubrir si de verdad quieres invertir en el frasco completo.",
          },
        ],
      },
    ],
  },
];