import SectionHeader from "@/components/SectionHeader";

export default function ProductPage() {
  return (
    <div className="product-page">
      <main>
        <section className="section section-light product-hero">
          <div className="container">
            <SectionHeader
              pill="Nos produits"
              title="Des solutions complètes pour monitorer votre énergie"
              description="Découvrez la Box IoT Energenius, pensée pour optimiser vos sites industriels, bâtiments tertiaires ou chaînes retail."
            />
            <div className="product-layout">
              <div className="product-details">
                <div className="icon" aria-hidden="true">
                  <svg viewBox="0 0 48 48" fill="none">
                    <path
                      d="M12 18 24 12l12 6v12l-12 6-12-6V18Z"
                      stroke="#0f62fe"
                      strokeWidth="3"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M24 12v12l12 6"
                      stroke="#0f62fe"
                      strokeWidth="3"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h2>Box IoT Energenius</h2>
                <p>
                  Notre appareil phare fournit une solution complète et intégrée pour le monitoring énergétique.
                  Installation simple, résultats immédiats.
                </p>
                <ul className="product-features">
                  <li>
                    <div>
                      <p className="feature-title">Capteurs haute précision</p>
                      <p className="feature-desc">Mesure jusqu’à 0,01 kWh avec certification IEEE 1459.</p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <p className="feature-title">Connectivité multiple</p>
                      <p className="feature-desc">Wi-Fi, Zigbee, LTE : choisissez la meilleure option pour votre site.</p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <p className="feature-title">Autonomie prolongée</p>
                      <p className="feature-desc">Batterie durable jusqu’à 10 ans sans maintenance.</p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <p className="feature-title">Synchronisation cloud</p>
                      <p className="feature-desc">Données sauvegardées en temps réel et sécurisées.</p>
                    </div>
                  </li>
                </ul>
                <div className="hero-actions">
                  <button className="btn btn-primary" type="button">
                    Commander une Box
                  </button>
                  <button className="btn btn-outline" type="button">
                    Fiche technique
                  </button>
                </div>
              </div>
              <div className="product-preview">
                <div className="preview-card">
                  <svg viewBox="0 0 70 70" fill="none">
                    <circle cx="35" cy="35" r="30" fill="#e5efff" />
                    <path
                      d="M25 33.5 35 28l10 5.5v11L35 50l-10-5.5v-11Z"
                      stroke="#0f62fe"
                      strokeWidth="3"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M35 28v11l10 5.5"
                      stroke="#0f62fe"
                      strokeWidth="3"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <h3>Box IoT Energenius v2.1</h3>
                  <p>Format compact | 100 g | IP67</p>
                </div>
                <div className="preview-meta">
                  <div>
                    <span className="meta-label">Déploiement</span>
                    <span className="meta-value">29 minutes</span>
                  </div>
                  <div>
                    <span className="meta-label">Garantie</span>
                    <span className="meta-value">5 ans</span>
                  </div>
                  <div>
                    <span className="meta-label">Maintenance</span>
                    <span className="meta-value">Automatique</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-white">
          <div className="container">
            <div className="spec-card">
              <h2>Spécifications techniques</h2>
              <div className="spec-grid">
                <div className="spec-column">
                  <h4>Matériel</h4>
                  <dl>
                    <div className="spec-row">
                      <dt>Microcontroleur</dt>
                      <dd>STM 32</dd>
                    </div>
                    <div className="spec-row">
                      <dt>Capteurs</dt>
                      <dd>Classe 0.1, multi-phases</dd>
                    </div>
                    <div className="spec-row">
                      <dt>Châssis</dt>
                      <dd>Polycarbonate recyclé</dd>
                    </div>
                  </dl>
                </div>
                <div className="spec-column">
                  <h4>Connectivité</h4>
                  <dl>
                    <div className="spec-row">
                      <dt>Sans fil</dt>
                      <dd>Wi-Fi, Zigbee, LTE-M</dd>
                    </div>
                    <div className="spec-row">
                      <dt>Filaire</dt>
                      <dd>Modbus, RS485</dd>
                    </div>
                    <div className="spec-row">
                      <dt>API</dt>
                      <dd>REST & Webhooks</dd>
                    </div>
                  </dl>
                </div>
                <div className="spec-column">
                  <h4>Sécurité</h4>
                  <dl>
                    <div className="spec-row">
                      <dt>Chiffrement</dt>
                      <dd>AES-256 côté device</dd>
                    </div>
                    <div className="spec-row">
                      <dt>Certificats</dt>
                      <dd>ISO 27001 / IEC 62443</dd>
                    </div>
                    <div className="spec-row">
                      <dt>Température</dt>
                      <dd>-20°C / +60°C</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-light">
          <div className="container">
            <SectionHeader
              pill="Écosystème complet"
              title="Des modules logiciels pour aller plus loin"
              description="Connectez la Box IoT à nos services cloud pour piloter vos sites, automatiser les alertes et intégrer vos outils internes."
            />
            <div className="ecosystem-grid">
              <article className="ecosystem-card">
                <div className="icon" aria-hidden="true">
                  <svg viewBox="0 0 48 48" fill="none">
                    <path d="M14 32v4h20v-4M10 20h28v12H10V20Z" stroke="#0f62fe" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M18 16h12" stroke="#0f62fe" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </div>
                <h3>Dashboard Cloud</h3>
                <p>Visualisation temps réel, rapports automatisés et alertes.</p>
              </article>
              <article className="ecosystem-card">
                <div className="icon" aria-hidden="true">
                  <svg viewBox="0 0 48 48" fill="none">
                    <path d="M24 10v28M12 24h24" stroke="#0f62fe" strokeWidth="3" strokeLinecap="round" />
                    <circle cx="24" cy="24" r="14" stroke="#0f62fe" strokeWidth="3" />
                  </svg>
                </div>
                <h3>API RESTful</h3>
                <p>Intégrez les données Energenius dans vos systèmes métiers.</p>
              </article>
              <article className="ecosystem-card">
                <div className="icon" aria-hidden="true">
                  <svg viewBox="0 0 48 48" fill="none">
                    <path d="M10 18h28v18H10V18Z" stroke="#0f62fe" strokeWidth="3" />
                    <path d="M18 18v-4c0-3.314 2.239-6 5-6s5 2.686 5 6v4" stroke="#0f62fe" strokeWidth="3" />
                    <circle cx="24" cy="28" r="3" fill="#0f62fe" />
                  </svg>
                </div>
                <h3>Sécurité</h3>
                <p>Chiffrez vos flux et contrôlez les accès par rôle granulaire.</p>
              </article>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
