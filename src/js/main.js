
var anim = document.querySelector('.btn');
var btn = document.querySelector('.btn');
var menu = document.querySelector('.menu');

btn.onclick = function() {
	menu.classList.toggle('menu-open');
	anim.classList.toggle('anim');
};
