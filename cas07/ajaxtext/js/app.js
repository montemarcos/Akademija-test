 function spreman(text) {
  const urls = text.split('\n');
  let i = 0;
  for (const url of urls) {
    const image = new Image();
    image.src = url;
    document.body.append(image);
  }
 
}

function reakcija(response) {
  return response.text();
}

fetch('images.txt').then(reakcija).then(spreman);
