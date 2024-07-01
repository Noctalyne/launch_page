
// récupère le canva par sa classe
// let grad_effect = document.getElementsByClassName("gradient");


// Fonction qui gère la rotation
let degre = 0;
function rotation() {
    let btn = document.querySelector("button");
    btn.setAttribute("style", "transform: rotate(" + degre + "deg);");
    degre = degre +10 ;
};



// Fonction pour ecrire le message
let message = ["E","n","t","r","e","r"]
let texte = "";

function titre() {
    let cible = document.querySelector("h1");
    for (let i = 0; i < message.length; i++) {
        texte = texte + message[i];
        
    };

    cible.texContent = texte;

    // console.log(texte);
    


};


// Utilisation des fonctions

setInterval(rotation, 100);

setInterval(titre, 100);