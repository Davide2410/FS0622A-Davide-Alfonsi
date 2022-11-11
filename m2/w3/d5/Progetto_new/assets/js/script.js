var nome;
var cognome;
var addBtn;
var btnEdit;
var elencoHTML;
var errore;
var erroreElenco;
var elenco = [];
var semaforo;
var btnClear;


window.addEventListener('DOMContentLoaded', init);

function init() {
	semaforo = true || false;
	nome = document.getElementById('nome');
	cognome = document.getElementById('cognome');
	addBtn = document.getElementById('scrivi');
	btnEdit = document.getElementById('edit');
	elencoHTML = document.getElementById('elenco');
	errore = document.getElementById('errore');
	erroreElenco = document.getElementById('erroreElenco');
	printData();
	eventHandler();
}

function eventHandler() {
	addBtn.addEventListener('click', function () {
		if (semaforo == true) {
			controlla();
		}
	});
}

function printData() {
	fetch('http://localhost:3000/elenco')
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			elenco = data;
			if (elenco.length > 0) {
				errore.innerHTML = '';
				elencoHTML.innerHTML = '';
				elenco.map(function (element) {
					elencoHTML.innerHTML += 
					`<tr>
					<td>
					<p class="mt-3">#${element.id}<p>
					</td>

					<td>
					<p class="mt-3">${element.nome}<p>
					</td>

					<td>
					<p class="mt-3">${element.cognome}<p>
					</td>

					<td>
					<i class="fa fa-trash btn btn-danger me-2 mt-3" onClick="elimina(${element.id})"></i> 

					<i id="edit" class="fas fa-user-edit btn btn-success mt-3" onClick="edit(${element.id}, '${element.nome}', '${element.cognome}')"></i>
					
					</td>
					</tr>`;
				});
			} else {
				erroreElenco.innerHTML = 'Nessun elemento presente in elenco';
			}
		});
}

function controlla() {
	if (nome.value != '' && cognome.value != '') {
		var data = {
			nome: nome.value,
			cognome: cognome.value,
		};
		addData(data);
	} else if(nome.value != '' && cognome.value == ''){
	document.getElementById('remove_cognome').classList.remove('d-none');
	}else if(nome.value == '' && cognome.value != ''){
		document.getElementById('remove_nome').classList.remove('d-none');
	}else {
		document.getElementById('remove_cognome').classList.remove('d-none');
		document.getElementById('remove_nome').classList.remove('d-none');
		return;
	}
}

async function addData(data) {
	let response = await fetch('http://localhost:3000/elenco', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify(data),
	});
	clearForm();
}


function clearForm() {
	nome.value = '';
	cognome.value = '';
}


function elimina(id) {
	fetch('http://localhost:3000/elenco/' + id, {
		method: 'DELETE',
	}).then(response => response.json());
}


function edit(id, name, surname) {
	nome.value = name;
	cognome.value = surname;

	semaforo = false;
	
	addBtn.addEventListener('click', function() {
		var data = {
			nome: nome.value,
			cognome: cognome.value
		};

		fetch('http://localhost:3000/elenco/' + id, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json;charset=utf-8',
			},
			body: JSON.stringify(data),
		});
	});
}
document.getElementById('clear').addEventListener('click', function(){
	nome.value = '';
	cognome.value = '';
		if(document.getElementById('remove_cognome')){
			document.getElementById('remove_cognome').classList.add('d-none');
			document.getElementById('remove_nome').classList.add('d-none');
		}
})

	

