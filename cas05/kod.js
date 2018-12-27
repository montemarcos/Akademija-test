// console.log("Prisutan na casu");
let nizSlika = ['florence.jpg', 'stanford.jpg', 'muzej.jpg'];
let slika = document.querySelector("img");
let tekuciIndeks = 0;
showImage(nizSlika[tekuciIndeks]);

let btnPopuni = document.getElementById("fillimage");
console.log(btnPopuni);

btnPopuni.addEventListener('click', klikPopuni);
// alert("proba");

let btnFromList = document.querySelector("#listselect");
btnFromList.addEventListener('click', klikLista);

let d1 = document.querySelector("div"); 
d1.innerHTML = d1.innerHTML + "<p>Novi tekst</p>";
let noviParagraf = document.createElement("p");
noviParagraf.textContent = "Treci paragraf"; 
d1.appendChild(noviParagraf);

let lista1 = document.querySelector("#multi");
let niz = lista1.querySelectorAll("option:checked");
for (elem of niz) {
    console.log(elem.value);
}

/*
document.addEventListener('keydown', TasterDoljeHandler);

function TasterDoljeHandler(event){

}
*/

/* nacin sa anonimnom funkcijom */

document.addEventListener('keydown', function (event){
    if (event.key === "ESC") {
        return;
    }
    let sledeciIndeks = tekuciIndeks;
    if (event.key === "ArrowRight") {
    sledeciIndeks++;
    }
    if (event.key === "ArrowLeft") {
        sledeciIndeks--;
        }
    if (sledeciIndeks < 0 || sledeciIndeks >= nizSlika.length){
        return;
    }
        tekuciIndeks = sledeciIndeks;
        showImage(nizSlika[sledeciIndeks]);
    }
);

// treci nacin - lambda expression
// document.addEventListener('keydown', event=>{});


// nastavicemo sledeci cas. setInterval (function(), 2000);

function showImage(tekuca) {
    let tekucaSlika = document.querySelector("#nekaslika");
    let ekstenzija = ""; 
    
    if(tekuca.indexOf(".jpg") < 0)
    ekstenzija = ".jpg";
    tekucaSlika.src = "images/" + tekuca + ekstenzija;
}


function klikLista(event) {
    event.preventDefault();
    let lista = document.querySelector("select");
    // alert(lista.selectedIndex);     
    let ind = parseint(lista.selectedIndex);
    showImage(nizSlika[ind]);
} 

function klikPopuni(e){
    e.preventDefault();
    // alert("Proba u funkciji");
    let txtNaziv = document.querySelector("#search");
    //console.log(txtNaziv);
    let imeFajla = txtNaziv.value; 
    //console.log(imeFajla);
    showImage(imeFajla);
    //slika.src="images/" + imeFajla + ".jpg";
    // alert(slika.src);
	//console.log(slika.src); 
    
}

let span1 = document.querySelector(".dugme");
span1.addEventListener('click', klikOnSpanHandler);

function klikOnSpanHandler(event) {
    let nazivFajla = document.querySelector('#search').value;
    showImage(nazivFajla);
    /*
    if (nazivFajla !== ""){

    }
*/
}