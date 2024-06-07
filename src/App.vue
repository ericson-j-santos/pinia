<template>
  <div>
    <h1>Curso de Pinia</h1>
    <pre>
      {{ userStore }}
      </pre>
  </div>
</template>

<script setup>
// import { mapState } from 'pinia'
import { useUserStore } from './store/user.js'
// import { useCartStore } from './store/cart.js'

const userStore = useUserStore();

// export default {
//   // computed: {
//   //   ...mapState(useUserStore, ['user']),
//   //   ...mapState(useCartStore, ['products'])
//   // }
// }
</script>



<!-- <script setup>
          import { useCartStore } from './store/cart.js'
          import { useUserStore } from './store/user.js'
          
          const cartStore = useCartStore()
          const userStore = useUserStore()
          </script>
          
          <template>
            <pre>
              {{ cartStore.total }}
            </pre>
          </template> -->