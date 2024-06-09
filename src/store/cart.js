import { defineStore } from 'pinia'

// aqui é usado a função defineStore para criar um novo store que foi passado como primeiro parametro a id 'cart' e segundo paramentro o objeto de opções chamado options;
export const useCartStore = defineStore('cart', {
    state: () => ({
        address: {},
        //state que é o ESTADO RECEBE  uma FUNCAO que RETORNA um OBJETO e é onde vai ser armazenado os dados do carrinho;
        //products é um array que vai armazenar os produtos do carrinho;
        products: [
            // {
            //     name: 'MacBook',
            //     amount: 100,
            // },
            // {
            //     name: 'MacBook',
            //     amount: 200,
            // }
        ],
    }),

    //actions é como se fosse uma sessao para guardar methods e funcao, addproduto, remover produto, funcoes para gerenciar store
    //Verificar se o produto já existe no carrinho;
    // //todo  RECOMENDADO DEIXAR A REGRA DE NEGOCIO AQUI NA STORE - NAO DEIXAR NA VIEW OU COMPONENTE PARA NAO TER QUE FAZER A VALIDACAO NOVAMENTE;
    actions: {
        addProduct(product) {
            //AJAX
            if (!this.products.some(o => o.id === product.id)) {
                this.products.push(product)
                //console.log(product)
            }
        },
        removeProduct(product) {
            //Primeira forma de remover
            // const idx = this.products.findIndex(o => o.id === product.id)
            // this.products.splice(idx, 1)

            //Segunda forma de remover
            this.products = this.products.filter(o => o.id !== product.id)
        }
    },
    // getters vai ser reativo, como se fosse uma computed, se tivermos um array do products e temos um getter de total do product para calcular o total de produtos, o getter vai ser reativo e vai ser atualizado sempre que o array de products for atualizado;
    getters: {
        total: (state) => state.products.reduce((total, obj) => total += obj.amount, 0),

        // várias funções que vão ser reativas e vão ser atualizadas sempre que o array de products for atualizado;

        getProductByName: (state) => {
            return (name) => state.products.find(o => o.name === name)
        }
    },
})