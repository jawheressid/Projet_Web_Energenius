"use client";

import DashboardShell from "@/components/dashboard/DashboardShell";

const dashboardData = {
  summary: [
    { id: "devices", label: "Appareils actifs", value: 24, unit: "", detail: "+3 cette semaine", icon: "devices" },
    { id: "zones", label: "Zones actives", value: 6, unit: "", detail: "Sur 8 installées", icon: "zones" },
    { id: "consumption", label: "Consommation totale", value: 2847, unit: " kWh", detail: "Sur 30 derniers jours", icon: "energy" },
    { id: "savings", label: "Économies / mois", value: 12, unit: " %", detail: "vs période précédente", icon: "savings" },
  ],
  consumption: {
    categories: [
      { label: "Chauffage", value: 994 },
      { label: "Climatisation", value: 797 },
      { label: "Éclairage", value: 626 },
      { label: "Appareils", value: 430 },
    ],
  },
  alerts: [
    { title: "Consommation élevée", message: "Chauffage consomme +35%", severity: "warning" },
    { title: "Défaut détecté", message: "Climatisation zone B", severity: "danger" },
  ],
  topDevices: [
    { label: "Chauffage principal", value: 8.5 },
    { label: "Climatisation", value: 6.2 },
    { label: "Éclairage", value: 4.8 },
    { label: "Réfrigération", value: 3.3 },
  ],
  timeline: [
    { time: "00:00", live: 420, average: 380 },
    { time: "04:00", live: 360, average: 340 },
    { time: "08:00", live: 520, average: 450 },
    { time: "12:00", live: 610, average: 500 },
    { time: "16:00", live: 720, average: 610 },
    { time: "20:00", live: 640, average: 560 },
    { time: "23:59", live: 480, average: 430 },
  ],
  devices: [
    { name: "Chauffage zone A", location: "Rez-de-chaussée", status: "active", consumption: "2.5 kW", temperature: "25°C" },
    { name: "Climatisation", location: "Tous étages", status: "active", consumption: "1.8 kW", temperature: "20°C" },
    { name: "Éclairage", location: "Tous étages", status: "active", consumption: "0.8 kW", temperature: "N/A" },
    { name: "Réfrigération", location: "Cuisine", status: "idle", consumption: "0.2 kW", temperature: "4°C" },
    { name: "Serveur", location: "Serveur", status: "active", consumption: "1.2 kW", temperature: "27°C" },
    { name: "Pompe", location: "Extérieur", status: "offline", consumption: "0 kW", temperature: "N/A" },
  ],
};

const ICONS = {
  devices: (
    <svg viewBox="0 0 24 24">
      <path d="M4 6h16v11H4z" />
      <path d="M2 17h20" />
    </svg>
  ),
  zones: (
    <svg viewBox="0 0 24 24">
      <rect x="4" y="5" width="16" height="14" rx="3" />
      <path d="M8 9h8" />
      <path d="M8 13h5" />
    </svg>
  ),
  energy: (
    <svg viewBox="0 0 24 24">
      <path d="M13 2 6 13h5l-1 9 7-11h-5z" />
    </svg>
  ),
  savings: (
    <svg viewBox="0 0 24 24">
      <path d="M5 12a7 7 0 0 1 14 0v7H5z" />
      <path d="M9 12c0-1.1.9-2 2-2s2 .9 2 2v7" />
      <path d="M5 19h14" />
    </svg>
  ),
};

const numberFormat = new Intl.NumberFormat("fr-FR");
const percentFormat = new Intl.NumberFormat("fr-FR", { maximumFractionDigits: 1 });

const statusMap = {
  active: { label: "Actif", className: "status-pill status-active" },
  idle: { label: "Veille", className: "status-pill status-idle" },
  offline: { label: "Arrêt", className: "status-pill status-offline" },
};

function buildChartPaths(points) {
  if (!points.length) return { livePath: "", avgPath: "" };
  const width = 800;
  const height = 220;
  const padding = 35;
  const chartHeight = height - padding * 2;
  const maxValue =
    points.reduce((max, point) => Math.max(max, point.live || 0, point.average || 0), 0) || 1;
  const stepX = (width - padding * 2) / (points.length - 1 || 1);

  const toPath = (key) =>
    points
      .map((point, index) => {
        const value = Number(point[key] || 0);
        const x = padding + index * stepX;
        const y = height - padding - (value / maxValue) * chartHeight;
        return `${index === 0 ? "M" : "L"}${x} ${y}`;
      })
      .join(" ");

  return { livePath: toPath("live"), avgPath: toPath("average") };
}

export default function DashboardPage() {
  const { categories } = dashboardData.consumption;
  const totalConsumption = categories.reduce((sum, cat) => sum + (cat.value || 0), 0);
  const maxDevice = dashboardData.topDevices.reduce(
    (max, device) => Math.max(max, device.value || 0),
    0
  );
  const chartPaths = buildChartPaths(dashboardData.timeline);

  return (
    <DashboardShell active="dashboard">
      <header className="page-header">
        <form className="search-bar" role="search">
          <span className="search-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path d="M11 4a7 7 0 1 1 0 14 7 7 0 0 1 0-14z" />
              <path d="m20 20-4.35-4.35" />
            </svg>
          </span>
          <input type="search" name="q" placeholder="Chercher un appareil..." aria-label="Recherche appareils" />
        </form>
        <div className="header-actions">
          <button className="icon-btn" type="button" aria-label="Notifications">
            <svg viewBox="0 0 24 24" role="presentation">
              <path d="M12 3a4 4 0 0 1 4 4v2.4c0 .5.2 1 .5 1.4L18 13v1H6v-1l1.5-2.2a2 2 0 0 0 .5-1.4V7a4 4 0 0 1 4-4Z" />
              <path d="M10 18a2 2 0 0 0 4 0" />
            </svg>
          </button>
          <button className="pill-btn" type="button">
            <span className="status-dot" />
            Aujourd’hui
          </button>
        </div>
      </header>

      <section className="stats-grid" aria-label="Statistiques clés">
        {dashboardData.summary.map((card) => (
          <article className="card stat-card" key={card.id}>
            <div className="stat-head">
              <p>{card.label}</p>
              <span className="stat-icon">{ICONS[card.icon]}</span>
            </div>
            <h3>
              {typeof card.value === "number" ? numberFormat.format(card.value) : card.value}
              {card.unit}
            </h3>
            {card.detail && <small>{card.detail}</small>}
          </article>
        ))}
      </section>

      <section className="main-grid">
        <article className="card consumption-card" aria-labelledby="consumptionTitle">
          <header className="card-head">
            <div>
              <p className="section-label">Vue globale</p>
              <h2 id="consumptionTitle">Vue globale de la consommation</h2>
            </div>
            <button className="icon-btn ghost" type="button" aria-label="Synchroniser les données">
              <svg viewBox="0 0 24 24" role="presentation">
                <path d="M4 12a8 8 0 0 1 14.5-4.9" />
                <path d="M20 12a8 8 0 0 1-14.5 4.9" />
                <path d="m16 7 2-2 2 2M8 17l-2 2-2-2" />
              </svg>
            </button>
          </header>
          <div className="consumption-list">
            {categories.map((category) => {
              const percent = totalConsumption ? (category.value / totalConsumption) * 100 : 0;
              return (
                <div className="consumption-item" key={category.label}>
                  <div>
                    <strong>{category.label}</strong>
                    <span>{numberFormat.format(category.value)} kWh</span>
                  </div>
                  <div className="percent">{percentFormat.format(percent)}%</div>
                  <div className="progress-track">
                    <span className="progress-fill" style={{ width: `${percent}%` }} />
                  </div>
                </div>
              );
            })}
          </div>
          <footer className="consumption-footer">
            <div>
              <p className="label">Total mensuel</p>
              <p className="value">{numberFormat.format(totalConsumption)} kWh</p>
            </div>
            <div className="pill-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M12 3v18" />
                <path d="M6 7h12" />
                <path d="M6 12h12" />
                <path d="M6 17h12" />
              </svg>
            </div>
          </footer>
        </article>

        <div className="side-column">
          <article className="card alerts-card" aria-labelledby="alertsTitle">
            <header className="card-head">
              <div>
                <p className="section-label">Alertes</p>
                <h2 id="alertsTitle">Alertes actives</h2>
              </div>
            </header>
            <ul className="alert-list">
              {dashboardData.alerts.map((alert) => (
                <li key={alert.title} className={`alert-item ${alert.severity}`}>
                  <strong>{alert.title}</strong>
                  <span>{alert.message}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="card top-card" aria-labelledby="topTitle">
            <header className="card-head">
              <div>
                <p className="section-label">Performance</p>
                <h2 id="topTitle">Appareils les plus énergivores</h2>
              </div>
            </header>
            <ul className="device-bars">
              {dashboardData.topDevices.map((device) => {
                const percent = maxDevice ? (device.value / maxDevice) * 100 : 0;
                return (
                  <li key={device.label}>
                    <div className="row">
                      <span>{device.label}</span>
                      <span>{device.value.toFixed(1)} kW</span>
                    </div>
                    <div className="progress-track">
                      <span className="progress-fill" style={{ width: `${percent}%` }} />
                    </div>
                  </li>
                );
              })}
            </ul>
          </article>
        </div>
      </section>

      <section className="card chart-card" aria-labelledby="chartTitle">
        <header className="card-head">
          <div>
            <p className="section-label">Temps réel</p>
            <h2 id="chartTitle">Consommation en temps réel (24h)</h2>
          </div>
          <div className="chart-legend">
            <span className="legend live">Consommation réelle</span>
            <span className="legend avg">Moyenne</span>
          </div>
        </header>
        <div className="chart-wrapper">
          <svg role="img" aria-label="Courbe de consommation" viewBox="0 0 800 220">
            <path className="avg" d={chartPaths.avgPath} />
            <path className="live" d={chartPaths.livePath} />
          </svg>
          <div className="chart-axis">
            {dashboardData.timeline.map((point) => (
              <span key={point.time}>{point.time}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="card table-card" aria-labelledby="tableTitle">
        <header className="card-head">
          <div>
            <p className="section-label">Inventaire</p>
            <h2 id="tableTitle">Tous les appareils</h2>
          </div>
          <button className="pill-btn ghost" type="button">
            Exporter
          </button>
        </header>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th scope="col">Appareil</th>
                <th scope="col">Localisation</th>
                <th scope="col">Statut</th>
                <th scope="col">Consommation</th>
                <th scope="col">Température</th>
              </tr>
            </thead>
            <tbody>
              {dashboardData.devices.map((device) => {
                const status = statusMap[device.status] || { label: "N/A", className: "status-pill" };
                return (
                  <tr key={device.name}>
                    <td>{device.name}</td>
                    <td>{device.location}</td>
                    <td>
                      <span className={status.className}>{status.label}</span>
                    </td>
                    <td>{device.consumption}</td>
                    <td>{device.temperature}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </DashboardShell>
  );
}
