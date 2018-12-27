console.log("Proba AJAX");

fetch("slatko.json").then(proba).then(prikaz);

function proba(odgovor) {
    return odgovor.json();
}

function prikaz(tekst){
    let t = tekst;
    //console.log(t);
    for (let el of t) {
        console.log(el.name);
    }
}