/**
 * Description : Récupère et affiche l’horoscope depuis une API externe.
 * Projet : Évaluation de Compétences Front-End (ECF) Juillet 2025
 * Auteur : David VAUZELLE
 * Date : 07/2025
 */
// Clé API et URL de l'API
const apiKey = "SI_DART_Sun_api_keys_!598254741369!excalibure!paramKeysOracle!887782secretNum&5882!";
const baseUrl = "https://oracles-api.sidathsoeun.fr/oracle_api.php";

// Préparer les options fetch de base
const fetchOptions = {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ api_key: apiKey })
};

// Déclaration des sélecteurs DOM
const sectionTirage = document.querySelector('.section-tirage');
const btnTirage = document.getElementById('btn-tirage');
// Seront créés dynamiquement (loader, erreur, résultats)
const chargement = document.getElementById('chargement');
const erreurMessage = "Une erreur est survenue. Veuillez réessayer.";
const resultatApi = document.getElementById('resultat-api');

// On capture le clic sur le bouton de tirage
btnTirage.addEventListener('click', function() {
    lancerTirage();
});

// Fonction pour récupérer et afficher l'horoscope des 12 signes
async function lancerTirage() {
    // Vider les résultats précédents
    resultatApi.innerHTML = "";

    // Affiche une barre de chargement à chaque tirage
    chargement.hidden = false;
    chargement.innerHTML = "<p>Chargement en cours…</p>"; // barre de chargement à styliser
    // chargement.innerHTML = "<div class='bar-chargement'></div>"; // Pour afficher la barre de chargement une fois stylisée

    try {
        // Requête POST vers l'API avec clé et signe
       const response = await fetch(baseUrl, fetchOptions);

        // Affiche un message d'erreur si la réponse est incorrecte
        if (!response.ok) throw new Error(erreurMessage);

        // Conversion de la réponse en JSON
        const data = await response.json();

        // Affichage temporaire des données récupérées (formaté JSON)
        resultatApi.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;

    } catch (error) {
        // Affiche un message d'erreur si la requête échoue
        resultatApi.innerHTML = `<p style="color:red;">Erreur : ${error.message}</p>`;
    }

    finally {
        // Cache le barre de chargement après la requête
        chargement.innerHTML = "";
        chargement.hidden = true;
    }
}