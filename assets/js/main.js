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
    headers: {
    'Content-Type': 'application/json'
    },
    body: JSON.stringify({ api_key: apiKey })
};