// src/data/nosotros.ts

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  initials: string;
}

export interface Value {
  icon: "Heart" | "Users" | "BookOpen" | "Leaf";
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
  cta: {
    title: string;
    description: string;
    buttonText: string;
    href: string;
  };
}

export const nosotrosData: NosotrosData = {
  hero: {
    badge: "Quiénes somos",
    title: "Personas que creen en",
    titleHighlight: "el cambio",
    description:
      "Somos una asociación sin ánimo de lucro formada por voluntarios que trabajamos para mejorar la vida de las familias de la costa de Kenia a través de proyectos de educación, sanidad y sostenibilidad.",
  },
  historia: {
    label: "Nuestra historia",
    title: "Nacimos de la necesidad de tender un puente",
    paragraphs: [
      "Amigos de Shimoni nació en 2015 cuando un grupo de amigos visitó la pequeña aldea costera de Shimoni, en el sur de Kenia, y quedaron impactados por la realidad de sus familias.",
      "Lo que comenzó como una iniciativa personal se convirtió en una asociación registrada con proyectos sostenibles de largo alcance: becas educativas, pozos de agua potable, consultorios médicos y huertos comunitarios.",
      "Hoy somos más de 50 socios y colaboradores que, desde Extremadura, hacemos posible que cada euro donado llegue directamente a quien más lo necesita.",
    ],
  },
  stats: [
    { value: "+3", label: "Años activos" },
    { value: "50+", label: "Voluntarios" },
    { value: "2+", label: "Familias beneficiadas" },
    { value: "15+", label: "Proyectos completados" },
  ],
  valuesLabel: "Lo que nos mueve",
  valuesTitle: "Nuestros valores",
  values: [
    {
      icon: "Heart",
      title: "Compromiso",
      description: "Trabajamos con el corazón por el bienestar de las familias de Shimoni, Kenia.",
      color: "primary",
    },
    {
      icon: "Users",
      title: "Comunidad",
      description: "Creemos en el poder de las personas unidas para generar cambios duraderos.",
      color: "secondary",
    },
    {
      icon: "BookOpen",
      title: "Educación",
      description: "La educación es la herramienta más poderosa para transformar vidas.",
      color: "tertiary",
    },
    {
      icon: "Leaf",
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
  cta: {
    title: "¿Quieres unirte al equipo?",
    description:
      "Buscamos voluntarios apasionados que quieran marcar la diferencia. Escríbenos y cuéntanos cómo puedes aportar.",
    buttonText: "Quiero colaborar",
    href: "mailto:amigosdeshimoni@gmail.com",
  },
};
