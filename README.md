# Energenius – Plateforme Web & Chatbot

Suite complète combinant un front Next.js, une API Node/Express connectée à MongoDB et un micro‑service chatbot Python (Groq). Ce document décrit l’architecture, les choix techniques, les fonctionnalités majeures et toutes les étapes pour démarrer chaque bloc.

Note de contexte : Ce projet est en cours de développement par Balsem Zouabi et Jawher Essid. Il a été initié comme un projet de startup durant le Hackathon IASTAM, lancé dès la phase d’idée. Actuellement, seule la partie chatbot du backend est complètement fonctionnelle jusqu'a maintenant  ;

---

## Architecture de travail
```
.
├── energenius-next-app/      # Frontend Next.js (App Router, TypeScript, styles CSS dédiés)
├── backend/                  # API REST Express + MongoDB (auth JWT, onboarding…)
├── chatbot-backend/          # Micro-service Flask/Groq pour le chatbot Energenius
├── Basic                     # Maquettes statiques historiques (références design)
└── images/                   # Assets communs (logo, visuels UI)
```
Flux global : l’utilisateur navigue sur `energenius-next-app`, s’authentifie auprès de `backend` (token JWT conservé en `localStorage`) puis peut piloter l’assistant via `chatbot-backend`.

---

## Choix techniques
- **Next.js 15 (App Router + TypeScript)** : rendu hybride, bundler moderne, navigation multi-pages (app, auth, dashboard).
- **Express + MongoDB** : API légère pour la gestion des comptes, onboarding (plans/boxes) et données dashboard mockées; JWT stateless => pas de cookies nécessaires.
- **Flask + Groq** : endpoint `/chat` qui encapsule l’API Groq et applique les règles métier (format du prompt, limitation CORS pour le front).
- **CSS “vanilla”** : chaque page possède son fichier (`home.css`, `init.css`, …) pour refléter fidèlement les maquettes.

---

## Fonctionnalités principales
- Pages marketing (home, produits, solutions, pricing) réutilisant le design original.
- Parcours Auth complet : inscription multi-étapes, connexion, stockage du profil/mémoire locale, redirection conditionnelle (init vs dashboard).
- Onboarding “Init” : choix du plan, slider boxes, récapitulatif et enregistrement côté API.
- Dashboard React (statistiques, graphique SVG, inventaire) + espace chatbot intégré (onglets chat/tickets/FAQ).
- Chatbot autonome (`chatbot-backend`) appelé en `fetch` depuis le front pour répondre en temps réel.

---

## Lancement du projet
### 1. Backend Node/Express
1. `cd backend`
2. Creer le fichier .env :
   ```env
   PORT=4000
   MONGO_URL=mongodb://localhost:27017/energenius
   JWT_SECRET=Tu dois le créer
   JWT_EXPIRES=7d
   ```
3. `npm install`
4. `npm run dev` (ou `npm start`) – l’API écoute sur `http://localhost:4000`.
5. Vérifiez que MongoDB tourne localement (ou utilisez Atlas) et que l’URL correspond.

### 2. Chatbot Backend (Flask + Groq)
1. `cd chatbot-backend`
2. `python3 -m venv .venv && source .venv/bin/activate`
3. `pip install -r requirements.txt`
4. Variables d’environnement :
   ```bash
   export GROQ_API_KEY="votre_clef"                               
   ```
5. `python app.py` → service disponible sur `http://localhost:5137`

### 3. Frontend Next.js
1. `cd energenius-next-app`
2. `créez `.env.local` avec :
   ```env
   NEXT_PUBLIC_API_BASE_URL=http://localhost:4000
   NEXT_PUBLIC_CHATBOT_URL=http://localhost:5001/chat
   ```
3. `npm install`
4. `npm run dev` → http://localhost:3000
5. Connectez‑vous / inscrivez‑vous. Les tokens JWT sont stockés dans `localStorage` et transmis via `Authorization: Bearer <token>` pour les routes protégées (`/api/auth/init`, `/api/auth/me`).

> **Ordre conseillé** : MongoDB → backend Express → chatbot Flask → Next.js. Une fois les trois serveurs actifs, le front peut consommer l’API (`NEXT_PUBLIC_API_BASE_URL`) et le chatbot (`NEXT_PUBLIC_CHATBOT_URL`).

---

## Notes supplémentaires
- Les fichiers HTML/CSS/JS racine servent de référence design; la version officielle est celle du dossier `energenius-next-app`.
- Les scripts npm utiles :
  - Frontend : `npm run dev`
  - Backend : `npm run dev`
