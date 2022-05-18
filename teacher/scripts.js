// fetch to access the data 
fetch('http://localhost:3000/users', {

})
.then(response => response.json())
.then(data => {
    console.log(data)   

    // Loop to get all IDS
    for (let i = 0; i < data.length; i++) {
        const element = data[i].id;
        
        console.log(element)

        // Creating the p tag for the text
        let dataid = document.createElement("p");
        dataid.innerText = element;
        
        let infoid = document.getElementById("info");
        
        // Adding it to the corresponding div
        infoid.appendChild(dataid)

    }

    // Loop to get all names
    for (let j = 0; j < data.length; j++) {
        const elementname = data[j].name;

        // Creating the p tag for the text
        let datanames = document.createElement("p");
        datanames.innerText = elementname;
        
        let infonames = document.getElementById("names");
        
         // Adding it to the corresponding div
        infonames.appendChild(datanames)

    }

    // Loop to get all progress
    for (let k = 0; k < data.length; k++) {
        const elementprogress = data[k].sessionsGiven;


        // Creating the p tag for the text
        let dataprogr = document.createElement("p");
        dataprogr.innerText = elementprogress;
        
        let infoprogr = document.getElementById("progresses");
        
         // Adding it to the corresponding div
         infoprogr.appendChild(dataprogr)

    }

    // Loop for action buttons
    for (let l = 0; l < data.length; l++) {
        const elementbuttons = data[l];


        // Creating button EDIT
        let editbutton = document.createElement("button");
       
        
        
        let infoprogr = document.getElementById("progresses");
        
         // Adding it to the corresponding div
         infoprogr.appendChild(dataprogr)

    }




})
