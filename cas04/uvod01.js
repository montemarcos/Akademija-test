let x = 5;
let y;
const z = "James Brown";
y = 12 + 34 + z;
let i = 1 ;
for (i = 1; i < 12; i++){
    console.log(i)
}
console.log("Krajnja vrijednost i je " + i);
console.log(x);
console.log(y);
let z1 = "Pixies";
let niz1 = [];
let niz2 = [12, 23, 31, "Janko", "Ana", [1,2,3,4]];
let niz3 = new Array(4,12,2,3, "janko");
niz1 [0] = 123;
niz1 [4] = "Petar Petrovic";
niz1.push("Tre Kane");

console.log(niz2[4]);
console.log(niz2.length);
console.log(niz2[5]);
console.log(niz2);  
console.log(niz3);
console.log("niz1:" + niz1.length + " " + niz1);
niz2.splice (2,0,100,200,300);
console.log(niz2);  

let student = {
    ime: "Ana",
    indeks: 12,
    ocjene: [7,8,9,10]
};
console.log(student);
console.log(student.ime);
console.log(student["indeks"]);
console.log(student.ocjene[2]);


let p1 = document.getElementById('dodatni');
console.log(p1);



function Stampa(poruka){
    console.log(poruka + " x:" + x + " z1:" + z1);
}

function faktorijel(n){
    let p = 1;
    for (let i = 1; i <=n; i++){
        p *= i;
    }
    return p;
}

Stampa (faktorijel(1+12/3));