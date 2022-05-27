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


function evidentiaza(){
    var elements = document.querySelectorAll("#imp1, #imp2, #imp3");
    elements.forEach((item)=>{
        item.style.color = "red";
        item.style.fontSize = "x-large";
    });
}

function adresa_exacta(){
    el = document.getElementById("poza");
    el.style.display = "none";
    buton = document.getElementById("btn");
    buton.innerText = "Aleea Porumbelului, nr 1";
}

var statistica = [
    {
        "An": "2018",
        "Numar de masini": "25",
        "Media clientilor pe luna": "30",
        "Sedii": "1",
//        "Sponsori": ["Sponsor_1", "Sponsor_2", "Sponsor_3"],
        "Sponsori": ["abc", "abb", "abd"]
    },
    {
        "An": "2019",
        "Numar de masini": "38",
        "Media clientilor pe luna": "55",
        "Sedii": "1",
        "Sponsori": ["Sponsor_2", "Sponsor_4", "Sponsor_5"],
    },
    {
        "An": "2020",
        "Numar de masini": "59",
        "Media clientilor pe luna": "89",
        "Sedii": "2",
        "Sponsori": ["Sponsor_5", "Sponsor_6", "Sponsor_7"],
    },
    {
        "An": "2021",
        "Numar de masini": "107",
        "Media clientilor pe luna": "96",
        "Sedii": "3",
        "Sponsori": ["Sponsor_8", "Sponsor_9", "Sponsor_9"],
    },
    {
        "An": "2022",
        "Numar de masini": "150",
        "Media clientilor pe luna": "140",
        "Sedii": "3",
        "Sponsori": ["Sponsor_8", "Sponsor_9", "Sponsor_4"],
    }
]

function creaza_tabel() {
    var col = [];
    for (var i = 0; i < statistica.length-1; i++) {
        for (var key in statistica[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }

    var table = document.createElement("table");


    var tr = table.insertRow(-1);                   

    for (var i = 0; i < col.length-1; i++) {
        var th = document.createElement("th");      
        th.innerHTML = col[i];
        tr.appendChild(th);
    }

    for (var i = 0; i < statistica.length-1; i++) {

        tr = table.insertRow(-1);

        for (var j = 0; j < col.length-1; j++) {
            var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = statistica[i][col[j]];
        }
        tr.classList.add("rand");
    }

    var divContainer = document.getElementById("showData");
    divContainer.innerHTML = "";
    table.classList.add("TABEL");
    divContainer.appendChild(table);   
}

function sponsori(){
    var s = [];
    for(let i = 0; i<statistica.length; i++){
        s = s.concat(statistica[i].Sponsori);
        s.sort();
    }

    let Sponsori_unici = s.filter((element, index) => {
        return s.indexOf(element) === index;
    });
    return Sponsori_unici;
}

function afiseaza_sponsori(){
    var p = sponsori();
    let list = document.getElementById("list");
    while(p.length>0){
        item = p.pop();
        let li = document.createElement("li");
        li.innerText = item;
        list.appendChild(li);
    }
}
afiseaza_sponsori();

let maindiv = document.getElementById("div_principal");
const cssObj = window.getComputedStyle(maindiv, "");
let standard_color = cssObj.getPropertyValue("background-color");
let font_color_standard = cssObj.getPropertyValue("color");

function dark_mode(){
    let de_ascuns = document.getElementById("de_ascuns");
    de_ascuns.style.display = "none"
    maindiv.style.backgroundColor = "rgb(112,128,144)";
    let badi = document.getElementById("body");
    badi.style.backgroundColor = "rgb(50,50,50)"
    let dm1 = document.getElementById("dm1");
    let dm2 = document.getElementById("dm2");
    let dm3 = document.getElementById("dm3");
    let dm4 = document.getElementById("dm4");
    let dm5 = document.getElementById("dm5");
    dm1.style.color = "white";
    dm2.style.color = "white";
    dm3.style.color = "white";
    dm4.style.color = "white";
    dm5.style.color = "white";
}

function light_mode(){
    let badi = document.getElementById("body");
    badi.style.backgroundColor = "aliceblue"
    let de_ascuns = document.getElementById("de_ascuns");
    de_ascuns.style.display = "block"
    maindiv.style.backgroundColor = standard_color;
    let dm1 = document.getElementById("dm1");
    let dm2 = document.getElementById("dm2");
    let dm3 = document.getElementById("dm3");
    let dm4 = document.getElementById("dm4");
    let dm5 = document.getElementById("dm5");
    dm1.style.color = font_color_standard;
    dm2.style.color = font_color_standard;
    dm3.style.color = font_color_standard;
    dm4.style.color = font_color_standard;
    dm5.style.color = font_color_standard;
}

function clic(){
    document.addEventListener('click', f);
    function f(e){
        let x = e.pageX;
        let y = e.pageY;
        let div = document.createElement('div');
        div.style.position = "absolute";
        div.style.top = y + 'px';
        div.style.left = x + 'px';
        div.style.width = "5px";
        div.style.height = "5px";
        div.style.backgroundColor = 'rgb(' + Math.random()*255 + ',' + Math.random()*255 + ',' + Math.random()*255 + ')';
        div.style.borderRadius = "100%";
        document.body.append(div);
        const timeout=setTimeout(hide, 3000);
        function hide(){
            div.style.display = "none";
        }
    }
}

function clic2(event){
    event.stopPropagation();
    alert("Strada porumbelului, nr1");
}

function filtru() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("list");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}