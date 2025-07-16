import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "MozTech Solutions - Impulsionando o Futuro Digital de Moçambique",
    short_name: "MozTech Solutions",
    description:
      "Empresa de tecnologia moçambicana dedicada a fortalecer a era digital através de desenvolvimento de software, formação tecnológica e transformação digital.",
    start_url: "/",
    display: "standalone",
    background_color: "#0f172a",
    theme_color: "#22d3ee",
    orientation: "portrait-primary",
    categories: ["business", "technology", "education"],
    lang: "pt-MZ",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  }
}
