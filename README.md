# 🚀 Projet ECF Front-End — Horoscope du jour

## 🎯 Objectif du projet
Application web permettant d’afficher les horoscopes du jour pour les 12 signes astrologiques.  
L’utilisateur clique sur un bouton pour déclencher une requête vers une API externe, et les messages sont affichés dynamiquement sous forme de cartes.

📝 Projet réalisé dans le cadre de l’Évaluation de Compétences Front-End.

---

## 🛠️ Technologies utilisées

- HTML5 sémantique  
- CSS3 (Flexbox, Grid, Media Queries)  
- JavaScript natif (DOM, Fetch API)  
- API Horoscope (POST + clé d'API)  
- Git & GitHub  
- Visual Studio Code
- Teams (suivi des tâches)

---

## ✨ Fonctionnalités

- Bouton pour « Tirer les 12 messages »
- Récupération des données depuis une API  
- Affichage dynamique de l’horoscope dans le DOM  
- Affichage d’un loader pendant le chargement  
- Gestion des erreurs (message d’erreur si la requête échoue)  
- Responsive design (mobile, tablette, desktop)  
- Accessibilité (contrastes, ARIA, etc)  
- Déploiement sur GitHub Pages

---

## 🌐 Lien vers le site en ligne

👉 [Accéder au site](https://davidvauzelle.github.io/vauzelle-david-horoscope-oracle-du-jour/)

---

## 📁 Lien vers le dépôt GitHub
🔗 [Voir le dépôt GitHub](https://github.com/DavidVauzelle/vauzelle-david-horoscope-oracle-du-jour)

---

## 🗂️ Structure du projet
```
/ (Racine du projet)
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   └── images/
│       ├── suivi-de-projet/
│       ├── maquette/
│       └── tests/
│       └── favicon.ico (facultatif)
├── index.html
├── README.md
└── .gitignore
```

---

## 📂 Organisation des fichiers
Le projet est structuré de façon claire pour faciliter la maintenance et la compréhension :

Le dossier `assets/` contient les ressources statiques du projet, réparties en sous-dossiers :  
- `css/` pour les styles, avec le fichier principal `style.css` qui gère l’apparence et la responsivité.  
- `js/` pour les scripts, avec `main.js` qui gère la logique dynamique, notamment les appels à l’API externe permettant de récupérer les horoscopes du jour.  
- `images/` pour les images utilisées dans le projet, incluant les captures d’écran du suivi de projet, maquettes et tests.

À la racine, on trouve :  
- `index.html`, le fichier principal qui structure le contenu de la page.  
- `README.md` avec la documentation du projet.  

Cette organisation permet une séparation claire entre contenu, style et comportement, facilitant la maintenance et l’évolution du projet.

--- 

## 💻 Installation et utilisation en local

1. **Cloner le dépôt Git :**  
   `git clone https://github.com/DavidVauzelle/vauzelle-david-horoscope-oracle-du-jour.git`

2. **Ouvrir le projet :**  
   Dans un éditeur comme Visual Studio Code

3. **Lancer localement :**  
   Ouvrir `index.html` dans votre navigateur (aucun serveur requis)

---

## ✅ Suivi de projet

📌 Organisation du travail selon une méthode Kanban Agile, avec les colonnes :
À faire · En cours · À tester · Terminé · Livré

📸 Des captures d’écran illustrant la gestion et le suivi du projet (via Microsoft Teams) sont disponibles dans :
`/assets/images/suivi-de-projet/`

---

## 🖼️ Maquette du projet

Une maquette illustrant le prototype visuel des versions Desktop, Tablette et Mobile est disponible ci-dessous :

![Maquette](/assets/images/maquette/maquette.png)

---

## 🔍 Tests et validation

### Tests de compatibilité navigateurs et responsive

Le projet a été testé sur plusieurs navigateurs pour assurer une expérience fluide et cohérente :  
- Google Chrome  
- Microsoft Edge  
- Mozilla Firefox  

Le responsive design a été validé sur desktop, tablette et mobile, garantissant une adaptation correcte de l’interface selon la taille d’écran.

### Tests fonctionnels

Les fonctionnalités suivantes ont été testées avec succès :  
- Bouton « Tirer les 12 messages » (désactivation pendant le chargement)  
- Affichage du loader pendant la récupération des données  
- Récupération des horoscopes via l’API et affichage dynamique dans le DOM  
- Gestion et affichage des erreurs en cas de problème de requête  

### Tests d’accessibilité et qualité technique

Des tests d’accessibilité ont été réalisés, notamment sur :  
- Contrastes des couleurs  
- Utilisation des attributs ARIA  
- Navigation au clavier  

Le projet obtient un score parfait lors de l’audit Lighthouse, attestant de la qualité technique et de l’accessibilité de l’application :  

![Score Lighthouse](/assets/images/tests/lighthouse-score.png)

---

🧑‍💻 Auteur : David Vauzelle  
📅 Juillet 2025  
🎓 Dans le cadre de l'Évaluation de Compétences Front-End (ECF)