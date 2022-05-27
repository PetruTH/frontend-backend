// function update() {
//   let zile = document.getElementById("update").value;
//   console.log(zile);
//   fetch('/views/PACHETE_AVANTAJOASE.ejs', {
//   method: "POST", 
//   headers: {
//   'Content-type': 'application/json'
//   },
//   body: JSON.stringify(
//   { cate_zile: zile}
//   )
//   })
//   .then(res => {
//   if (res.ok) { console.log("HTTP request successful") }
//   else { console.log("HTTP request unsuccessful") }
//   return res
//   })
//   .then(res => res.json())
//   .then(data => console.log(data))
//   .catch(error => console.log(error))
//   }

let masini = ["Seria 3", "Audi A6", "Lexus LS", "Tesla", "Audi A8"]

function delete_pack(){
  let data = {
    "Sterge" : "ok"
  }
  fetch("/views/PACHETE_AVANTAJOASE.ejs/delete/" + JSON.stringify(data), {
    method: "DELETE"
  }).then(rest => {
  console.log("delete");
})
}

function update(){
  let data = {
    "Servicii premium" : "da"
  }
  console.log(JSON.stringify(data));
  fetch("/views/PACHETE_AVANTAJOASE.ejs/update/" + JSON.stringify(data), {
    method: "PUT"
  }).then(rest => {
  console.log("update");
})
}