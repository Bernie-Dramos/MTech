"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "pt"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  en: {
    // Navigation
    home: "Home",
    about: "About",
    services: "Services",
    projects: "Projects",
    contact: "Contact",

    // Hero Section
    heroTitle: "Innovative Technology Solutions",
    heroSubtitle: "Empowering businesses in Mozambique with cutting-edge technology",
    heroDescription:
      "We deliver world-class web development, mobile applications, and AI solutions to drive your digital transformation.",
    getStarted: "Get Started",
    learnMore: "Learn More",

    // About Section
    aboutTitle: "About MozTech Solutions",
    aboutDescription:
      "Leading technology company in Mozambique, dedicated to providing innovative solutions that transform businesses and communities.",

    // Services
    servicesTitle: "Our Services",
    webDevelopment: "Web Development",
    webDevDescription: "Custom websites and web applications built with modern technologies",
    mobileDevelopment: "Mobile Development",
    mobileDevDescription: "Native and cross-platform mobile applications for iOS and Android",
    aiSolutions: "AI Solutions",
    aiDescription: "Artificial intelligence and machine learning solutions for business automation",

    // Stats
    projectsCompleted: "Projects Completed",
    clientsSatisfied: "Clients Satisfied",
    yearsExperience: "Years Experience",
    teamMembers: "Team Members",

    // Contact
    contactTitle: "Get In Touch",
    contactDescription: "Ready to start your next project? Contact us today.",
    name: "Name",
    email: "Email",
    message: "Message",
    sendMessage: "Send Message",
    submitting: "Submitting...",

    // Footer
    footerDescription: "Leading technology solutions in Mozambique",
    quickLinks: "Quick Links",
    followUs: "Follow Us",
    allRightsReserved: "All rights reserved",
  },
  pt: {
    // Navigation
    home: "Início",
    about: "Sobre",
    services: "Serviços",
    projects: "Projetos",
    contact: "Contacto",

    // Hero Section
    heroTitle: "Soluções Tecnológicas Inovadoras",
    heroSubtitle: "Capacitando empresas em Moçambique com tecnologia de ponta",
    heroDescription:
      "Oferecemos desenvolvimento web de classe mundial, aplicações móveis e soluções de IA para impulsionar a sua transformação digital.",
    getStarted: "Começar",
    learnMore: "Saber Mais",

    // About Section
    aboutTitle: "Sobre a MozTech Solutions",
    aboutDescription:
      "Empresa líder em tecnologia em Moçambique, dedicada a fornecer soluções inovadoras que transformam empresas e comunidades.",

    // Services
    servicesTitle: "Nossos Serviços",
    webDevelopment: "Desenvolvimento Web",
    webDevDescription: "Sites personalizados e aplicações web construídas com tecnologias modernas",
    mobileDevelopment: "Desenvolvimento Móvel",
    mobileDevDescription: "Aplicações móveis nativas e multiplataforma para iOS e Android",
    aiSolutions: "Soluções de IA",
    aiDescription: "Soluções de inteligência artificial e aprendizado automático para automação empresarial",

    // Stats
    projectsCompleted: "Projetos Concluídos",
    clientsSatisfied: "Clientes Satisfeitos",
    yearsExperience: "Anos de Experiência",
    teamMembers: "Membros da Equipe",

    // Contact
    contactTitle: "Entre em Contacto",
    contactDescription: "Pronto para começar o seu próximo projeto? Contacte-nos hoje.",
    name: "Nome",
    email: "Email",
    message: "Mensagem",
    sendMessage: "Enviar Mensagem",
    submitting: "Enviando...",

    // Footer
    footerDescription: "Soluções tecnológicas líderes em Moçambique",
    quickLinks: "Links Rápidos",
    followUs: "Siga-nos",
    allRightsReserved: "Todos os direitos reservados",
  },
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
