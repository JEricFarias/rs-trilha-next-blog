"use client";

import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

type ActiveLinkProps = {
  children: React.ReactNode;
} & LinkProps;

export function ActiveLink({ children, href, ...rest }: ActiveLinkProps) {
  const linkPath = (typeof href === "string" ? href : href.pathname) ?? "";

  const pathname = usePathname();
  const isCurrentPath =
    pathname === linkPath || pathname?.startsWith(`${linkPath}/`);

  return (
    <Link
      href={href}
      className={cn(
        "button-s font-medium transition-colors hover:text-blue-100",
        isCurrentPath ? "text-blue-200" : "text-gray-100"
      )}
      {...rest}
    >
      {children}
    </Link>
  );
}
