import { Code2, User, Cpu, Rocket, Mail, Github, Linkedin } from "lucide-astro";
import type { LucideIcon } from "@/types/lucide";

export interface NavLink {
    href: string;
    label: string;
    icon?: LucideIcon;
}

export interface SocialLink {
    href: string;
    label: string;
    icon: LucideIcon;
}

export interface HeaderData {
    name?: string;
    role?: string;
    logoSymbol: LucideIcon;
    logoHref?: string;
    navLinks?: NavLink[];
    socialLinks?: SocialLink[];
    ctaLabel?: string;
    ctaHref?: string;
}

export const headerData: HeaderData = {
    name: "Alejandro González",
    role: "Desarrollador Web",
    logoSymbol: Code2,
    logoHref: "/",
    ctaLabel: "Descargar CV",
    ctaHref: "/docs/CV_Alejandro_Gonzalez.pdf",
    navLinks: [
        { href: "/#hero", label: "Sobre mí", icon: User },
        { href: "/#tech-stack", label: "Tecnologías", icon: Cpu },
        { href: "/#projects", label: "Proyectos", icon: Rocket },
        { href: "/#footer", label: "Contactame", icon: Mail },
    ],
    socialLinks: [
        { href: "https://github.com/AlejandroG20", label: "GitHub", icon: Github },
        { href: "https://www.linkedin.com/in/g2-alejandro/", label: "LinkedIn", icon: Linkedin },
    ],
};