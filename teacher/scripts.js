// fetch to access the data 
fetch('http://localhost:3000/users', {

})
    .then(response => response.json())
    .then(data => {

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
        window.onclick = function (event) {
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

                },
                body: JSON.stringify({

                    // PREGUNTA PARA SEBASTIAN

                })
            }).then(r => {
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
            let editButton = document.createElement("button");
            editButton.innerText = "E"

            // Getting the div
            let student = document.getElementById("myStudent");

            // Getting the X that closes form
            let span2 = document.getElementsByClassName("close2")[0];

            //Funtion for the X 
            span2.onclick = function () {
                student.style.display = "none";


            }

            //showing name from the data.json --NO FUNCIONA
            let inputName2 = document.getElementById("inputName2");
            inputName2.value = elementname;

            //Action when click E
            editButton.onclick = function () {

                // showing EDIT student info
                student.style.display = "block";

                // When submitChanges is clicked
                let submitChanges = document.getElementById("submitChanges");

                submitChanges.onclick = function () {
                    fetch("http://localhost:3000/users", {
                        method: "PUT",
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({

                            // PREGUNTA PARA SEBASTIAN

                        })
                    }).then(r => {
                        console.log(r)
                    })

                }


            }

            // To close window
            window.onclick = function (event) {
                if (event.target == student) {
                    student.style.display = "none";
                }

            }


            // Adding it to the corresponding div - SHOWING UNDEFINED - ASK S
            divprogr.appendChild(dataprogr)

            // Creating button DELETE
            let deleteButton = document.createElement("button");
            deleteButton.innerText = "D"

            let actions = document.getElementById("actions");

            actions.appendChild(divbutton);
            divbutton.appendChild(editButton);
            divbutton.appendChild(deleteButton);

            // Getting the first DIV
            let alertDelete = document.getElementById("alertDelete");

            // Getting the X that closes the alert
            let close3 = document.getElementsByClassName("close3")[0];

            // Function to close alert
            close3.onclick = function () {

                alertDelete.style.display = "none";

            }

            // When clicked D
            deleteButton.onclick = function () {
                alertDelete.style.display = "block";

                //Question -- PREGUNTAR S -- DESDE EL SEGUNDO D EMPIEZA A SUMAR LOS NOMRBES

                let textoAlerta = document.createElement("h4");
                textoAlerta.innerText = "Estas seguro que deseas eliminar " + elementname + "?";

                let divAlert = document.getElementById("questionAlert");

                divAlert.appendChild(textoAlerta);

                //function when Yes

                //Getting YES button

                let deleteButton = document.getElementById("deleteButton");

                // When YES is clicked
                deleteButton.onclick = function () {

                    fetch("http://localhost:3000/clases", {
                        method: "DELETE",
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: ""
                    }).then(r => {
                        console.log(r)
                    });

                }
                //Getting NO button
                cancelButton = document.getElementById("cancelButton");

                // When NO is clicked
                cancelButton.onclick = function () {
                    alertDelete.style.display = "none";

                }


            }



        }

    })
