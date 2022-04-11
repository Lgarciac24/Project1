let body = document.getElementById("body");


let div1 = document.createElement("div");
div1.className = "div1"

let imgLogo = document.createElement("img")
imgLogo.src = "Image/logo.png";
imgLogo.className = "imageLogo";
div1.appendChild(imgLogo)
body.appendChild(div1)

let h1text = document.createElement("h1");
h1text.innerText = "Hi Lorena, here's your progress!";
div1.appendChild(h1text)

let div2 = document.createElement("div");
div2.className = "div2"
body.appendChild(div2)


let div21 = document.createElement("div")
div21.className = "column"
let h2text1 = document.createElement("h2")
h2text1.innerText = "Clase #1"

let h3text1= document.createElement("h3");
h3text1.innerText = "HTML y CSS"
div21.appendChild(h2text1)
div21.appendChild(h3text1)
div2.appendChild(div21)

h2text1.onclick = function (){

    let div22 = document.createElement("div")
    div22.className = "column"
    let ptext = document.createElement("p")
    ptext.innerText="Conocimientos básicos de HTML y CSS";
    let ptext2 = document.createElement("p")
    ptext2.innerText = "Tarea: duplicar la página de Duolingo con todos los conocimientos adquiridos en esta clase.";
    div22.appendChild(ptext)
    div22.appendChild(ptext2)
    div2.appendChild(div22)


}




