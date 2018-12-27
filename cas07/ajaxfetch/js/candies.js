let req = new XMLHttpRequest();
const putanja = window.location.host; 
req.open('GET', '/ajax/slatko.json');
req.onreadystatechange = function () {
  if(req.readyState === 4 && req.status === 200) {

    let slatkisi = JSON.parse(req.responseText);
    let slatkaLista = document.createElement('ul');
	slatkaLista.classList.add('slatkisi');
    /*
	for (let i=0; i<slatkisi.length; i += 1) {
      let komad = document.createElement('li');
	  komad.classList.add('item');
	  if (slatkisi[i].quantity > 0) {
	    komad.classList.add('available');
      } 
	  else {
		  komad.classList.add('sold-out');
      }
	  let inh = slatkisi[i].name + '<br>' + "Brand: " + slatkisi[i].brand;
      komad.innerHTML = inh + '<button>Buy</button>'; 
	  slatkaLista.appendChild(komad);
    }
	*/
	for (let cake of slatkisi) {
		let komad = document.createElement('li');
		komad.classList.add('item');
		console.log(cake);
		if (cake.quantity > 0) {
			komad.classList.add('available');
		} 
		else {
			  komad.classList.add('sold-out');
		}
		let inh = cake.name + '<br>' + "Brand: " + cake.brand;
		komad.innerHTML = inh; 
		let btn = document.createElement('button');
		btn.textContent = "Kupi";
		btn.classList.add('dugme');		
		komad.appendChild(btn);
		slatkaLista.appendChild(komad);
    }
	
    let doc = document.querySelector('#listaslatkisa'); 
	if (!doc){
		alert('Nema liste slatkisa');
	}
	else {
		doc.appendChild(slatkaLista);
	}
	
  }
};
req.send();
