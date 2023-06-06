function showDate() {
    let out = document.getElementById('current-date');
    let today = new Date();
    out.innerHTML = "Дата и время для русской локали: "+ today.toLocaleString('ru-RU') + '<br>' +
    "Дата и время для греческой локали: " + today.toLocaleString('el-GR') + '<br>' +
    "Дата и время для египетской локали: " + today.toLocaleString('ar-EG') + '<br>' +
    "Дата и время для монгольской локали: " + today.toLocaleString('mn-MN') + '<br>' +
    "Дата и время для китайской локали: " + today.toLocaleString('zh-CN') + '<br>' +
    "Дата и время для африканской локали: " + today.toLocaleString('af') ;
    out.style.color = 'black'
    out.style.fontFamily = 'Monserat'
    out.style.fontSize = '20px'
}

function showDaysCount(){
    let today = new Date();
    let inputDate = document.querySelector('input[type=date]');
    let birthday = new Date(inputDate.value);
    let daysCount = (today - birthday)/1000/60/60/24;
    daysCount = Math.floor(daysCount);
    document.getElementById('rojd').innerHTML = "Количество дней с даты рождения: " + daysCount;
}

function detet(){
    document.getElementById('d').value = "";
    document.getElementById('rojd').innerHTML="";
}

function showTime(){
    let today = new Date();
    let currentTime = today.toLocaleTimeString('ru-RU');
    document.getElementById('time').innerHTML = currentTime
}
setInterval(showTime, 1000);