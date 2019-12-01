
do{

var x = Number(prompt('por favor inserte el valor de x'));

var y = Number(prompt('por favor inserte el valor de y'));

 var opcion=prompt('por favor inserte lo que desea realizar');;



switch (opcion) {
    case "suma":
     alert("la suma es: ",suma(x,y));
     break;
    case "resta":
      alert("la resta es: ",resta(x,y));
    break;
    case "multiplicacion":
     alert("la multiplicacion es:", multiplicacion(x,y));
    break;
    case "division":
     alert("la division es: ",division(x,y));
    break;
  default:

 }


if(confirm('Deseas realixar alguna otra operacion?')){
  var c=1
}else {
  var c=0
}

}while(c==1);

 function suma(x,y) {
   return  x+y ;
 }

 function resta(x,y) {
  return x-y;
}

function multiplicacion(x,y) {
  return x*y ;
}

function division(x,y) {
  return x/y ;
}
