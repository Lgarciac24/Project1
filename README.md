# Project1


EDITA
fetch("http://localhost:3000/clases/qr_fiPm", {
    method: "PUT",
    headers: {
        'Content-Type': 'application/json'
      },
    body: JSON.stringify({
    "title": "soy lorena EDITADA",
  })
},).then(r=>{
    console.log(r)
})


fetch("http://localhost:3000/clases", {
    method: "POST",
    headers: {
        'Content-Type': 'application/json'
      },
    body: JSON.stringify({
    "title": "soy lorena EDITADA",
  })
},).then(r=>{
    console.log(r)
})



BORRAR
fetch("http://localhost:3000/clases/qr_fiPm", {
    method: "DELETE",
    headers: {
        'Content-Type': 'application/json'
      },
    body: ""
},).then(r=>{
    console.log(r)
})

API: data.json

{
  "sessions": [],
  "students": [
      {
          "name":"",
          "email": "",
          "sessionsGiven": []
      }
  ]
}

npx json-server --watch data.json

see designs for reference:

https://code.tutsplus.com/tutorials/quickly-build-a-php-crud-interface-with-the-pdo-advanced-crud-generator-tool--cms-32367
