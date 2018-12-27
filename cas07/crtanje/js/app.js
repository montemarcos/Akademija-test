let platno = document.querySelector('canvas');
let ctx = platno.getContext('2d');
let currX = 0;
let currY = 0;
let mouseDown = false; 

let boje = ['red', 'blue', 'black', 'orange', 'green', 'magenta'];

ctx.fillStyle = boje[3];
ctx.strokeStyle = 'red';
ctx.fillRect(20,20,100,60);
ctx.strokeRect(130,20,40,70);
ctx.arc(60,150,40,0, Math.PI*2,true );
ctx.fill();

ctx.beginPath();
ctx.arc(160,150,40,0, Math.PI/4,true);
ctx.closePath();
ctx.fill();

platno.addEventListener('mousedown',dolje);
platno.addEventListener('mouseup',gore);
platno.addEventListener('mousemove',mrda);

let btn = document.querySelector('button');
btn.addEventListener('click', brisi);

function brisi(ev){
	ctx.setTransform(1,0,0,1,0,0);
	// ctx.saveContext();
    ctx.clearRect(0,0,platno.width, platno.height);
}

function dolje(ev){
	// lijevi taster misa
     if (ev.which == 1){
        mouseDown = true;
        currX = ev.offsetX; 
        currY = ev.offsetY;
        return; 
    }
	// srednji taster
    if (ev.which == 2){
        ev.preventDefault();
        ctx.beginPath();
        ctx.fillStyle = boje[Math.floor(boje.length*Math.random())];
        ctx.arc(ev.offsetX, ev.offsetY, 30,0, Math.PI,true);
        ctx.fill();
    }
	
	// kombinovano shift + desni taster misa  
    if (ev.which == 3 && ev.shiftKey){
        platno.oncontextmenu = function(e){
          e.preventDefault();
          //return false;
        };
        // ev.preventDefault();
        ctx.beginPath();
        ctx.fillStyle = boje[Math.floor(boje.length*Math.random())];
        ctx.fillRect(ev.offsetX, ev.offsetY, 30,30);
		// ctx.stroke();
    }
}

function gore(ev){
    mouseDown = false;
    // ctx.closePath();
}

function mrda(ev){
    if (mouseDown){
        ctx.moveTo(currX, currY);
        ctx.lineTo(ev.offsetX, ev.offsetY);
        ctx.stroke();
        currX = ev.offsetX; 
        currY = ev.offsetY;
    }
}