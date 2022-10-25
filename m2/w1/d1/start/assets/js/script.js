let dataComplete = document.getElementById('dataComplete');
let dataDay = document.getElementById('dataDay');
let dataMounth = document.getElementById('dataMounth');
let dataShort = document.getElementById('dataShort');


var date = dataComplete.innerHTML = new Date(2022, 9, 23, 21, 27, 30);

dataDay.innerHTML = date.getDate();
dataMounth.innerHTML = date.getMonth();
dataShort.innerHTML = date = new Date("YYYY/MM/DD");


const today = new Date();

function formatDate(date, format) {
	let dataNow = document.getElementById('dataNow');
    
}

formatDate(today, 'mm/dd/yy');