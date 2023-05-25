<script setup lang="ts">
interface Props {
  title: string
  price: number
  inStock: boolean
  imageUrl: string
}

defineProps<Props>()

// 可以放預設值
// withDefaults(defineProps<Props>(), {
//   title: 'default Title',
//   price: 0,
//   inStock: false,
//   imageUrl: ''
// })
</script>

<template>
  <div class="product">
    <img :src="imageUrl" alt="product" />
    <h2 class="title">{{ title }}</h2>
    <p class="price">$ {{ price }}</p>
    <p>InStock: {{ inStock ? 'Yes' : 'No' }}</p>
  </div>
</template>

<style scoped>
.product {
  max-width: 33%;
}
.title {
  font-weight: 700;
  font-size: 1.5rem;
}
p {
  font-size: 1.2rem;
  margin-top: 0.5rem;
}
img {
  max-width: 100%;
  height: auto;
}
</style>
