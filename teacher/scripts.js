// fetch to access the data 
fetch('http://localhost:3000/users', {

})
    .then(response => response.json())
    .then(data => {
        console.log(data)

       
       //Adding New Student

       let addNewStudent = document.getElementById("addNewStudent");
       addNewStudent.onclick = function()  {
           
            let tabla = document.getElementById("tabla");
            tabla.style.display = "none";
            formulario.style.display = "block";




            let cerrar = document.getElementById("cerrar");
            cerrar.onclick = function () {
                tabla.style.display = "block";
                formulario.style.display = "none";
            }
       }
       
       
       
        //Loop to get all IDS
        for (let i = 0; i < data.length; i++) {
            const studentId = data[i].id;
            const elementname = data[i].name;
            const elementprogress = data[i].progress;

            console.log(studentId)

            // Creating the p tag for the text
            let dataid = document.createElement("p");
            dataid.innerText = studentId;

            let divId = document.getElementById("info");

            // Adding it to the corresponding div
            divId.appendChild(dataid)

          

            // Creating the p tag for the text
            let datanames = document.createElement("p");
            datanames.innerText = elementname;

            let divnames = document.getElementById("names");

            // Adding it to the corresponding div
            divnames.appendChild(datanames)


            // Creating the p tag for the text
            let dataprogr = document.createElement("p");
            dataprogr.innerText = elementprogress;

            let divprogr = document.getElementById("progresses");

            // Adding it to the corresponding div
            divprogr.appendChild(dataprogr)

        

            let divbutton = document.createElement("div");

            // Creating button EDIT
            let editbutton = document.createElement("button");
            editbutton.innerText = "E"

            editbutton.onclick = function () {
  
                let tabla = document.getElementById("tabla");
                tabla.style.display = "none";
                formulario.style.display = "block";
    
                let inputName = document.getElementById("inputName");
                inputName.value = elementname;

                let cerrar = document.getElementById("cerrar");
                cerrar.onclick = function () {
                    tabla.style.display = "block";
                    formulario.style.display = "none";
                    inputName.value = "";
                }
            }


            // Adding it to the corresponding div
            divprogr.appendChild(dataprogr)

            let actions = document.getElementById("actions");

            actions.appendChild(divbutton);
            divbutton.appendChild(editbutton)

        }

    })
