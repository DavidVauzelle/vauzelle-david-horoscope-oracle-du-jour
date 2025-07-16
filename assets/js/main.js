/**
 * Description : Récupère et affiche l’horoscope depuis une API externe.
 * Projet : Évaluation de Compétences Front-End (ECF) Juillet 2025
 * Auteur : David VAUZELLE
 * Date : 07/2025
 */
// === Configuration API ===

// Clé API et URL de l'API
const apiKey = "SI_DART_Sun_api_keys_!598254741369!excalibure!paramKeysOracle!887782secretNum&5882!";
const baseUrl = "https://oracles-api.sidathsoeun.fr/oracle_api.php";

// Préparer les options fetch de base
const fetchOptions = {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ api_key: apiKey })
};

// === Sélecteurs DOM ===

// Déclaration des sélecteurs DOM
const sectionTirage = document.querySelector('.section-tirage');
const btnTirage = document.getElementById('btn-tirage');

// Éléments de feedback visuel (chargement, erreur, résultats)
const chargement = document.getElementById('barre-chargement');
const erreurDiv = document.getElementById('erreur-message');
const erreurMessage = "Une erreur est survenue. Veuillez réessayer.";
const resultatApi = document.getElementById('resultat-api');

// === Gestion des événements ===

// On capture le clic sur le bouton de tirage
btnTirage.addEventListener('click', function() {
    lancerTirage();
});

// === Fonction principale : lancerTirage() ===

// Fonction pour récupérer et afficher l'horoscope des 12 signes
async function lancerTirage() {
    // Réinitialisation de l'interface
    erreurDiv.hidden = true;
    // Vider les résultats précédents
    resultatApi.innerHTML = "";

    // Affiche une barre de chargement à chaque tirage
    chargement.hidden = false;
    chargement.removeAttribute('aria-hidden');
    chargement.style.width = '0';
    chargement.style.animation = 'none';
    void chargement.offsetWidth;  // reflow
    chargement.style.animation = 'loading 1.2s ease-in-out forwards';
    btnTirage.disabled = true; // Désactive le bouton pendant le chargement

    // On note le temps de départ du chargement
    const debutChargement = Date.now();
    
    try {
        // Requête POST vers l'API avec clé
        const response = await fetch(baseUrl, fetchOptions);

        // Erreur si réponse incorrecte
        if (!response.ok) throw new Error(erreurMessage);

        // Conversion de la réponse en JSON
        const data = await response.json();

        // Calcul du temps écoulé
        const tempsEcoule = Date.now() - debutChargement;
        const delaiRestant = Math.max(0, 1000 - tempsEcoule); // minimum 1 seconde

        // Attente éventuelle pour garantir au moins 1 seconde de loader
        await new Promise(resolve => setTimeout(resolve, delaiRestant));

        // Extraction de l'objet 'horoscope' contenant les citations par signe depuis la réponse API
        const horoscopes = data.horoscope;

        // === Zone d'affichage des résultats de l'API ===

        // Vide la Zone d’affichage des résultats
        resultatApi.innerHTML = "";

        // Parcours des signes avec for...in
        for (const signe in horoscopes) {
            // Créer une carte pour chaque signe
            const carte = document.createElement("article");
            carte.setAttribute('tabindex', '0');
            carte.setAttribute('aria-label', `Horoscope du signe ${signe}`);
            carte.classList.add("carte-horoscope"); // Ajout d'une classe CSS pour styliser la carte

            // Création du titre (nom du signe)
            const titre = document.createElement("h2");
            titre.textContent = signe; // Permet de récupérer et d'afficher le nom du signe

            // Citation du jour
            const citation = document.createElement("blockquote");
            citation.classList.add('horoscope')
            citation.textContent = horoscopes[signe];

            // Ajout des éléments dans la carte
            carte.appendChild(titre);
            carte.appendChild(citation);

            // Ajout de la carte dans la zone résultat
            resultatApi.appendChild(carte);
        }

    // === Gestion des erreurs et chargement ===

    } catch (error) {
        // Assure que la barre de chargement reste visible 1s minimum avant de montrer l'erreur
        const tempsEcoule = Date.now() - debutChargement;
        const delaiRestant = Math.max(0, 1000 - tempsEcoule);
        await new Promise(resolve => setTimeout(resolve, delaiRestant));

        // En cas d'erreur (réseau, API, etc.), on affiche un message accessible à l'utilisateur
        erreurDiv.querySelector('p').textContent = erreurMessage;
        erreurDiv.hidden = false;

        // On vide la zone de résultats pour ne pas afficher d'anciens résultats
        resultatApi.innerHTML = "";
    }

    finally {
        // Fin du traitement : on masque la barre de chargement visuellement et pour les technologies d'assistance
        btnTirage.disabled = false; // Réactive le bouton de tirage
        chargement.innerHTML = "";
        chargement.style.animation = 'none';
        chargement.hidden = true;
        chargement.setAttribute('aria-hidden', 'true');
    }
}