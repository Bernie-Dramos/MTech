# MozTech Solutions Website

This is a Next.js application for MozTech Solutions, a leading technology company in Mozambique. The website showcases their services, projects, testimonials, and provides a contact form.

## Features

- **Responsive Design**: Optimized for various screen sizes (desktop, tablet, mobile).
- **Multi-language Support**: English and Portuguese translations using React Context.
- **SEO Optimized**: Includes `next/head` for metadata, sitemap, and robots.txt.
- **Interactive Components**: Built with Shadcn UI and Framer Motion for animations.
- **Contact Form**: A functional contact form with API route handling.
- **Error Handling**: Custom 500 and 404 error pages.
- **Loading States**: Custom loading animation.
- **Particle Background**: Dynamic particle effect for a modern aesthetic.
- **Dark/Light Mode**: Theme toggling for user preference.

## Getting Started

### Prerequisites

- Node.js (v18.x or higher)
- npm or yarn

### Installation

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/your-username/moztech-solutions.git
   cd moztech-solutions
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

### Running Locally

1. Start the development server:
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`
2. Open your browser and visit `http://localhost:3000`.

### Building for Production

1. Build the application for production:
   \`\`\`bash
   npm run build
   # or
   yarn build
   \`\`\`

2. Start the production server:
   \`\`\`bash
   npm run start
   # or
   yarn start
   \`\`\`

## Project Structure

\`\`\`
.
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts        # API route for contact form
│   ├── contact/
│   │   ├── ContactPageClient.tsx # Client component for contact page
│   │   └── page.tsx            # Server component for contact page
│   ├── error.tsx               # Custom error boundary
│   ├── globals.css             # Global Tailwind CSS styles
│   ├── layout.tsx              # Root layout for the application
│   ├── loading.tsx             # Custom loading page
│   ├── manifest.ts             # Web app manifest generation
│   ├── not-found.tsx           # Custom 404 page
│   ├── page.tsx                # Homepage
│   ├── projects/
│   │   ├── ProjectsClientPage.tsx # Client component for projects page
│   │   └── page.tsx            # Server component for projects page
│   ├── robots.ts               # Robots.txt generation
│   ├── services/
│   │   ├── ServicesClientPage.tsx # Client component for services page
│   │   └── page.tsx            # Server component for services page
│   └── sitemap.ts              # Sitemap generation
├── components/
│   ├── ui/                     # Shadcn UI components
│   └── (other components)      # Custom components like Header, Footer, Hero, etc.
├── contexts/
│   └── language-context.tsx    # Language context provider
├── data/
│   ├── mock-data.ts            # Mock data for services, projects, testimonials, stats
│   └── translations.ts         # Translations for multiple languages
├── hooks/
│   ├── use-mobile.tsx          # Custom hook for mobile detection
│   └── use-toast.ts            # Custom hook for toast notifications
├── lib/
│   └── utils.ts                # Utility functions (e.g., cn for Tailwind classes)
├── public/                     # Static assets (images, favicons)
├── styles/
│   └── globals.css             # (Optional) Additional global styles
├── .env.example                # Example environment variables
├── next.config.mjs             # Next.js configuration
├── package.json                # Project dependencies and scripts
├── postcss.config.mjs          # PostCSS configuration
├── tailwind.config.js          # Tailwind CSS configuration
└── tsconfig.json               # TypeScript configuration
\`\`\`

## Deployment

This project is configured for easy deployment to Vercel.

1. **Create a Vercel Account**: If you don't have one, sign up at [vercel.com](https://vercel.com/).
2. **Install Vercel CLI (Optional but Recommended)**:
   \`\`\`bash
   npm i -g vercel
   \`\`\`
3. **Link Your Project**:
   Navigate to your project directory in the terminal and run:
   \`\`\`bash
   vercel link
   \`\`\`
   Follow the prompts to link your project to a Vercel scope and project.
4. **Deploy**:
   \`\`\`bash
   vercel deploy
   \`\`\`
   This will deploy your project to Vercel. You can also deploy directly from your Git repository (GitHub, GitLab, Bitbucket) by importing your project into Vercel.

For more detailed deployment instructions, refer to the `DEPLOYMENT.md` file.

## Environment Variables

Create a `.env.local` file in the root of your project based on `.env.example`.
\`\`\`
# Example environment variables
# NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
\`\`\`

## Contributing

Feel free to fork the repository and submit pull requests.

## License

This project is open source and available under the [MIT License](LICENSE).
