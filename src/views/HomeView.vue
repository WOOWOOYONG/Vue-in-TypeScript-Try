<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import ProductItem from '@/components/ProductItem.vue'
import ActionAndFilters from '@/components/ActionAndFilters.vue'

interface Product {
  id: number
  title: string
  price: number
  inStock: boolean
  imageUrl: string
}

const products = ref<Product[]>([
  {
    id: 1,
    title: 'Book1',
    price: 55,
    inStock: true,
    imageUrl: 'https://i.pinimg.com/564x/a8/13/eb/a813eb1f9ccf91beead9edd5a4e38d4e.jpg'
  },
  {
    id: 2,
    title: 'Book2',
    price: 66,
    inStock: true,
    imageUrl: 'https://i.pinimg.com/564x/c1/3f/42/c13f426c367f3d50bac3532addf3aa57.jpg'
  },
  {
    id: 3,
    title: 'Book3',
    price: 77,
    inStock: false,
    imageUrl: 'https://i.pinimg.com/564x/63/43/23/634323f69b89f57be4b5affffde92194.jpg'
  }
])

type SortDirections = 'asc' | 'desc' | ''

interface SortAndFilter {
  price: SortDirections
  name: SortDirections
  inStock: boolean | null
}

const sortAndFilter: SortAndFilter = reactive({
  price: '',
  name: '',
  inStock: null
})

const productResult = computed(() => {
  return products.value
    .filter((p) => (sortAndFilter.inStock === null ? true : p.inStock === sortAndFilter.inStock))
    .sort((a, b) => {
      if (sortAndFilter.price) {
        return sortAndFilter.price === 'asc' ? a.price - b.price : b.price - a.price
      }
      if (sortAndFilter.name) {
        return sortAndFilter.name === 'asc'
          ? a.title.localeCompare(b.title)
          : b.title.localeCompare(a.title)
      }
      return 0
    })
})

const handleSortByPrice = () => {
  if (sortAndFilter.price === 'asc') {
    sortAndFilter.price = 'desc'
  } else {
    sortAndFilter.price = 'asc'
  }
  sortAndFilter.name = ''
}

const handleSortByName = () => {
  if (sortAndFilter.name === 'asc') {
    sortAndFilter.name = 'desc'
  } else {
    sortAndFilter.name = 'asc'
  }
  sortAndFilter.price = ''
}

const handleFilterByStock = (inStock: boolean | null) => {
  sortAndFilter.inStock = inStock
}
</script>

<template>
  <main>
    <h1 class="shopName">Magazine House</h1>
    <ActionAndFilters
      @sort-by-price="handleSortByPrice"
      @sort-by-name="handleSortByName"
      @filter-by-stock="handleFilterByStock"
    />
    <div class="productList">
      <ProductItem
        v-for="product in productResult"
        :key="product.id"
        class="product"
        v-bind="product"
      />
    </div>
  </main>
</template>
<style scoped>
.shopName {
  text-align: center;
  margin-bottom: 1rem;
  font-size: 40px;
}
.productList {
  margin: 0 auto;
  display: flex;
  gap: 12px;
  padding-left: 12px;
  padding-right: 12px;
}
</style>
