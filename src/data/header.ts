// src/data/header.ts
import { Heart, Home, FolderHeart, Users, Mail, Instagram, } from 'lucide-astro'
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
    logoImage?: string;
    logoAlt?: string;
    logoHref?: string;
    navLinks?: NavLink[];
    socialLinks?: SocialLink[];
    ctaLabel?: string;
    ctaHref?: string;
}

export const headerData: HeaderData = {
    name: "Amigos de Shimoni",
    logoImage: "/images/logo.png",
    logoAlt: 'Logo Amigos de Shimoni',
    logoHref: "/",
    ctaLabel: "Descargar CV",
    ctaHref: "/docs/CV_Alejandro_Gonzalez.pdf",
    navLinks: [
        { href: '/', label: 'Inicio', icon: Home },
        { href: '/#proyectos', label: 'Proyectos', icon: FolderHeart },
        { href: '/#nosotros', label: 'Sobre nosotros', icon: Users },
        { href: '/#contacto', label: 'Contacto', icon: Mail },
    ],
    socialLinks: [
        { href: "https://github.com/AlejandroG20", label: "Instagram", icon: Instagram },
        { href: "https://www.linkedin.com/in/g2-alejandro/", label: "LinkedIn", icon: Heart },
    ],
};

