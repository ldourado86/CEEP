;(function(){
    const btns = document.querySelectorAll('.opcoesDoCartao-remove');

   for(let i = 0; i< btns.length; i++){ 
        btns[i].addEventListener('click',function(){
            const cartao = btns[i].parentNode.parentNode;// this ou btn[i]. parenteNode ele pega o pai do pai do butao, nesse caso e o ARTICLE.
            cartao.classList.add('cartao--some');// classList e uma funcao que lista as classes que existentes, e o add e para adicionar uma classe.
            cartao.addEventListener('transitionend',function(){
                cartao.remove();
            }); 
        });
    }
})();
//nao estamos mais usando...refatoramos esse codigo no arquivo cartao.js.