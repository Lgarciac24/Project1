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

      // Creating the row for the data
      const rowId = document.createElement('tr');

      //Creating the td for Student ID
      const columnId = document.createElement('td');
      columnId.innerText = studentId;

      // Getting the tbody
      const tbodyId = document.getElementById('rowTable');

      // Adding to the HTML
      tbodyId.appendChild(rowId);
      rowId.appendChild(columnId);

      // Creating the td for the Name

      const columnName = document.createElement('td');
      columnName.innerText = elementName;


      // Adding to the HTML
      rowId.appendChild(columnName);

      // Creating the td for the Email

      const columnEmail = document.createElement('td');
      columnEmail.innerText = elementEmail;


      // Adding to the HTML
      rowId.appendChild(columnEmail);

      // Creating the td for the Progress

      const columnProgress = document.createElement('td');
      columnProgress.innerText = elementProgress;

      // Adding to the HTML
      rowId.appendChild(columnProgress);

      // Creating the td for the Buttons
      const tdButton = document.createElement('td');

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

     
      // Creating button DELETE
      const deleteButton = document.createElement('button');
      deleteButton.innerText = 'D';

      

      rowId.appendChild(tdButton);
      tdButton.appendChild(editButton);
      tdButton.appendChild(deleteButton);

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
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      const classNumber = data[i].title;
      const classTopic = data[i].subtitle;
      const classTitle = data[i].mainTitle;
      const classDescription = data[i].introText;
      const classHomew = data[i].homework;
      const classlinks = data[i].links;

      // Creating the row for the data
      const rows2 = document.createElement('tr');

      //Creating the td for Class #
      const columnClassNumber = document.createElement('td');
      columnClassNumber.innerText = classNumber;

      // Getting the tbody
      const tbody2 = document.getElementById('rowTable2');

      // Adding to the HTML
      tbody2.appendChild(rows2);
      rows2.appendChild(columnClassNumber);

      //Creating the td for Topic
      const columnTopic = document.createElement('td');
      columnTopic.innerText = classTopic;

      // Adding to the HTML
      rows2.appendChild(columnTopic);

      //Creating the td for Title
      const columnTitle = document.createElement('td');
      columnTitle.innerText = classTitle;
      
      // Adding to the HTML
      rows2.appendChild(columnTitle);
    
      //Creating the td for Description
      const columnDescription = document.createElement('td');
      columnDescription.innerText = classDescription;
      
      // Adding to the HTML
      rows2.appendChild(columnDescription);

      //Creating the td for Homework
      const columnHomework = document.createElement('td');
      columnHomework.innerText = classHomew;
      
      // Adding to the HTML
      rows2.appendChild(columnHomework);
     
      // Creating table for links
      const linksTable = document.createElement('table');
      const linkstr = document.createElement('tr');
     
      // FOR LOOP FOR ACCESS TO LINKS   

      for (let m = 0; m < classlinks.length; m++) {
        const element2 = classlinks[m];

        console.log(element2);
        
        //creating anchor for each link
        const anchorLinks = document.createElement('a');
        let linkIcon = document.createTextNode('🔗');
        anchorLinks.href = element2.URL;
        anchorLinks.target = '_blank';
        //Creating nested table & tr & td
      
        const linkstd = document.createElement('td');

        rows2.appendChild(linksTable);
        linksTable.appendChild(linkstr);
        linkstr.appendChild(linkstd);
        linkstd.appendChild(anchorLinks);
        anchorLinks.appendChild(linkIcon);

      }
      // Creating the td for the Action Buttons
      const tdClassButtons = document.createElement('td');

      // Creating button EDIT
      const editClassButton = document.createElement('button');
      editClassButton.innerText = 'E';
      editClassButton.setAttribute('classNumber', classNumber);
      editClassButton.setAttribute('classTopic', classTopic);
      editClassButton.setAttribute('classTitle', classTitle);
      editClassButton.setAttribute('classDescription', classDescription);
      editClassButton.setAttribute('classHomew', classHomew);
      editClassButton.setAttribute('classlinks', classlinks);
      
      tdClassButtons.appendChild(editClassButton);
      rows2.appendChild(tdClassButtons);
   
      // Getting the div 
      let classes = document.getElementById('myClasses');

      // Getting the X that closes form
let span4 = document.getElementsByClassName('close4')[0];

//Funtion for the X
span4.onclick = function () {
  classes.style.display = 'none';
};
      
      //Action when click E
      editClassButton.onclick = function () {
        // showing EDIT student info
        classes.style.display = 'block';

        //showing name from the data.json 
        const inputClassN = document.getElementById('inputClassN');
        inputClassN.value = editClassButton.getAttribute('classNumber');

        const inputTopic = document.getElementById('inputTopic');
        inputTopic.value = editClassButton.getAttribute('classTopic');

        const inputTitle = document.getElementById('inputTitle');
        inputTitle.value = editClassButton.getAttribute('classTitle');

        const inputDescription = document.getElementById('inputDescription');
        inputDescription.value = editClassButton.getAttribute('classDescription');

        const inputHomework = document.getElementById('inputHomework');
        inputHomework.value = editClassButton.getAttribute('classHomew');

        const inputLinks = document.getElementById('inputLinks');
        inputLinks.value = editClassButton.getAttribute('classlinks');

        // When submitChanges is clicked
        let submitChangesClass = document.getElementById('submitChangesClass');

        submitChangesClass.onclick = function () {
          fetch('http://localhost:3000/clases/' + editClassButton.title, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                title: inputClassN.value,
                subtitle: inputTopic.value,
                mainTitle: inputTitle.value,
                introText: inputDescription.value,
                homework: inputHomework.value,
                links: inputLinks.value,
                
              }),
            })
            .then((r) => {
              classes.style.display = 'none';
              alert('Class Edited successfuly');
              window.location.replace(window.location.href);
            })
            .catch(() => {
              alert('Oh no! :( something went wrong');
            });
        };
      };


      // To close window
      window.onclick = function (event) {
        if (event.target == classes) {
          classes.style.display = 'none';
        }
      };

     
      // Creating button DELETE
      const deleteClassButton = document.createElement('button');
      deleteClassButton.innerText = 'D';

      

     
      
      tdClassButtons.appendChild(deleteClassButton);

      // Getting the first DIV
      const alertDeleteClass = document.getElementById('alertDeleteClass');

      // Getting the X that closes the alert
      const close4 = document.getElementsByClassName('close4')[0];

      // Function to close alert
      close4.onclick = function () {
        alertDeleteClass.style.display = 'none';
      };

      // When clicked D
      deleteClassButton.onclick = function () {
        alertDeleteClass.style.display = 'block';

        const textoAlertaClass = document.createElement('h4');
        textoAlertaClass.innerText =
          'Estas seguro que deseas eliminar ' + classNumber + '?';

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