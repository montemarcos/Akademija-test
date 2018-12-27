var req = new XMLHttpRequest();
/*
alert("Url  ="+window.location.host);
alert("PathName  ="+ window.location.pathname);// Returns path only
alert("url  ="+window.location.href);// Returns full URL
*/
const putanja = window.location.host; 
// alert(putanja);
req.open('GET', '/ajax/slatko.json');
req.onreadystatechange = function () {
  if(req.readyState === 4 && req.status === 200) {
	// alert(req.responseText);
    let slatkisi = JSON.parse(req.responseText);
    let slatkaLista = '<ul class="slatkisi">';
    for (let i=0; i<slatkisi.length; i++) {
      if (slatkisi[i].quantity > 0) {
        slatkaLista += '<li class="item available">';
      } else {
        slatkaLista += '<li class="item sold-out">';
      }
      slatkaLista += slatkisi[i].name + '<br>' + "Brand: " + slatkisi[i].brand;
      slatkaLista += '<button>Buy</button>'
      slatkaLista += '</li>';
    }
    slatkaLista += '</ul>';
	// console.log(slatkaLista);
    // document.getElementById('slatkalista').innerHTML = slatkaLista;
	let doc = document.querySelector('#listaslatkisa'); 
	if (!doc){
		alert('Nema liste slatkisa');
	}
	else {
		doc.innerHTML = slatkaLista; 
	}
	
  }
};
req.send();
