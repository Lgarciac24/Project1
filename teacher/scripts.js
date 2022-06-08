// All access to DOM needs to be assigned to a const variable - done

// To do: Actualizar para que tambien se guarde el progress

// To do:Hacer lo mismo con las classes

// To do: Reemplazar el let por el const en los document.getElementBy

// Getting all DOM Elements
const newStudent = document.getElementById('myNewStudent');

// Getting the button to the form
const addNewStudent = document.getElementById('addNewStudent');

// Getting the X that closes form
const span = document.getElementsByClassName('close')[0];

// When Submit it's clicked
const submitNew = document.getElementById('submitNew');

// Value from form Name
const inputName = document.getElementById('inputName');

// Value from form email
const inputEmail = document.getElementById('inputEmail');

// Value from form progress
const inputProgr = document.getElementById('inputProgr');

// Function for the button
addNewStudent.onclick = function () {
  newStudent.style.display = 'block';
};

//Funtion for the X
span.onclick = function () {
  newStudent.style.display = 'none';
};

// To close window
window.onclick = function (event) {
  if (event.target == newStudent) {
    newStudent.style.display = 'none';
  }
};

submitNew.onclick = function () {
  fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: inputName.value,
      email: inputEmail.value,
      progress: inputProgr.value,
    }),
  })
    .then((r) => {
      newStudent.style.display = 'none';
      alert('Student Created successfuly');
      window.location.replace(window.location.href);
    })
    .catch(() => {
      alert('Oh no! :( something went wrong');
    });
};

// fetch to access the data
fetch('http://localhost:3000/users', {})
  .then((response) => response.json())
  .then((data) => {
    //Loop to get all IDS
    for (let i = 0; i < data.length; i++) {
      const studentId = data[i].id;
      const elementName = data[i].name;
      const elementEmail = data[i].email;
      const elementProgress = data[i].progress;

      // Creating the p tag for the text
      const dataId = document.createElement('p');
      dataId.innerText = studentId;

      const divId = document.getElementById('info');

      // Adding it to the corresponding div
      divId.appendChild(dataId);

      // Creating the p tag for the text
      const dataNames = document.createElement('p');
      dataNames.innerText = elementName;

      const divNames = document.getElementById('names');

      // Adding it to the corresponding div
      divNames.appendChild(dataNames);

      // Creating the p tag for email text
      const dataEmail = document.createElement('p');
      dataEmail.innerText = elementEmail;

      const divEmails = document.getElementById('emails');

      // Adding it to the corresponding div
      divEmails.appendChild(dataEmail);


      // Creating the p tag for the text
      const dataProgr = document.createElement('p');
      dataProgr.innerText = elementProgress;

      const divProgr = document.getElementById('progresses');

      // Adding it to the corresponding div
      divProgr.appendChild(dataProgr);

      const divButton = document.createElement('div');

      // Creating button EDIT
      const editButton = document.createElement('button');
      editButton.innerText = 'E';
      editButton.id = studentId;
      editButton.setAttribute('studentName', elementName);
      editButton.setAttribute('studentEmail', elementEmail);
      editButton.setAttribute('studentProgr', elementProgress);

      // Getting the div
      let student = document.getElementById('myStudent');

      // Getting the X that closes form
      let span2 = document.getElementsByClassName('close2')[0];

      //Funtion for the X
      span2.onclick = function () {
        student.style.display = 'none';
      };

      //Action when click E
      editButton.onclick = function () {
        // showing EDIT student info
        student.style.display = 'block';

        //showing name from the data.json 
        const inputName2 = document.getElementById('inputName2');
        inputName2.value = editButton.getAttribute('studentName');

        const inputEmail2 = document.getElementById('inputEmail2');
        inputEmail2.value = editButton.getAttribute('studentEmail');

        const inputProgr2 = document.getElementById('inputProgr2');
        inputProgr2.value = editButton.getAttribute('studentProgr');

        // When submitChanges is clicked
        let submitChanges = document.getElementById('submitChanges');

        submitChanges.onclick = function () {
          fetch('http://localhost:3000/users/' + editButton.id, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: inputName2.value,
              email: inputEmail2.value,
              progress: inputProgr2.value,
            }),
          })
            .then((r) => {
              student.style.display = 'none';
              alert('Student Edited successfuly');
              window.location.replace(window.location.href);
            })
            .catch(() => {
              alert('Oh no! :( something went wrong');
            });
        };
      };

      // To close window
      window.onclick = function (event) {
        if (event.target == student) {
          student.style.display = 'none';
        }
      };

      // Adding it to the corresponding div
      divProgr.appendChild(dataProgr);

      // Creating button DELETE
      const deleteButton = document.createElement('button');
      deleteButton.innerText = 'D';

      const actions = document.getElementById('actions');

      actions.appendChild(divButton);
      divButton.appendChild(editButton);
      divButton.appendChild(deleteButton);

      // Getting the first DIV
      const alertDelete = document.getElementById('alertDelete');

      // Getting the X that closes the alert
      const close3 = document.getElementsByClassName('close3')[0];

      // Function to close alert
      close3.onclick = function () {
        alertDelete.style.display = 'none';
      };

      // When clicked D
      deleteButton.onclick = function () {
        alertDelete.style.display = 'block';

        const textoAlerta = document.createElement('h4');
        textoAlerta.innerText =
          'Estas seguro que deseas eliminar ' + elementName + '?';
 
        const divAlert = document.getElementById('questionAlert');

        divAlert.appendChild(textoAlerta);

        //function when Yes

        //Getting YES button

        let deleteButton = document.getElementById('deleteButton');

        // When YES is clicked
        deleteButton.onclick = function () {
          console.log(editButton.id);
          fetch('http://localhost:3000/users/' + editButton.id, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
            body: '',
          })
            .then((r) => {
              alertDelete.style.display = 'none';
              alert('Student Removed successfuly');
              window.location.replace(window.location.href);
            })
            .catch(() => {
              alert('Oh no! :( something went wrong');
            });
        };
        //Getting NO button
        const cancelButton = document.getElementById('cancelButton');

        // When NO is clicked
        cancelButton.onclick = function () {
          alertDelete.style.display = 'none';
        };
      };
    }
  });

fetch('http://localhost:3000/clases', {})
.then((response) => response.json())
.then ((data) => {
    for (let i = 0; i < data.length; i++) {
        const classNumber = data[i].title;
        const classTopic  = data[i].subtitle;
        const classTitle = data[i].mainTitle;
        const classDescription = data[i].introText;
        const classHomew = data[i].homework;
        const classlinks = data[i].links;

     // Creating the p tag for the text for Class #
      const dataClassNumber = document.createElement('p');
      dataClassNumber.innerText = classNumber;

      const divClassNumber = document.getElementById('classnumber');
      divClassNumber.className = 'classNumberMargin';

      // Adding it to the corresponding div
      divClassNumber.appendChild(dataClassNumber);

      // Creating the p tag for the text for Topic
      const dataTopic = document.createElement('p');
      dataTopic.innerText = classTopic;

      const divClassTopic = document.getElementById('classtopic');
      divClassTopic.className = 'topicMargin';

      // Adding it to the corresponding div
      divClassTopic.appendChild(dataTopic);

      // Creating the p tag for the text for Title
      const dataTitle = document.createElement('p');
      dataTitle.innerText = classTitle;

      const divClassTitle = document.getElementById('classtitle');
      divClassTitle.className = 'titleMargin';

      // Adding it to the corresponding div
      divClassTitle.appendChild(dataTitle);

      // Creating the p tag for the text for Descrip
      const dataDescr = document.createElement('p');
      dataDescr.innerText = classDescription;

      const divClassDescr = document.getElementById('classdescr');
      divClassDescr.className = 'descrMargin';

      // Adding it to the corresponding div
      divClassDescr.appendChild(dataDescr);

      // Creating the p tag for the text for Progr
      const dataHomew = document.createElement('p');
      dataHomew.innerText = classHomew;

      const divClassHomew = document.getElementById('classhomew');
      divClassHomew.className = 'homewMargin';

      // Adding it to the corresponding div
      divClassHomew.appendChild(dataHomew);
      


      // FOR LOOP FOR ACCESS TO LINKS   

      for (let m = 0; m < classlinks.length; m++) {
        const element2 = classlinks;
       
        console.log(element2)
        
        

 // Creating div container for links
      const divLinks = document.createElement('div');
        let text = document.createElement('p');
        text.innerText = element2.title;

        const divlinksht = document.getElementById('classlinks');

      divLinks.appendChild(text);
      divlinksht.appendChild(divLinks)

      }

      //   

    }


    //     // Creating div container for links
    // const divLinks = document.createElement('div');

    // // Creating anchor tag for each one
    // const linksicon = document.createElement('a');

    // //adding icon image

    // let iconImage = document.createElement('img');
    // iconImage.src = "Image/link-icon.jpeg"
    // iconImage.className = "iconImage"

    // // Getting the div for links from HTML

    // const divLinksColumn = document.getElementById('classlinks');

    // // Adding the div and icon link to the html

    // divLinksColumn.appendChild(divLinks);
    // divLinks.appendChild(linksicon);
    // linksicon.appendChild(iconImage);

        
    //   }
      
    // }
    

});