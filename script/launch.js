
// récupère le canva par sa classe
let grad_effect = document.getElementsByClassName("gradient");

let base = 0;
let rotation = base + 10;

// pour tester

setInterval(crearot, 100);

function crearot() {
    let btn = document.querySelector("button");
    btn.setAttribute("style", "transform: rotate(" + base + "deg);");
    base = base + rotation;
};
