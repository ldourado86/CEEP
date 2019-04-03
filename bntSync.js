;(function(){
    const $btnSync = $('#btnSync');

    $btnSync.on('click',function(){
        $btnSync.addClass('botaoSync--sincronizado');
        $btnSync.removeClass('botaoSync--sincronizado');
        
        const salvadorDeCartoes = new XMLHttpRequest();
        salvadorDeCartoes.open('POST', 'https://ceep.herokuapp.com/cartoes/salvar');
        salvadorDeCartoes.setRequestHeader('Content-Type', 'application/json');

        const $cartoes = $('.cartao');
        const infosDoMural = {
            usuario: 'ldourado86@gmail.com'
            ,cartoes: Array.from($('.cartao')).map(function(cartao){
                return{
                    conteudo: cartao.querySelector('.cartao-conteudo').textContent,
                    cor: getComputedStyle(cartao).getPropertyValue('background-color')
                }
            })
        }
        salvadorDeCartoes.send(JSON.stringify(infosDoMural));//esse metodo transforma um objeto em JSON.

        salvadorDeCartoes.addEventListener('load', function () {
            const response = JSON.parse(salvadorDeCartoes.response);
            console.log(`${response.quantidade} cartões salvos em ${response.usuario}`)

            $btnSync.removeClass('botaoSync--esperando')
            $btnSync.addClass('botaoSync--sincronizado')
        });

        salvadorDeCartoes.addEventListener('error', function() {
            $btnSync.removeClass('botaoSync--esperando');
            $btnSync.addClass('botaoSync--deuRuim');
        });
    });
    $btnSync.removeClass('no-js');
})();
