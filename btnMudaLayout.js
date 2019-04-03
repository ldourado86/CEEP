const btn = document.querySelector('#btnMudaLayout');
const mural = document.querySelector('.mural');

function mudaTexto(){
	if (btn.textContent == "Linhas") {
        btn.textContent = 'Blocos';
    } else {
        btn.textContent = 'Linhas';
    }
}

function mudaLayout(){
    mural.classList.toggle('mural--linha');
}

btn.addEventListener('click',mudaTexto);
btn.addEventListener('click',mudaLayout);

btn.classList.remove('no-js');
