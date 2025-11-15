import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";

export default function HomePage() {
  return (
    <div className="home-page">
      <main>
        <section className="hero-section">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="hero-pill">Révolutionner la gestion énergétique</div>
              <h1>
                Maîtrisez votre <span>consommation énergétique</span>
              </h1>
              <p>
                Energenius vous offre une solution IoT complète pour monitorer, analyser et optimiser votre consommation
                énergétique en temps réel.
              </p>
              <div className="hero-actions">
                <Link className="btn btn-primary" href="/register">
                  Commencer gratuitement
                </Link>
                <Link className="btn btn-outline" href="/product">
                  Découvrir les produits
                </Link>
              </div>
              <div className="hero-stats">
                <div>
                  <span className="stat-value">40%</span>
                  <span className="stat-label">Économies moyennes</span>
                </div>
                <div>
                  <span className="stat-value">1K+</span>
                  <span className="stat-label">Utilisateurs actifs</span>
                </div>
                <div>
                  <span className="stat-value">24/7</span>
                  <span className="stat-label">Monitoring</span>
                </div>
              </div>
            </div>
            <div className="hero-card">
              <div className="card-header">
                <div>
                  <p>Consommation globale</p>
                  <h3>2,847 kWh</h3>
                </div>
                <span className="badge">En direct</span>
              </div>
              <div className="consumption-bars">
                <div className="bar-row">
                  <div className="bar-info">
                    <span>Chauffage</span>
                    <span>35%</span>
                  </div>
                  <div className="progress">
                    <span style={{ width: "35%" }} />
                  </div>
                </div>
                <div className="bar-row">
                  <div className="bar-info">
                    <span>Climatisation</span>
                    <span>28%</span>
                  </div>
                  <div className="progress">
                    <span style={{ width: "28%" }} />
                  </div>
                </div>
                <div className="bar-row">
                  <div className="bar-info">
                    <span>Éclairage</span>
                    <span>22%</span>
                  </div>
                  <div className="progress">
                    <span style={{ width: "22%" }} />
                  </div>
                </div>
                <div className="bar-row">
                  <div className="bar-info">
                    <span>Appareils</span>
                    <span>15%</span>
                  </div>
                  <div className="progress">
                    <span style={{ width: "15%" }} />
                  </div>
                </div>
              </div>
              <div className="device-list">
                <p>Top appareils en veille</p>
                <ul>
                  <li>
                    <span>Serveur principal</span>
                    <span>820 Wh</span>
                  </li>
                  <li>
                    <span>Réfrigération</span>
                    <span>610 Wh</span>
                  </li>
                  <li>
                    <span>Éclairage</span>
                    <span>415 Wh</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="solutions" className="section section-light">
          <div className="container">
            <SectionHeader
              pill="Pourquoi choisir Energenius ?"
              title="Une plateforme complète dédiée à l’optimisation énergétique"
              description="Suivez, analysez et agissez sur vos consommations à partir d’un tableau de bord centralisé."
            />
            <div className="cards-grid">
              <article className="info-card">
                <div className="icon" aria-hidden="true">
                  <svg viewBox="0 0 48 48" fill="none">
                    <path d="M10 24h6l4-8 6 16 4-8h8" stroke="#0f62fe" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3>Monitoring en temps réel</h3>
                <p>Visualisez votre consommation seconde par seconde pour détecter les pics anormaux.</p>
              </article>
              <article className="info-card">
                <div className="icon" aria-hidden="true">
                  <svg viewBox="0 0 48 48" fill="none">
                    <rect x="10" y="26" width="6" height="12" rx="2" stroke="#0f62fe" strokeWidth="3" />
                    <rect x="20" y="18" width="6" height="20" rx="2" stroke="#0f62fe" strokeWidth="3" />
                    <rect x="30" y="10" width="6" height="28" rx="2" stroke="#0f62fe" strokeWidth="3" />
                  </svg>
                </div>
                <h3>Analytics avancées</h3>
                <p>Identifiez les tendances et optimisez vos usages grâce à nos modèles prédictifs.</p>
              </article>
              <article className="info-card">
                <div className="icon" aria-hidden="true">
                  <svg viewBox="0 0 48 48" fill="none">
                    <circle cx="24" cy="24" r="14" stroke="#0f62fe" strokeWidth="3" />
                    <path d="M24 16v10" stroke="#0f62fe" strokeWidth="3" strokeLinecap="round" />
                    <circle cx="24" cy="30" r="1.8" fill="#0f62fe" />
                  </svg>
                </div>
                <h3>Alertes intelligentes</h3>
                <p>Recevez instantanément une notification en cas de dépassement ou d’anomalie.</p>
              </article>
              <article className="info-card">
                <div className="icon" aria-hidden="true">
                  <svg viewBox="0 0 48 48" fill="none">
                    <rect x="12" y="22" width="24" height="18" rx="4" stroke="#0f62fe" strokeWidth="3" />
                    <path d="M18 22v-4a6 6 0 0 1 12 0v4" stroke="#0f62fe" strokeWidth="3" strokeLinecap="round" />
                    <circle cx="24" cy="31" r="2" fill="#0f62fe" />
                  </svg>
                </div>
                <h3>Sécurité certifiée</h3>
                <p>Données chiffrées et hébergées en Europe, auditées par des organismes indépendants.</p>
              </article>
              <article className="info-card">
                <div className="icon" aria-hidden="true">
                  <svg viewBox="0 0 48 48" fill="none">
                    <path d="M24 10c6.075 0 11 4.925 11 11 0 4.04-2.16 7.57-5.34 9.5L30 34a6 6 0 0 1-12 0l.34-3.5C15.16 28.57 13 25.04 13 21c0-6.075 4.925-11 11-11Z" stroke="#0f62fe" strokeWidth="3" strokeLinejoin="round" />
                    <path d="M24 38v2" stroke="#0f62fe" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </div>
                <h3>Réductions garanties</h3>
                <p>Obtenez jusqu’à 40% d’économies en optimisant vos procédés énergétiques.</p>
              </article>
              <article className="info-card">
                <div className="icon" aria-hidden="true">
                  <svg viewBox="0 0 48 48" fill="none">
                    <circle cx="24" cy="24" r="16" stroke="#0f62fe" strokeWidth="3" />
                    <path d="M24 16v10l6 4" stroke="#0f62fe" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3>Support 24/7</h3>
                <p>Nos experts vous accompagnent à chaque étape de votre transformation énergétique.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section section-white">
          <div className="container">
            <SectionHeader
              pill="Nos produits"
              title="Des solutions complètes et flexibles"
              description="Choisissez la meilleure combinaison matériel + logiciel."
            />
            <div className="product-grid">
              <article className="product-card">
                <div className="icon" aria-hidden="true">
                  <svg viewBox="0 0 48 48" fill="none">
                    <path d="M12 18 24 12l12 6v12l-12 6-12-6V18Z" stroke="#0f62fe" strokeWidth="3" strokeLinejoin="round" />
                    <path d="M24 12v12l12 6" stroke="#0f62fe" strokeWidth="3" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3>Box IoT Energenius</h3>
                <p>Capteur multiprotocole qui suit chaque circuit critique de votre infrastructure.</p>
                <ul>
                  <li>Capteurs haute précision</li>
                  <li>Wi-Fi, Zigbee et LTE</li>
                  <li>Installation en 5 minutes</li>
                  <li>Batterie jusqu’à 10 ans</li>
                </ul>
                <Link className="btn btn-primary" href="/product">
                  Découvrir
                </Link>
              </article>
              <article className="product-card">
                <div className="icon" aria-hidden="true">
                  <svg viewBox="0 0 48 48" fill="none">
                    <rect x="16" y="8" width="16" height="32" rx="4" stroke="#0f62fe" strokeWidth="3" />
                    <circle cx="24" cy="34" r="1.6" fill="#0f62fe" />
                  </svg>
                </div>
                <h3>Plans d’abonnement</h3>
                <p>Une plateforme SaaS modulable pour centraliser l’ensemble de vos données énergétiques.</p>
                <ul>
                  <li>Dashboard illimité</li>
                  <li>API intégration complète</li>
                  <li>Tarification par box</li>
                  <li>Support prioritaire</li>
                </ul>
                <Link className="btn btn-outline" href="/pricing">
                  Voir les plans
                </Link>
              </article>
            </div>
          </div>
        </section>

        <section id="pricing" className="section section-light">
          <div className="container">
            <SectionHeader
              pill="Plans de tarification"
              title="Tarification simple et transparente"
              description="Choisissez l’offre qui correspond à vos besoins, sans frais cachés."
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
                <p className="pricing-label">Professional</p>
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
                <p>Chaque plan inclut un nombre maximum de boxes IoT. Une box supplémentaire coûte 10 TND/mois.</p>
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
