; (function () {
  const formulario = document.querySelector('.formNovoCartao');
  formulario.classList.remove('no-js');

  let numeroDoCartao = 0;

  formulario.addEventListener('submit', function enviaForm(event) {
    event.preventDefault();
    const textArea = document.querySelector('.formNovoCartao-conteudo');
    const isTextAreaVazio = textArea.value.trim().length === 0;//trim verifica os espacos e tira, 
    if (isTextAreaVazio) {                               //do inicio e do fim(espacos desnecessarios).
      let msgErro = document.createElement('div');
      msgErro.classList.add('formNovoCartao-msg');
      msgErro.textContent = 'Formulario invalido. Nao digite varios nadas.'
      const btn = document.querySelector('.formNovoCartao-salvar');
      formulario.insertBefore(msgErro, btn);
      formulario.addEventListener('animationend', function (event) {
        event.target.remove();
      })
    } else {
        adicionaCartaoNoMural({conteudo: textArea.value})
    }
    textArea.value = '';
  })
})();
