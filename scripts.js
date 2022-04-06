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

let div11 = document.createElement("div")
div11.className = "column"
let h2text1 = document.createElement("h2")
h2text1.innerText = "Clase #1"

let h3text1= document.createElement("h3");
h3text1.innerText = "HTML y CSS"
div11.appendChild(h2text1)
div11.appendChild(h3text1)
body.appendChild(div11)


h2text1.onclick = function (){

    let div12 = document.createElement("div")
    div12.className = "column"
    let ptext = document.createElement("p")
    ptext.innerText="Esta es la segunda columna";
    div12.appendChild(ptext)
    body.appendChild(div12)

}




