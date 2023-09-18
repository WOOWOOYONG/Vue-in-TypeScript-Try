<script setup lang="ts">
interface Props {
  title: string
  price: number
  inStock: boolean
  imageUrl: string
}

const props = defineProps<Props>()
const addToCart = () => {
  props.inStock ? alert('感謝購買') : alert('已經賣完囉')
}

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
    <button class="btn" type="button" @click="addToCart">Buy</button>
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

.btn {
  padding: 0.5rem 1rem;
  border-radius: 10px;
  font-size: 1.2rem;
  font-weight: 500;
  border: none;
  background-color: rgb(50, 50, 140);
  color: aliceblue;
  cursor: pointer;
  margin-top: 1rem;
  text-align: center;
}
</style>
