var val;
val = document.querySelectorAll('li');

for (var i = 0; i < val.length; i++) {
   console.log(val[i]);
   val[i].style.padding = '10px';

}


var val1;
val1 = document.querySelectorAll('#impar');

for (var i = 0; i < val1.length; i++) {

   val1[i].style.color = 'blue';
}

var val2;
var val2 = document.querySelectorAll('#par');
for (var i = 0; i < val2.length; i++) {

   val2[i].style.color = 'red';
}

var val3 = document.querySelector('.primero');
val3.style.fontSize = '30px'

var val4 = document.querySelector('.segundo');
val4.style.fontSize = '60px'
