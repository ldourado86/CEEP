

    // nao estamos mais usando esse arquivo, pois ele foi refatorado
    // no arquivo formNovoCartao.js


;(function(){
    const cartoes = document.querySelectorAll('.cartao');

    let numeroDoCartao = 0;

    for(let i = 0; i< cartoes.length; i++){
        const cartao = cartoes[i];
        
        cartao.addEventListener('focusin',function(){
            cartao.classList.add('cartao--focado')
        })

        cartao.addEventListener('focusout', function(){
            cartao.classList.remove('cartao--focado');
        })

        cartao.addEventListener('change',function mudaCor(event){
            const cardSelect = event.target;
            const isRadioTipo = cardSelect.classList.contains('opcoesDoCartao-radioTipo');
            if (isRadioTipo) {    
                cartao.style.background = cardSelect.value;            
            }
        })

        cartao.addEventListener('keydown',function pegaEnter(){
            if(event.key==='Enter' || event.key=== ' '){
                event.target.click();
            }
        })
        
        //codigo do arquivo remove.js refatorado.
        cartao.addEventListener('click', function removeCartao(event) {            
            
                const cardSelect = event.target;//pega enveto que foi selecionado
                const lixeira = cardSelect.classList.contains('opcoesDoCartao-remove');//contains, verifica se contem a classe
                if (lixeira) {
                    cartao.classList.add('cartao--some');
                    cartao.addEventListener('transitionend', function() {//transitionend mapeia uma transicao no css;
                        cartao.remove();
                    })
                }else{
                   
            }                  
        })
    }
})();

