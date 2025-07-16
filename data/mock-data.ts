import { type LucideIcon, Code, Layout, Zap, Shield, BarChart, Globe } from "lucide-react"

interface Service {
  id: string
  title: string
  description: string
  icon: LucideIcon
}

interface Project {
  id: string
  name: string
  description: string
  image: string
  link: string
}

interface Testimonial {
  id: string
  name: string
  title: string
  quote: string
  image: string
}

interface Stat {
  id: string
  value: number
  label: string
  suffix: string
}

export const servicesData: Service[] = [
  {
    id: "software-development",
    title: "Desenvolvimento de Software",
    description: "Criamos soluções de software personalizadas e escaláveis para impulsionar o seu negócio.",
    icon: Code,
  },
  {
    id: "digital-transformation",
    title: "Transformação Digital",
    description: "Ajudamos empresas a modernizar operações e adotar tecnologias digitais para maior eficiência.",
    icon: Zap,
  },
  {
    id: "it-consulting",
    title: "Consultoria em TI",
    description: "Oferecemos aconselhamento estratégico para otimizar sua infraestrutura e processos de TI.",
    icon: Layout,
  },
  {
    id: "cybersecurity",
    title: "Cibersegurança",
    description: "Protegemos seus dados e sistemas contra ameaças cibernéticas com soluções robustas.",
    icon: Shield,
  },
  {
    id: "data-analytics",
    title: "Análise de Dados",
    description: "Transformamos dados brutos em insights acionáveis para decisões de negócio inteligentes.",
    icon: BarChart,
  },
  {
    id: "web-solutions",
    title: "Soluções Web",
    description: "Desenvolvemos websites e aplicações web modernas, responsivas e de alta performance.",
    icon: Globe,
  },
]

export const projectsData: Project[] = [
  {
    id: "project-1",
    name: "Plataforma de Gestão Educacional",
    description: "Sistema completo para administração escolar, matrículas e acompanhamento de alunos.",
    image: "/placeholder.png?height=400&width=600",
    link: "#",
  },
  {
    id: "project-2",
    name: "E-commerce Personalizado",
    description: "Loja online robusta com funcionalidades avançadas e integração de pagamentos.",
    image: "/placeholder.png?height=400&width=600",
    link: "#",
  },
  {
    id: "project-3",
    name: "Aplicativo de Saúde Móvel",
    description: "App para monitoramento de saúde e agendamento de consultas médicas.",
    image: "/placeholder.png?height=400&width=600",
    link: "#",
  },
  {
    id: "project-4",
    name: "Sistema de Gestão Financeira",
    description: "Software para controle de despesas, receitas e relatórios financeiros.",
    image: "/placeholder.png?height=400&width=600",
    link: "#",
  },
]

export const testimonialsData: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "Ana Silva",
    title: "CEO, Startup Inovadora",
    quote:
      "A MozTech Solutions superou nossas expectativas. O software desenvolvido é intuitivo e transformou nossa operação.",
    image: "/placeholder-user.png",
  },
  {
    id: "testimonial-2",
    name: "Carlos Mendes",
    title: "Diretor de TI, Grande Empresa",
    quote:
      "A consultoria em TI da MozTech Solutions foi fundamental para otimizar nossa infraestrutura e garantir a segurança dos nossos dados.",
    image: "/placeholder-user.png",
  },
  {
    id: "testimonial-3",
    name: "Sofia Costa",
    title: "Empreendedora",
    quote:
      "Graças à MozTech Solutions, meu e-commerce está mais rápido e com uma experiência de usuário incrível. Recomendo!",
    image: "/placeholder-user.png",
  },
]

export const statsData: Stat[] = [
  { id: "clients", value: 50, label: "Clientes Satisfeitos", suffix: "+" },
  { id: "projects", value: 100, label: "Projetos Concluídos", suffix: "+" },
  { id: "experience", value: 10, label: "Anos de Experiência", suffix: "+" },
  { id: "awards", value: 5, label: "Prémios Ganhos", suffix: "+" },
]
