var btnStart = document.getElementById('start');

btnStart.addEventListener('click' , function(){

   var budget = Number(document.getElementById("budgetStart").value);

    var spesa = 0;
    var acquisto = 0;
    var budgetCurrent = budget;
    document.getElementById('budgetChoose').innerHTML = "Il tuo budget iniziale è " + budget + " $";

    for(spesa = 0; budgetCurrent >= (budget/10); spesa++){
        acquisto = Math.floor(Math.random() * budget/10);
        budgetCurrent -= acquisto;
        document.getElementById("lista").innerHTML += `<li> Ammontare della spesa : ${acquisto} </li>`;
        document.getElementById("lista").innerHTML += `<li> Nuovo budget è : ${budgetCurrent} </li>`;
    }

    if(budget <= 500){
    document.getElementById("lista").innerHTML += `<h3> Attenzione stai spendendo troppo </h3>`
    document.getElementById("lista").innerHTML += `<li> Budget rimanente: ${budgetCurrent} </li>`
    }else{
    document.getElementById("lista").innerHTML += `<h3> Hai speso troppo </h3>`
    document.getElementById("lista").innerHTML += `<li> Totale spese: ${spesa} </li>`
    document.getElementById("lista").innerHTML += `<li> Budget rimanente: ${budgetCurrent} </li>`
    }
    

});





 

