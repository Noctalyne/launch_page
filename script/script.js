// Déclaration du message que je veux afficher
let message = "ENTRER";


afficherTexte(message);


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


            premier = setTimeout(() => {
                cible.setAttribute("class", "effet_on");
                clearTimeout(premier);
            }, 200);

            
            deux = setTimeout(() => {
                cible.setAttribute("class", "effet_off");
                clearTimeout(deux);
            }, 400);


            trois = setTimeout(() => {
                cible.setAttribute("class", "effet_on");
                clearTimeout(trois);
            }, 600);

            setTimeout(() => {
                cible.removeAttribute("class");
                cible.innerHTML = "";
                afficherTexte(message);
            }, 1000);

        }

    }, 500);

}



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