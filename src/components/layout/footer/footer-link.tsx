import Link, { LinkProps } from "next/link";
import { HTMLProps } from "react";

type FooterLinkProps = {
  children: React.ReactNode;
  className?: HTMLProps<HTMLElement>["className"];
} & LinkProps;

export function FooterLink({
  children,
  href,
  className = ``,
  ...rest
}: FooterLinkProps) {
  return (
    <Link
      href={href}
      className={`text-primary text-blue-100 text-body-sm hover:text-blue-200 ${className}`}
      {...rest}
    >
      {children}
    </Link>
  );
}
