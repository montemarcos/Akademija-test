class Present {
    constructor(kontejner){
        this.kontejner = kontejner; 
        // alert(this.kontejner); 
        let slika = document.createElement('img');
        slika.src = "images/gift-icon.png";
        slika.addEventListener('click', this.openPresent);
        this.kontejner.append(slika);
    }
    
    openPresent(e){
        const im = e.currentTarget;
        im.src = "images/giphy.gif"; 
        im.removeEventListener('click', this.openPresent);
    } 
}

class Menu {
  constructor(buttonContainer, statusBar) {
    this.buttonContainer = buttonContainer; //document.querySelector('#menu');
    this.statusBar = statusBar; //document.querySelector('#status-bar');
    
    this.showButtonClicked = this.showButtonClicked.bind(this);
    
    this.buttons = [
      new Button(this.buttonContainer, 'A'),
      new Button(this.buttonContainer, 'B'),
      new Button(this.buttonContainer, 'C')
    ];
    
    document.addEventListener('button-clicked', this.showButtonClicked);
  }
  
  showButtonClicked(event) {
    this.statusBar.textContent = event.detail.buttonName + ' was clicked';
  }
}

class Button {
  constructor(containerElement, text) {
    this.containerElement = containerElement;
    this.text = text;
    
    this.onClick = this.onClick.bind(this);
    
    const button = document.createElement('button');
    button.textContent = text;
    button.addEventListener('click', this.onClick);
    this.containerElement.append(button);
  }
  
  onClick() {
    const eventInfo = {
      buttonName: this.text
    };
    document.dispatchEvent(
        new CustomEvent('button-clicked', { detail: eventInfo }));
  }
}

function popuni(){
  
  let el = document.querySelector('.picture');
  const present = new Present(el);
  let btnCont = document.querySelector('#menu');
  let statBar = document.querySelector('#status-bar');
  const menu = new Menu(btnCont, statBar); 
}; 

popuni();
