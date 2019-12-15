// Eventos

var boton = document.querySelector('.btn');

// Listado de eventos: https://www.w3schools.com/jsref/dom_obj_event.asp

boton.addEventListener('mouseover', test);

function test(evento) {
  // debugger;
  document.querySelector('h1').style.color = 'red';
  document.querySelector('h1').innerText = evento.target.id;

}
function alDarClick(e) {
  // debugger;
  document.querySelector('h1').innerText = 'Cambio de Titulo';
}
