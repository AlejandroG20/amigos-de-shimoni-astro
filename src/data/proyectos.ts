import { GraduationCap, School, BookOpen } from "lucide-astro";
import type { LucideIcon } from "@/types/lucide";

export interface Logro {
  icon: LucideIcon;
  value: string;
  label: string;
  description: string;
  color: "primary" | "secondary" | "tertiary";
}

export interface ProyectosData {
  hero: {
    badge: string;
    title: string;
    titleHighlight: string;
    description: string;
  };
  mision: {
    label: string;
    title: string;
    paragraphs: string[];
  };
  kenia: {
    label: string;
    title: string;
    paragraphs: string[];
  };
  logrosLabel: string;
  logrosTitle: string;
  logrosDescription: string;
  logros: Logro[];
}

export const proyectosData: ProyectosData = {
  hero: {
    badge: "Nuestros proyectos",
    title: "Educación que",
    titleHighlight: "cambia vidas",
    description:
      "Cada proyecto que impulsamos nace de una necesidad real y se traduce en oportunidades concretas para niñas y niños de Shimoni.",
  },
  mision: {
    label: "Nuestra misión",
    title: "Llevar educación a quienes más la necesitan",
    paragraphs: [
      "Trabajamos para que ningún niño ni niña en las zonas rurales de Kenia pierda su derecho a la educación.",
      "Apoyamos su escolarización y continuidad en los estudios, garantizando además una comida diaria en el colegio, como base para su bienestar y desarrollo.",
      "Colaboramos con escuelas comprometidas con el progreso de sus alumnas, donde el absentismo escolar durante el periodo menstrual sigue siendo un problema grave debido a la falta de recursos. Nuestro compromiso es romper estas barreras y asegurar que ninguna niña deje de aprender por motivos que deberían ser impensables.",
    ],
  },
  kenia: {
    label: "Por qué Kenia",
    title: "Shimoni: donde todo comenzó",
    paragraphs: [
      "Ayudo en Kenia porque allí sentí que mi ayuda podía marcar una diferencia real.",
      "Conocí escuelas donde los niños aprenden con una sonrisa, aunque falten casi todos los medios. Vi maestras entregadas, niñas que sueñan con estudiar y familias que luchan cada día por darles un futuro mejor.",
      "Kenia me tocó el corazón. No fue una elección racional, fue algo que simplemente sentí.",
      "Creo que la solidaridad no tiene fronteras: cuando ayudas a un niño a aprender, estés donde estés, estás ayudando a cambiar el mundo un poquito.",
    ],
  },
  logrosLabel: "Lo que hemos logrado",
  logrosTitle: "Nuestros logros",
  logrosDescription:
    "Desde que empezamos, cada pequeño paso ha dejado una huella real en la comunidad de Shimoni.",
  logros: [
    {
      icon: GraduationCap,
      value: "+14",
      label: "Niños escolarizados",
      description: "En enero de 2024, escolarizamos a los primeros 14 niños.",
      color: "primary",
    },
    {
      icon: BookOpen,
      value: "100%",
      label: "Uniforme y Material",
      description: "Se les entrega uniforme y material escolar.",
      color: "secondary",
    },
    {
      icon: School,
      value: "100%",
      label: "Comedor",
      description: "A cada uno de los niños escolarizados, les proporcionamos la comida en la escuela.",
      color: "tertiary",
    },
  ],
};
