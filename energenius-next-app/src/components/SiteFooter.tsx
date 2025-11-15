import Image from "next/image";
import Link from "next/link";

type FooterColumn = {
  title: string;
  items: Array<{ label: string; href: string }>;
};

const footerLinks: FooterColumn[] = [
  {
    title: "Produit",
    items: [
      { label: "Dashboard", href: "/solutions" },
      { label: "Capteurs", href: "/product" },
      { label: "Tarification", href: "/pricing" },
    ],
  },
  {
    title: "Entreprise",
    items: [
      { label: "À propos", href: "#" },
      { label: "Carrières", href: "#" },
      { label: "Blog", href: "#" },
    ],
  },
  {
    title: "Légal",
    items: [
      { label: "Mentions légales", href: "#" },
      { label: "Confidentialité", href: "#" },
      { label: "Conditions", href: "#" },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="brand">
            <div className="logo">
              <Image src="/images/logo.png" alt="Energenius" width={48} height={48} />
            </div>
            <span className="brand-name">Energenius</span>
          </div>
        </div>
        {footerLinks.map((column) => (
          <div key={column.title}>
            <h4>{column.title}</h4>
            {column.items.map((item) => (
              <Link key={item.label} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        ))}
      </div>
      <div className="footer-bottom container">
        <span>2025 Energenius. Tous droits réservés.</span>
        <div className="social-links">
          <Link href="#">Twitter</Link>
          <Link href="#">LinkedIn</Link>
          <Link href="#">GitHub</Link>
        </div>
      </div>
    </footer>
  );
}
