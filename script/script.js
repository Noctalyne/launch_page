// Déclaration du message que je veux afficher
let message = "ENTRER";

// Déclaration des constantes 
const bouton = document.getElementById("load");

const msg = document.getElementById("msg");

const logo = document.getElementById("logo");


afficherTexte(message);


// Affichage lettre par lettre
function afficherTexte(message) {

    let i = 0;

    const intervalle = setInterval(() => {
        if (i < message.length) {
            msg.setAttribute("class", "texte");
            msg.innerHTML += message[i];
            i++;
        } else if (msg.textContent.length = message.length) {

            logo.setAttribute("src", "./imgs/test_logo.svg");

            clearInterval(intervalle);

            // Initialise le "timer"
            let temps = 600;

            for (clignotement = 0; clignotement < 3; clignotement++) {

                effet_desactiver(temps);
                temps += 200; // augmente le "timer"
                // console.log("temps : " + temps);

                effet_activer(temps);
                temps += 200; // augmente le "timer"
                // console.log("temps : " + temps);
            }

            setTimeout(() => {
                msg.setAttribute("class", "texte effet_on");
                bouton.setAttribute("class", "load");
                msg.innerHTML = "";
                afficherTexte(message);
            }, 6000);

        }

    }, 500);

}

function effet_activer(temps) {
    const active = setTimeout(() => {

        // logo.setAttribute("src", "./imgs/img.svg");
        logo.src = "./imgs/img.svg"; // version simplifié

        msg.setAttribute("class", "texte effet_on");

        bouton.setAttribute("class", "load _glow");

        clearTimeout(active);
    }, temps);
}

function effet_desactiver(temps) {
    const desactive = setTimeout(() => {

        logo.setAttribute("src", "./imgs/test_logo.svg");

        msg.setAttribute("class", "texte effet_off");

        bouton.setAttribute("class", "load");

        clearTimeout(desactive);
    }, temps);
}


// Fonction qui gère la rotation
let degre = 0;
setInterval(() => {

    bouton.setAttribute("style", "transform: rotate(" + degre + "deg);");
    degre = degre + 10;

    // Bloque à 360° pour éviter qu'il continue à l'infini
    if (degre >= 361) {
        degre = 0;
    }

}, 200);





// Test changer thème 

function changerTheme() {

    let theme = document.getElementById("theme");

    let theme_actuel = document.querySelector("html").getAttribute("data-theme");

    // console.log(theme);

    if (theme_actuel === "dark") {
        theme.setAttribute("aria-label", "Changer le thème en sombre");
        document.querySelector("html").setAttribute("data-theme", "light");

    } else {
        theme.setAttribute("aria-label", "Changer le thème en clair");
        document.querySelector("html").setAttribute("data-theme", "dark");

    }

}

