export interface HeroData {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    ctaPrimary: { text: string; href: string };
    ctaSecondary: { text: string; href: string };
    image: { src: string; alt: string };
    trustCard: { title: string; subtitle: string };
}

export const heroData: HeroData = {
    badge: "Asociación sin ánimo de lucro",
    title: "Juntos por",
    titleHighlight: "Shimoni",
    subtitle:
        "Apoyamos a las comunidades costeras de Shimoni, Kenia, con proyectos de educación, salud y desarrollo sostenible. Cada aportación cambia vidas reales.",
    ctaPrimary: { text: "Hazte socio", href: "#socio" },
    ctaSecondary: { text: "Donar ahora", href: "#donar" },
    image: {
        src: "/images/hero.webp",
        alt: "Niños y voluntarios en Shimoni, Kenia",
    },
    trustCard: {
        title: "Forma parte del cambio",
        subtitle: "Tu participación marca la diferencia",
    },
};