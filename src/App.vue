<script setup lang="ts">
import TheLayout from '@/components/TheLayout.vue'
</script>

<template>
  <div>
    <TheLayout>
      <router-view />
    </TheLayout>
  </div>
</template>

<style>
body {
  background-color: rgb(233, 231, 231);
}
</style>
