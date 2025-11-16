#  SmartSort – Application IA de tri intelligent

SmartSort est une application web complète (frontend + backend + IA) développée pour aider les utilisateurs à trier leurs déchets grâce à une photo ou une description textuelle.  
Le système prédit automatiquement la bonne catégorie (plastique, métal, papier, verre, organique, autre) et conserve l’historique des prédictions.

 **Tech stack : React + Vite + FastAPI + MobilenetV2 + TF-IDF + SQLite**

---

##  Fonctionnalités

###  Classification d’image  
L’utilisateur envoie une photo → IA MobilenetV2 → catégorie prédite.

###  Classification textuelle  
L’utilisateur décrit un objet → NLP TF-IDF + Logistic Regression → catégorie prédite.

### Historique des prédictions  
Toutes les prédictions sont enregistrées dans SQLite et affichées dans l’interface.

###  Interface simple & responsive  
Frontend React moderne, rapide, clair et agréable.

###  API REST  
Backend FastAPI performant, documenté automatiquement via **/docs** (Swagger).

---

##  Architecture du projet
```bash
smartsort/
│── backend/
│   │── app.py
│   │── model.py
│   │── database.py
│   │── saved_model.pkl
│   │── requirements.txt
│
│── frontend/
│   │── src/
│   │   │── App.jsx
│   │   │── components/
│   │   │     ├── UploadCard.jsx
│   │   │     └── History.jsx
│   │── package.json
│   │── vite.config.js
│
│── README.md
```
---

## 🔧 Installation rapide

Voici comment exécuter SmartSort en local.

---

## 1️ Backend (FastAPI)

### Installer les dépendances
Depuis le dossier `backend/` :

```bash
pip install -r requirements.txt
python -m uvicorn app:app --reload --host 0.0.0.0 --port 8000
```
Depuis le dossier `frontend/` :
```bash
npm install
npm install axios
npm run dev
```


