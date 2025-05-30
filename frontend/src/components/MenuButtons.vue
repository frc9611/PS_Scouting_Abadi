<script setup lang="ts">
    function Read(event: Event) {
        window.location.href = '/read'
    } 

    function Write(event: Event) {
        window.location.href = '/register'; // Retorna para o menu
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
        </div>

    </div>
</template>

<style scoped>

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
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
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
}

button:hover {
    background-color: rgb(21, 21, 21);
    color: white;
    padding: 10px 20px;
    cursor: pointer;
    border-style: solid;
    border-width: 1px;
    border-color: black;
    border-radius: 5px;
    box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.447);
}
</style>
