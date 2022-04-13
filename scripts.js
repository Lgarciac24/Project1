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
div21.className = "column1"
let h2text1 = document.createElement("h2")
h2text1.innerText = "Clase #1"
h2text1.className = "h2text1"

let h3text1= document.createElement("h3");
h3text1.innerText = "HTML y CSS"
h3text1.className = "h3text1"
div21.appendChild(h2text1)
div21.appendChild(h3text1)
div2.appendChild(div21)

h2text1.onclick = function (){


    let div22 = document.createElement("div")
    div22.className = "column2"
    let h3subtitle = document.createElement("h3");
    h3subtitle.innerText = "Bienvenido a tu primera clase. ¿Estás listo? 🤘";
    h3subtitle.className = "h3subtitle"
    let ptext = document.createElement("p")
    ptext.innerText=" En esta clase aprenderás los conocimientos básicos de HTML y CSS";
    ptext.className ="ptext"
    let ptext2 = document.createElement("p")
    ptext2.innerText = "Tarea: duplicar la página de Duolingo con todos los conocimientos adquiridos en esta clase.";
    ptext2.className = "ptext2"
    div22.appendChild(h3subtitle)
    div22.appendChild(ptext)
    div22.appendChild(ptext2)
    div2.appendChild(div22)


    let div223 = document.createElement("div")
    div223.className = "div223";

    let h4title = document.createElement("h4")
    h4title.innerText = "Enlaces de interés para esta clase:"

    div22.appendChild(div223)
    div223.appendChild(h4title)

    let div2231 = document.createElement("div")
    div2231.className = "div2231" 

    div22.appendChild(div2231)

    let div22311 = document.createElement("div")
    div22311.className = "div22311"

    let a1 = document.createElement("a")
    a1.href= "https://www.w3schools.com/tags/default.asp"
    let h5title = document.createElement("h5")
    h5title.innerText = "📝"
    h5title.className = "h5title"
    ptextbuttons = document.createElement("p")
    ptextbuttons.innerText = "Lista de tags en HTML"

    div2231.appendChild(div22311)
    div22311.appendChild(a1)
    a1.appendChild(h5title)
    a1.appendChild(ptextbuttons)
    // necesito que esto suceda solo una vez,

}




