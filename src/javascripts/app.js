var alternador = document.querySelector('.js-botao-chaveador');

alternador.onclick = function() {
	var menu = document.querySelector('.js-menu');
	//toggle ==> chaveie essa classe: qdo tiver ele remore, quando não houver ele inclui
	menu.classList.toggle('menu--exibindo');
}