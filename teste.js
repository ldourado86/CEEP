var botao = document.querySelector('#btnMudaLayout');

var mural = document.querySelector('.mural');


botao.onclick = function(){
	mural.classList.toggle('mural--linha');

}

