"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLink = {
  href: string;
  label: string;
};

const navLinks: NavLink[] = [
  { href: "/product", label: "Produits" },
  { href: "/solutions", label: "Solutions" },
  { href: "/pricing", label: "Pricing" },
];

type SiteHeaderProps = {
  minimal?: boolean;
};

export default function SiteHeader({ minimal = false }: SiteHeaderProps) {
  const pathname = usePathname();
  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href);
  };

  return (
    <header className="site-header">
      <div className="container header-content">
        <Link className="brand" href="/" aria-label="Accueil Energenius">
          <div className="logo">
            <Image src="/images/logo.png" alt="Energenius" width={40} height={40} />
          </div>
          <span className="brand-name">Energenius</span>
        </Link>

        {!minimal && (
          <>
            <nav className="nav-links" aria-label="Navigation principale">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={isActive(link.href) ? "active" : undefined}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="header-cta">
              <Link className="btn btn-outline" href="/login">
                Login
              </Link>
              <Link className="btn btn-primary" href="/register">
                Get Started
              </Link>
            </div>
          </>
        )}
      </div>
    </header>
  );
}
