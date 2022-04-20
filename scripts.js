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

    let div211 =document.createElement("div")
    div211.className = "div211"
    div2.appendChild(div21)
    div21.appendChild(div211)

    let div22 = document.createElement("div")
    div22.className = "column2"


    let h2text1 = document.createElement("h2")
    h2text1.innerText = "Clase #1"
    h2text1.className = "h2text1"

    let h3text1= document.createElement("h3");
    h3text1.innerText = "HTML y CSS"
    h3text1.className = "h3text1"
    div211.appendChild(h2text1)
    div211.appendChild(h3text1)
    
    let divfiguras = document.createElement("div");
    divfiguras.className = "divfiguras"

        let divcircle1 = document.createElement("div");
        divcircle1.className = "circulo"

        let divline1 = document.createElement("div");
        divline1.className = "line"

        div2.appendChild(divfiguras)
        divfiguras.appendChild(divcircle1)
        divfiguras.appendChild(divline1)
        
        let divcircle2 = document.createElement("div");
        divcircle2.className = "circulo"

        divfiguras.appendChild(divcircle2)

       let divline2 = document.createElement("div");
        divline2.className = "line2"

        let divcircle3 = document.createElement("div");
        divcircle3.className = "circulo"

        divfiguras.appendChild(divline2)
        divfiguras.appendChild(divcircle3)

    // let div21path = document.createElement("div")
    // div21path.className ="div21path"
    // let pathline = document.createElement("svg")
    // pathline.className = "svgfield"
    // let circle = document.createElement("circle")   
    // circle.className = "svgcircle"

    // pathline.setAttribute('width', '200')
    // pathline.setAttribute('height', '200')

    // circle.setAttribute('cx', '30')
    // circle.setAttribute('cy', '10')
    // circle.setAttribute('r', '10')

    // div2.appendChild(div21path)
    // div21path.appendChild(pathline)
    // pathline.appendChild(circle)

    //Desde aqui necesito que suceda solo una vez

        h2text1.onclick = function (){

    

     
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
            h4title.className = "h4title"
        
            div22.appendChild(div223)
            div223.appendChild(h4title)
        
            let div2231 = document.createElement("div")
            div2231.className = "div2231" 
        
            div22.appendChild(div2231)
        
            let div22311 = document.createElement("div")
            div22311.className = "div22311"
        
                let a1 = document.createElement("a")
                a1.href= "https://www.w3schools.com/tags/default.asp"
                a1.target = "blank"
                let imglist = document.createElement("img")
                imglist.src = "Image/list-icon.png"
                imglist.className = "imglist"
                ptextbuttons = document.createElement("p")
                ptextbuttons.innerText = "Lista de tags en HTML"
                ptextbuttons.className = "textoButtons"
        
            div2231.appendChild(div22311)
            div22311.appendChild(a1)
            a1.appendChild(imglist)
            a1.appendChild(ptextbuttons)
        
            let div22312 = document.createElement("div")
            div22312.className = "div22312"
        
                let a2 = document.createElement("a")
                a2.href = "https://www.duolingo.com/"
                a2.target = "blank"
                let homeworkimg = document.createElement("img")
                homeworkimg.src = "Image/homework-icon.png"
                homeworkimg.className = "homeworkimg"
                ptextbuttons2 = document.createElement("p")
                ptextbuttons2.innerText = "Duolingo"
                ptextbuttons2.className = "textoButtons"
        
        
        
            div2231.appendChild(div22312)
            div22312.appendChild(a2)
            a2.appendChild(homeworkimg)
            a2.appendChild(ptextbuttons2)
            // necesito que esto suceda solo una vez, 
        }

    let div212 = document.createElement("div")
    div212.className = "div212"

    div21.appendChild(div212)

    
    let h2text2 = document.createElement("h2")
    h2text2.innerText = "Clase #2"
    h2text2.className = "h2text1"

    let h3text2 = document.createElement("h3");
    h3text2.innerText = "Introducción a JavaScript"
    h3text2.className = "h3text1"

    div212.appendChild(h2text2)
    div212.appendChild(h3text2)

      h2text2.onclick = function (){


        let h3subtitle = document.createElement("h3");
        h3subtitle.innerText = "Segunda Clase! Vas muy bien 😊";
        h3subtitle.className = "h3subtitle"
        let ptext = document.createElement("p")
        ptext.innerText=" En esta clase comenzarás a programar con tu nuevo mejor amigo JavaScript. Aprenderás qué son funciones y cómo hacer que se ejecuten al hacer click en un botón. También aprenderás sobre los condicionales if/else. No te preocupes, you got this!";
        ptext.className ="ptext"
        let ptext2 = document.createElement("p")
        ptext2.innerText = "Tarea: Crear una página con un CSS aceptable que tenga 10 botones y ejecute 10 funciones a partir de operaciones matemáticas";
        ptext2.className = "ptext2"
        div22.appendChild(h3subtitle)
        div22.appendChild(ptext)
        div22.appendChild(ptext2)
        div2.appendChild(div22)
    
    
        let div223 = document.createElement("div")
        div223.className = "div223";
    
        let h4title = document.createElement("h4")
        h4title.innerText = "Enlaces de interés para esta clase:"
        h4title.className = "h4title"
    
        div22.appendChild(div223)
        div223.appendChild(h4title)
    
        let div2231 = document.createElement("div")
        div2231.className = "div2231" 
    
        div22.appendChild(div2231)
    
        let div22311 = document.createElement("div")
        div22311.className = "div22311"
    
            let a1 = document.createElement("a")
            a1.href= "https://www.w3schools.com/js/js_functions.asp"
            a1.target = "blank"
            let imglist = document.createElement("img")
            imglist.src = "Image/list-icon.png"
            imglist.className = "imglist"
            ptextbuttons = document.createElement("p")
            ptextbuttons.innerText = "Funciones en JavaScript"
            ptextbuttons.className = "textoButtons"
    
        div2231.appendChild(div22311)
        div22311.appendChild(a1)
        a1.appendChild(imglist)
        a1.appendChild(ptextbuttons)
    
        let div22312 = document.createElement("div")
        div22312.className = "div22312"
    
            let a2 = document.createElement("a")
            a2.href = "https://www.tutorialstonight.com/js/js-function.php"
            a2.target = "blank"
            let homeworkimg = document.createElement("img")
            homeworkimg.src = "Image/homework-icon.png"
            homeworkimg.className = "homeworkimg"
            ptextbuttons2 = document.createElement("p")
            ptextbuttons2.innerText = "Información para la tarea"
            ptextbuttons2.className = "textoButtons"
    
    
    
        div2231.appendChild(div22312)
        div22312.appendChild(a2)
        a2.appendChild(homeworkimg)
        a2.appendChild(ptextbuttons2)
        // necesito que esto suceda solo una vez, 
          }

    let div213 = document.createElement("div")
    div213.className = "div213"

    div21.appendChild(div213)

    
    let h2text3 = document.createElement("h2")
    h2text3.innerText = "Clase #3"
    h2text3.className = "h2text1"

    let h3text3 = document.createElement("h3");
    h3text3.innerText = "If/else & Loops"
    h3text3.className = "h3text1"

    div213.appendChild(h2text3)
    div213.appendChild(h3text3)

          


