let str = document.getElementById('tempo');

window.addEventListener('DOMContentLoaded', function () {
    countTempo();
});

function countTempo() {
    var secondi = sessionStorage.getItem('secondi') || 0
    interval = setInterval(function () {
        str.innerHTML = 'Tempo: ' + secondi + ' secondi';
        secondi++
        sessionStorage.setItem('secondi', secondi);
    }, 1000);
};
