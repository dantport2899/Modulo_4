var listado = document.querySelectorAll('li:nth-child(odd)');
console.log(listado);

for (var i = 0; i < listado.length; i++) {
  listado[i].style.color = "blue";
  listado[i].innerText = "ELemento Par";
}

var listado2 = document.querySelectorAll('li:nth-child(even)');

for (var i = 0; i < listado.length; i++) {
  listado2[i].style.color= "red";
  listado2[i].innerText = "ELemento Impar";
}
