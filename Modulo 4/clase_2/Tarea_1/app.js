
var a = Math.floor(Math.random()*1001);
if(a<0){
  a=(a*-1);
}

var b = Math.floor(Math.random()*1001);
if(b<0){
  b=(b*-1);
}

var val1 = document.querySelector('#firstNumber');
val1.innerText = a;

var val2 = document.querySelector('.secondNumber');
val2.innerText = b;

var opcion = Math.floor(Math.random()*4+1);
var operacion="";
var r;

switch (opcion) {
    case 1:
      operacion="+";
      r=a+b;
     break;
    case 2:
     operacion="-";
     r=a-b;
    break;
    case 3:
     operacion="*";
     r=a*b;
    break;
    case 4:
     operacion="/";
     r=a/b;
    break;
  default:

 }

r= r.toFixed(2);

 var val3 = document.querySelector('#operator');
 val3.innerText = operacion;

 var val4 = document.querySelector('#response');
 val4.innerText = r;
