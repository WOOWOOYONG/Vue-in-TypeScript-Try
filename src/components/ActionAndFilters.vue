<script setup lang="ts">
const emit = defineEmits<{
  (e: 'sortByPrice'): void
  (e: 'sortByName'): void
  (e: 'filterByStock', inStock: boolean | null): void
}>()

function emitFilterByStock(e: Event) {
  const value = (e.target as HTMLSelectElement).value
  let inStock: boolean | null = null
  if (value) {
    inStock = value === 'true'
  }
  emit('filterByStock', inStock)
}
</script>

<template>
  <div class="actions">
    <button @click="emit('sortByPrice')">依照價格排序</button>
    <button @click="emit('sortByName')">依照名稱排序</button>
    <select @change="emitFilterByStock">
      <option value="">是否有庫存</option>
      <option value="true">有</option>
      <option value="false">無</option>
    </select>
  </div>
</template>

<style scoped>
.actions {
  display: flex;
  justify-content: center;
  margin-bottom: 32px;
  gap: 12px;
}
button,
select {
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 4px;
  background-color: rgb(233, 229, 224);
}
button:hover {
  background-color: rgb(30, 30, 95);
  color: aliceblue;
}
</style>
