<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="conteudo">
    <RouterView />
  </div>
</template>

<style scoped>
.conteudo {
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
  color: #333;
  height: 100%;
  width: 100%;
}
</style>

