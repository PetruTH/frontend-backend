const hostname = '127.0.0.1';
const port = 3000;

const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use("/static", express.static("./static/"));

const path = require("path");

var masini = [
    {},
    {
        "Masina": "Seria 3",
        "Zile" : "",
        "Sterge" : "ok",
        "Servicii premium" : "nu",
    },
    {
        "Masina": "Audi A6",
        "Zile" : "",
        "Sterge" : "ok",
        "Servicii premium" : "nu",

    },
    {
        "Masina": "Lexus LS",
        "Zile" : "",
        "Sterge" : "ok",
        "Servicii premium" : "nu",

    },
    {
        "Masina": "Tesla",
        "Zile" : "",
        "Sterge" : "ok",
        "Servicii premium" : "nu",

    },
    {
        "Masina": "Audi A8",
        "Zile" : "",
        "Sterge" : "ok",
        "Servicii premium" : "nu",

    }
]

let parseUrl = require('body-parser');
const res = require('express/lib/response');
let encodeUrl = parseUrl.urlencoded({ extended: false });
let pachet_dorit = "";
let indexpachet;
let cate_zile = "";
let serv_premium = "";

let d;

app.post("/views", encodeUrl, (req, res) => {
    d = new Date();
    indexpachet=req.body.pachet;
    if (masini[req.body.pachet].Masina != null)
       pachet_dorit = masini[req.body.pachet].Masina;
    if(req.body.nr_zile !=null)
       cate_zile = req.body.nr_zile;
    if(indexpachet != null)
        masini[indexpachet].Zile = cate_zile;
    if(pachet_dorit < 1 || pachet_dorit > 5){
        pachet_dorit = "Pachet indisponibil";
    }
    serv_premium = masini[indexpachet]['Servicii premium'];
    res.redirect("/views/PACHETE_AVANTAJOASE.ejs");
})

app.get("/views/PACHETE_AVANTAJOASE.ejs/pachet_ales", (req, res) => {
    let afiseaza = 'A fost inchiriata masina ' + pachet_dorit + ' ' + 'timp de ' + cate_zile + ' zile, Servicii premium: ' + serv_premium + ". Ati ales pachetul la data: " + d;
    res.send(afiseaza);
})

app.put("/views/PACHETE_AVANTAJOASE.ejs/update/:jsonBody", (req, res) => {
    let jsonObj = JSON.parse(req.params.jsonBody);
    serv_premium = "da";
    console.log("update");
    res.redirect("");
});

app.delete("/views/PACHETE_AVANTAJOASE.ejs/delete/:jsonBody", (req, res) => {
    pachet_dorit = "";
    cate_zile = "";
    serv_premium = "indisponibil";
    res.redirect("");
})




app.get("/views/contact.ejs", (req, res) => {
    res.render("contact.ejs");
})

app.get("/", (req, res) => {
    res.render("index.ejs");
})

app.get("/views/index.ejs", (req, res) => {
    res.render("index.ejs");
})


app.get("/views/oferteHIGHEND.ejs", (req, res) => {
    res.render("oferteHIGHEND.ejs");
})

app.get("/views/oferteLOWEND.ejs", (req, res) => {
    res.render("oferteLOWEND.ejs");
})

app.get("/views/oferteMEDIUM.ejs", (req, res) => {
    res.render("oferteMEDIUM.ejs");
})

app.get("/views/PACHETE_AVANTAJOASE.ejs", (req, res) => {
    res.render("PACHETE_AVANTAJOASE.ejs");
})

app.get('*', function(req, res){
  res.send('Error 404. Pagina nu a fost gasita sau a fost stearsa!', 404);
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
 });