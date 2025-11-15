"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";
import { useRouter } from "next/navigation";

type NavLink = {
  key: string;
  label: string;
  href: string;
  icon: ReactNode;
};

const navLinks: NavLink[] = [
  {
    key: "dashboard",
    label: "Dashboard",
    href: "/dashboard",
    icon: (
      <svg viewBox="0 0 24 24" role="presentation">
        <path d="M4 12h4v8H4zM10 4h4v16h-4zM16 8h4v12h-4z" />
      </svg>
    ),
  },
  {
    key: "devices",
    label: "Appareils",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" role="presentation">
        <path d="M4 6h16v12H4z" />
        <path d="M2 18h20" />
      </svg>
    ),
  },
  {
    key: "chatbot",
    label: "Chatbot & Support",
    href: "/chatbot",
    icon: (
      <svg viewBox="0 0 24 24" role="presentation">
        <path d="M7 9h10M7 13h6" />
        <path d="M4 4h16v9a4 4 0 0 1-4 4H9l-5 3V4Z" />
      </svg>
    ),
  },
  {
    key: "plans",
    label: "Offres & Abonnement",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" role="presentation">
        <path d="M5 6h14v4H5zM5 12h10v6H5z" />
      </svg>
    ),
  },
];

type DashboardShellProps = {
  active?: string;
  children: ReactNode;
};

type UserMeta = {
  name: string;
  initials: string;
};

export default function DashboardShell({ active = "dashboard", children }: DashboardShellProps) {
  const router = useRouter();
  const [userMeta, setUserMeta] = useState<UserMeta>({ name: "Utilisateur Energenius", initials: "E" });

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const raw = localStorage.getItem("current_user");
      const user = raw ? JSON.parse(raw) : null;
      const display = user
        ? `${user.firstName || ""} ${user.lastName || ""}`.trim() || user.email || user.company || user.id
        : "";
      const label = display || "Utilisateur Energenius";
      const letters = label
        .split(" ")
        .filter(Boolean)
        .slice(0, 2)
        .map((word) => word[0]?.toUpperCase() ?? "")
        .join("");
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setUserMeta({ name: label, initials: letters || "E" });
    } catch {
      // ignore
    }
  }, []);

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      ["auth_token", "current_user", "signup_profile", "account_init"].forEach((key) =>
        localStorage.removeItem(key)
      );
    }
    router.push("/login");
  };

  return (
    <div className="dashboard-page">
      <div className="app-shell">
        <aside className="sidebar">
          <div className="sidebar-body">
            <Link className="brand" href="/" aria-label="Retour à l'accueil">
              <div className="brand-logo">
                <Image src="/images/logo.png" alt="Energenius" width={48} height={48} />
              </div>
              <div>
                <p className="brand-label">Energenius</p>
              </div>
            </Link>

            <nav className="sidebar-nav" aria-label="Sections du dashboard">
              {navLinks.map((link) => {
                const isActive = active === link.key;
                const disabled = link.href === "#";
                const className = `nav-link ${isActive ? "active" : ""}`.trim();
                if (disabled) {
                  return (
                    <span className={className} key={link.key}>
                      <span className="nav-icon" aria-hidden="true">
                        {link.icon}
                      </span>
                      <span>{link.label}</span>
                    </span>
                  );
                }
                return (
                  <Link className={className} key={link.key} href={link.href}>
                    <span className="nav-icon" aria-hidden="true">
                      {link.icon}
                    </span>
                    <span>{link.label}</span>
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="sidebar-footer">
            <p className="footer-label">Espace utilisateur</p>
            <button className="logout-btn" type="button" onClick={handleLogout}>
              Déconnexion
            </button>
            <div className="user-card">
              <div className="avatar" aria-hidden="true">
                {userMeta.initials}
              </div>
              <div className="user-meta">
                <p className="user-state">Connecté</p>
                <p className="user-name">{userMeta.name}</p>
              </div>
            </div>
          </div>
        </aside>
        <main className="content">{children}</main>
      </div>
    </div>
  );
}
