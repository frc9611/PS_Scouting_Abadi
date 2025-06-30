<script setup lang="ts">
  import { ref, type HtmlHTMLAttributes } from 'vue'
  import EditForm from '../components/EditForm.vue'
  import EditSelect from '../components/EditSelect.vue'

  const showCampForm = ref(false)
  const formData = ref({}) // <- aqui vão os dados do EditForm

  function onFormCompleted(data: any) {
    formData.value = data      // salva os dados recebidos
    showCampForm.value = true  // muda para a próxima etapa
  }
</script>  

<template>
  <div class="tela">
    <div class="Backformulario">
      <!--<EditForm/>-->
      <component
        :is="showCampForm ? EditForm : EditSelect"
        @completed="onFormCompleted"
        :initialData="formData"
      />
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


