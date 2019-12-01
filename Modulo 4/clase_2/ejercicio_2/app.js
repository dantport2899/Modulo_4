var arreglo = [
  {'name':'omar', 'age':29, 'carrera':'ITS', 'hora':'v1', 'matricula':154233},
  {'name':'gaspar', 'age':22, 'carrera':'IAS', 'hora':'v2', 'matricula':134543},
  {'name':'daniel', 'age':21, 'carrera':'IME', 'hora':'v4', 'matricula':186778},
  {'name':'jose', 'age':20, 'carrera':'IMA', 'hora':'v5', 'matricula':179856},
  {'name':'vicente', 'age':25, 'carrera':'MEC', 'hora':'v6', 'matricula':145355}]


 for (var i = 0; i < arreglo.length; i++) {
   console.log(arreglo[i]);
}

var busqueda = prompt('por favor inserte el nombre de cliente que buscas:');

for (var i = 0; i < arreglo.length; i++) {
  if(arreglo[i].name == busqueda){
    var dato = prompt('Que datos buscas?');
    alert(arreglo[i][dato]);
    break;
  }else if(i==arreglo.lenght-1){
    alert('no cuento con este cliente');
  }
}
