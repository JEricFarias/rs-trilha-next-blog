import { Metadata } from "next";
import { Layout } from "@/components/layout";
import "@/styles/globals.css";

export const metadata = {
  icons: {
    icon: "/favicon.svg",
  },
} satisfies Metadata;

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
