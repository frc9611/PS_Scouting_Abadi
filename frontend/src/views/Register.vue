<script setup lang="ts">
    import RegisterForm from '../components/RegisterForm.vue'
</script>  

<!-- <template>
    <div class="text-center mt-10 h-screen">
      <h1 class="text-4xl font-bold text-black-500">Cadastro de produtos</h1>
      <p class="text-gray-500 mt-2">Esse é um parágrafo com Tailwind CSS</p>
      <div>
        <RegisterForm/>
      </div>
    </div>
</template> -->


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


