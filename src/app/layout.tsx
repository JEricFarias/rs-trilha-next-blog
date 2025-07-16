import { Metadata } from "next";
import { Layout } from "@/components/layout";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Site.set",
  description: "Venda seus produtos como afiliado em um unico lugar.",
  robots: "index, follow",
  icons: {
    icon: "/favicon.svg",
  },
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="antialiased bg-gray-700">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
