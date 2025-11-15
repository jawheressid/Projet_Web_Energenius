"use client";

import { useEffect, useMemo, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { API_BASE_URL } from "@/lib/config";

const planOptions = [
  { value: "starter", title: "Starter", price: "49", currency: "TND", subtitle: "Jusqu'à 5 boxes" },
  { value: "professional", title: "Professional", price: "99", currency: "TND", subtitle: "Jusqu'à 25 boxes" },
  { value: "enterprise", title: "Enterprise", price: "Personnalisé", currency: "", subtitle: "Boxes illimitées" },
];

export default function InitPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState("professional");
  const [boxes, setBoxes] = useState(4);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [welcome, setWelcome] = useState("Bienvenue");

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const profile = JSON.parse(localStorage.getItem("signup_profile") || "null");
      if (profile) {
        const label = [profile.firstName, profile.lastName].filter(Boolean).join(" ").trim();
        if (label) setWelcome(`Bienvenue ${label}`);
      }
    } catch {
    }
  }, []);

  const sliderMax = useMemo(() => {
    if (selectedPlan === "starter") return 5;
    if (selectedPlan === "professional") return 25;
    return 100;
  }, [selectedPlan]);

  useEffect(() => {
    if (boxes > sliderMax) {
      setBoxes(sliderMax);
    }
  }, [sliderMax, boxes]);

  const handlePlanSubmit = () => {
    if (!selectedPlan) {
      setError("Veuillez sélectionner un plan.");
      return;
    }
    setError("");
    setStep(2);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!selectedPlan) {
      setError("Veuillez sélectionner un plan avant de continuer.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const payload = { plan: selectedPlan, boxes: boxes || 1 };
      const headers = { "Content-Type": "application/json" };
      if (typeof window !== "undefined") {
        const token = localStorage.getItem("auth_token");
        if (token) headers.Authorization = `Bearer ${token}`;
      }

      const response = await fetch(`${API_BASE_URL}/api/auth/init`, {
        method: "POST",
        headers,
        body: JSON.stringify(payload),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(data?.message || "Erreur serveur");
      }
      if (typeof window !== "undefined") {
        if (data?.user) localStorage.setItem("current_user", JSON.stringify(data.user));
        localStorage.setItem("account_init", JSON.stringify(payload));
      }
      router.push("/dashboard");
    } catch (err) {
      setError(err.message || "Impossible d'enregistrer la configuration.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="init-page">
      <main>
        <section className="section section-light">
          <div className="container">
            <div className="setup-head">
              <h1>{welcome}</h1>
              <p>Configurez votre compte pour commencer</p>
              <div className="steps">
                <span className={`step ${step === 1 ? "active" : ""}`} />
                <span className={`step ${step === 2 ? "active" : ""}`} />
              </div>
            </div>

            <form className="card" onSubmit={handleSubmit} noValidate>
              {step === 1 && (
                <div className="step-pane">
                  <h2>Choisissez votre plan</h2>
                  <p className="muted">Vous pourrez changer de plan plus tard.</p>
                  <div className="plans">
                    {planOptions.map((plan) => (
                      <label className="plan-card" key={plan.value}>
                        <input
                          type="radio"
                          name="plan"
                          value={plan.value}
                          checked={selectedPlan === plan.value}
                          onChange={() => setSelectedPlan(plan.value)}
                        />
                        <div className="content">
                          <h3>{plan.title}</h3>
                          <div className={`price ${plan.value === "enterprise" ? "custom" : ""}`}>
                            <span className="v">{plan.price}</span>
                            {plan.currency && <span className="c">{plan.currency}</span>}
                            {plan.value !== "enterprise" && <small>/mois</small>}
                          </div>
                          <ul>
                            <li>{plan.subtitle}</li>
                            <li>Dashboard complet</li>
                            <li>Support prioritaire</li>
                          </ul>
                        </div>
                      </label>
                    ))}
                  </div>
                  <div className="actions center">
                    <button type="button" className="btn btn-primary" onClick={handlePlanSubmit}>
                      Suivant →
                    </button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="step-pane">
                  <h2>Combien de boxes IoT allez-vous installer ?</h2>
                  <p className="muted">Cette information permet de configurer votre abonnement</p>
                  <div className="box-card">
                    <div className="row">
                      <span className="label">Nombre de boxes</span>
                      <span className="count">{boxes}</span>
                    </div>
                    <input
                      type="range"
                      min={1}
                      max={sliderMax}
                      value={boxes}
                      onChange={(event) => setBoxes(Number(event.target.value))}
                    />
                    <div className="row small">
                      <span>1</span>
                      <span>{selectedPlan === "enterprise" ? "100+" : sliderMax}</span>
                    </div>
                    <hr />
                    <div className="summary">
                      <div>
                        <span>Plan</span>
                        <strong>{selectedPlan.charAt(0).toUpperCase() + selectedPlan.slice(1)}</strong>
                      </div>
                      <div>
                        <span>Boxes</span>
                        <strong>{boxes}</strong>
                      </div>
                    </div>
                  </div>
                  <div className="actions center">
                    <button type="button" className="btn btn-outline" onClick={() => setStep(1)}>
                      Retour
                    </button>
                    <button type="submit" className="btn btn-primary" disabled={loading}>
                      {loading ? "Enregistrement..." : "Terminer ✓"}
                    </button>
                  </div>
                </div>
              )}

              {error && (
                <div className="form-error" role="alert">
                  {error}
                </div>
              )}
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
