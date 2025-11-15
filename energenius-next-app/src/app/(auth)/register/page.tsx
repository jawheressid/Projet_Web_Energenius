"use client";

import Link from "next/link";
import { useState, type FormEvent, type MouseEvent } from "react";
import { useRouter } from "next/navigation";
import { API_BASE_URL } from "@/lib/config";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;

export default function RegisterPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const validateStepOne = (form: HTMLFormElement) => {
    const formData = new FormData(form);
    const firstName = formData.get("firstName")?.toString().trim() ?? "";
    const lastName = formData.get("lastName")?.toString().trim() ?? "";
    if (!firstName || !lastName) {
      setError("Veuillez renseigner prénom et nom.");
      return false;
    }
    setError("");
    return true;
  };

  const handleNext = (event: MouseEvent<HTMLButtonElement>) => {
    const form = event.currentTarget.form;
    if (form && validateStepOne(form)) {
      setStep(2);
    }
  };

  const handleBack = () => {
    setError("");
    setStep(1);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const email = formData.get("email")?.toString().trim() ?? "";
    const password = formData.get("password")?.toString() ?? "";
    const confirm = formData.get("confirm")?.toString() ?? "";
    const accept = formData.get("accept") === "on";
    const firstName = formData.get("firstName")?.toString().trim() ?? "";
    const lastName = formData.get("lastName")?.toString().trim() ?? "";
    const company = formData.get("company")?.toString().trim() || null;

    if (!emailRegex.test(email)) {
      setError("Email invalide.");
      return;
    }
    if (!passwordRegex.test(password)) {
      setError("Mot de passe: 8+ caractères avec chiffres et lettres.");
      return;
    }
    if (password !== confirm) {
      setError("Les mots de passe ne correspondent pas.");
      return;
    }
    if (!accept) {
      setError("Vous devez accepter les conditions.");
      return;
    }

    setLoading(true);
    setError("");
    try {
      const payload = {
        firstName,
        lastName,
        company,
        email,
        password,
      };

      const response = await fetch(`${API_BASE_URL}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      type RegisterResponse = {
        token?: string;
        user?: unknown;
        message?: string;
      };
      const data = (await response.json().catch(() => ({}))) as RegisterResponse;
      if (!response.ok) {
        throw new Error(data?.message || "Erreur serveur");
      }

      if (typeof window !== "undefined") {
        if (data?.token) {
          localStorage.setItem("auth_token", data.token);
        }
        if (data?.user) {
          localStorage.setItem("current_user", JSON.stringify(data.user));
        }
        localStorage.setItem(
          "signup_profile",
          JSON.stringify({ firstName: payload.firstName, lastName: payload.lastName })
        );
      }

      router.push("/init");
    } catch (err) {
      const message = err instanceof Error ? err.message : "Une erreur est survenue.";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-page">
      <main>
        <section className="section section-light">
          <div className="container">
            <div className="signup-head">
              <h1>Créer un compte</h1>
              <p>Rejoignez des milliers d’entreprises optimisant leur énergie</p>
              <div className="steps">
                <span className={`step ${step === 1 ? "active" : ""}`} />
                <span className={`step ${step === 2 ? "active" : ""}`} />
              </div>
            </div>

            <form className="card" onSubmit={handleSubmit} noValidate>
              <div className={`step-pane ${step === 1 ? "" : "hidden"}`}>
                  <label>
                    <span>Prénom</span>
                    <input type="text" name="firstName" placeholder="Prenom" required />
                  </label>
                  <label>
                    <span>Nom</span>
                    <input type="text" name="lastName" placeholder="Nom" required />
                  </label>
                  <label>
                    <span>Entreprise (optionnel)</span>
                    <input type="text" name="company" placeholder="Votre entreprise" />
                  </label>
                  <div className="actions">
                    <button type="button" className="btn btn-primary" onClick={handleNext}>
                      Suivant →
                    </button>
                  </div>
                  <div className="auth-alt">
                    <span>Vous avez déjà un compte ?</span>
                    <Link href="/login" className="btn btn-outline">
                      Se connecter
                    </Link>
                  </div>
                </div>

              <div className={`step-pane ${step === 2 ? "" : "hidden"}`}>
                  <label>
                    <span>Email</span>
                    <input type="email" name="email" placeholder="vous@exemple.com" required />
                  </label>
                  <label>
                    <span>Mot de passe</span>
                    <div className="password-field">
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Min. 8 caractères"
                        required
                      />
                      <button
                        type="button"
                        className="reveal"
                        aria-label="Afficher / masquer"
                        onClick={() => setShowPassword((value) => !value)}
                      />
                    </div>
                  </label>
                  <label>
                    <span>Confirmer le mot de passe</span>
                    <div className="password-field">
                      <input
                        type={showConfirm ? "text" : "password"}
                        name="confirm"
                        placeholder="Confirmez votre mot de passe"
                        required
                      />
                      <button
                        type="button"
                        className="reveal"
                        aria-label="Afficher / masquer"
                        onClick={() => setShowConfirm((value) => !value)}
                      />
                    </div>
                  </label>
                  <label className="terms">
                    <input type="checkbox" name="accept" required />{" "}
                    <span>
                      J’accepte les <a href="#">conditions d’utilisation</a> et la{" "}
                      <a href="#">politique de confidentialité</a>
                    </span>
                  </label>
                  <div className="actions">
                    <button type="button" className="btn btn-outline" onClick={handleBack}>
                      Retour
                    </button>
                    <button className="btn btn-primary" type="submit" disabled={loading}>
                      {loading ? "Création..." : "Créer mon compte ✓"}
                    </button>
                  </div>
                  <div className="auth-alt">
                    <span>Vous avez déjà un compte ?</span>
                    <Link href="/login" className="btn btn-outline">
                      Se connecter
                    </Link>
                  </div>
                </div>

              {error && (
                <div className="form-error" role="alert">
                  {error}
                </div>
              )}
            </form>

            <p className="foot-note">14 jours gratuits • Pas de carte bancaire requise • Annulation à tout moment</p>
          </div>
        </section>
      </main>
    </div>
  );
}
