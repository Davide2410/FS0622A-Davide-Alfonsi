let arrayAnimali = ['🐱', '🦉', '🐾', '🦁', '🦋', '🐛', '🐝', '🐬', '🦊', '🐨', '🐰', '🐯', '🐱', '🦉', '🐾', '🦁', '🦋', '🐛', '🐝', '🐬', '🦊', '🐨', '🐯', '🐰'];
let arrayComparison = [];
document.body.onload = startGame();
// DICHIARO TUTTE LE VARIABILI
var interval;
var find = document.getElementsByClassName('find');
var modal = document.getElementById('modal');
var timer = document.querySelector('.timer');
// FUNZIONE RANDOM
function shuffle(a) {
    var currentIndex = a.length;
    var temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = a[currentIndex];
        a[currentIndex] = a[randomIndex];
        a[randomIndex] = temporaryValue;
    }
    return a;
}
// FUNZIONE STARTGAME(puliamo il timer, array vuoto che mescola casualtmente l'array, definaimo la variabile griglia(il contenitore), mettiamo una stringa vuoto per eliminare gli elementi, inseriamo poi un ciclo for che mi stampi i 24 oggetti definiamo come vogliamo vederli , ci creiamo quindi i 2 div retro e fronte li appendiamo al loro contenitore quindi griglia, aggiungiamo la class e l'elemento dell'array in base all'indice progressivo, richiamiamo il l'avvio del timer e associamo a tutti gli elementi (div) di classe icon l'evento click e le due funzioni sia il mostra immagine sia la funzione per vedere se abbiamo indovinato e di conseguenza in fine vinto)
function startGame() {
    clearInterval(interval);
    var arrayShuffle = shuffle(arrayAnimali);
    var griglia = document.getElementById('griglia');
    griglia.innerHTML = '';

    for (i = 0; i < arrayAnimali.length; i++) {
        var div_retro = document.createElement('div');
        var div_fronte = document.createElement('div');
        griglia.appendChild(div_retro).appendChild(div_fronte);

        div_fronte.className = 'icon';
        div_fronte.innerHTML = arrayShuffle[i];
    }
    tempo();
    var icon = document.getElementsByClassName("icon");
    var icons = [...icon];
    for (var i = 0; i < icons.length; i++) {
        icons[i].className = 'icon show';
        icons[i].addEventListener("click", displayIcon);
        icons[i].addEventListener("click", history);
    }
    setTimeout(play, 3000);
}
// FUNZIONE PLAY: funzione aggiuntiva per far si che mostri inizialmente le card per fare in modo di visualizzarle e ricordarle e dopo tot secondi si girano nella stessa posizione
function play(){
    var icon = document.getElementsByClassName("icon");
    var icons = [...icon];
    for (var i = 0; i < icons.length; i++) {
        icons[i].classList.remove('show');
    }
}
// FUNZIONE DISPLAYICON
function displayIcon() {
    var icon = document.getElementsByClassName("icon");
    var icons = [...icon];
    //mette/toglie la classe show
    this.classList.toggle("show");
    //aggiunge l'oggetto su cui ha cliccato all'array del confronto
    arrayComparison.push(this);

    var len = arrayComparison.length;
    //se nel confronto ci sono due elementi
    if (len === 2) {
        //se sono uguali aggiunge la classe find
        if (arrayComparison[0].innerHTML === arrayComparison[1].innerHTML) {
            arrayComparison[0].classList.add("find", "disabled");
            arrayComparison[1].classList.add("find", "disabled");
            arrayComparison = [];
        } else {
            //altrimenti (ha sbagliato) aggiunge solo la classe disabled
            icons.forEach(function (item) {
                item.classList.add('disabled');
            });
            // con il timeout rimuove  la classe show per nasconderli
            setTimeout(function () {
                arrayComparison[0].classList.remove("show");
                arrayComparison[1].classList.remove("show");
                icons.forEach(function (item) {
                    item.classList.remove('disabled');
                    for (var i = 0; i < find.length; i++) {
                        find[i].classList.add("disabled");
                    }
                });
                arrayComparison = [];
            }, 700);
        }
    }
}
//FUNZIONE HISTORY(interrompiamo il set interval , aggiungimo active al modal per far si che venga mostrato, e aggiungiamo la stringa con il tempo che abbiamo impiegato per risolevre il memory)
function history() {
    if (find.length == arrayAnimali.length) {
        clearInterval(interval);
        modal.className = 'active';
        document.getElementById('tempoTrascorso').innerHTML = timer.innerHTML;
    }
}
// FUNZIONE TIMER(dichiariamo 2 variabili minuti e secondi, aggiungiamo un setInterval con un astringa che riportera e incrementerà i secondi e dopo i minuti , aggiungiamo un ciclo per determinare una condizione)
function tempo() {
    var secondi = 0;
    var minuti = 0
    interval = setInterval(function () {
        timer.innerHTML = 'Tempo: ' + minuti + " min " + secondi + " sec";
        secondi++
        if (secondi == 60) {
            minuti++
            secondi = 0
        }
    }, 1000)
}
// FUNZIONE GIOCA DI NUOVO(diciamo a modal che è display:none, riavviamo tutto richiamando la funzione startgame())
function playAgain() {
    modal.classList.remove('active');
    startGame();
}
