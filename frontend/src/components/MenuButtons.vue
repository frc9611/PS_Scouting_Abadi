<script setup lang="ts">
    function Read(event: Event) {
        window.location.href = '/read' // Vai para a rota de ler
    } 

    function Write(event: Event) {
        window.location.href = '/register'; // Vai para a rota de cadastro
    } 

    function Edit(event: Event) {
        window.location.href = '/edit'; // Vai para a rota de editar
    }

    function Delete(event: Event) {
        window.location.href = '/delete'; // Vai para a rota de editar
    } 
</script>

<template>
    <div class="conteudo">

        <div class="titleDiv">
            <h1 class="title">Opções:</h1>
        </div>

        <div class="buttonDiv">
            <button @click="Read">Ler</button>
            <button @click="Write">Escrever</button>
            <button @click="Edit">Ler e Editar</button>
            <button @click="Delete">Ler e Deletar</button>
        </div>

    </div>
</template>

<style scoped>
:root {
    --font: "Open Sans", sans-serif;
}

* {
    margin: 0;
    padding: 0;
}

.conteudo {
    display: flexbox;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.titleDiv {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 20px;
}

.title {
    font-family: var(--font);
    font-weight: 600;
    font-size: 30px;
    color: black;
}

.buttonDiv {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 20px;
}

.buttonDiv button {
    background-color: rgb(255, 255, 255);
    color: rgb(0, 0, 0);
    padding: 10px 20px;
    cursor: pointer;
    border-style: solid;
    border-width: 1px;
    border-color: black;
    border-radius: 5px;
    box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.447);
    margin-bottom: 15px;
    transition: ease 600ms;
}

button:hover {
    background-color: rgb(21, 21, 21);
    color: white;
    box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.447);
    transform: scale(1.1);
}
</style>
