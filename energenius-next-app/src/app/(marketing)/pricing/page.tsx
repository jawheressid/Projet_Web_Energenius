import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";

export default function PricingPage() {
  return (
    <div className="pricing-page">
      <main>
        <section className="section section-light pricing-hero">
          <div className="container">
            <SectionHeader
              pill="Plans de tarification"
              title="Tarification simple et transparente"
              description="Choisissez le plan qui correspond à vos besoins. Pas de frais cachés, pas de contrat à long terme."
            />
            <div className="pricing-grid">
              <article className="pricing-card">
                <p className="pricing-label">Starter</p>
                <p className="pricing-tagline">Pour commencer votre transformation énergétique</p>
                <div className="price">
                  <span className="price-value">49</span>
                  <span className="price-currency">TND</span>
                  <small>/mois</small>
                </div>
                <p className="pricing-sub">Jusqu’à 5 boxes</p>
                <ul className="pricing-included">
                  <li>Dashboard principal</li>
                  <li>Monitoring horaire</li>
                  <li>Alerte basique</li>
                  <li>Support email</li>
                  <li>Historique 30 jours</li>
                </ul>
                <div className="pricing-divider" />
                <h4>Non inclus :</h4>
                <ul className="pricing-excluded">
                  <li>Analytics avancées</li>
                  <li>Rapports mensuels</li>
                  <li>API d’intégration</li>
                </ul>
                <Link className="btn btn-outline" href="/register">
                  Commencer
                </Link>
              </article>

              <article className="pricing-card pricing-featured">
                <p className="pricing-label">
                  Professional <span className="pill">Populaire</span>
                </p>
                <p className="pricing-tagline">Parfait pour les PME et petites entreprises</p>
                <div className="price">
                  <span className="price-value">99</span>
                  <span className="price-currency">TND</span>
                  <small>/mois</small>
                </div>
                <p className="pricing-sub">Jusqu’à 25 boxes</p>
                <ul className="pricing-included">
                  <li>Monitoring en temps réel</li>
                  <li>Analytics avancées</li>
                  <li>Alertes intelligentes</li>
                  <li>Support prioritaire</li>
                  <li>Historique 12 mois</li>
                  <li>Dashboards illimités</li>
                </ul>
                <div className="pricing-divider" />
                <h4>Non inclus :</h4>
                <ul className="pricing-excluded">
                  <li>Déploiement dédié</li>
                  <li>API custom</li>
                </ul>
                <Link className="btn btn-primary" href="/register">
                  Commencer
                </Link>
              </article>

              <article className="pricing-card">
                <p className="pricing-label">Enterprise</p>
                <p className="pricing-tagline">Pour les grands groupes avec besoins spécifiques</p>
                <div className="price">
                  <span className="price-value">Personnalisé</span>
                </div>
                <p className="pricing-sub">Boxes illimitées</p>
                <ul className="pricing-included">
                  <li>API custom</li>
                  <li>Déploiement dédié</li>
                  <li>SLA 24/7</li>
                  <li>Single Sign-On (SSO)</li>
                  <li>Historique illimité</li>
                  <li>Intégrations natives</li>
                </ul>
                <Link className="btn btn-outline" href="/pricing">
                  Nous contacter
                </Link>
              </article>
            </div>
          </div>
        </section>

        <section className="section section-white">
          <div className="container faq-card">
            <h2>Questions fréquentes</h2>
            <div className="faq-grid">
              <article>
                <h3>Puis-je changer de plan à tout moment ?</h3>
                <p>Oui, vous pouvez upgrader ou downgrader votre plan en un clic. Les changements prennent effet immédiatement.</p>
              </article>
              <article>
                <h3>Que signifie “par box” ?</h3>
                <p>Chaque plan inclut un nombre maximum de boxes IoT. Une box supplémentaire coûte 15 TND/mois.</p>
              </article>
              <article>
                <h3>Y a-t-il une période d’essai gratuite ?</h3>
                <p>Oui, tous les nouveaux utilisateurs bénéficient de 14 jours gratuits sans engagement ni carte bancaire.</p>
              </article>
              <article>
                <h3>Quelle est votre politique de remboursement ?</h3>
                <p>Nous offrons une garantie satisfaction de 30 jours. Si vous n’êtes pas satisfait, nous vous remboursons intégralement.</p>
              </article>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
