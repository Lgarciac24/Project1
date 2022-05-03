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
    div22.setAttribute("id", "div22vacio")


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

        let divline3 = document.createElement("div");
        divline3.className = "line3"

       

        let divcircle4 = document.createElement("div");
        divcircle4.className = "circulo"

        divfiguras.appendChild(divline3)
        divfiguras.appendChild(divcircle4)

        let divline4 = document.createElement("div");
        divline4.className = "line4"


        let divcircle5 = document.createElement("div");
        divcircle5.className = "circulo"

        divfiguras.appendChild(divline4)
        divfiguras.appendChild(divcircle5)

        let divline5 = document.createElement("div");
        divline5.className = "line5"


        let divcircle6 = document.createElement("div");
        divcircle6.className = "circulo"

        divfiguras.appendChild(divline5)
        divfiguras.appendChild(divcircle6)

        let divline6 = document.createElement("div");
        divline6.className = "line6"


        let divcircle7 = document.createElement("div");
        divcircle7.className = "circulo"

        divfiguras.appendChild(divline6)
        divfiguras.appendChild(divcircle7)

        let divline7 = document.createElement("div");
        divline7.className = "line7"


        let divcircle8 = document.createElement("div");
        divcircle8.className = "circulo"

        divfiguras.appendChild(divline7)
        divfiguras.appendChild(divcircle8)

        let divline8 = document.createElement("div");
        divline8.className = "line8"


        let divcircle9 = document.createElement("div");
        divcircle9.className = "circulo"

        divfiguras.appendChild(divline8)
        divfiguras.appendChild(divcircle9)


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
    
    let activa = false;

        h2text1.onclick = function (){

            
                          if(!activa){  
                    
                   

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
                
                    let div224 = document.createElement("div")
                    div224.className = "div224" 
                
                    div22.appendChild(div224)
                
                    let div2241 = document.createElement("div")
                    div2241.className = "div2241"
                
                        let a1 = document.createElement("a")
                        a1.href= "https://www.w3schools.com/tags/default.asp"
                        a1.target = "blank"
                        let imglist = document.createElement("img")
                        imglist.src = "Image/list-icon.png"
                        imglist.className = "imglist"
                        ptextbuttons = document.createElement("p")
                        ptextbuttons.innerText = "Lista de tags en HTML"
                        ptextbuttons.className = "textoButtons"
                
                    div224.appendChild(div2241)
                    div2241.appendChild(a1)
                    a1.appendChild(imglist)
                    a1.appendChild(ptextbuttons)
                
                    let div2242 = document.createElement("div")
                    div2242.className = "div2242"
                
                        let a2 = document.createElement("a")
                        a2.href = "https://www.duolingo.com/"
                        a2.target = "blank"
                        let homeworkimg = document.createElement("img")
                        homeworkimg.src = "Image/homework-icon.png"
                        homeworkimg.className = "homeworkimg"
                        ptextbuttons2 = document.createElement("p")
                        ptextbuttons2.innerText = "Duolingo"
                        ptextbuttons2.className = "textoButtons"
                
                
                
                    div224.appendChild(div2242)
                    div2242.appendChild(a2)
                    a2.appendChild(homeworkimg)
                    a2.appendChild(ptextbuttons2)
                
                    activa = true
       
        }  else{
            activa = false
            divagain = document.getElementById("div22vacio").innerHTML = "";
 

            
        }

        if (activa = true){
            h2text2.className = "deactivated"
            h3text2.className = "deactivated"
            h2text3.className = "deactivated"
            h3text3.className = "deactivated"
            h2text4.className = "deactivated"
            h3text4.className = "deactivated"
            h2text5.className = "deactivated"
            h3text5.className = "deactivated"
            h2text6.className = "deactivated"
            h3text6.className = "deactivated"
            h2text7.className = "deactivated"
            h3text7.className = "deactivated"
            h2text8.className = "deactivated"
            h3text8.className = "deactivated"
            h2text9.className = "deactivated"
            h3text9.className = "deactivated"
            
            // textos = ""



            // for (let i = 2; i <= 9; i++) {
            //      console.log(i);

            //      let textoacambiar = "h2text" + (i) + '.className = "deactivated"'

            //      textos = textoacambiar 
            //      console.log(textos)
                
            // }




        } else {

        }
       
        }
// Clase 2
               
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

    let activa2 = false;
  

      h2text2.onclick = function (){
        if(!activa2){  
        
    
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
    
        let div224 = document.createElement("div")
        div224.className = "div224" 
    
        div22.appendChild(div224)
    
        let div2241 = document.createElement("div")
        div2241.className = "div2241"
    
            let a1 = document.createElement("a")
            a1.href= "https://www.w3schools.com/js/js_functions.asp"
            a1.target = "blank"
            let imglist = document.createElement("img")
            imglist.src = "Image/list-icon.png"
            imglist.className = "imglist"
            ptextbuttons = document.createElement("p")
            ptextbuttons.innerText = "Funciones en JavaScript"
            ptextbuttons.className = "textoButtons"
    
        div224.appendChild(div2241)
        div2241.appendChild(a1)
        a1.appendChild(imglist)
        a1.appendChild(ptextbuttons)
    
        let div2242 = document.createElement("div")
        div2242.className = "div2242"
    
            let a2 = document.createElement("a")
            a2.href = "https://www.tutorialstonight.com/js/js-function.php"
            a2.target = "blank"
            let homeworkimg = document.createElement("img")
            homeworkimg.src = "Image/homework-icon.png"
            homeworkimg.className = "homeworkimg"
            ptextbuttons2 = document.createElement("p")
            ptextbuttons2.innerText = "Información para la tarea"
            ptextbuttons2.className = "textoButtons"
    
    
    
        div224.appendChild(div2242)
        div2242.appendChild(a2)
        a2.appendChild(homeworkimg)
        a2.appendChild(ptextbuttons2)

        activa2 = true;
       
          }
          else{
            activa2 = false
            divagain = document.getElementById("div22vacio").innerHTML = "";
            
        }
        }


        // Clase 3

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
        
    let activa3 = false;
  

      h2text3.onclick = function (){

        if(!activa3){  
        
        let h3subtitle = document.createElement("h3");
        h3subtitle.innerText = "Tercera Clase! Keep going! 👊";
        h3subtitle.className = "h3subtitle"
        let ptext = document.createElement("p")
        ptext.innerText="En esta clase continuaremos con JavaScript, usarás los FOR loops y además aprenderás los operadores ||,&&, % que te serán tan útiles de ahora en adelante.";
        ptext.className ="ptext"
        let ptext2 = document.createElement("p")
        ptext2.innerText = "Tarea: Resolver los 30 ejercicios con IF/ELSE y FOR loops";
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
    
        let div224 = document.createElement("div")
        div224.className = "div224" 
    
        div22.appendChild(div224)
    
        let div2241 = document.createElement("div")
        div2241.className = "div2241"
    
            let a1 = document.createElement("a")
            a1.href= "http://patriciaemiguel.com/ejercicios/python/2019/03/10/ejercicios-decision-python.html"
            a1.target = "blank"
            let imglist = document.createElement("img")
            imglist.src = "Image/homework-icon.png"
            imglist.className = "imglist"
            ptextbuttons = document.createElement("p")
            ptextbuttons.innerText = "Ejercicios if/else"
            ptextbuttons.className = "textoButtons"
    
        div224.appendChild(div2241)
        div2241.appendChild(a1)
        a1.appendChild(imglist)
        a1.appendChild(ptextbuttons)
    
        let div2242 = document.createElement("div")
        div2242.className = "div2242"
    
            let a2 = document.createElement("a")
            a2.href = "http://patriciaemiguel.com/ejercicios/python/2019/03/10/ejercicios-buclefor-python.html"
            a2.target = "blank"
            let homeworkimg1 = document.createElement("img")
            homeworkimg1.src = "Image/homework-icon.png"
            homeworkimg1.className = "homeworkimg"
            ptextbuttons2 = document.createElement("p")
            ptextbuttons2.innerText = "Ejercicios FOR"
            ptextbuttons2.className = "textoButtons"
    
    
    
        div224.appendChild(div2242)
        div2242.appendChild(a2)
        a2.appendChild(homeworkimg1)
        a2.appendChild(ptextbuttons2)

        let div2243 = document.createElement("div")
        div2243.className = "div2243"
    
            let a3 = document.createElement("a")
            a3.href = "https://www.mclibre.org/consultar/python/ejercicios/ej-for-1.html"
            a3.target = "blank"
            let homeworkimg2 = document.createElement("img")
            homeworkimg2.src = "Image/homework-icon.png"
            homeworkimg2.className = "homeworkimg"
            ptextbuttons3 = document.createElement("p")
            ptextbuttons3.innerText = "Ejercicios FOR II"
            ptextbuttons3.className = "textoButtons"
    
    
    
        div224.appendChild(div2243)
        div2243.appendChild(a3)
        a3.appendChild(homeworkimg2)
        a3.appendChild(ptextbuttons3)

        activa3 = true;
        // necesito que esto suceda solo una vez, 
          }
        
          else{
            activa3 = false
            divagain = document.getElementById("div22vacio").innerHTML = "";
 

            
        }
        
        }


        //Clase 4
          
        let div214 = document.createElement("div")
    div214.className = "div214"

    div21.appendChild(div214)

    
    let h2text4 = document.createElement("h2")
    h2text4.innerText = "Clase #4"
    h2text4.className = "h2text1"

    let h3text4 = document.createElement("h3");
    h3text4.innerText = "While Loops"
    h3text4.className = "h3text1"

    div214.appendChild(h2text4)
    div214.appendChild(h3text4)
        
    let activa4 = false;
  

      h2text4.onclick = function (){

        if(!activa4){  
        
        let h3subtitle = document.createElement("h3");
        h3subtitle.innerText = "Cuarta clase!";
        h3subtitle.className = "h3subtitle"
        let ptext = document.createElement("p")
        ptext.innerText="En esta clase continuaremos con loops, pero en esta ocasión serán WHILE loops. Muy similar a los FOR loops. Además aprenderás typeOf datos de Javascript y otros datos muy útiles como parseInt, parseFloat y toString";
        ptext.className ="ptext"
        let ptext2 = document.createElement("p")
        ptext2.innerText = "Tarea: Resolver los 30 ejercicios anteriores pero ahora con While loops";
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
    
        let div224 = document.createElement("div")
        div224.className = "div224" 
    
        div22.appendChild(div224)
    
        let div2241 = document.createElement("div")
        div2241.className = "div2241"
    
            let a1 = document.createElement("a")
            a1.href= "http://patriciaemiguel.com/ejercicios/python/2019/03/10/ejercicios-decision-python.html"
            a1.target = "blank"
            let imglist = document.createElement("img")
            imglist.src = "Image/homework-icon.png"
            imglist.className = "imglist"
            ptextbuttons = document.createElement("p")
            ptextbuttons.innerText = "Ejercicios if/else"
            ptextbuttons.className = "textoButtons"
    
        div224.appendChild(div2241)
        div2241.appendChild(a1)
        a1.appendChild(imglist)
        a1.appendChild(ptextbuttons)
    
        let div2242 = document.createElement("div")
        div2242.className = "div2242"
    
            let a2 = document.createElement("a")
            a2.href = "http://patriciaemiguel.com/ejercicios/python/2019/03/10/ejercicios-buclefor-python.html"
            a2.target = "blank"
            let homeworkimg1 = document.createElement("img")
            homeworkimg1.src = "Image/homework-icon.png"
            homeworkimg1.className = "homeworkimg"
            ptextbuttons2 = document.createElement("p")
            ptextbuttons2.innerText = "Ejercicios FOR"
            ptextbuttons2.className = "textoButtons"
    
    
    
        div224.appendChild(div2242)
        div2242.appendChild(a2)
        a2.appendChild(homeworkimg1)
        a2.appendChild(ptextbuttons2)

        let div2243 = document.createElement("div")
        div2243.className = "div2243"
    
            let a3 = document.createElement("a")
            a3.href = "https://www.mclibre.org/consultar/python/ejercicios/ej-for-1.html"
            a3.target = "blank"
            let homeworkimg2 = document.createElement("img")
            homeworkimg2.src = "Image/homework-icon.png"
            homeworkimg2.className = "homeworkimg"
            ptextbuttons3 = document.createElement("p")
            ptextbuttons3.innerText = "Ejercicios FOR II"
            ptextbuttons3.className = "textoButtons"
    
    
    
        div224.appendChild(div2243)
        div2243.appendChild(a3)
        a3.appendChild(homeworkimg2)
        a3.appendChild(ptextbuttons3)

        activa4 = true;
       
          }
        
          else{
            activa4 = false
            divagain = document.getElementById("div22vacio").innerHTML = "";

        }
        
        }
          
//Clase 5 

let div215 = document.createElement("div")
div215.className = "div215"

div21.appendChild(div215)


let h2text5 = document.createElement("h2")
h2text5.innerText = "Clase #5"
h2text5.className = "h2text1"

let h3text5 = document.createElement("h3");
h3text5.innerText = "Arrays"
h3text5.className = "h3text1"

div215.appendChild(h2text5)
div215.appendChild(h3text5)
    
let activa5 = false;


  h2text5.onclick = function (){

    if(!activa5){  
    
    let h3subtitle = document.createElement("h3");
    h3subtitle.innerText = "Quinta clase!";
    h3subtitle.className = "h3subtitle"
    let ptext = document.createElement("p")
    ptext.innerText="Hoy verás los arrays o arreglos y cómo usarlos para guardar todo tipo de datos bajo una misma categoría";
    ptext.className ="ptext"
    let ptext2 = document.createElement("p")
    ptext2.innerText = "Tarea: Hacer un escrito explicándo 15 funciones de los arrays";
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

    let div224 = document.createElement("div")
    div224.className = "div224" 

    div22.appendChild(div224)

    let div2241 = document.createElement("div")
    div2241.className = "div2241"

        let a1 = document.createElement("a")
        a1.href= "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array"
        a1.target = "blank"
        let imglist = document.createElement("img")
        imglist.src = "Image/list-icon.png"
        imglist.className = "imglist"
        ptextbuttons = document.createElement("p")
        ptextbuttons.innerText = "Arrays"
        ptextbuttons.className = "textoButtons"

    div224.appendChild(div2241)
    div2241.appendChild(a1)
    a1.appendChild(imglist)
    a1.appendChild(ptextbuttons)

    let div2242 = document.createElement("div")
    div2242.className = "div2242"

        let a2 = document.createElement("a")
        a2.href = "https://dev.to/gdcodev/25-metodos-de-arrays-en-javascript-que-todo-desarrollador-debe-conocer-4a2d"
        a2.target = "blank"
        let homeworkimg1 = document.createElement("img")
        homeworkimg1.src = "Image/homework-icon.png"
        homeworkimg1.className = "homeworkimg"
        ptextbuttons2 = document.createElement("p")
        ptextbuttons2.innerText = "25 Métodos de Arrays en JavaScript"
        ptextbuttons2.className = "textoButtons"



    div224.appendChild(div2242)
    div2242.appendChild(a2)
    a2.appendChild(homeworkimg1)
    a2.appendChild(ptextbuttons2)


    activa5 = true;
   
      }
    
      else{
        activa5 = false
        divagain = document.getElementById("div22vacio").innerHTML = "";

    }
    
    }
      
// Clase 6

    let div216 = document.createElement("div")
    div216.className = "div216"
    
    div21.appendChild(div216)
    
    
    let h2text6 = document.createElement("h2")
    h2text6.innerText = "Clase #6"
    h2text6.className = "h2text1"
    
    let h3text6 = document.createElement("h3");
    h3text6.innerText = "Objects"
    h3text6.className = "h3text1"
    
    div216.appendChild(h2text6)
    div216.appendChild(h3text6)
        
    let activa6 = false;
    
    
      h2text6.onclick = function (){
    
        if(!activa6){  
        
        let h3subtitle = document.createElement("h3");
        h3subtitle.innerText = "Sexta clase!";
        h3subtitle.className = "h3subtitle"
        let ptext = document.createElement("p")
        ptext.innerText="Ya has llegado a más de la mitad de tu journey! En esta clase verás objetos y sus propiedades, además empezarás a usar Local Storage y JSON ";
        ptext.className ="ptext"
        let ptext2 = document.createElement("p")
        ptext2.innerText = "Tarea: Crear un formulario con al menos 8 preguntas que guarde la información del usuario en el Local Storage, y al mismo tiempo muestre todas las respuestas en la página. Recuerda que debe ser aesthetically pleasing!";
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
    
        let div224 = document.createElement("div")
        div224.className = "div224" 
    
        div22.appendChild(div224)
    
        let div2241 = document.createElement("div")
        div2241.className = "div2241"
    
            let a1 = document.createElement("a")
            a1.href= "https://www.w3schools.com/js/js_objects.asp"
            a1.target = "blank"
            let imglist = document.createElement("img")
            imglist.src = "Image/list-icon.png"
            imglist.className = "imglist"
            ptextbuttons = document.createElement("p")
            ptextbuttons.innerText = "Objects"
            ptextbuttons.className = "textoButtons"
    
        div224.appendChild(div2241)
        div2241.appendChild(a1)
        a1.appendChild(imglist)
        a1.appendChild(ptextbuttons)
    
        let div2242 = document.createElement("div")
        div2242.className = "div2242"
    
            let a2 = document.createElement("a")
            a2.href = "https://www.w3schools.com/jsref/prop_win_localstorage.asp"
            a2.target = "blank"
            let homeworkimg1 = document.createElement("img")
            homeworkimg1.src = "Image/list-icon.png"
            homeworkimg1.className = "imglist"
            ptextbuttons2 = document.createElement("p")
            ptextbuttons2.innerText = "Local Storage"
            ptextbuttons2.className = "textoButtons"
    
    
    
        div224.appendChild(div2242)
        div2242.appendChild(a2)
        a2.appendChild(homeworkimg1)
        a2.appendChild(ptextbuttons2)
    
    
        activa6 = true;
       
          }
        
          else{
            activa6 = false
            divagain = document.getElementById("div22vacio").innerHTML = "";
    
        }
        
        }
          

// Clase 7

let div217 = document.createElement("div")
    div217.className = "div217"
    
    div21.appendChild(div217)
    
    
    let h2text7 = document.createElement("h2")
    h2text7.innerText = "Clase #7"
    h2text7.className = "h2text1"
    
    let h3text7 = document.createElement("h3");
    h3text7.innerText = "API and Fetch"
    h3text7.className = "h3text1"
    
    div217.appendChild(h2text7)
    div217.appendChild(h3text7)
        
    let activa7 = false;
    
    
      h2text7.onclick = function (){
    
        if(!activa7){  
        
        let h3subtitle = document.createElement("h3");
        h3subtitle.innerText = "Séptima clase!";
        h3subtitle.className = "h3subtitle"
        let ptext = document.createElement("p")
        ptext.innerText="Cada vez más cerca!! En esta clase entrarás en el tema de los A.P.Is y la función Fetch para poder hacer uso de cualquier API";
        ptext.className ="ptext"
        let ptext2 = document.createElement("p")
        ptext2.innerText = "Tarea: A la pagina que creaste la clase anterior conéctale una API y pinta sus datos.";
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
    
        let div224 = document.createElement("div")
        div224.className = "div224" 
    
        div22.appendChild(div224)
    
        let div2241 = document.createElement("div")
        div2241.className = "div2241"
    
            let a1 = document.createElement("a")
            a1.href= "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"
            a1.target = "blank"
            let imglist = document.createElement("img")
            imglist.src = "Image/list-icon.png"
            imglist.className = "imglist"
            ptextbuttons = document.createElement("p")
            ptextbuttons.innerText = "Fetch"
            ptextbuttons.className = "textoButtons"
    
        div224.appendChild(div2241)
        div2241.appendChild(a1)
        a1.appendChild(imglist)
        a1.appendChild(ptextbuttons)
    
        let div2242 = document.createElement("div")
        div2242.className = "div2242"
    
            let a2 = document.createElement("a")
            a2.href = "https://aws.amazon.com/es/what-is/api/#:~:text=API%20stands%20for%20Application%20Programming,other%20using%20requests%20and%20responses"
            a2.target = "blank"
            let homeworkimg1 = document.createElement("img")
            homeworkimg1.src = "Image/list-icon.png"
            homeworkimg1.className = "imglist"
            ptextbuttons2 = document.createElement("p")
            ptextbuttons2.innerText = "APIs"
            ptextbuttons2.className = "textoButtons"
    
    
    
        div224.appendChild(div2242)
        div2242.appendChild(a2)
        a2.appendChild(homeworkimg1)
        a2.appendChild(ptextbuttons2)
    
    
        activa7 = true;
       
          }
        
          else{
            activa7 = false
            divagain = document.getElementById("div22vacio").innerHTML = "";
    
        }
        
        }

        // Clase 8

let div218 = document.createElement("div")
div218.className = "div218"

div21.appendChild(div218)


let h2text8 = document.createElement("h2")
h2text8.innerText = "Clase #8"
h2text8.className = "h2text1"

let h3text8 = document.createElement("h3");
h3text8.innerText = "DOM"
h3text8.className = "h3text1"

div218.appendChild(h2text8)
div218.appendChild(h3text8)
    
let activa8 = false;


  h2text8.onclick = function (){

    if(!activa8){  
    
    let h3subtitle = document.createElement("h3");
    h3subtitle.innerText = "Séptima clase!";
    h3subtitle.className = "h3subtitle"
    let ptext = document.createElement("p")
    ptext.innerText="Cada vez más cerca!! En esta clase entrarás en el tema de los A.P.Is y la función Fetch para poder hacer uso de cualquier API";
    ptext.className ="ptext"
    let ptext2 = document.createElement("p")
    ptext2.innerText = "Tarea: A la pagina que creaste la clase anterior conéctale una API y pinta sus datos.";
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

    let div224 = document.createElement("div")
    div224.className = "div224" 

    div22.appendChild(div224)

    let div2241 = document.createElement("div")
    div2241.className = "div2241"

        let a1 = document.createElement("a")
        a1.href= "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"
        a1.target = "blank"
        let imglist = document.createElement("img")
        imglist.src = "Image/list-icon.png"
        imglist.className = "imglist"
        ptextbuttons = document.createElement("p")
        ptextbuttons.innerText = "Fetch"
        ptextbuttons.className = "textoButtons"

    div224.appendChild(div2241)
    div2241.appendChild(a1)
    a1.appendChild(imglist)
    a1.appendChild(ptextbuttons)

    let div2242 = document.createElement("div")
    div2242.className = "div2242"

        let a2 = document.createElement("a")
        a2.href = "https://aws.amazon.com/es/what-is/api/#:~:text=API%20stands%20for%20Application%20Programming,other%20using%20requests%20and%20responses"
        a2.target = "blank"
        let homeworkimg1 = document.createElement("img")
        homeworkimg1.src = "Image/list-icon.png"
        homeworkimg1.className = "imglist"
        ptextbuttons2 = document.createElement("p")
        ptextbuttons2.innerText = "APIs"
        ptextbuttons2.className = "textoButtons"



    div224.appendChild(div2242)
    div2242.appendChild(a2)
    a2.appendChild(homeworkimg1)
    a2.appendChild(ptextbuttons2)


    activa8 = true;
   
      }
    
      else{
        activa8 = false
        divagain = document.getElementById("div22vacio").innerHTML = "";

    }
    
    }
    
// Clase 9

let div219 = document.createElement("div")
div219.className = "div219"

div21.appendChild(div219)


let h2text9 = document.createElement("h2")
h2text9.innerText = "Clase #9"
h2text9.className = "h2text1"

let h3text9 = document.createElement("h3");
h3text9.innerText = "GIT + GITHUB + Terminal"
h3text9.className = "h3text1"

div219.appendChild(h2text9)
div219.appendChild(h3text9)
    
let activa9 = false;


  h2text9.onclick = function (){

    if(!activa9){  
    
    let h3subtitle = document.createElement("h3");
    h3subtitle.innerText = "Séptima clase!";
    h3subtitle.className = "h3subtitle"
    let ptext = document.createElement("p")
    ptext.innerText="Cada vez más cerca!! En esta clase entrarás en el tema de los A.P.Is y la función Fetch para poder hacer uso de cualquier API";
    ptext.className ="ptext"
    let ptext2 = document.createElement("p")
    ptext2.innerText = "Tarea: A la pagina que creaste la clase anterior conéctale una API y pinta sus datos.";
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

    let div224 = document.createElement("div")
    div224.className = "div224" 

    div22.appendChild(div224)

    let div2241 = document.createElement("div")
    div2241.className = "div2241"

        let a1 = document.createElement("a")
        a1.href= "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"
        a1.target = "blank"
        let imglist = document.createElement("img")
        imglist.src = "Image/list-icon.png"
        imglist.className = "imglist"
        ptextbuttons = document.createElement("p")
        ptextbuttons.innerText = "Fetch"
        ptextbuttons.className = "textoButtons"

    div224.appendChild(div2241)
    div2241.appendChild(a1)
    a1.appendChild(imglist)
    a1.appendChild(ptextbuttons)

    let div2242 = document.createElement("div")
    div2242.className = "div2242"

        let a2 = document.createElement("a")
        a2.href = "https://aws.amazon.com/es/what-is/api/#:~:text=API%20stands%20for%20Application%20Programming,other%20using%20requests%20and%20responses"
        a2.target = "blank"
        let homeworkimg1 = document.createElement("img")
        homeworkimg1.src = "Image/list-icon.png"
        homeworkimg1.className = "imglist"
        ptextbuttons2 = document.createElement("p")
        ptextbuttons2.innerText = "APIs"
        ptextbuttons2.className = "textoButtons"



    div224.appendChild(div2242)
    div2242.appendChild(a2)
    a2.appendChild(homeworkimg1)
    a2.appendChild(ptextbuttons2)


    activa9 = true;
   
      }
    
      else{
        activa9 = false
        divagain = document.getElementById("div22vacio").innerHTML = "";

    }
    
    }
    

