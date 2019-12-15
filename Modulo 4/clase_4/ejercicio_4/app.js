
var elementosli =document.querySelectorAll("li");

  for(var i=0; i<elementosli.lenght; i++){
    elementosli[i].addEventListener('mouseover, cambiarcolor');
  }

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for(var i =0; i<6 ; i++){
    color += letters[Math.floor(Math.random()*16)];
  }

	return color;
}

  function cambiarcolor(e) {
   var elementoAmodifcar= e.target;
   elementoAmodificar.style['background-color'] = getRandomColor();
}
