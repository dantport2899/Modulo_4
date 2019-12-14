// creacion de todos los arreglos y variables necesarias
var calificaciones = document.querySelectorAll('td:nth-child(even)');
var materias = document.querySelectorAll('td:nth-child(odd)');

var total=0;
var reprobadas=""
var aprobadas="";

// creacion de las calificacions asignandoles numero aleatoriaos entre el  1 y el 100
for (var i = 1; i < calificaciones.length; i++) {
  var a = Math.floor(Math.random()*101);
  calificaciones[i].innerText = a;
  total= total+a;
// comprobacion de si la calificacion es aprovatoria
  if(a<70){
    calificaciones[i].style.color= "red";
    reprobadas=reprobadas+materias[i].innerHTML+" , ";

  }

  if(70<=a){
    calificaciones[i].style.color= "blue";
    aprobadas=aprobadas+materias[i].innerHTML+" , ";
  }
}

var div = document.querySelector('div');
var test;
//cambio de color de el titulo
test = div.firstElementChild;
test.style.color = "blue";
test.style.padding="30px";


//modificacion del subtitulo
test.nextElementSibling.style['padding'] = "10px";
test.nextElementSibling.style['margin'] = "10px";
test.nextElementSibling.style['color'] = "blue";

var promedio= total/6;
promedio= promedio.toFixed(2);

//calulador del promedio
var pro = document.querySelector('#promedio');
pro.innerText=promedio;

if(promedio<70){
  pro.style.color="red";
}else{
  pro.style.color="blue";
}
// creacion de el string concatenados
var pro = document.querySelector('#repro');
pro.innerText=reprobadas;
var pro2 = document.querySelector('#apro');
pro2.innerText=aprobadas;

//creacion de imagen
function imagenes1() {
  var img = document.createElement('img');
  img.src = 'https://picsum.photos/500/300';
  console.log(img);
  document.querySelector('ul').appendChild(img);
}



function imagenes3() {
  // Eliminar los elementos.
var ul = document.querySelector('ul');
var lil= ul.lastElementChild
lil.remove()
}
