<script setup lang="ts">
    import RegisterForm from '../components/ReadCamp.vue'
</script>  

<template>
  <div class="tela">
    <div class="Backformulario">
      <RegisterForm/>
    </div>
  </div>
</template>

<style scoped>
.tela {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #111;
  min-height: 100vh;
}

.Backformulario {
  display: flex;
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  margin-top: 50px;
  margin-bottom: 50px;
}
</style>


