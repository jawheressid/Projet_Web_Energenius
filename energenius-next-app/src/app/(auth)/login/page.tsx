"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { API_BASE_URL } from "@/lib/config";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email")?.toString().trim() ?? "";
    const password = formData.get("password")?.toString() ?? "";

    if (!emailRegex.test(email)) {
      setError("Email invalide.");
      return;
    }
    if (!password) {
      setError("Veuillez saisir votre mot de passe.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      type LoginResponse = {
        token?: string;
        user?: unknown;
        message?: string;
      };
      const data = (await response.json().catch(() => ({}))) as LoginResponse;
      if (!response.ok) {
        throw new Error(data?.message || "Identifiants invalides");
      }
      if (typeof window !== "undefined") {
        if (data?.token) localStorage.setItem("auth_token", data.token);
        if (data?.user) localStorage.setItem("current_user", JSON.stringify(data.user));
      }
      const hasConfig = Boolean(data?.user && (data.user.plan || data.user.boxes));
      router.push(hasConfig ? "/dashboard" : "/init");
    } catch (err) {
      setError(err.message || "Erreur de connexion.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <main>
        <section className="section section-light">
          <div className="container">
            <div className="signup-head">
              <h1>Connexion</h1>
              <p>Accédez à votre compte Energenius</p>
            </div>

            <form className="card" onSubmit={handleSubmit} noValidate>
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
                    placeholder="Votre mot de passe"
                    required
                  />
                  <button
                    type="button"
                    className="reveal"
                    aria-label="Afficher / masquer le mot de passe"
                    onClick={() => setShowPassword((value) => !value)}
                  />
                </div>
              </label>
              <div className="row-between">
                <a className="link" href="#">
                  Mot de passe oublié ?
                </a>
              </div>
              <div className="actions">
                <button className="btn btn-primary" type="submit" disabled={loading}>
                  {loading ? "Connexion..." : "Se connecter →"}
                </button>
              </div>
              <div className="auth-alt">
                <span>Nouveau sur Energenius ?</span>
                <Link className="btn btn-outline" href="/register">
                  Créer un compte
                </Link>
              </div>
              {error && (
                <div className="form-error" role="alert">
                  {error}
                </div>
              )}
            </form>

            <p className="foot-note">
              En vous connectant, vous acceptez nos <a href="#">conditions d’utilisation</a> et notre{" "}
              <a href="#">politique de confidentialité</a>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
