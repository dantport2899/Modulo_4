// Window object

// window.alert('Hola Mundo');

// Prompt para obtener valores de entrada del usuario o cliente
// var val = prompt();

// Para mostrar alguna variable en nuestra pagina web
// alert(val);


// Do While

// var i = 0;
// do {
//   console.log(i);
//   i++
// } while(i<10);

// While loop

// var i = 0;
// while(i < 10) {
//   console.log(i);
//   i++;
// }

// For loop
// var arreglo = ["TEst", false, 2, 3, 5]
//
// for (var i = 0; i < arreglo.length; i++) {
//   console.log(arreglo[i]);
//   if (i == 2) {
//     console.log('Es la posicion 3');
//   }
// }

// Functions
// function saludo(name= "Omar", apellido="Montalvo") {
//   return 'Hello '+name+' '+apellido;
// }
//
//
// console.log(saludo());

// switch

// var color = 'blue';
//
// switch (color) {
//   case 'yellow':
//     console.log('Color is yellow');
//     break;
//   case 'blue':
//     console.log('Color is blue');
//     break;
//   case 'red':
//     console.log('Color is red');
//     break;
//   default:
//
// }

// Comparasions
// var name = "Omar";
// var age = 66;
// var job = "Dev";

// if (age < 15 || age > 65) {
//   console.log("Entro en esta opción");
// }

// Rangos
// if (age > 0 && age < 15) {
//   console.log("Es menor a 15 o joven");
// } else if (age >= 15 && age <= 19) {
//   console.log("Segunda opcion");
// } else {
//   console.log("Persona adulta");
// }


// if (job != "Dev") {
//   console.log("Si es diferente de Test");
// } else if(job === "Dev"){
//   console.log('Es igual a dev');
// } else {
//   console.log('Diferente de test');
// }

// if (age > 29) {
//   console.log("Si es menor o igual a 30");
// }

// // Si es igual
// if (age == 29) {
//   console.log("Si es 29");
// // SI NO CUMPLE
// } else {
//   console.log("No son iguales");
// }

// DIFERENTE de
// if (job != "Test") {
//   console.log("Si es diferente de Test");
// }


// Concatenar
// var name = "Omar";
// var age = 29;
// var job = "Dev";
// var city = "MTY";
//
// var html = '<ul>' +
//        '<li>Name: ' + name + '</li>' +
//        '<li>Age: ' + age + '</li>' +
//        '<li>Job: ' + job + '</li>' +
//        '<li>City: ' + city + '</li>' +
//        '</ul>';
//
// document.write(html);
// Validar si mi string contiene cierto string
// var info = "Omar, 28, test, 2";
// var test = info.includes('hola');
// obtienes un booleano
// console.log(test);

// // Convertir string en arreglo
// var info = "Omar, 28, test, 2";
// // Dependiendo el caracter a separar
// var arreglo = info.split(',');
// console.log(info);
// console.log(arreglo);

// var saludo = "Hola";
// var name = "Omar";
// var materia = "Javascript";

// var concatenado = saludo+" "+name+" "+"la materia es: "+materia;

// var concatenado = 'Esta es la materia de "Javascript"'

// Longitud de mi String
// var test = saludo.length;

// Cambiar mayusculas
// saludo.toUpperCase();

// Cambiar minisculas
// saludo.toLowerCase();

// Posicion de caracteres
// saludo[2]

// Obtener el indice de un caracter
// console.log(saludo[saludo.indexOf('a')]);
// console.log(saludo.indexOf('a'));











// Objeto Math
// var val = Math.PI;
// val = Math.round(2.6);
// val = Math.ceil(2.2);
// val = Math.floor(Math.random()*20+1);
// console.log(val);

// Operaciones
// var x = 100;
// var y = 50;
//
// var resultado;
//
// resultado = [x+y,
// x-y,
// x*y,
// x/y,
// x%y,]
// resultado = x+y;
// resultado = x-y;
// resultado = x*y;
// resultado = x/y;
// resultado = x%y;

// console.log("El resultado es:", resultado);
// console.log(resultado);


// Conversion de datos
// var val = "Test";
// val = "100.30";
// // val = parseInt(val);
// val = parseFloat(val);
// console.log(val);
// console.log(typeof val);
// var test = 5;
// test = String(test);
// var name = "Omar";
// console.log(name+test);

// // Referencias-Objetos
// // Array
// var hobbies = ["movies", "futbol", "bicicleta"];
// // Objetos
// var address = {
//   city: "Monterrey",
//   state: "Nuevo Leon",
//   info: {
//     name: "Omar",
//     age: 29,
//   },
//   arreglo: ["movies", "futbol", "bicicleta"]
// };
//
// console.log(address);

// console.log(hobbies[1]);

// // Primitivas
//
// // String
// var name = "Omar Jair";
//
// // Number
// var age = 29;
//
// // Boolean
// var test = true;
//
// // Null
// var car = null;
//
// // No definidas
var test2;
 test2 = car;
test2 = name;


// console.log(name);
// console.log(age);
// console.log(test);
// console.log(car);
console.log(test2);

// console.log('Hola Mundo');
