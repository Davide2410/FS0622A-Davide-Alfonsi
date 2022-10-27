// MENU
let btnOpen = document.getElementById('btnOpen');
let menu = document.getElementById('menu');


btnOpen.addEventListener('click' , function(){
      if(menu.style.display == "none"){
        menu.style.display = 'block';
      }else{
        menu.style.display = 'none';
      }
})


// -----------------------------------------------------------------------
let title = document.getElementById('title');

document.getElementById('grande').addEventListener('click' , function(){
    title.style.fontSize = '100px';
}); 
document.getElementById('colore').addEventListener('click' , function(){
    title.style.color = 'red';
});
document.getElementById('maiuscolo').addEventListener('click' , function(){
    title.style.textTransform = 'uppercase';
});
document.getElementById('nascondi').addEventListener('click' , function(){
    title.style.visibility = 'hidden';
});
document.getElementById('mostra').addEventListener('click' , function(){
    title.style.visibility = 'visible';
});

// -----------------------------------------------------------------------

var lista = document.querySelectorAll('ol > li');

for (i = 0; i < lista.length; i++) {

    lista[i].addEventListener('mouseover', function () {
        this.className += ' lista_red';
    });

    lista[i].addEventListener('mouseout', function () {
        this.classList.remove('lista_red');
    });

    lista[i].addEventListener('click', function () {
        this.classList.toggle('line');
    });
}









