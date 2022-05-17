/* LEER, CREAR, ACTUALIZAR, BORRAR clases y estudiantes */
// 



// const data = [
//     {
//         title: "Clase #1",
//         subtitle: "HTML & CSS",
//         mainTitle: "Bienvenido a tu primera clase. ¿Estás listo? 🤘",
//         introText: "En esta clase aprenderás los conocimientos básicos de HTML y CSS",
//         homework: "Tarea: duplicar la página de Duolingo con todos los conocimientos adquiridos en esta clase.",
//         activa: false,
//         links: [
//             {
//                 title: "Lista de tags en HTML",
//                 URL: "https://www.w3schools.com/tags/default.asp"
//             },
//             {
//                 title: "Duolingo",
//                 URL: "https://www.duolingo.com/"
//             }

//         ],
//         given: true,




//     },
//     {
//         title: "Clase #2",
//         subtitle: "Introducción a JavaScript",
//         mainTitle: "Segunda Clase! Vas muy bien 😊",
//         introText: "En esta clase comenzarás a programar con tu nuevo mejor amigo JavaScript. Aprenderás qué son funciones y cómo hacer que se ejecuten al hacer click en un botón. También aprenderás sobre los condicionales if/else. No te preocupes, you got this!",
//         homework: "Tarea: Crear una página con un CSS aceptable que tenga 10 botones y ejecute 10 funciones a partir de operaciones matemáticas.",
//         activa: false,
//         links: [
//             {
//                 title: "Funciones en JavaScript",
//                 URL: "https://www.w3schools.com/js/js_functions.asp"
//             },
//             {
//                 title: "Información para la tarea",
//                 URL: "https://www.tutorialstonight.com/js/js-function.php"
//             }

//         ],
//         given: true,



//     },
//     {
//         title: "Clase #3",
//         subtitle: "If/else & Loops",
//         mainTitle: "Tercera Clase! Keep going! 👊",
//         introText: "En esta clase continuaremos con JavaScript, usarás los FOR loops y además aprenderás los operadores ||,&&, % que te serán tan útiles de ahora en adelante.",
//         homework: "Tarea: Resolver los 30 ejercicios con IF/ELSE y FOR loops.",
//         activa: false,
//         links: [
//             {
//                 title: "Ejercicios if/else",
//                 URL: "http://patriciaemiguel.com/ejercicios/python/2019/03/10/ejercicios-decision-python.html"
//             },
//             {
//                 title: "Ejercicios FOR",
//                 URL: "http://patriciaemiguel.com/ejercicios/python/2019/03/10/ejercicios-buclefor-python.html"
//             },
//             {
//                 title: "Ejercicios FOR II",
//                 URL: "https://www.mclibre.org/consultar/python/ejercicios/ej-for-1.html"
//             }

//         ],
//         given: true,



//     },
//     {
//         title: "Clase #4",
//         subtitle: "While Loops",
//         mainTitle: "Cuarta clase! 🧠",
//         introText: "En esta clase continuaremos con loops, pero en esta ocasión serán WHILE loops. Muy similar a los FOR loops. Además aprenderás typeOf datos de Javascript y otros datos muy útiles como parseInt, parseFloat y toString",
//         homework: "Tarea: Resolver los 30 ejercicios anteriores pero ahora con While loops.",
//         activa: false,
//         links: [
//             {
//                 title: "Ejercicios if/else",
//                 URL: "http://patriciaemiguel.com/ejercicios/python/2019/03/10/ejercicios-decision-python.html"
//             },
//             {
//                 title: "Ejercicios FOR",
//                 URL: "http://patriciaemiguel.com/ejercicios/python/2019/03/10/ejercicios-buclefor-python.html"
//             },
//             {
//                 title: "Ejercicios FOR II",
//                 URL: "https://www.mclibre.org/consultar/python/ejercicios/ej-for-1.html"
//             }
//         ],
//         given: false,



//     },
//     {
//         title: "Clase #5",
//         subtitle: "Arrays",
//         mainTitle: "Quinta clase! 🖐",
//         introText: "Hoy verás los arrays o arreglos y cómo usarlos para guardar todo tipo de datos bajo una misma categoría.",
//         homework: "Tarea: Hacer un escrito explicándo 15 funciones de los arrays.",
//         activa: false,
//         links: [
//             {
//                 title: "Arrays",
//                 URL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array"
//             },
//             {
//                 title: "25 Métodos de Arrays en JavaScript",
//                 URL: "https://dev.to/gdcodev/25-metodos-de-arrays-en-javascript-que-todo-desarrollador-debe-conocer-4a2d"
//             }

//         ],
//         given: false,



//     },
//     {
//         title: "Clase #6",
//         subtitle: "Objects",
//         mainTitle: "Esta es tu sexta clase! Ya has llegado a más de la mitad de tu journey! 🎓 ",
//         introText: "En esta clase verás objetos y sus propiedades, además empezarás a usar Local Storage y JSON.",
//         homework: "Tarea: Crear un formulario con al menos 8 preguntas que guarde la información del usuario en el Local Storage, y al mismo tiempo muestre todas las respuestas en la página. Recuerda que debe ser aesthetically pleasing!",
//         activa: false,
//         links: [
//             {
//                 title: "Objects",
//                 URL: "https://www.w3schools.com/js/js_objects.asp"
//             },
//             {
//                 title: "Local Storage",
//                 URL: "https://www.w3schools.com/jsref/prop_win_localstorage.asp"
//             }

//         ],
//         given: false,



//     },
//     {
//         title: "Clase #7",
//         subtitle: "API and Fetch",
//         mainTitle: "Séptima clase! 🧳 Cada vez más cerca!!",
//         introText: "En esta clase entrarás en el tema de los A.P.Is y la función Fetch para poder hacer uso de cualquier API.",
//         homework: "Tarea: A la pagina que creaste la clase anterior conéctale una API y pinta sus datos.",
//         activa: false,
//         links: [
//             {
//                 title: "Fetch",
//                 URL: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"
//             },
//             {
//                 title: "APIs",
//                 URL: "https://aws.amazon.com/es/what-is/api/#:~:text=API%20stands%20for%20Application%20Programming,other%20using%20requests%20and%20responses"
//             }

//         ],
//         given: false,



//     },
//     {
//         title: "Clase #8",
//         subtitle: "DOM",
//         mainTitle: "Clase Octava",
//         introText: "En esta clase aprenderás cómo crear y modificar datos del HTML desde javascript",
//         homework: "Tarea: Seguir trabajando en la página anterior evitando usar el HTML",
//         activa: false,
//         links: [
//             {
//                 title: "JavaScript HTML DOM Elements (Nodes)",
//                 URL: "https://www.w3schools.com/js/js_htmldom_nodes.asp"
//             },


//         ],
//         given: false,



//     },
//     {
//         title: "Clase #9",
//         subtitle: "GIT, GITHUB & Terminal",
//         mainTitle: "Ultima clase. Introduccion a Proyecto 1",
//         introText: "En esta clase verás cómo conectar tu laptop al terminal para registrar las modificaciones y que estén actualizadas en GITHUB",
//         homework: "Tarea: Empezar Proyecto 1.",
//         activa: false,
//         links: [
//             {
//                 title: "Ejemplo - Mural",
//                 URL: "https://app.guide.co/muralco/JW8VhFeS/Sebastian"
//             },

//         ],
//         given: false,



//     },
//     {
//         title: "Clase #10",
//         subtitle: "HTML & CSS",
//         mainTitle: "Bienvenido a tu primera clase. ¿Estás listo? 🤘",
//         introText: "En esta clase aprenderás los conocimientos básicos de HTML y CSS",
//         homework: "Tarea: duplicar la página de Duolingo con todos los conocimientos adquiridos en esta clase.",
//         activa: false,
//         links: [
//             {
//                 title: "Lista de tags en HTML",
//                 URL: "https://www.w3schools.com/tags/default.asp"
//             },
//             {
//                 title: "Duolingo",
//                 URL: "https://www.duolingo.com/"
//             }

//         ],
//         given: false,



//     },

// ];

// const studentInfo = [{
//     name: "Lorena",
//     given: [1,2,3]},
//     {
//         name: "Yilmar",
//         given: [1]
//     }
// ]

fetch('http://localhost:3000/clases', {
   

})
.then(response => response.json())
.then(data => {
    debugger
})

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

    if (element.given === true) {
        if (data[i + 1].given === false) {
            divcircle1.className = "circulo1";
        } else {
            divline1.className = "lineblue";
            divcircle1.className = "circulo1";
        }

    } else {

    }

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
            let listaActivateLinks2 = document.getElementsByClassName("activatedh3");

            // Loop to give unactive class h2
            for (let j = 0; j < listaActivateLinks.length; j++) {
                const element = listaActivateLinks[j];
                element.classList = "h2text1";


            }
            // Loop to give unactive class h3
            for (let z = 0; z < listaActivateLinks2.length; z++) {
                const element = listaActivateLinks2[z];
                element.classList = "h3text1";


            }


            // Loop for Active class
            for (let k = 0; k < data.length; k++) {
                const element = data[k];
                element.activa = false;

            }

            // Giving a class for styles of active list
            h2text1.className = "activatedh2"
            h3text1.className = "activatedh3"


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



            // Button loops
            for (let l = 0; l < elementlinks.length; l++) {

                // Adding nested div for button & CSS class
                let div2241 = document.createElement("div")
                div2241.className = "div2241"
                div224.appendChild(div2241)


                // Adding image icon & its class for styles
                let imglist = document.createElement("img")
                imglist.src = "Image/list-icon.png"
                imglist.className = "imglist"
                div2241.appendChild(imglist)


                //Each time create an a tag
                let a1 = document.createElement("a")

                // Look for the title of the button in data

                const elementtitle = elementlinks[l].title;
                console.log(elementtitle)

                // Create the text for a tag
                let atext = document.createTextNode(elementtitle)

                // Add the text to the a
                a1.appendChild(atext);

                // Set title & properties
                a1.title = elementtitle;
                a1.target = "blank";
                a1.className = "textoButtons";


                // Take the info from data
                const elementurl = elementlinks[l].URL;

                // Adding the URL info from data
                a1.href = elementurl;

                // Adding a tag to the body
                div2241.appendChild(a1)

            }
            element.activa = true

        } else {
            h2text1.className = "h2text1"
            h3text1.className = "h3text1"
            element.activa = false

            div22.innerHTML = " "
        }
    }
}