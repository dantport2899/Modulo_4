var x = Math.PI;
var y = Math.PI;

 x = Math.floor(Math.random()*20+1);
 y = Math.floor(Math.random()*20+1);

 console.log("x=",x);
 console.log("y=",y);

 var opcion=4;

switch (opcion) {
    case 1:
     console.log("la suma es: ",suma(x,y));
     break;
    case 2:
     console.log("la resta es: ",resta(x,y));
    break;
    case 3:
    console.log("la multiplicacion es:", multiplicacion(x,y));
    break;
    case 4:
    console.log("la division es: ",division(x,y));
    break;
  default:

 }

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
