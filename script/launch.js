// Déclaration du message que je veux afficher
let message = "Entrer";

// Affichage lettre par lettre
function afficherTexte(message) {
    let i = 0;

    let cible = document.getElementById("msg");

    const intervalle = setInterval(() => {
        if (i < message.length) {
            cible.innerHTML += message[i];
            i++;
        } else if (cible.textContent.length = message.length) {
            clearInterval(intervalle);
            cible.innerHTML = "";
            afficherTexte(message);
        }
    }, 300);

    // console.log(cible.textContent);
    // console.log(cible.textContent.length);

    if ( cible.length < 0) {
        console.log("entre dans le if");
    }
}


afficherTexte(message);





// Fonction qui gère la rotation
let degre = 0;
setInterval(() => {

    let btn = document.getElementById("load");
    btn.setAttribute("style", "transform: rotate(" + degre + "deg);");
    degre = degre + 10;

    // Bloque à 360° pour éviter qu'il continue à l'infini
    if (degre >= 361) {
        degre = 0;
    }
}, 100);




// récupère le canva par sa classe
// let grad_effect = document.getElementsByClassName("gradient");