import { Heart, Users, BookOpen, Leaf } from "lucide-astro";
import type { LucideIcon } from "@/types/lucide";

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  initials: string;
}

export interface Value {
  icon: LucideIcon;
  title: string;
  description: string;
  color: "primary" | "secondary" | "tertiary";
}

export interface Stat {
  value: string;
  label: string;
}

export interface NosotrosData {
  hero: {
    badge: string;
    title: string;
    titleHighlight: string;
    description: string;
  };
  historia: {
    label: string;
    title: string;
    paragraphs: string[];
  };
  stats: Stat[];
  valuesLabel: string;
  valuesTitle: string;
  values: Value[];
  teamLabel: string;
  teamTitle: string;
  teamDescription: string;
  team: TeamMember[];
}

export const nosotrosData: NosotrosData = {
  hero: {
    badge: "Nuestra historia",
    title: "Nacimos de un viaje,",
    titleHighlight: "crecimos con un propósito",
    description:
      "La Asociación Amigos de Shimoni nace a finales del 2023. Tras un viaje a Kenia, volvimos con el firme propósito de ayudar a escolarizar al mayor número de niños posible, procedentes de familias desfavorecidas.",
  },
  historia: {
    label: "Quiénes somos",
    title: "Un sueño compartido entre dos mundos",
    paragraphs: [
      "Somos Ofelia y Samson, y compartimos un sueño que nos une: que cada niño y niña en las zonas rurales de Kenia pueda ir a la escuela, aprender y soñar con un futuro mejor.",
      "Samson conoce de primera mano la vida en estas comunidades; nació y creció allí, y sabe lo que significa enfrentarse a la falta de recursos y oportunidades. Yo, Ofelia, aporto mi experiencia profesional y mi compromiso con la igualdad, pero lo más importante es que juntos creemos que cada pequeño gesto puede cambiar una vida.",
      "Nuestra Asociación no sería lo que es sin todas las personas que nos acompañan en este camino: quienes donan, quienes dedican su tiempo, quienes nos animan y empujan a seguir adelante. Cada uno de ellos forma parte de este proyecto y del futuro de los niños y niñas a los que ayudamos.",
      "Creemos que la educación es mucho más que libros y clases; es una oportunidad para crecer, para soñar y para romper ciclos de desigualdad. Y trabajamos cada día con la esperanza de que, con un poco de ayuda, esos sueños puedan hacerse realidad.",
    ],
  },
  stats: [
    { value: "100%", label: "Donaciones directas a proyectos" },
    { value: "0€", label: "Gastos de gestión" },
    { value: "2", label: "Países conectados" },
    { value: "∞", label: "Ganas de cambiar el mundo" },
  ],
  valuesLabel: "Lo que nos mueve",
  valuesTitle: "Nuestros valores",
  values: [
    {
      icon: Heart,
      title: "Compromiso",
      description: "Trabajamos con el corazón por el bienestar de las familias de Shimoni, Kenia.",
      color: "primary",
    },
    {
      icon: Users,
      title: "Comunidad",
      description: "Creemos en el poder de las personas unidas para generar cambios duraderos.",
      color: "secondary",
    },
    {
      icon: BookOpen,
      title: "Educación",
      description: "La educación es la herramienta más poderosa para transformar vidas.",
      color: "tertiary",
    },
    {
      icon: Leaf,
      title: "Sostenibilidad",
      description: "Nuestros proyectos respetan el entorno y garantizan el futuro de la comunidad.",
      color: "tertiary",
    },
  ],
  teamLabel: "Las personas detrás",
  teamTitle: "Nuestro equipo directivo",
  teamDescription:
    "Voluntarios comprometidos que dedican su tiempo y energía para que cada proyecto llegue a buen puerto.",
  team: [
    {
      name: "Ofelia Arias",
      role: "Socia Fundadora",
      bio: "Fundadora de la asociación y responsable de la coordinación general de proyectos en Shimoni.",
      image: "/images/team/ofelia.webp",
      initials: "OA",
    },
    {
      name: "Samson Mwachibua",
      role: "Project Manager",
      bio: "Gestiona los proyectos sobre el terreno en Shimoni, asegurando que cada iniciativa llegue a las familias que más lo necesitan.",
      image: "/images/team/samson.webp",
      initials: "SN",
    },
  ],
};
