let colores = ['rojo','verde','azul','amarillo','morado'];

//Capturando los elementos
//let listado = document.getElementById('listado');
//let listado = document.querySelector('ul');
//let listado = document.querySelector('#listado');
let listaColores = document.getElementById('listaColores');
let listado = document.querySelector('.listado');
let titulo = document.querySelector('.titulo');
//let etiquetaH2 = document.querySelectorAll('h2');
let etiquetaH2 = document.querySelectorAll('.subtitulo');
console.log(listado);
console.log(etiquetaH2);
console.log(listaColores);

//Variando el contenido del elemento capturado
titulo.classList.add('destacado');
listaColores.innerHTML = '<i>'+'Listado de colores'+'</i>';
//listaColores.innerText = '<i>'+'Listado de colores'+'</i>';
listaColores.style.color = 'red';
listaColores.style.textAlign = 'center';
listaColores.style.fontFamily = 'arial';
listaColores.style.fontSize = '40px';

//listado.classList.add('destacado');
//listado.style.textAlign= 'center';
for(let i=0; i < colores.length; i++){
    listado.innerHTML += `<li>${colores[i]} </li>`;
}
