import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";

export default function SolutionsPage() {
  return (
    <div className="solutions-page">
      <main>
        <section className="section section-light solutions-hero">
          <div className="container">
            <SectionHeader
              pill="Solutions par secteur"
              title="Des solutions adaptées à chaque industrie"
              description="Des offres sur mesure pour l’immobilier, l’industrie, les collectivités ou encore les réseaux publics."
            />
            <div className="solutions-grid">
              <article className="solution-card">
                <div className="icon icon-blue" aria-hidden="true">
                  <svg viewBox="0 0 48 48" fill="none">
                    <path d="M12 18h24v18H12V18Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
                    <path d="M18 18v-6h12v6" stroke="currentColor" strokeWidth="3" />
                  </svg>
                </div>
                <h3>Immobilier commercial</h3>
                <p>Optimisez la consommation énergétique de vos bâtiments tertiaires.</p>
                <ul>
                  <li>Monitoring multi-sites</li>
                  <li>Reporting ESG automatique</li>
                  <li>Alertes anomalies locatives</li>
                </ul>
                <Link className="card-link" href="/contact">
                  En savoir plus 
                </Link>
              </article>
              <article className="solution-card">
                <div className="icon icon-orange" aria-hidden="true">
                  <svg viewBox="0 0 48 48" fill="none">
                    <rect x="12" y="18" width="24" height="16" rx="3" stroke="currentColor" strokeWidth="3" />
                    <path d="M12 26h24" stroke="currentColor" strokeWidth="3" />
                    <path d="M20 14h8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </div>
                <h3>Industrie</h3>
                <p>Réduisez vos coûts énergétiques grâce à une analyse fine.</p>
                <ul>
                  <li>Suivi des lignes critiques</li>
                  <li>Maintenance prédictive</li>
                  <li>Tableaux Lean/Energy</li>
                </ul>
                <Link className="card-link" href="/contact">
                  En savoir plus →
                </Link>
              </article>
              <article className="solution-card">
                <div className="icon icon-green" aria-hidden="true">
                  <svg viewBox="0 0 48 48" fill="none">
                    <path d="M16 20a8 8 0 1 1 16 0v10H16V20Z" stroke="currentColor" strokeWidth="3" />
                    <path d="M12 30h24" stroke="currentColor" strokeWidth="3" />
                  </svg>
                </div>
                <h3>Résidentiel</h3>
                <p>Aidez les habitants à comprendre et réduire leur consommation.</p>
                <ul>
                  <li>Portail locataires</li>
                  <li>Alertes dépassement</li>
                  <li>Programmes d’incitation</li>
                </ul>
                <Link className="card-link" href="/contact">
                  En savoir plus 
                </Link>
              </article>
              <article className="solution-card">
                <div className="icon icon-emerald" aria-hidden="true">
                  <svg viewBox="0 0 48 48" fill="none">
                    <path d="M12 30c6.627 0 12-5.373 12-12 0-3.314-1.343-6.314-3.515-8.485" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                    <path d="M16 10h-6v6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                    <path d="M24 30h12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </div>
                <h3>Énergie renouvelable</h3>
                <p>Intégrez et optimisez vos sources d’énergie décarbonée.</p>
                <ul>
                  <li>Suivi production solaire</li>
                  <li>Gestion stockage batteries</li>
                  <li>Prévisions météo/énergie</li>
                </ul>
                <Link className="card-link" href="/contact">
                  En savoir plus →
                </Link>
              </article>
              <article className="solution-card">
                <div className="icon icon-purple" aria-hidden="true">
                  <svg viewBox="0 0 48 48" fill="none">
                    <path d="M14 34V14h20v20" stroke="currentColor" strokeWidth="3" />
                    <path d="M10 34h28" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                    <path d="M20 18h8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </div>
                <h3>Énergie publique</h3>
                <p>Solutions complètes pour les distributeurs et opérateurs urbains.</p>
                <ul>
                  <li>Supervision réseau</li>
                  <li>Planification de charge</li>
                  <li>Portails citoyens</li>
                </ul>
                <Link className="card-link" href="/contact">
                  En savoir plus →
                </Link>
              </article>
              <article className="solution-card">
                <div className="icon icon-teal" aria-hidden="true">
                  <svg viewBox="0 0 48 48" fill="none">
                    <path d="M12 30v-8l12-10 12 10v8" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
                    <path d="M20 34h8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </div>
                <h3>Conseil en efficacité</h3>
                <p>Pour les équipes de conseil offrant des services énergétiques.</p>
                <ul>
                  <li>Workflows collaboratifs</li>
                  <li>Exports marque blanche</li>
                  <li>API ouverte</li>
                </ul>
                <Link className="card-link" href="/contact">
                  En savoir plus →
                </Link>
              </article>
            </div>
          </div>
        </section>

        <section className="section section-white">
          <div className="container insight-card">
            <div>
              <p className="insight-label">Cas client</p>
              <h2>+32% d’économies pour un campus industriel</h2>
              <p>
                Grâce aux automatismes Energenius, ce site a réduit ses pics de consommation tout en améliorant le confort des équipes.
              </p>
            </div>
            <Link className="btn btn-outline" href="/solutions">
              Voir le projet
            </Link>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <div className="cta-card">
              <h2>Prêt à transformer votre consommation énergétique ?</h2>
              <p>Rejoignez des milliers d’entreprises qui font déjà des économies avec Energenius.</p>
              <div className="cta-actions">
                <Link className="btn btn-primary" href="/register">
                  Commencer gratuitement
                </Link>
                <Link className="btn btn-outline" href="/pricing">
                  Voir les tarifs
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
