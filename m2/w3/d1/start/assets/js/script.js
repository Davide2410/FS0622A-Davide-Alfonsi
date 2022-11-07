var arrayLista = '';
var btn_add = document.getElementById('aggiungi');
var btn_clear = document.getElementById('pulisci');
var lista = document.getElementById('lista');

class Persona {
    constructor(_nome, _cognome, _anno) {
        this.nome = _nome;
        this.cognome = _cognome;
        this.anno = new Date(_anno);
    }
    eta(){
    return new Date().getFullYear() - this.anno.getFullYear() ;
    }
    aggiungiRiga(){
        let d = this.anno.getDate() + "/";
        let m = this.anno.getMonth() + 1 + "/";
        let yy = this.anno.getFullYear();
        arrayLista = `<li>${this.nome}  ${this.cognome}, Nato il: ${d + m + yy} , la sua età è: ${this.eta()}</li>`;
        lista.innerHTML += arrayLista;
    }
};

btn_add.addEventListener('click' , function(e){

    e.preventDefault();

    let newNome = document.getElementById('nome').value;
    let newCognome = document.getElementById('cognome').value;
    let newAnno = document.getElementById('anno').value;

    let newPersona = new Persona(newNome , newCognome , newAnno);

    newPersona.aggiungiRiga();

    document.getElementById('nome').value = "";
    document.getElementById('cognome').value = "";
    document.getElementById('anno').value = "";
});



