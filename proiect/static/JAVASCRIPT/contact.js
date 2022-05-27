var select = document.getElementById("select_cars");
var options = ["Low-End", "Medium", "High-End", "Pachet avantajos"];

for(var i = 0; i < options.length; i++) {
    var opt = options[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    el.style.background = "#6dc4f3";
    select.add(el);
}


function insert(){
    var programare;
    var data_value = document.getElementById("data").value;
    var nume_value = document.getElementById("nume").value;
    programare = nume_value + ' ' + data_value;
    if(localStorage.getItem('p') == null){
        localStorage.setItem('p', '[]');
    }
    var old_p = JSON.parse(localStorage.getItem('p'));
    old_p.push(programare);
    localStorage.setItem('p', JSON.stringify(old_p));
}

function afiseaza_programari(){
    var stored_p = JSON.parse(localStorage.getItem('p'));
    if(stored_p){
        stored_p.sort();

        let list = document.getElementById("list");
  
        stored_p.forEach((item)=>{
            let li = document.createElement("li");
            li.innerText = item;
            list.appendChild(li);
        })
    }
}

function afiseaza_ultimele_3_masini_vizualizate(){
    var stored_he = JSON.parse(localStorage.getItem('cars_he'));
    var stored_m = JSON.parse(localStorage.getItem('cars_le'));
    var stored_le = JSON.parse(localStorage.getItem('cars_m'));
    var last3 = [];
    let i = 0;
    if(stored_he != null)
        last3.push(stored_he.slice(-1)[0]);
    if(stored_m != null)
        last3.push(stored_m.slice(-1)[0]);
    if (stored_le != null)
       last3.push(stored_le.slice(-1)[0]);
    if(last3.length>0){

        let list = document.getElementById("list_masini");
  
        last3.forEach((item)=>{
            let li = document.createElement("li");
            li.innerText = item[0];
            list.appendChild(li);
        })
    }

}

function sterge_programari(){
    localStorage.removeItem('p');
    const el = document.getElementById("lista_de_programari");
    if(el)
        el.remove();
}

function remove_all(){
    const el = document.getElementById("lista_de_programari");
    const el1 = document.getElementById("lista_de_masini");
    if(el)
        el.remove();
    if(el1)
        el1.remove();
    localStorage.clear();
}


const symbols = ['Multumim!', 'Merci!', 'Thanks!', 'Danke!']
count = 0;
let inthandle = setInterval(() => {
  document.getElementById("divANIMATIE2").innerHTML = symbols[count];
  count = (count + 1) % symbols.length
}, 1000)


const myTimeout = setTimeout(myGreeting, 5000);

function myGreeting() {
  document.getElementById("head1").innerHTML = "Alege-ti oferta care ti se potriveste!"
}


let nume = document.getElementById("nume");
let nerr = document.getElementById("nerr");

let email = document.getElementById("email")
let email_err = document.getElementById("email_err");

let tlf = document.getElementById("telefon")
let tlf_err = document.getElementById("tlf_err");

function validate(){
    nume.addEventListener('input', function(e){
        let regex = /^[A-Za-z ,.'-]+$/;
        let currentvalue = e.target.value;
        let valid = regex.test(currentvalue);
        if(valid){
            nerr.style.display = "none";
        }
        else {
            nerr.style.display = "block";
        }
    });

    email.addEventListener('input', function(e){
        let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let currentvalue = e.target.value;
        let valid = regex.test(currentvalue);
        if(valid){
            email_err.style.display = "none";
        }
        else {
            email_err.style.display = "block";
        }
    });

    tlf.addEventListener('input', function(e){
        let regex = /^07[1-9][1-9][1-9][1-9][1-9][1-9][1-9][1-9]$/;
        let currentvalue = e.target.value;
        let valid = regex.test(currentvalue);
        if(valid){
            tlf_err.style.display = "none";
        }
        else {
            tlf_err.style.display = "block";
        }
    });

    
}