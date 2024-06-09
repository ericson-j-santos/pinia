import { defineStore } from 'pinia'


// aqui é usado a função defineStore para criar um novo store que foi passado como primeiro parametro a id 'cart' e segundo paramentro o objeto de opções chamado options;
export const useCartStore = defineStore('cart', {
    state: () => ({
        address: {},
        //state que é o ESTADO RECEBE  uma FUNCAO que RETORNA um OBJETO e é onde vai ser armazenado os dados do carrinho;
        //products é um array que vai armazenar os produtos do carrinho;
        products: [
            {
                name: 'MacBook',
                amount: 100,
            },
            {
                name: 'MacBook',
                amount: 200,
            }
        ],
    }),

    //actions é como se fosse uma sessao para guardar methods e funcao, addproduto, remover produto, funcoes para gerenciar store
    actions: {
        addProduct() { },
        removeProduct() { }
    },
    // getters vai ser reativo, como se fosse uma computed, se tivermos um array do products e temos um getter de total do product para calcular o total de produtos, o getter vai ser reativo e vai ser atualizado sempre que o array de products for atualizado;
    getters: {
        total: (state) => state.products.reduce((total, obj) => total += obj.amount, 0),

        // várias funções que vão ser reativas e vão ser atualizadas sempre que o array de products for atualizado;
    },
})