//AVANTI
    document.getElementById('avanti').addEventListener('mouseover', function(){
        let gradi=0;
        document.getElementById('cube-1').style.transform +=` rotateY(${gradi-=25}deg)`;
        document.getElementById('cube-2').style.transform += `rotateY(${gradi-=0}deg)`;
        document.getElementById('cube-3').style.transform += `rotateY(${gradi-=0}deg)`;
    })
      
    document.getElementById('avanti').addEventListener('mouseout', function(){
        let gradi=0;
        document.getElementById('cube-1').style.transform += `rotateY(${gradi+=25}deg)`;
        document.getElementById('cube-2').style.transform +=` rotateY(${gradi+=0}deg)`;
        document.getElementById('cube-3').style.transform +=` rotateY(${gradi+=0}deg)`;
    })
//INDIETRO
  document.getElementById('indietro').addEventListener('mouseover', function(){
    let gradi=0;
    document.getElementById('cube-1').style.transform += `rotateY(${gradi+=25}deg)`;
    document.getElementById('cube-2').style.transform +=` rotateY(${gradi+=0}deg)`;
    document.getElementById('cube-3').style.transform +=` rotateY(${gradi+=0}deg)`;
  })
  document.getElementById('indietro').addEventListener('mouseout', function(){
    let gradi=0;
    document.getElementById('cube-1').style.transform +=` rotateY(${gradi-=25}deg)`;
    document.getElementById('cube-2').style.transform += `rotateY(${gradi-=0}deg)`;
    document.getElementById('cube-3').style.transform += `rotateY(${gradi-=0}deg)`;
  })

//CLICK DELL'EVENTO
  
  document.getElementById('avanti').addEventListener('click', function () {
    let gradi=0;
    document.getElementById('cube-1').style.transform += `rotateY(${gradi-=90}deg)`;
    document.getElementById('cube-2').style.transform += `rotateY(${gradi-=0}deg)`;
    document.getElementById('cube-3').style.transform += `rotateY(${gradi-=0}deg)`;
  })
  
  document.getElementById('indietro').addEventListener('click', function () {
    let gradi=0;
    document.getElementById('cube-1').style.transform += `rotateY(${gradi+=90}deg)`;
    document.getElementById('cube-2').style.transform +=` rotateY(${gradi+=0}deg)`;
    document.getElementById('cube-3').style.transform +=` rotateY(${gradi+=0}deg)`;
  })


//AUTOPLAY

var slideIndex = 0;
var playing = true;
var btnPlay = document.getElementById('play');

showSlides();

function showSlides() {
  if(playing) {
    var i;
    var slides = document.getElementsByClassName("cube");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.transform = "rotateY(180deg)";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex].style.transform = "rotateY(0deg)";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
  }
}

function toggleSlideshow() {
  if(playing) {
    btnPlay.innerHTML = '&#10074;&#10074;'; // pause character
    playing = false;
  } else {
    btnPlay.innerHTML = '&#9658;'; // play character
    playing = true;
    showSlides();
  }
}

btnPlay.addEventListener('click', toggleSlideshow);

