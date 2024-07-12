// Déclaration du message que je veux afficher
let message = "ENTRER";

// Déclaration des constantes 
const bouton = document.getElementById("load");

const msg = document.getElementById("msg");


// function global() {
//     if (msg == message) {
//         afficherTexte(message);
//     } 
// }
// global();



afficherTexte(message);


// Affichage lettre par lettre
function afficherTexte(message) {
    let i = 0;

    // let cible = document.getElementById("msg");

    const intervalle = setInterval(() => {
        if (i < message.length) {
            msg.innerHTML += message[i];
            i++;
        } else if (msg.textContent.length = message.length) {
            clearInterval(intervalle);

            for (i=200; i < 1200; i+200) {
                console.log("i = " + i);
            }

            effet_activer(200);
            effet_desactiver(400);

            effet_activer(600);
            effet_desactiver(800);

            effet_activer(1000);
            effet_desactiver(1200);


            setTimeout(() => {
                msg.removeAttribute("class");
                bouton.setAttribute("class", "load");
                msg.innerHTML = "";
                afficherTexte(message);
            }, 5000);

        }

    }, 500);

}

function effet_activer(temps) {
    const activ = setTimeout(() => {
        msg.setAttribute("class", "effet_on");
        bouton.setAttribute("class", "load _glow");
        clearTimeout(activ);
    }, temps);
}

function effet_desactiver(temps) {
    deux = setTimeout(() => {
        msg.setAttribute("class", "effet_off");
        bouton.setAttribute("class", "load");
        clearTimeout(deux);
    }, temps); // changer le délai +200
}


// Fonction qui gère la rotation
let degre = 0;
setInterval(() => {

    // let btn = document.getElementById("load");

    bouton.setAttribute("style", "transform: rotate(" + degre + "deg);");
    degre = degre + 10;

    // Bloque à 360° pour éviter qu'il continue à l'infini
    if (degre >= 361) {
        degre = 0;
        // btn.setAttribute("class", "load _glow");
    }
    // else {
    //     btn.setAttribute("class", "load _glow");
    // }
}, 200);