; (function () {
    const $btnAjuda = $('#btnAjuda').removeClass('no-js');
    const $btnModal = $('#myModal');
    const $btnClose = $('.close');

    /*$btnAjuda.on('click', function () {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://ceep.herokuapp.com/cartoes/instrucoes');
        xhr.responseType = 'json';
        xhr.send();
        xhr.addEventListener('load', function () {
            const objeto = xhr.response;            
            const ajudas = objeto.instrucoes;
            ajudas.forEach(function (ajuda) {
                adicionaCartaoNoMural(ajuda);
            });
        });
    });*/
    

    // DESAFIO 
    $btnAjuda.on('click', function () {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://ceep.herokuapp.com/cartoes/instrucoes');
        xhr.responseType = 'json';
        xhr.send();
        $btnModal.show();
        xhr.addEventListener('load', function () {
            const objeto = xhr.response;            
            const ajudas = objeto.instrucoes;
            ajudas.forEach(function addConteudo(ajuda) {
               $(`<p>${ajuda.conteudo}</p>`).appendTo('.modal-conteudo');               
            });
        });
        
    });

    $btnClose.on('click', function() {
        $btnModal.find("p").remove();
        $btnModal.hide(); 
    });
})();