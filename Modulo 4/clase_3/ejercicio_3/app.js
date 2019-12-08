var titulo2 = document.querySelector('#titulo2');

var titulo3 = titulo2.nextElementSibling;
var test2 = titulo3.firstElementChild;
test2.innerText = "Primer elemento";

var titulo1 = titulo2.previousElementSibling;
var test = titulo1.lastElementChild;
test.style.color = "blue";
