import { LandingPage } from "@/templates/landing-page/landing-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Site.set",
  description: "Venda seus produtos como afiliado em um unico lugar.",
  robots: "index, follow",
  openGraph: {
    title: "Site.set",
    description: "Venda seus produtos como afiliado em um unico lugar.",
    url: "https://rs-trilha-next-blog.vercel.app/ogIndexImage.png",
    siteName: "Site.set",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://rs-trilha-next-blog.vercel.app/ogIndexImage.png",
        width: 800,
        height: 600,
        alt: "Site.set",
      },
    ],
  },
};

export default function Home() {
  return <LandingPage />;
  // return <ErrorComponent />;
}
