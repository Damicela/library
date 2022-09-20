

const body = document.body;



const libros = [
  {
    titulo: 'La sombra del viento',
    portada: 'https://kbimages1-a.akamaihd.net/c339246f-1ab3-4916-8fdf-16e2e3a6b3ee/353/569/90/False/la-sombra-del-viento-2.jpg',
    Autor: 'Carlos Ruiz Safón'
  },
  {
    titulo: 'Ensayo sobre la ceguera',
    portada: 'https://www.revistalatinacs.org/071/rese/77PortSaramago.jpg',
    Autor: 'Jose Saramago'
  },
  {
    titulo: 'Oliver Twist',
    portada: 'https://www.juanherranz.com/wp-content/uploads/2019/11/Oliver-Twist.jpg',
    Autor: 'Charles Dickens'
  }

];




const crearHtml = (arr) => {

  const { titulo, portada, Autor } = arr;
  let html = `<figure class="figure">
  <img src="${portada}" class="figure-img img-fluid rounded" alt="...">
  <figcaption class="figure-caption">${titulo}, ${Autor}</figcaption>
</figure>`
  
return html
}






const insertBook = () => {
  let div = document.createElement('div');
  body.append(div);
  
  let stock = '';
  libros.forEach(libro => {
    stock += crearHtml(libro);

  })
  
div.innerHTML = stock;

}


export {
  crearHtml,
  insertBook,
  libros
}