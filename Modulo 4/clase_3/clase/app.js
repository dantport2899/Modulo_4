var listado = document.querySelectorAll('li:nth-child(odd)');

console.log(listado);

for (var i = 0; i < listado.length; i++) {
  listado[i].style.padding = "5px";
  listado[i].innerText = "ELemento Impar";
}

// obtener el primer elemento impar
// document.querySelector('li:nth-child(odd)')
// obtener el primer elemento par
// document.querySelector('li:nth-child(even)')


document.querySelector('.container').style.padding = "20px";

document.querySelector('#titulo').innerText = "Ejemplo";

document.querySelector('.listado').style.color = "blue";

document.querySelector('li:last-child').innerHTML = "<b>Test</b> Code";

test = document.querySelector('li:nth-child(8)')

console.log(test);

test.innerText = "Prueba con una variable";
test.style.color = 'red';
© 2019 GitHub, Inc.
