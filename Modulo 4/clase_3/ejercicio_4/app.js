var li = document.querySelectorAll('.listData');
var ol = document.querySelector('ol');

var newElement = document.createElement('img');
newElement.src = 'https://picsum.photos/100/100';
ol.replaceChild(newElement, li[2])


var li5 = document.querySelector('li:nth-child(4)');
li5.remove();


var link = document.createElement('a');
link.className = 'link';
link.innerText = 'Go to Youtube';
link.href = 'https://www.youtube.com';
document.querySelector('ol').prepend(link);

var link2 = document.createElement('a');
link2.className = 'link2';
link2.innerText = 'Go to goole';
link2.href = 'https://www.google.com';
document.querySelector('ol').prepend(link2);
