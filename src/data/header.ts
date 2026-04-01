import { Home, FolderHeart, Users, Image, Instagram, Mail } from 'lucide-astro'
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
    logoImage: "/images/logo.webp",
    logoAlt: 'Logo Amigos de Shimoni',
    logoHref: "/",
    ctaLabel: "Hacerse Socio",
    ctaHref: "/socio",
    navLinks: [
        { href: '/', label: 'Inicio', icon: Home },
        { href: '/nosotros', label: 'Sobre nosotros', icon: Users },
        { href: '/proyectos', label: 'Nuestros Proyectos', icon: FolderHeart },
        { href: '/galeria', label: 'Galeria', icon: Image },
    ],
    socialLinks: [
        { href: "https://www.instagram.com/_amigosdeshimoni_/", label: "Instagram", icon: Instagram },
        { href: "mailto:amigosdeshimoni@gmail.com", label: "Correo Electrónico", icon: Mail },
    ],
};

