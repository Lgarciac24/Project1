const data = [
    {
        title: "Clase #1",
        subtitle: "HTML & CSS",
        mainTitle: "Bienvenido a tu primera clase. ¿Estás listo? 🤘",
        introText: "En esta clase aprenderás los conocimientos básicos de HTML y CSS",
        homework: "Tarea: duplicar la página de Duolingo con todos los conocimientos adquiridos en esta clase.",
        activa: false,
        links: [
            {
                title: "Lista de tags en HTML",
                URL: "https://www.w3schools.com/tags/default.asp"
            },
            {
                title: "Duolingo",
                URL: "https://www.duolingo.com/"
            }

        ],




    },
    {
        title: "Clase #2",
        subtitle: "Introducción a JavaScript",
        mainTitle: "Segunda Clase! Vas muy bien 😊",
        introText: "En esta clase comenzarás a programar con tu nuevo mejor amigo JavaScript. Aprenderás qué son funciones y cómo hacer que se ejecuten al hacer click en un botón. También aprenderás sobre los condicionales if/else. No te preocupes, you got this!",
        homework: "Tarea: Crear una página con un CSS aceptable que tenga 10 botones y ejecute 10 funciones a partir de operaciones matemáticas.",
        activa: false,
        links: [
            {
                title: "Funciones en JavaScript",
                URL: "https://www.w3schools.com/js/js_functions.asp"
            },
            {
                title: "Información para la tarea",
                URL: "https://www.tutorialstonight.com/js/js-function.php"
            }

        ]



    },
    {
        title: "Clase #3",
        subtitle: "If/else & Loops",
        mainTitle: "Tercera Clase! Keep going! 👊",
        introText: "En esta clase continuaremos con JavaScript, usarás los FOR loops y además aprenderás los operadores ||,&&, % que te serán tan útiles de ahora en adelante.",
        homework: "Tarea: Resolver los 30 ejercicios con IF/ELSE y FOR loops.",
        activa: false,
        links: [
            {
                title: "Ejercicios if/else",
                URL: "http://patriciaemiguel.com/ejercicios/python/2019/03/10/ejercicios-decision-python.html"
            },
            {
                title: "Ejercicios FOR",
                URL: "http://patriciaemiguel.com/ejercicios/python/2019/03/10/ejercicios-buclefor-python.html"
            },
            {
                title: "Ejercicios FOR II",
                URL: "https://www.mclibre.org/consultar/python/ejercicios/ej-for-1.html"
            }

        ]



    },
    {
        title: "Clase #4",
        subtitle: "While Loops",
        mainTitle: "Cuarta clase! 🧠",
        introText: "En esta clase continuaremos con loops, pero en esta ocasión serán WHILE loops. Muy similar a los FOR loops. Además aprenderás typeOf datos de Javascript y otros datos muy útiles como parseInt, parseFloat y toString",
        homework: "Tarea: Resolver los 30 ejercicios anteriores pero ahora con While loops.",
        activa: false,
        links: [
            {
                title: "Ejercicios if/else",
                URL: "http://patriciaemiguel.com/ejercicios/python/2019/03/10/ejercicios-decision-python.html"
            },
            {
                title: "Ejercicios FOR",
                URL: "http://patriciaemiguel.com/ejercicios/python/2019/03/10/ejercicios-buclefor-python.html"
            },
            {
                title: "Ejercicios FOR II",
                URL: "https://www.mclibre.org/consultar/python/ejercicios/ej-for-1.html"
            }
        ]



    },
    {
        title: "Clase #5",
        subtitle: "Arrays",
        mainTitle: "Quinta clase! 🖐",
        introText: "Hoy verás los arrays o arreglos y cómo usarlos para guardar todo tipo de datos bajo una misma categoría.",
        homework: "Tarea: Hacer un escrito explicándo 15 funciones de los arrays.",
        activa: false,
        links: [
            {
                title: "Arrays",
                URL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array"
            },
            {
                title: "25 Métodos de Arrays en JavaScript",
                URL: "https://dev.to/gdcodev/25-metodos-de-arrays-en-javascript-que-todo-desarrollador-debe-conocer-4a2d"
            }

        ]



    },
    {
        title: "Clase #6",
        subtitle: "Objects",
        mainTitle: "Esta es tu sexta clase! Ya has llegado a más de la mitad de tu journey! 🎓 ",
        introText: "En esta clase verás objetos y sus propiedades, además empezarás a usar Local Storage y JSON.",
        homework: "Tarea: Crear un formulario con al menos 8 preguntas que guarde la información del usuario en el Local Storage, y al mismo tiempo muestre todas las respuestas en la página. Recuerda que debe ser aesthetically pleasing!",
        activa: false,
        links: [
            {
                title: "Objects",
                URL: "https://www.w3schools.com/js/js_objects.asp"
            },
            {
                title: "Local Storage",
                URL: "https://www.w3schools.com/jsref/prop_win_localstorage.asp"
            }

        ]



    },
    {
        title: "Clase #7",
        subtitle: "API and Fetch",
        mainTitle: "Séptima clase! 🧳 Cada vez más cerca!!",
        introText: "En esta clase entrarás en el tema de los A.P.Is y la función Fetch para poder hacer uso de cualquier API.",
        homework: "Tarea: A la pagina que creaste la clase anterior conéctale una API y pinta sus datos.",
        activa: false,
        links: [
            {
                title: "Fetch",
                URL: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"
            },
            {
                title: "APIs",
                URL: "https://aws.amazon.com/es/what-is/api/#:~:text=API%20stands%20for%20Application%20Programming,other%20using%20requests%20and%20responses"
            }

        ]



    },
    {
        title: "Clase #8",
        subtitle: "DOM",
        mainTitle: "Clase Octava",
        introText: "En esta clase aprenderás cómo crear y modificar datos del HTML desde javascript",
        homework: "Tarea: Seguir trabajando en la página anterior evitando usar el HTML",
        activa: false,
        links: [
            {
                title: "JavaScript HTML DOM Elements (Nodes)",
                URL: "https://www.w3schools.com/js/js_htmldom_nodes.asp"
            },


        ]



    },
    {
        title: "Clase #9",
        subtitle: "GIT, GITHUB & Terminal",
        mainTitle: "Ultima clase. Introduccion a Proyecto 1",
        introText: "En esta clase verás cómo conectar tu laptop al terminal para registrar las modificaciones y que estén actualizadas en GITHUB",
        homework: "Tarea: Empezar Proyecto 1.",
        activa: false,
        links: [
            {
                title: "Ejemplo - Mural",
                URL: "https://app.guide.co/muralco/JW8VhFeS/Sebastian"
            },

        ]



    },
    {
        title: "Clase #10",
        subtitle: "HTML & CSS",
        mainTitle: "Bienvenido a tu primera clase. ¿Estás listo? 🤘",
        introText: "En esta clase aprenderás los conocimientos básicos de HTML y CSS",
        homework: "Tarea: duplicar la página de Duolingo con todos los conocimientos adquiridos en esta clase.",
        activa: false,
        links: [
            {
                title: "Lista de tags en HTML",
                URL: "https://www.w3schools.com/tags/default.asp"
            },
            {
                title: "Duolingo",
                URL: "https://www.duolingo.com/"
            }

        ]



    },

];

const studentInfo = {
    name: "Lorena",
}



// We are getting the body
let body = document.getElementById("body");

// Creating the Div for the cointainer
let container = document.createElement("div");

// This is the class name for the container
container.className = "container"

// Creating the img tag for the logo
let imgLogo = document.createElement("img")

// Placing the logo
imgLogo.src = "Image/logo.png";

// Giving the logo image a class name for styles
imgLogo.className = "imageLogo";

// Adding or attaching the logo and the container we created above
container.appendChild(imgLogo)
body.appendChild(container)

// This is for the main page title 
let h1text = document.createElement("h1");
h1text.innerText = "Hi " + studentInfo.name + " here's your progress!";

// Adding the text to the container
container.appendChild(h1text)

// We are creating a div underneath the info below
let div2 = document.createElement("div");

// Class name of the div & Adding it to the body
div2.className = "div2"
body.appendChild(div2)

// Creating a nested Div for the first column
let div21 = document.createElement("div")

// A class name for the div column 1
div21.className = "column1"

// Creating a nested Div inside the 1st column
let div211 = document.createElement("div")

// Class name for the div inside the 1st column
div211.className = "div211"

// Adding the column and the nested div
div2.appendChild(div21)
div21.appendChild(div211)

// Creating a Div for the second column
let div22 = document.createElement("div")

// Class name for the second column
div22.className = "column2"

// Setting ID for the second column to be able to erase its center
div22.setAttribute("id", "div22vacio")

// Div-container for the circles and lines
let divfiguras = document.createElement("div");

// Class name for the div-container
divfiguras.className = "divfiguras"


// Loop to create the Class number and title
for (let i = 0; i < data.length; i++) {
    const element = data[i];

    // Creating a Div for each individual Class
    let div2111 = document.createElement("div")
    div2111.className = "div2111"

    //Creating the Class Number
    let h2text1 = document.createElement("h2")
    h2text1.innerText = element.title
    // Class number CSS-Class
    h2text1.className = "h2text1"

    // Creating the Class title
    let h3text1 = document.createElement("h3");
    h3text1.innerText = element.subtitle
    //Class title CSS-Class
    h3text1.className = "h3text1"

    // Adding Div, then inside the Number and title 
    div211.appendChild(div2111)
    div2111.appendChild(h2text1)
    div2111.appendChild(h3text1)

    // Creating Div for the circles & class name
    let divcircle1 = document.createElement("div");
    divcircle1.className = "circulo"

    // Creating Div for the lines & class name
    let divline1 = document.createElement("div");
    divline1.className = "line"

    // Adding Div, circles and lines
    div2.appendChild(divfiguras)
    divfiguras.appendChild(divcircle1)
    divfiguras.appendChild(divline1)


    // Function when clicked
    h2text1.onclick = function () {


        if (!element.activa) {

            // Empty the Div
            div22.innerHTML = "";

            // Group activated links
            let listaActivateLinks = document.getElementsByClassName("activatedh2");

            // Loop to create info about classes
            for (let j = 0; j < listaActivateLinks.length; j++) {
                const element = listaActivateLinks[j];
                element.classList = "h2text1";


            }
            // Loop for Active clase
            for (let k = 0; k < data.length; k++) {
                const element = data[k];
                element.activa = false;

            }

            // Giving a class for styles of active list
            h2text1.className = "activatedh2"
            h3text1.className = "activatedh3"

            // Circle CSS-class
            divcircle1.className = "circulo1"

            // Creating main title & its class
            let h3subtitle = document.createElement("h3");
            h3subtitle.innerText = element.mainTitle;
            h3subtitle.className = "h3subtitle"

            // Creating intro text
            let ptext = document.createElement("p")
            ptext.innerText = element.introText;
            ptext.className = "ptext"

            // Creating homework text
            let ptext2 = document.createElement("p")
            ptext2.innerText = element.homework;
            ptext2.className = "ptext2"

            // Adding Main title, intro text & homework to the column 2nd
            div22.appendChild(h3subtitle)
            div22.appendChild(ptext)
            div22.appendChild(ptext2)
            div2.appendChild(div22)

            // Div for Links de interes & class name
            let div223 = document.createElement("div")
            div223.className = "div223";

            // Creating Title & Class CSS
            let h4title = document.createElement("h4")
            h4title.innerText = "Enlaces de interés para esta clase:"
            h4title.className = "h4title"

            // Adding links title to the body
            div22.appendChild(div223)
            div223.appendChild(h4title)

            // Creating Div for the buttons & CSS Class
            let div224 = document.createElement("div")
            div224.className = "div224"

            // Adding Div to the body
            div22.appendChild(div224)


            // Button data


            const elementlinks = element.links
            console.log(elementlinks)

            // Adding nested div for button & CSS class
            let div2241 = document.createElement("div")
            div2241.className = "div2241"
            div224.appendChild(div2241)

            // Button loop for all URLs
            for (let m = 0; m < elementlinks.length; m++) {
                const elementurl = elementlinks[m].URL;
                console.log(elementurl)
                //Each time create an a tag
                let a1 = document.createElement("a")

                // Take the info from links as many times as its possible
                a1.href = elementurl;
                a1.target = "blank";
                div2241.appendChild(a1)
            }


            // Adding image icon & its class for styles
            let imglist = document.createElement("img")
            imglist.src = "Image/list-icon.png"
            imglist.className = "imglist"
            div2241.appendChild(imglist)

            // Loop for the title of the button


            for (let n = 0; n < elementlinks.length; n++) {

                const elementtitle = elementlinks[n].title;
                console.log(elementtitle)

            

                // Title of the button
                ptextbuttons = document.createElement("p");
                ptextbuttons.innerText = elementtitle;
                ptextbuttons.className = "textoButtons";

                // Adding all to the body
               
                div2241.appendChild(ptextbuttons)

            }







            // Adding nested div for second button & CSS class
            // let div2242 = document.createElement("div")
            // div2242.className = "div2242"

            // First button info
            // let a2 = document.createElement("a")
            // a2.href = element.links.URL
            // a2.target = "blank"

            // Adding image icon & its class for styles
            // let homeworkimg = document.createElement("img")
            // homeworkimg.src = "Image/homework-icon.png"
            // homeworkimg.className = "homeworkimg"
            // ptextbuttons2 = document.createElement("p")
            // ptextbuttons2.innerText = element.links.title
            // ptextbuttons2.className = "textoButtons"


            // Adding all to the body
            // div224.appendChild(div2242)
            // div2242.appendChild(a2)
            // a2.appendChild(homeworkimg)
            // a2.appendChild(ptextbuttons2)

            element.activa = true

        } else {
            h2text1.className = "h2text1"
            h3text1.className = "h3text1"
            element.activa = false

            div22.innerHTML = " "

        }
    }
}



/*
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

h2text2.className = "activatedh2"
h3text2.className = "activatedh3"

divcircle1.className = "circulo1"
divline1.className = "lineblue"
divcircle2.className = "circulo1"
 
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
h2text2.className = "h2text1"
h3text2.className = "h3text1"
divcircle1.className = "circulo"
divline1.className = "line"
divcircle2.className = "circulo"

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

h2text3.className = "activatedh2"
h3text3.className = "activatedh3"

divcircle1.className = "circulo1"
divline1.className = "lineblue"
divcircle2.className = "circulo1"
divline2.className = "lineblue2"
divcircle3.className = "circulo1"

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
 
h2text3.className = "h2text1"
h3text3.className = "h3text1"
divcircle1.className = "circulo"
divline1.className = "line"
divcircle2.className = "circulo"
divline2.className = "line2"
divcircle3.className = "circulo"


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
h2text4.className = "activatedh2"
h3text4.className = "activatedh3"
 
divcircle1.className = "circulo1"
divline1.className = "lineblue"
divcircle2.className = "circulo1"
divline2.className = "lineblue2"
divcircle3.className = "circulo1"
divline3.className = "lineblue3"
divcircle4.className = "circulo1"

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
h2text4.className = "h2text1"
h3text4.className = "h3text1"
divcircle1.className = "circulo"
divline1.className = "line"
divcircle2.className = "circulo"
divline2.className = "line2"
divcircle3.className = "circulo"
divline3.className = "line3"
divcircle4.className = "circulo"

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
h2text5.className = "activatedh2"
h3text5.className = "activatedh3"

divcircle1.className = "circulo1"
divline1.className = "lineblue"
divcircle2.className = "circulo1"
divline2.className = "lineblue2"
divcircle3.className = "circulo1"
divline3.className = "lineblue3"
divcircle4.className = "circulo1"
divline4.className = "lineblue4"
divcircle5.className = "circulo1"


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
h2text5.className = "h2text1"
h3text5.className = "h3text1"

divcircle1.className = "circulo"
divline1.className = "line"
divcircle2.className = "circulo"
divline2.className = "line2"
divcircle3.className = "circulo"
divline3.className = "line3"
divcircle4.className = "circulo"
divline4.className = "line4"
divcircle5.className = "circulo"


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
h2text6.className = "activatedh2"
h3text6.className = "activatedh3"

divcircle1.className = "circulo1"
divline1.className = "lineblue"
divcircle2.className = "circulo1"
divline2.className = "lineblue2"
divcircle3.className = "circulo1"
divline3.className = "lineblue3"
divcircle4.className = "circulo1"
divline4.className = "lineblue4"
divcircle5.className = "circulo1"
divline5.className = "lineblue5"
divcircle6.className = "circulo1"


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
h2text6.className = "h2text1"
h3text6.className = "h3text1"

divcircle1.className = "circulo"
divline1.className = "line"
divcircle2.className = "circulo"
divline2.className = "line2"
divcircle3.className = "circulo"
divline3.className = "line3"
divcircle4.className = "circulo"
divline4.className = "line4"
divcircle5.className = "circulo"
divline5.className = "line5"
divcircle6.className = "circulo"
 
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
h2text7.className = "activatedh2"
h3text7.className = "activatedh3"

divcircle1.className = "circulo1"
divline1.className = "lineblue"
divcircle2.className = "circulo1"
divline2.className = "lineblue2"
divcircle3.className = "circulo1"
divline3.className = "lineblue3"
divcircle4.className = "circulo1"
divline4.className = "lineblue4"
divcircle5.className = "circulo1"
divline5.className = "lineblue5"
divcircle6.className = "circulo1"
divline6.className = "lineblue6"
divcircle7.className = "circulo1"


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
h2text7.className = "h2text1"
h3text7.className = "h3text1"

divcircle1.className = "circulo"
divline1.className = "line"
divcircle2.className = "circulo"
divline2.className = "line2"
divcircle3.className = "circulo"
divline3.className = "line3"
divcircle4.className = "circulo"
divline4.className = "line4"
divcircle5.className = "circulo"
divline5.className = "line5"
divcircle6.className = "circulo"
divline6.className = "line6"
divcircle7.className = "circulo"


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
 
h2text8.className = "activatedh2"
h3text8.className = "activatedh3"

divcircle1.className = "circulo1"
divline1.className = "lineblue"
divcircle2.className = "circulo1"
divline2.className = "lineblue2"
divcircle3.className = "circulo1"
divline3.className = "lineblue3"
divcircle4.className = "circulo1"
divline4.className = "lineblue4"
divcircle5.className = "circulo1"
divline5.className = "lineblue5"
divcircle6.className = "circulo1"
divline6.className = "lineblue6"
divcircle7.className = "circulo1"
divline7.className = "lineblue7"
divcircle8.className = "circulo1"


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
h2text8.className = "h2text1"
h3text8.className = "h3text1"

divcircle1.className = "circulo"
divline1.className = "line"
divcircle2.className = "circulo"
divline2.className = "line2"
divcircle3.className = "circulo"
divline3.className = "line3"
divcircle4.className = "circulo"
divline4.className = "line4"
divcircle5.className = "circulo"
divline5.className = "line5"
divcircle6.className = "circulo"
divline6.className = "line6"
divcircle7.className = "circulo"
divline7.className = "line7"
divcircle8.className = "circulo"


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
h2text9.className = "activatedh2"
h3text9.className = "activatedh3"

divcircle1.className = "circulo1"
divline1.className = "lineblue"
divcircle2.className = "circulo1"
divline2.className = "lineblue2"
divcircle3.className = "circulo1"
divline3.className = "lineblue3"
divcircle4.className = "circulo1"
divline4.className = "lineblue4"
divcircle5.className = "circulo1"
divline5.className = "lineblue5"
divcircle6.className = "circulo1"
divline6.className = "lineblue6"
divcircle7.className = "circulo1"
divline7.className = "lineblue7"
divcircle8.className = "circulo1"
divline8.className = "lineblue8"
divcircle9.className = "circulo1"

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
h2text9.className = "h2text1"
h3text9.className = "h3text1"

divcircle1.className = "circulo"
divline1.className = "line"
divcircle2.className = "circulo"
divline2.className = "line2"
divcircle3.className = "circulo"
divline3.className = "line3"
divcircle4.className = "circulo"
divline4.className = "line4"
divcircle5.className = "circulo"
divline5.className = "line5"
divcircle6.className = "circulo"
divline6.className = "line6"
divcircle7.className = "circulo"
divline7.className = "line7"
divcircle8.className = "circulo"
divline8.className = "line8"
divcircle9.className = "circulo"


activa9 = false
divagain = document.getElementById("div22vacio").innerHTML = "";

}
 
}
 

// Clase 10

let div219mas1 = document.createElement("div")
div219mas1.className = "div219mas1"

div21.appendChild(div219mas1)


let h2text9mas1 = document.createElement("h2")
h2text9mas1.innerText = "Clase #10"
h2text9mas1.className = "h2text9mas1"


let h3text9mas1 = document.createElement("h3");
h3text9mas1.innerText = "Proyecto 1"
h3text9mas1.className = "h3text1"

div219mas1.appendChild(h2text9mas1)
div219mas1.appendChild(h3text9mas1)

let alertadiv = document.createElement("div")
alertadiv.className = "alertadiv"
alertadiv.innerText = "hola"

let alerta = document.createElement("h3");
alerta.innerText = "Desbloquea este projecto cuando termines las clases de prerequisitos."
alerta.className = "alerta"

div219mas1.appendChild(alertadiv);
alertadiv.appendChild(alerta)

// h2text9mas1.onmouseover = function (){

//     let alertadiv = document.createElement("div")
//     alertadiv.className = "alertadiv"

//     let alerta = document.createElement("h3");
//     alerta.innerText = "Desbloquea este projecto cuando termines las clases de prerequisitos."
//     alerta.className = "alerta"

//     div219mas1.appendChild(alertadiv);
//     alertadiv.appendChild(alerta)
// }

// h2text9mas1.mouseout = function(){
//     div219mas1 = ""
//}

*/
