// Fonction pour écrire le message 
function titre() {

    // Création du tableau qui contient les lettres du message
    let lettres = message.split("");

    // Récupération de la div par son id
    let cible = document.getElementById("element");

    // Pour chaque lettres du tableau message
    for (let i = 0; i < lettres.length; i++) {



        // Création de l'élement <span>
        let span = document.createElement("span");

        // Ajout d'un class pour gérer le CSS
        span.setAttribute("class", "lettre");

        // Ajout id pour tester l'affichage (effets, style..)
        span.setAttribute("id", i);

        // Ne les affiche pas tous de suite
        span.setAttribute("style", "display: none;")

        // Ajout des éléments dans la div
        cible.appendChild(span);

        // Ajout du contenu à afficher
        span.innerHTML = lettres[i];

    };

};

titre();


// Fonction qui gère la rotation
let degre = 0;
function rotation() {
    let btn = document.querySelector("button");
    btn.setAttribute("style", "transform: rotate(" + degre + "deg);");
    degre = degre + 10;

    // Bloque à 360° pour éviter qu'il continue à l'infini
    if (degre >= 361) {
        degre = 0;
    }
};

setInterval(rotation, 100);