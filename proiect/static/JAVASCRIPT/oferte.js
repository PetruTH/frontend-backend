let pag1 = document.getElementById("q");
let pag2 = document.getElementById("w");
let pag3 = document.getElementById("e");
let pag4 = document.getElementById("r");
let pag5 = document.getElementById("t");
let pag6 = document.getElementById("y");

window.onkeydown = function(event) {
    if (event.keyCode === 49) {
        pag1.click();
    }
    if (event.keyCode === 50) {
        pag2.click();
    }
    if (event.keyCode === 51) {
        pag3.click();
    }
    if (event.keyCode === 52) {
        pag4.click();
    }
    if (event.keyCode === 53) {
        pag5.click();
    }
    if (event.keyCode === 54) {
        pag6.click();
    }
 };


function verifica_cars_HE(){
    if(localStorage.getItem('cars_he') == null){
        localStorage.setItem('cars_he', '[]');
    }
}

function verifica_cars_medium(){
    if(localStorage.getItem('cars_m') == null){
        localStorage.setItem('cars_m', '[]');
    }
}

function verifica_cars_LE(){
    if(localStorage.getItem('cars_le') == null){
        localStorage.setItem('cars_le', '[]');
    }
}

var cars_he = [];
function salveaza_masina1(){
    var car = [];
    var a = document.getElementById("cv1").getElementsByTagName("li");
    for(let i = 0; i<a.length; i++)
        car.push(a[i].innerHTML);
    
    verifica_cars_HE();
    var old = JSON.parse(localStorage.getItem('cars_he'));
    old.push(car);
    localStorage.setItem('cars_he', JSON.stringify(old));
}
function salveaza_masina2(){
    var car = [];
    var a = document.getElementById("cv2").getElementsByTagName("li");
    for(let i = 0; i<a.length; i++)
        car.push(a[i].innerHTML);

    verifica_cars_HE();
    var old = JSON.parse(localStorage.getItem('cars_he'));
    old.push(car);
    localStorage.setItem('cars_he', JSON.stringify(old));
}

function salveaza_masina3(){
    var car = [];
    var a = document.getElementById("cv3").getElementsByTagName("li");
    for(let i = 0; i<a.length; i++)
        car.push(a[i].innerHTML);
    
    verifica_cars_HE();
    var old = JSON.parse(localStorage.getItem('cars_he'));
    old.push(car);
    localStorage.setItem('cars_he', JSON.stringify(old));
}
function salveaza_masina4(){
    var car = [];
    var a = document.getElementById("cv4").getElementsByTagName("li");
    for(let i = 0; i<a.length; i++)
        car.push(a[i].innerHTML);

    verifica_cars_HE();
    var old = JSON.parse(localStorage.getItem('cars_he'));
    old.push(car);
    localStorage.setItem('cars_he', JSON.stringify(old));
}

// function HE_CARS_CLICLKED(){

// }
// HE_CARS_CLICLKED();

var cars_m = []
function salveaza_masina5(){
    var car = [];
    var a = document.getElementById("cv5").getElementsByTagName("li");
    for(let i = 0; i<a.length; i++)
        car.push(a[i].innerHTML);

    verifica_cars_medium();
    var old = JSON.parse(localStorage.getItem('cars_m'));
    old.push(car);
    localStorage.setItem('cars_m', JSON.stringify(old));
}
function salveaza_masina6(){
    var car = [];
    var a = document.getElementById("cv6").getElementsByTagName("li");
    for(let i = 0; i<a.length; i++)
        car.push(a[i].innerHTML);
    
    verifica_cars_medium();
    var old = JSON.parse(localStorage.getItem('cars_m'));
    old.push(car);
    localStorage.setItem('cars_m', JSON.stringify(old));
}
function salveaza_masina7(){
    var car = [];
    var a = document.getElementById("cv7").getElementsByTagName("li");
    for(let i = 0; i<a.length; i++)
        car.push(a[i].innerHTML);
    verifica_cars_medium();
    var old = JSON.parse(localStorage.getItem('cars_m'));
    old.push(car);
    localStorage.setItem('cars_m', JSON.stringify(old));
}
function salveaza_masina8(){
    var car = [];
    var a = document.getElementById("cv8").getElementsByTagName("li");
    for(let i = 0; i<a.length; i++)
        car.push(a[i].innerHTML);
    verifica_cars_medium();
    var old = JSON.parse(localStorage.getItem('cars_m'));
    old.push(car);
    localStorage.setItem('cars_m', JSON.stringify(old));
}
function salveaza_masina9(){
    var car = [];
    var a = document.getElementById("cv9").getElementsByTagName("li");
    for(let i = 0; i<a.length; i++)
        car.push(a[i].innerHTML);
    verifica_cars_medium();
    var old = JSON.parse(localStorage.getItem('cars_m'));
    old.push(car);
    localStorage.setItem('cars_m', JSON.stringify(old));
}
function salveaza_masina10(){
    var car = [];
    var a = document.getElementById("cv10").getElementsByTagName("li");
    for(let i = 0; i<a.length; i++)
        car.push(a[i].innerHTML);
    verifica_cars_medium();
    var old = JSON.parse(localStorage.getItem('cars_m'));
    old.push(car);
    localStorage.setItem('cars_m', JSON.stringify(old));
}
function salveaza_masina11(){
    var car = [];
    var a = document.getElementById("cv11").getElementsByTagName("li");
    for(let i = 0; i<a.length; i++)
        car.push(a[i].innerHTML);
    verifica_cars_medium();
    var old = JSON.parse(localStorage.getItem('cars_m'));
    old.push(car);
    localStorage.setItem('cars_m', JSON.stringify(old));
}
function salveaza_masina12(){
    var car = [];
    var a = document.getElementById("cv12").getElementsByTagName("li");
    for(let i = 0; i<a.length; i++)
        car.push(a[i].innerHTML);
    verifica_cars_medium();
    var old = JSON.parse(localStorage.getItem('cars_m'));
    old.push(car);
    localStorage.setItem('cars_m', JSON.stringify(old));
}
function salveaza_masina13(){
    var car = [];
    var a = document.getElementById("cv13").getElementsByTagName("li");
    for(let i = 0; i<a.length; i++)
        car.push(a[i].innerHTML);
    verifica_cars_medium();
    var old = JSON.parse(localStorage.getItem('cars_m'));
    old.push(car);
    localStorage.setItem('cars_m', JSON.stringify(old));
}
function salveaza_masina14(){
    var car = [];
    var a = document.getElementById("cv14").getElementsByTagName("li");
    for(let i = 0; i<a.length; i++)
        car.push(a[i].innerHTML);
    verifica_cars_LE();
    var old = JSON.parse(localStorage.getItem('cars_le'));
    old.push(car);
    localStorage.setItem('cars_le', JSON.stringify(old));
}
function salveaza_masina15(){
    var car = [];
    var a = document.getElementById("cv15").getElementsByTagName("li");
    for(let i = 0; i<a.length; i++)
        car.push(a[i].innerHTML);
    verifica_cars_LE();
    var old = JSON.parse(localStorage.getItem('cars_le'));
    old.push(car);
    localStorage.setItem('cars_le', JSON.stringify(old));
}
function salveaza_masina16(){
    var car = [];
    var a = document.getElementById("cv16").getElementsByTagName("li");
    for(let i = 0; i<a.length; i++)
        car.push(a[i].innerHTML);
    verifica_cars_LE();
    var old = JSON.parse(localStorage.getItem('cars_le'));
    old.push(car);
    localStorage.setItem('cars_le', JSON.stringify(old));
}
function salveaza_masina17(){
    var car = [];
    var a = document.getElementById("cv17").getElementsByTagName("li");
    for(let i = 0; i<a.length; i++)
        car.push(a[i].innerHTML);
    verifica_cars_LE();
    var old = JSON.parse(localStorage.getItem('cars_le'));
    old.push(car);
    localStorage.setItem('cars_le', JSON.stringify(old));
}
function salveaza_masina18(){
    var car = [];
    var a = document.getElementById("cv18").getElementsByTagName("li");
    for(let i = 0; i<a.length; i++)
        car.push(a[i].innerHTML);
    verifica_cars_LE();
    var old = JSON.parse(localStorage.getItem('cars_le'));
    old.push(car);
    localStorage.setItem('cars_le', JSON.stringify(old));
}
function salveaza_masina19(){
    var car = [];
    var a = document.getElementById("cv19").getElementsByTagName("li");
    for(let i = 0; i<a.length; i++)
        car.push(a[i].innerHTML);
    verifica_cars_LE();
    var old = JSON.parse(localStorage.getItem('cars_le'));
    old.push(car);
    localStorage.setItem('cars_le', JSON.stringify(old));
}
function salveaza_masina20(){
    var car = [];
    var a = document.getElementById("cv20").getElementsByTagName("li");
    for(let i = 0; i<a.length; i++)
        car.push(a[i].innerHTML);
    verifica_cars_LE();
    var old = JSON.parse(localStorage.getItem('cars_le'));
    old.push(car);
    localStorage.setItem('cars_le', JSON.stringify(old));
}
function salveaza_masina21(){
    var car = [];
    var a = document.getElementById("cv21").getElementsByTagName("li");
    for(let i = 0; i<a.length; i++)
        car.push(a[i].innerHTML);
     verifica_cars_LE();
    var old = JSON.parse(localStorage.getItem('cars_le'));
    old.push(car);
    localStorage.setItem('cars_le', JSON.stringify(old));
}
function salveaza_masina22(){
    var car = [];
    var a = document.getElementById("cv22").getElementsByTagName("li");
    for(let i = 0; i<a.length; i++)
        car.push(a[i].innerHTML);
     verifica_cars_LE();
    var old = JSON.parse(localStorage.getItem('cars_le'));
    old.push(car);
    localStorage.setItem('cars_le', JSON.stringify(old));
}

function afiseaza_masini(){
    console.log(cars_he);
}