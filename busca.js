; (function () {
    //fazendo com javaScript

    const btnBusca = document.querySelector('#busca');
    btnBusca.classList.remove('no-js');

    btnBusca.addEventListener('input', function(){
        const conteudoBtn = btnBusca.value;
        const conteudoBtnTratado = conteudoBtn.toLowerCase().trim();
        
        if(conteudoBtnTratado.length){
            const cartoes = document.querySelectorAll('.cartao');
                
            cartoes.forEach(function(cartao){
                const conteudoCartao = cartao.querySelector('.cartao-conteudo');
                cartao.classList.add('no-js');
                if (conteudoCartao.textContent.toLowerCase().match(btnBusca.value.trim())) {
                    cartao.classList.remove('no-js');
                }
            });
        }
    });
    
// fazendo com JQUERY abaixo.

 /*   $('#busca').removeClass('no-js').on('input',function(){
        $.each($('.cartao'), function () {
            if($(this).find('p').text().trim().toLowerCase().match($('#busca').val().trim().toLowerCase())){
                console.log($(this).show());
            }else{
                $(this).hide();
            }    
        });
    });*/

    /*btnBusca.on('input', function() {
        const cartoes = $('.cartao');
    })*/


})();

