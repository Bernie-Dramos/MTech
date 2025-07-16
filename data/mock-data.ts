export const projects = [
  {
    id: 1,
    title: {
      pt: "Sistema de Gestão Escolar",
      en: "School Management System",
    },
    description: {
      pt: "Plataforma completa para gestão de escolas primárias e secundárias em Maputo.",
      en: "Complete platform for managing primary and secondary schools in Maputo.",
    },
    fullDescription: {
      pt: "Desenvolvemos um sistema completo de gestão escolar que digitaliza todos os processos administrativos e pedagógicos das escolas. O sistema inclui gestão de alunos, professores, notas, horários, comunicação com pais e relatórios detalhados.",
      en: "We developed a complete school management system that digitalizes all administrative and pedagogical processes in schools. The system includes student management, teachers, grades, schedules, parent communication, and detailed reports.",
    },
    client: {
      pt: "Ministério da Educação",
      en: "Ministry of Education",
    },
    category: "software",
    image: "/placeholder.svg?height=250&width=400",
    technologies: ["React", "Node.js", "PostgreSQL", "TypeScript"],
    impact: {
      pt: "Beneficiou mais de 50 escolas e 15.000 estudantes em Maputo, reduzindo o tempo de gestão administrativa em 60%.",
      en: "Benefited over 50 schools and 15,000 students in Maputo, reducing administrative management time by 60%.",
    },
  },
  {
    id: 2,
    title: {
      pt: "Programa de Formação em Desenvolvimento Web",
      en: "Web Development Training Program",
    },
    description: {
      pt: "Curso intensivo de 6 meses para formar desenvolvedores web em tecnologias modernas.",
      en: "Intensive 6-month course to train web developers in modern technologies.",
    },
    fullDescription: {
      pt: "Programa abrangente de formação que capacita jovens moçambicanos em desenvolvimento web moderno. O curso cobre HTML, CSS, JavaScript, React, Node.js e práticas de desenvolvimento profissional.",
      en: "Comprehensive training program that empowers young Mozambicans in modern web development. The course covers HTML, CSS, JavaScript, React, Node.js, and professional development practices.",
    },
    client: {
      pt: "Universidade Eduardo Mondlane",
      en: "Eduardo Mondlane University",
    },
    category: "training",
    image: "/placeholder.svg?height=250&width=400",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
    impact: {
      pt: "Formou 120 desenvolvedores, com 85% de taxa de empregabilidade no setor tecnológico.",
      en: "Trained 120 developers, with 85% employment rate in the technology sector.",
    },
  },
  {
    id: 3,
    title: {
      pt: "Plataforma de E-commerce Nacional",
      en: "National E-commerce Platform",
    },
    description: {
      pt: "Marketplace online para conectar vendedores locais com consumidores em todo o país.",
      en: "Online marketplace to connect local sellers with consumers across the country.",
    },
    fullDescription: {
      pt: "Criamos uma plataforma de e-commerce robusta que permite a pequenos e médios empresários moçambicanos vender seus produtos online. A plataforma inclui pagamentos móveis, logística integrada e suporte multilíngue.",
      en: "We created a robust e-commerce platform that allows small and medium Mozambican entrepreneurs to sell their products online. The platform includes mobile payments, integrated logistics, and multilingual support.",
    },
    client: {
      pt: "Associação de Pequenos Empresários",
      en: "Small Business Association",
    },
    category: "software",
    image: "/placeholder.svg?height=250&width=400",
    technologies: ["Next.js", "Stripe", "MongoDB", "AWS"],
    impact: {
      pt: "Conectou mais de 500 vendedores locais, gerando um volume de vendas de $2M no primeiro ano.",
      en: "Connected over 500 local sellers, generating $2M in sales volume in the first year.",
    },
  },
  {
    id: 4,
    title: {
      pt: "Sistema de Telemedicina Rural",
      en: "Rural Telemedicine System",
    },
    description: {
      pt: "Solução para conectar comunidades rurais com profissionais de saúde através de tecnologia.",
      en: "Solution to connect rural communities with healthcare professionals through technology.",
    },
    fullDescription: {
      pt: "Desenvolvemos uma plataforma de telemedicina que permite consultas remotas entre pacientes em áreas rurais e médicos em centros urbanos. O sistema inclui videoconferência, prontuário eletrônico e agendamento.",
      en: "We developed a telemedicine platform that enables remote consultations between patients in rural areas and doctors in urban centers. The system includes video conferencing, electronic medical records, and scheduling.",
    },
    client: {
      pt: "Ministério da Saúde",
      en: "Ministry of Health",
    },
    category: "software",
    image: "/placeholder.svg?height=250&width=400",
    technologies: ["React Native", "WebRTC", "Firebase", "Python"],
    impact: {
      pt: "Atendeu mais de 10.000 pacientes em áreas remotas, reduzindo a necessidade de deslocamento em 70%.",
      en: "Served over 10,000 patients in remote areas, reducing the need for travel by 70%.",
    },
  },
  {
    id: 5,
    title: {
      pt: "Infraestrutura de Rede para Universidades",
      en: "Network Infrastructure for Universities",
    },
    description: {
      pt: "Modernização da infraestrutura de TI em instituições de ensino superior.",
      en: "IT infrastructure modernization in higher education institutions.",
    },
    fullDescription: {
      pt: "Projeto de modernização completa da infraestrutura de rede de 3 universidades públicas, incluindo cabeamento estruturado, equipamentos de rede e sistemas de segurança cibernética.",
      en: "Complete network infrastructure modernization project for 3 public universities, including structured cabling, network equipment, and cybersecurity systems.",
    },
    client: {
      pt: "Conselho de Reitores",
      en: "Council of Rectors",
    },
    category: "infrastructure",
    image: "/placeholder.svg?height=250&width=400",
    technologies: ["Cisco", "Fiber Optic", "Firewall", "VPN"],
    impact: {
      pt: "Melhorou a conectividade para 25.000 estudantes e 2.000 funcionários, aumentando a velocidade de internet em 500%.",
      en: "Improved connectivity for 25,000 students and 2,000 staff, increasing internet speed by 500%.",
    },
  },
  {
    id: 6,
    title: {
      pt: "Bootcamp de Ciência de Dados",
      en: "Data Science Bootcamp",
    },
    description: {
      pt: "Programa intensivo de formação em análise de dados e inteligência artificial.",
      en: "Intensive training program in data analysis and artificial intelligence.",
    },
    fullDescription: {
      pt: "Bootcamp de 4 meses focado em ciência de dados, machine learning e inteligência artificial. O programa inclui projetos práticos com dados reais de empresas moçambicanas.",
      en: "4-month bootcamp focused on data science, machine learning, and artificial intelligence. The program includes practical projects with real data from Mozambican companies.",
    },
    client: {
      pt: "Instituto Nacional de Estatística",
      en: "National Statistics Institute",
    },
    category: "training",
    image: "/placeholder.svg?height=250&width=400",
    technologies: ["Python", "R", "TensorFlow", "Jupyter"],
    impact: {
      pt: "Capacitou 60 profissionais em ciência de dados, criando a primeira geração de cientistas de dados do país.",
      en: "Trained 60 professionals in data science, creating the country's first generation of data scientists.",
    },
  },
]

export const services = [
  {
    id: 1,
    title: {
      pt: "Desenvolvimento de Software",
      en: "Software Development",
    },
    description: {
      pt: "Criamos aplicações web e móveis personalizadas para atender às necessidades específicas do seu negócio.",
      en: "We create custom web and mobile applications to meet your business specific needs.",
    },
    fullDescription: {
      pt: "Nosso serviço de desenvolvimento de software abrange desde a concepção até a implementação de soluções tecnológicas robustas. Utilizamos as mais modernas tecnologias e metodologias ágeis para entregar produtos de alta qualidade.",
      en: "Our software development service covers from conception to implementation of robust technological solutions. We use the most modern technologies and agile methodologies to deliver high-quality products.",
    },
    icon: "Code",
    features: {
      pt: [
        "Desenvolvimento web responsivo",
        "Aplicações móveis nativas e híbridas",
        "APIs e integrações",
        "Sistemas de gestão empresarial",
        "E-commerce e marketplaces",
      ],
      en: [
        "Responsive web development",
        "Native and hybrid mobile applications",
        "APIs and integrations",
        "Business management systems",
        "E-commerce and marketplaces",
      ],
    },
    process: {
      pt: [
        "Análise de requisitos e planejamento",
        "Design de interface e experiência do usuário",
        "Desenvolvimento e testes",
        "Implementação e treinamento",
        "Suporte e manutenção contínua",
      ],
      en: [
        "Requirements analysis and planning",
        "Interface and user experience design",
        "Development and testing",
        "Implementation and training",
        "Ongoing support and maintenance",
      ],
    },
    benefits: {
      pt: [
        "Soluções personalizadas para seu negócio",
        "Tecnologias modernas e escaláveis",
        "Suporte técnico especializado",
        "Redução de custos operacionais",
        "Melhoria da eficiência empresarial",
      ],
      en: [
        "Customized solutions for your business",
        "Modern and scalable technologies",
        "Specialized technical support",
        "Operational cost reduction",
        "Business efficiency improvement",
      ],
    },
  },
  {
    id: 2,
    title: {
      pt: "Formação em Tecnologia",
      en: "Technology Training",
    },
    description: {
      pt: "Programas de capacitação para desenvolver habilidades tecnológicas em indivíduos e equipes.",
      en: "Training programs to develop technological skills in individuals and teams.",
    },
    fullDescription: {
      pt: "Oferecemos programas de formação abrangentes que capacitam profissionais em diversas áreas da tecnologia. Nossos cursos são práticos, atualizados e focados nas demandas do mercado moçambicano.",
      en: "We offer comprehensive training programs that empower professionals in various technology areas. Our courses are practical, up-to-date, and focused on Mozambican market demands.",
    },
    icon: "Users",
    features: {
      pt: [
        "Cursos de programação e desenvolvimento",
        "Workshops de tecnologias emergentes",
        "Certificações profissionais",
        "Treinamento corporativo personalizado",
        "Mentoria e acompanhamento",
      ],
      en: [
        "Programming and development courses",
        "Emerging technology workshops",
        "Professional certifications",
        "Customized corporate training",
        "Mentoring and follow-up",
      ],
    },
    process: {
      pt: [
        "Avaliação de necessidades de formação",
        "Desenvolvimento de currículo personalizado",
        "Execução de treinamentos práticos",
        "Avaliação e certificação",
        "Acompanhamento pós-formação",
      ],
      en: [
        "Training needs assessment",
        "Customized curriculum development",
        "Practical training execution",
        "Assessment and certification",
        "Post-training follow-up",
      ],
    },
    benefits: {
      pt: [
        "Capacitação em tecnologias atuais",
        "Melhoria da empregabilidade",
        "Certificações reconhecidas",
        "Networking profissional",
        "Suporte contínuo ao aprendizado",
      ],
      en: [
        "Training in current technologies",
        "Employability improvement",
        "Recognized certifications",
        "Professional networking",
        "Continuous learning support",
      ],
    },
  },
  {
    id: 3,
    title: {
      pt: "Transformação Digital",
      en: "Digital Transformation",
    },
    description: {
      pt: "Modernizamos processos empresariais através da implementação estratégica de tecnologias digitais.",
      en: "We modernize business processes through strategic implementation of digital technologies.",
    },
    fullDescription: {
      pt: "Ajudamos organizações a navegar na era digital, implementando soluções que otimizam operações, melhoram a experiência do cliente e impulsionam o crescimento sustentável.",
      en: "We help organizations navigate the digital age by implementing solutions that optimize operations, improve customer experience, and drive sustainable growth.",
    },
    icon: "Zap",
    features: {
      pt: [
        "Auditoria de processos digitais",
        "Estratégia de transformação digital",
        "Automação de processos",
        "Migração para a nuvem",
        "Análise de dados e BI",
      ],
      en: [
        "Digital process audit",
        "Digital transformation strategy",
        "Process automation",
        "Cloud migration",
        "Data analysis and BI",
      ],
    },
    process: {
      pt: [
        "Diagnóstico da situação atual",
        "Definição de estratégia digital",
        "Implementação faseada",
        "Treinamento de equipes",
        "Monitoramento e otimização",
      ],
      en: [
        "Current situation diagnosis",
        "Digital strategy definition",
        "Phased implementation",
        "Team training",
        "Monitoring and optimization",
      ],
    },
    benefits: {
      pt: [
        "Aumento da eficiência operacional",
        "Redução de custos",
        "Melhoria da experiência do cliente",
        "Vantagem competitiva",
        "Preparação para o futuro",
      ],
      en: [
        "Increased operational efficiency",
        "Cost reduction",
        "Improved customer experience",
        "Competitive advantage",
        "Future readiness",
      ],
    },
  },
  {
    id: 4,
    title: {
      pt: "Consultoria em TI",
      en: "IT Consulting",
    },
    description: {
      pt: "Consultoria estratégica para otimizar sua infraestrutura tecnológica e processos de TI.",
      en: "Strategic consulting to optimize your technological infrastructure and IT processes.",
    },
    fullDescription: {
      pt: "Fornecemos consultoria especializada em tecnologia da informação, ajudando empresas a tomar decisões estratégicas sobre investimentos em TI e otimização de recursos tecnológicos.",
      en: "We provide specialized information technology consulting, helping companies make strategic decisions about IT investments and technological resource optimization.",
    },
    icon: "HeadphonesIcon",
    features: {
      pt: [
        "Planejamento estratégico de TI",
        "Avaliação de infraestrutura",
        "Gestão de projetos tecnológicos",
        "Otimização de custos de TI",
        "Governança e compliance",
      ],
      en: [
        "Strategic IT planning",
        "Infrastructure assessment",
        "Technology project management",
        "IT cost optimization",
        "Governance and compliance",
      ],
    },
    process: {
      pt: [
        "Análise da situação atual",
        "Identificação de oportunidades",
        "Desenvolvimento de recomendações",
        "Planejamento de implementação",
        "Acompanhamento e suporte",
      ],
      en: [
        "Current situation analysis",
        "Opportunity identification",
        "Recommendation development",
        "Implementation planning",
        "Follow-up and support",
      ],
    },
    benefits: {
      pt: [
        "Decisões de TI mais assertivas",
        "Otimização de investimentos",
        "Redução de riscos tecnológicos",
        "Melhoria da governança",
        "Alinhamento com objetivos de negócio",
      ],
      en: [
        "More assertive IT decisions",
        "Investment optimization",
        "Technology risk reduction",
        "Governance improvement",
        "Alignment with business objectives",
      ],
    },
  },
  {
    id: 5,
    title: {
      pt: "Segurança Cibernética",
      en: "Cybersecurity",
    },
    description: {
      pt: "Protegemos seus dados e sistemas contra ameaças digitais com soluções de segurança avançadas.",
      en: "We protect your data and systems against digital threats with advanced security solutions.",
    },
    fullDescription: {
      pt: "Oferecemos soluções completas de segurança cibernética para proteger organizações contra ameaças digitais crescentes. Nossos serviços incluem avaliação de vulnerabilidades, implementação de controles de segurança e treinamento de conscientização.",
      en: "We offer complete cybersecurity solutions to protect organizations against growing digital threats. Our services include vulnerability assessment, security controls implementation, and awareness training.",
    },
    icon: "Shield",
    features: {
      pt: [
        "Avaliação de vulnerabilidades",
        "Implementação de firewalls",
        "Monitoramento de segurança 24/7",
        "Backup e recuperação de dados",
        "Treinamento de conscientização",
      ],
      en: [
        "Vulnerability assessment",
        "Firewall implementation",
        "24/7 security monitoring",
        "Data backup and recovery",
        "Awareness training",
      ],
    },
    process: {
      pt: [
        "Auditoria de segurança",
        "Identificação de vulnerabilidades",
        "Implementação de controles",
        "Monitoramento contínuo",
        "Resposta a incidentes",
      ],
      en: [
        "Security audit",
        "Vulnerability identification",
        "Controls implementation",
        "Continuous monitoring",
        "Incident response",
      ],
    },
    benefits: {
      pt: [
        "Proteção contra ameaças digitais",
        "Conformidade regulatória",
        "Redução de riscos de segurança",
        "Continuidade dos negócios",
        "Confiança dos clientes",
      ],
      en: [
        "Protection against digital threats",
        "Regulatory compliance",
        "Security risk reduction",
        "Business continuity",
        "Customer trust",
      ],
    },
  },
  {
    id: 6,
    title: {
      pt: "Desenvolvimento Mobile",
      en: "Mobile Development",
    },
    description: {
      pt: "Criamos aplicações móveis inovadoras para iOS e Android que conectam seu negócio aos clientes.",
      en: "We create innovative mobile applications for iOS and Android that connect your business to customers.",
    },
    fullDescription: {
      pt: "Especializamo-nos no desenvolvimento de aplicações móveis nativas e híbridas que oferecem experiências excepcionais aos usuários. Nossos apps são otimizados para performance e usabilidade.",
      en: "We specialize in developing native and hybrid mobile applications that offer exceptional user experiences. Our apps are optimized for performance and usability.",
    },
    icon: "Smartphone",
    features: {
      pt: [
        "Apps nativos iOS e Android",
        "Aplicações híbridas multiplataforma",
        "Interface intuitiva e responsiva",
        "Integração com APIs e serviços",
        "Publicação nas app stores",
      ],
      en: [
        "Native iOS and Android apps",
        "Cross-platform hybrid applications",
        "Intuitive and responsive interface",
        "API and service integration",
        "App store publication",
      ],
    },
    process: {
      pt: [
        "Conceituação e prototipagem",
        "Design de interface móvel",
        "Desenvolvimento e testes",
        "Otimização de performance",
        "Lançamento e suporte",
      ],
      en: [
        "Conceptualization and prototyping",
        "Mobile interface design",
        "Development and testing",
        "Performance optimization",
        "Launch and support",
      ],
    },
    benefits: {
      pt: [
        "Alcance móvel expandido",
        "Experiência do usuário superior",
        "Engajamento do cliente aumentado",
        "Presença nas app stores",
        "Funcionalidades offline",
      ],
      en: [
        "Expanded mobile reach",
        "Superior user experience",
        "Increased customer engagement",
        "App store presence",
        "Offline functionality",
      ],
    },
  },
]

export const testimonials = [
  {
    id: 1,
    name: "Dr. Maria Santos",
    position: {
      pt: "Diretora de TI, Hospital Central de Maputo",
      en: "IT Director, Maputo Central Hospital",
    },
    content: {
      pt: "A MozTech Solutions transformou completamente nossa infraestrutura hospitalar. O sistema de telemedicina que desenvolveram conectou nossos médicos com pacientes em áreas remotas, salvando vidas e otimizando recursos.",
      en: "MozTech Solutions completely transformed our hospital infrastructure. The telemedicine system they developed connected our doctors with patients in remote areas, saving lives and optimizing resources.",
    },
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    name: "João Machel",
    position: {
      pt: "CEO, Empresa de Logística Moçambique",
      en: "CEO, Mozambique Logistics Company",
    },
    content: {
      pt: "O sistema de gestão que a MozTech desenvolveu para nossa empresa aumentou nossa eficiência operacional em 40%. A equipe é profissional, dedicada e entende as necessidades do mercado moçambicano.",
      en: "The management system that MozTech developed for our company increased our operational efficiency by 40%. The team is professional, dedicated, and understands the needs of the Mozambican market.",
    },
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    name: "Ana Cossa",
    position: {
      pt: "Reitora, Universidade Técnica de Moçambique",
      en: "Rector, Technical University of Mozambique",
    },
    content: {
      pt: "Os programas de formação da MozTech Solutions são excepcionais. Capacitaram nossos estudantes com habilidades tecnológicas modernas, preparando-os para o mercado de trabalho digital. A parceria com eles elevou o nível do nosso ensino tecnológico.",
      en: "MozTech Solutions training programs are exceptional. They equipped our students with modern technological skills, preparing them for the digital job market. The partnership with them elevated the level of our technological education.",
    },
    image: "/placeholder.svg?height=80&width=80",
  },
]

export const stats = [
  { number: 150, label: { pt: "Projetos Concluídos", en: "Projects Completed" } },
  { number: 800, label: { pt: "Pessoas Formadas", en: "People Trained" } },
  { number: 95, label: { pt: "Clientes Satisfeitos", en: "Satisfied Clients" } },
  { number: 5, label: { pt: "Anos de Experiência", en: "Years of Experience" } },
]
