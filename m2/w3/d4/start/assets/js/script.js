var elenco = [];
var table = document.getElementById('table');

window.addEventListener('DOMContentLoaded' , printData());


// GET
function printData(){
    fetch('http://localhost:3000/users').then((response) =>{
        return response.json();
    }) .then((data) =>{
        elenco = data;
        elenco.map(function(element){
         table.innerHTML += `<tr>  <td> ${element.id}</td> <td> ${element.name}</td> <td> ${element.username} </td>  <td> ${element.email}</td> </tr>` 
        });
    })
}
