//https://www.html5canvastutorials.com/

let cnv = document.querySelector('#platno');
let ctx = cnv.getContext('2d');
ctx.beginPath();
ctx.rect(188, 50, 200, 100);
ctx.fillStyle = 'yellow';
ctx.fill();
ctx.lineWidth = 4;
ctx.strokeStyle = 'black';
ctx.stroke();

// console.log(ctx); 

/*

var canvas = document.querySelector('#platno');
var cbx = canvas.getContext('2d');
var centerX = canvas.width / 2;
var centerY = canvas.height / 2;
var radius = 70;
cbx.beginPath();
cbx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
cbx.fillStyle = 'blue';
cbx.fill();
cbx.lineWidth = 1;
cbx.strokeStyle = 'blue';
cbx.stroke();
*/


var canvas = document.querySelector('#platno');
var ctl = canvas.getContext('2d');
ctl.beginPath();
ctl.arc(100, 100, 60, 0.25 * Math.PI, 1.25 * Math.PI, false);
ctl.fillStyle = "rgb(255, 255, 0)";
ctl.fill();
ctl.beginPath();
ctl.arc(100, 100, 60, 0.75 * Math.PI, 1.75 * Math.PI, false);
ctl.fill();



let crtaj = false;
let tekuceX = 0;
let tekuceY = 0;
cnv.addEventListener('mousedown', dolje);
cnv.addEventListener('mouseup', gore);
cnv.addEventListener('mousemove', mrdaj);

function dolje(ev) {
    if (ev.which == 1){
        crtaj = true;
        tekuceX = ev.offsetX;
        tekuceY = ev.offsetY;
    }
}


function gore(ev) {
    if (ev.which ==1){
        crtaj = false;
    }
}

function mrdaj(ev) {
    if (crtaj) { 
        if (ev.which ==1){
        ctx.moveTo(tekuceX, tekuceY);
        ctx.lineTo(ev.offsetX, ev.offsetY);

        tekuceX = ev.offsetX;
        tekuceY = ev.offsetY;
        ctx.stroke();

    }
   
    }
}
