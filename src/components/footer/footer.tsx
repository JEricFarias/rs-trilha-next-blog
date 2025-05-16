import Link from "next/link";
import { Logo } from "@/components/logo";
import { FooterLink } from "./footer-link";

export function Footer() {
  return (
    <footer className="bg-gray-500">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between md:flex-row gap-8 py-8">
          <Logo />

          <nav className="flex flex-col md:flex-row items-center gap-4 text-sm text-muted-foreground">
            <FooterLink href="/termos-de-uso">Termos de uso</FooterLink>
            <FooterLink href="/politicas-de-privacidade">
              Politicas de privacidade
            </FooterLink>
            <FooterLink href="/feedback" className="hover:text-primary">
              Feedback
            </FooterLink>
          </nav>
        </div>
      </div>
    </footer>
  );
}
