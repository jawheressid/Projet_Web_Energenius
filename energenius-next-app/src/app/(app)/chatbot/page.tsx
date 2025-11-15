"use client";

import { useState } from "react";
import DashboardShell from "@/components/dashboard/DashboardShell";
import { CHATBOT_ENDPOINT } from "@/lib/config";

const suggestions = ["Suivre ma consommation", "Créer une alerte", "Optimiser mes coûts", "État des appareils"];

const faqEntries = [
  {
    question: "Comment ajouter un nouvel appareil ?",
    answer: 'Ouvrez “Appareils”, cliquez sur “Ajouter un appareil” et suivez les étapes.',
  },
  {
    question: "Puis-je changer de plan à tout moment ?",
    answer: "Oui, depuis “Offres & Abonnement”. Le changement est immédiat.",
  },
  {
    question: "Comment lire les données de consommation ?",
    answer: "Consultez le Dashboard et utilisez les filtres pour détailler la période souhaitée.",
  },
];

const initialMessages = [
  {
    id: "welcome",
    author: "bot",
    content: "Bonjour ! Je suis l'assistant Energenius. Comment puis-je vous aider aujourd'hui ?",
    timestamp: Date.now(),
  },
];

export default function ChatbotPage() {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
 const [waiting, setWaiting] = useState(false);
  const [activeTab, setActiveTab] = useState("chatbot");
  const [expandedFaq, setExpandedFaq] = useState(null);

  const handleSend = async (event) => {
    event.preventDefault();
    const text = input.trim();
    if (!text || waiting) return;
    setInput("");
    const newMessage = { id: crypto.randomUUID?.() || String(Date.now()), author: "user", content: text, timestamp: Date.now() };
    setMessages((prev) => [...prev, newMessage]);
    setWaiting(true);
    try {
      const response = await fetch(CHATBOT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(data?.error || "Erreur serveur");
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID?.() || `${Date.now()}-bot`,
          author: "bot",
          content: data?.reply || "Réponse reçue.",
          timestamp: Date.now(),
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID?.() || `${Date.now()}-bot-error`,
          author: "bot",
          content: "Impossible de contacter le chatbot pour le moment. Merci de réessayer.",
          timestamp: Date.now(),
        },
      ]);
    } finally {
      setWaiting(false);
    }
  };

  return (
    <DashboardShell active="chatbot">
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

      <section className="card support-card">
        <div className="support-header">
          <div>
            <p className="section-label">Support & Chatbot</p>
            <h1>Obtenez de l’aide en temps réel ou créez un ticket</h1>
            <p className="text-muted">Discutez avec l’assistant Energenius, suivez vos tickets ou consultez la FAQ.</p>
          </div>
        </div>

        <div className="tablist" role="tablist" aria-label="Modes de support">
          <button
            type="button"
            className={`tab-button ${activeTab === "chatbot" ? "active" : ""}`}
            onClick={() => setActiveTab("chatbot")}
          >
            Chatbot Energenius
          </button>
          <button
            type="button"
            className={`tab-button ${activeTab === "faq" ? "active" : ""}`}
            onClick={() => setActiveTab("faq")}
          >
            Questions fréquentes
          </button>
        </div>

        {activeTab === "chatbot" && (
          <div className="tab-panel">
            <div className="chat-panel">
              <div className="chat-history" aria-live="polite">
                {messages.map((message) => (
                  <div key={message.id} className={`message ${message.author}`}>
                    <p>{message.content}</p>
                    <time>{new Date(message.timestamp).toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })}</time>
                  </div>
                ))}
                {waiting && (
                  <div className="message bot typing" aria-label="L'assistant est en train d'écrire">
                    <span className="typing-dot" />
                    <span className="typing-dot" />
                    <span className="typing-dot" />
                  </div>
                )}
              </div>
              <form className="chat-input" onSubmit={handleSend}>
                <label className="sr-only" htmlFor="chatInput">
                  Votre message
                </label>
                <textarea
                  id="chatInput"
                  rows={2}
                  placeholder="Posez une question..."
                  autoComplete="off"
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                />
                <button type="submit" aria-label="Envoyer">
                  <svg viewBox="0 0 24 24">
                    <path d="M3 12 20 5l-5 7 5 7-17-7Z" />
                  </svg>
                </button>
              </form>
              <div className="chat-suggestions">
                Essayez&nbsp;:
                {suggestions.map((idea) => (
                  <button
                    key={idea}
                    type="button"
                    className="suggestion-pill"
                    onClick={() => setInput(idea)}
                  >
                    {idea}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "faq" && (
          <div className="tab-panel">
            <div className="faq-list">
              {faqEntries.map((entry, index) => {
                const expanded = expandedFaq === index;
                return (
                  <article key={entry.question} className={`faq-item ${expanded ? "expanded" : ""}`}>
                    <button
                      type="button"
                      className="faq-question"
                      onClick={() => setExpandedFaq(expanded ? null : index)}
                    >
                      <span>{entry.question}</span>
                      <span aria-hidden="true">▾</span>
                    </button>
                    <div className="faq-answer">{entry.answer}</div>
                  </article>
                );
              })}
            </div>
          </div>
        )}
      </section>
    </DashboardShell>
  );
}
