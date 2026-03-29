interface SiteData {
  name: string
  tagline: string
  description: string
  email: string
  url: string
  logo: string
  social: {
    instagram: string
    facebook: string
  }
  legal: {
    denominacion: string
    cif: string
    domicilio: string
    registro: string
    responsable: string
  }
}

export const site: SiteData = {
  name: "Amigos de Shimoni",
  tagline: "Apoyando a la comunidad de Shimoni, Kenia",
  description: "Asociación sin ánimo de lucro que trabaja para mejorar la vida de las familias de la costa de Kenia a través de proyectos de educación, sanidad y sostenibilidad.",
  email: "amigosdeshimoni@gmail.com",
  url: "https://www.amigosdeshimoni.com",
  logo: "/images/logo.png",
  social: {
    instagram: "https://instagram.com/amigosdeshimoni",
    facebook: "https://facebook.com/amigosdeshimoni",
  },
  legal: {
    denominacion: "Asociación Amigos de Shimoni",
    cif: "GXXXXXXXX",
    domicilio: "Calle Ejemplo, 1, 06400 Don Benito, Badajoz",
    registro: "Registro de Asociaciones de Extremadura, nº XXXXX",
    responsable: "Nombre del Responsable",
  },
}