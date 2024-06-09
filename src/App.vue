<template>
  <div>
    <h1>Curso de Pinia</h1>

    <h3>Carrinho {{ cartStore.total }}</h3>

    <div class="cart">
      <div v-for="product in cartStore.products" :key="product.name" class="cart-item">
        {{ product.name }} <br>
        R$ {{ product.amount }} <br>
        <button @click="removeFromCart(product)">Remover</button>
      </div>
    </div>
    <hr>

    <h3>Lista de produtos</h3>

    <div class="cart">
      <div v-for="product in products" :key="product.name" class="cart-item">
        {{ product.name }} <br>
        R$ {{ product.amount }} <br>
        <button @click="addToCart(product)">Add</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from './store/cart.js';
import { ref } from 'vue'

const cartStore = useCartStore();
const products = ref([
  {
    id: 1,
    name: 'Iphone',
    amount: 1000
  },
  {
    id: 2,
    name: 'MacBook',
    amount: 2000
  },
  {
    id: 3,
    name: 'Ipad',
    amount: 500
  },
  {
    id: 4,
    name: 'Apple Watch',
    amount: 300
  }
])

function addToCart(product) {
  cartStore.addProduct(product)
}
function removeFromCart(product) {
  cartStore.removeProduct(product)
}

cartStore.$onAction(({ name, after }) => {
  after(() => {
    if (name === 'addProduct') {
      console.log('Action done', name)
    }
  })
})
</script>





<!-- 
<script>
import { useCartStore } from './store/cart.js';
import { mapState } from 'pinia'

export default {
  computed: {
    ...mapState(useCartStore, ['total', 'getProductByName'])
  },
}
</script> 
-->





<!-- 
<template>
  <div>
    <h1>Curso de Pinia</h1>
    {{ userStore.fullName }} <br>
    <input v-model="userStore.user.first_name" type="text">
    <br><br>
    //<button @click="changeIphoneValue(1000)">
        //Alterar valor changeIphoneValue
      //</button>
    <div>
      TOTAL: {{ cartStore.total }}
      <br><br>
      {{ cartStore.getProductByName('MacBook') }}
      <br><br>
      <button @click="changeIphoneValue(1000)">
        Alterar valor Iphone
      </button>
    </div>
  </div>
</template>

<script setup>
//pulodogato
import { storeToRefs } from 'pinia';

import { watch } from 'vue';
import { useUserStore } from './store/user.js';
import { useCartStore } from './store/cart.js';

const userStore = useUserStore();
// const { firstName, lastName, age } = storeToRefs(userStore);
const cartStore = useCartStore();

function changeIphoneValue(vl) {
  cartStore.products[0].amount = vl;
}
</script> 
-->

<!-- 
<script setup>
//pulodogato
import { storeToRefs } from 'pinia';

import { watch } from 'vue';
import { useUserStore } from './store/user.js';
import { useCartStore } from './store/cart.js';

const userStore = useUserStore();
// const { firstName, lastName, age } = storeToRefs(userStore);
const cartStore = useCartStore(); 
-->
<!--
// Aqui é um exemplo de como você pode usar o watch para observar mudanças em TODA a STORE
// watch(userStore, (vl) => {
//   console.log(vl)
// })

// // Aqui é um exemplo de como você pode usar o watch para observar mudanças em UMA PROPRIEDADE ESPECIFICA
// watch(() => userStore.firstName, (vl) => {
//   console.log(vl)
// })

// userStore.$patch({
//   firstName: 'Ericson',
//   lastName: 'J Santos',
//   age: 30
// })

// cartStore.$subscribe((mutation, state) => {
//   console.log(mutation, state)
// })

// cartStore.$patch((state) => {
//   state.products.push({
//     name: 'Imac',
//     amount: 100
//   })
// })
// userStore.firstName = 'Ericson'
// userStore.lastName = 'J Santos'</script>
-->

<!-- 
<div>
    <h1>Curso de Pinia</h1>
    <h4>User store</h4>
    {{ firstName }}
    <div>
      <input type="text" v-model="firstName" placeholder="Digite para mudar firstName"><br>
      <input type="text" v-model="lastName" placeholder="Digite para mudar lastName"><br>
      <input type="text" v-model="age" placeholder="Digite para mudar age"><br>
    </div>
    {{ userStore.firstName }}
    {{ userStore.lastName }}
    {{ userStore.age }}
    <pre>
    </pre>
    <br><br>
    <h4>Cart store</h4>
    <pre>{{ cartStore.products }}</pre>
    <button @click="cartStore.$reset">Resetar store cart</button>
  </div> 
  -->

<!-- 
  <script>
export default {
setup() {
 const userStore = useUserStore();
 const cartStore = useCartStore();

 return {
 userStore,
 cartStore
 };
 }
 }
 </script> 
 -->
