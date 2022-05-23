// fetch to access the data 
fetch('http://localhost:3000/users', {

})
    .then(response => response.json())
    .then(data  => {
       
            // Getting the div
            let newStudent = document.getElementById("myNewStudent");

            // Getting the button to the form
            let addNewStudent = document.getElementById("addNewStudent")


            // Getting the X that closes form
            let span = document.getElementsByClassName("close")[0];

            // Function for the button
            addNewStudent.onclick = function () {
                newStudent.style.display = "block";
                
            }

            //Funtion for the X 
            span.onclick = function () {
                newStudent.style.display = "none";
              
                
            }

            // To close window
            window.onclick = function(event) {
                if (event.target == newStudent) {
                  newStudent.style.display = "none";
                }
              }

            // When Submit it's clicked
            let submitNew = document.getElementById("submitNew");

            submitNew.onclick = function () {
                fetch("http://localhost:3000/users", {
                method: "POST",
                headers: {
                'Content-Type': 'application/json'
                 },
             body: JSON.stringify({
             "name": document.getElementById(inputName),
             })
            },).then(r=>{
              console.log(r)
})
                
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
