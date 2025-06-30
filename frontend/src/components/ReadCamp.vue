<script setup lang="ts">
    //import { document } from 'postcss';
    import { ref, onMounted } from 'vue'

    function Menu(event: Event) {
        window.location.href = '/menu'; // Retorna para o menu
    } 
    
    async function readJSON() {
        try {

            const NUM = await fetch(`http://localhost:3000/readnumberjson/`)
            const responseNUM = await NUM.json()

            const REQ = await fetch(`http://localhost:3000/read/`)
            const response = await REQ.json()
    
            let arr: dado[] = []  // Cria o array arr

            for (let i = 0; i < responseNUM; i++) { // Faz um loop para cada responseNUM
                const item = response?.[i] // acessei o primeiro "conjunto de dados"
                if (item) { // se item for verdadeiro
                const obj: dado = { // cria uma variavel com o nome obj e da a variavel dado
                    AL_A: 1,
                    AL_B: 2, 

                    PR: i + 1, 

                    NAME_A: item["1"].NAME_A, // acessa o nome da equipe 1
                    PTA_A: Number(item["1"].PTA_A), // acessa o PTA da equipe 1, e converte em number
                    PTT_A: Number(item["1"].PTT_A), // acessa o PTT da equipe 1, e converte em number
                    FR_A: item["1"].FR_A, // acessa o FR da equipe 1
                    DS_A: item["1"].DS_A, // acessa a DS da equipe 1

                    NAME_B: item["1"].NAME_B, // acessa o nome da equipe 1
                    PTA_B: Number(item["1"].PTA_B), // acessa o PTA da equipe 1, e converte em number
                    PTT_B: Number(item["1"].PTT_B), // acessa o PTT da equipe 1, e converte em number
                    FR_B: item["1"].FR_B, // acessa o FR da equipe 1
                    DS_B: item["1"].DS_B, // acessa a DS da equipe 1

                    NAME_C: item["1"].NAME_C, // acessa o nome da equipe 1
                    PTA_C: Number(item["1"].PTA_C), // acessa o PTA da equipe 1, e converte em number
                    PTT_C: Number(item["1"].PTT_C), // acessa o PTT da equipe 1, e converte em number
                    FR_C: item["1"].FR_C, // acessa o FR da equipe 1
                    DS_C: item["1"].DS_C, // acessa a DS da equipe 1

                    NAME_D: item["2"].NAME_A, // acessa o nome da equipe 2
                    PTA_D: Number(item["2"].PTA_A), // acessa o PTA da equipe 2, e converte em number
                    PTT_D: Number(item["2"].PTT_A), // acessa o PTT da equipe 2, e converte em number
                    FR_D: item["2"].FR_A, // acessa o FR da equipe 2
                    DS_D: item["2"].DS_A, // acessa a DS da equipe 2

                    NAME_E: item["2"].NAME_B, // acessa o nome da equipe 2
                    PTA_E: Number(item["2"].PTA_B), // acessa o PTA da equipe 2, e converte em number
                    PTT_E: Number(item["2"].PTT_B), // acessa o PTT da equipe 2, e converte em number
                    FR_E: item["2"].FR_B, // acessa o FR da equipe 2
                    DS_E: item["2"].DS_B, // acessa a DS da equipe 2

                    NAME_F: item["2"].NAME_C, // acessa o nome da equipe 2
                    PTA_F: Number(item["2"].PTA_C), // acessa o PTA da equipe 2, e converte em number
                    PTT_F: Number(item["2"].PTT_C), // acessa o PTT da equipe 2, e converte em number
                    FR_F: item["2"].FR_C, // acessa o FR da equipe 2
                    DS_F: item["2"].DS_C // acessa a DS da equipe 2
                }
                arr.push(obj) // "encapsula" tudo isso, resultado -> [{"PR":1,"NAME_A":"asc","PTA_A":3223,"PTT_A":64,"FR_A":"reef","NAME_B":"asc","PTA_B":3223,"PTT_B":64,"FR_B":"reef"}]
                console.log(obj);
                }
            }

            dados.value = arr
        } catch (err) {
            const elemento = document.getElementById("error") as HTMLElement;

            if (elemento.className == "textErrhidden") {
                elemento.classList.add("textErr");      // adiciona uma classe
                elemento.classList.remove("textErrhidden"); // remove uma classe
            }

            setTimeout(() => {
                elemento.classList.add("textErrhidden");      // adiciona uma classe
                elemento.classList.remove("textErr"); // remove uma classe 
            }, 3000);
        }
        }

    onMounted(() => {
        readJSON()
    })

    interface dado {
        AL_A: number;
        AL_B: number;

        PR: number;

        NAME_A: string;
        PTA_A: number;
        PTT_A: number;
        FR_A: string;
        DS_A: string;

        NAME_B: string;
        PTA_B: number;
        PTT_B: number;
        FR_B: string;
        DS_B: string;

        NAME_C: string;
        PTA_C: number;
        PTT_C: number;
        FR_C: string;
        DS_C: string;

        NAME_D: string;
        PTA_D: number;
        PTT_D: number;
        FR_D: string;
        DS_D: string;

        NAME_E: string;
        PTA_E: number;
        PTT_E: number;
        FR_E: string;
        DS_E: string;

        NAME_F: string;
        PTA_F: number;
        PTT_F: number;
        FR_F: string;
        DS_F: string;
    }
    const dados = ref<dado[]>([])

    const resp = readJSON();

    </script>

<template>
    <div class="conteudo">
        
        <div
        v-for="(item, index) in dados" :key="index"
        >
                <div class="dados">
                    <div class="bigTitle">
                        <h1 class="bigTitleText">Match {{ item.PR }}:</h1>
                    </div>

                    <table class="table">
                        <tbody>

                            <tr class="borderBottom">
                                <th colspan="2" class="title">Dados da aliança {{ item.AL_A }}:</th>
                            </tr>

                            <tr class="borderBottom">
                                <th colspan="2" class="tableTitle">Equipe 1</th>
                            </tr>

                            <tr class="borderBottom">
                                <td class="left">Nome</td>
                                <td class="right"> {{ item.NAME_A }} </td>
                            </tr>

                            <tr class="borderBottom">
                                <td class="left">Pontos no teleoperado PTT</td>
                                <td class="right"> {{ item.PTT_A }} </td>
                            </tr>

                            <tr class="borderBottom">
                                <td class="left">Pontos no automático PTA</td>
                                <td class="right"> {{ item.PTA_A }} </td>
                            </tr class="borderBottom">

                            <tr class="borderBottom">
                                <td class="left">Total de pontos no automático e no teleoperado</td>
                                <td class="right"> {{ item.PTT_A + item.PTA_A }} </td>
                            </tr class="borderBottom">

                            <tr class="borderBottom">
                                <td class="left">Diferença de pontos no automático e no teleoperado</td>
                                <td class="right"> {{ Math.abs(item.PTT_A - item.PTA_A) }} </td>
                            </tr>

                            <tr class="borderBottom">
                                <td class="left">Função do robô</td>
                                <td class="right"> {{ item.FR_A }} </td>
                            </tr>

                            <tr class="description">
                                <th colspan="2" class="descriptionTitle">Descrição</th>
                            </tr>

                            <tr class="description-text noWRAP">
                                <th colspan="2" class="text-description"> {{ item.DS_A }} </th>
                            </tr>

                            <tr class="borderBottom">
                                <th colspan="2" class="tableTitle">Equipe 2</th>
                            </tr class="borderBottom">

                            <tr class="borderBottom">
                                <td class="left">Nome</td>
                                <td class="right"> {{ item.NAME_B }} </td>
                            </tr>

                            <tr class="borderBottom">
                                <td class="left">Pontos no teleoperado (PTT)</td>
                                <td class="right"> {{ item.PTT_B }} </td>
                            </tr>

                            <tr class="borderBottom">
                                <td class="left">Pontos no automático (PTA)</td>
                                <td class="right"> {{ item.PTA_B }} </td>
                            </tr>

                            <tr class="borderBottom">
                                <td class="left">Total de pontos no automático e no teleoperado</td>
                                <td class="right"> {{ item.PTT_B + item.PTA_B }} </td>
                            </tr>

                            <tr class="borderBottom">
                                <td class="left">Diferença de pontos no automático e no teleoperado</td>
                                <td class="right"> {{ Math.abs(item.PTT_B - item.PTA_B) }} </td>
                            </tr>

                            <tr class="borderBottom">
                                <td class="left">Função do robô</td>
                                <td class="right"> {{ item.FR_B }} </td>
                            </tr>

                            <tr class="description">
                                <th colspan="2" class="descriptionTitle">Descrição</th>
                            </tr>

                            <tr class="description-text noWRAP">
                                <th colspan="2" class="text-description"> {{ item.DS_B }} </th>
                            </tr>

                            <tr class="borderBottom">
                                <th colspan="2" class="tableTitle">Equipe 3</th>
                            </tr>

                            <tr class="borderBottom"> 
                                <td class="left">Nome</td>
                                <td class="right"> {{ item.NAME_C }} </td>
                            </tr>

                            <tr class="borderBottom">
                                <td class="left">Pontos no teleoperado (PTT)</td>
                                <td class="right"> {{ item.PTT_C }} </td>
                            </tr>

                            <tr class="borderBottom">
                                <td class="left">Pontos no automático (PTA)</td>
                                <td class="right"> {{ item.PTA_C }} </td>
                            </tr>

                            <tr class="borderBottom">
                                <td class="left">Total de pontos no automático e no teleoperado</td>
                                <td class="right"> {{ item.PTT_C + item.PTA_C }} </td>
                            </tr>

                            <tr class="borderBottom">
                                <td class="left">Diferença de pontos no automático e no teleoperado</td>
                                <td class="right"> {{ Math.abs(item.PTT_C - item.PTA_C) }} </td>
                            </tr>

                            <tr class="borderBottom">
                                <td class="left">Função do robô</td>
                                <td class="right"> {{ item.FR_C }} </td>
                            </tr>

                            <tr class="description">
                                <th colspan="2" class="descriptionTitle">Descrição</th>
                            </tr>

                            <tr class="description-text noWRAP">
                                <th colspan="2" class="text-description"> {{ item.DS_C }} </th>
                            </tr>

                            <tr class="borderBottom">
                                <th colspan="2" class="title">Dados da aliança {{ item.AL_B }}:</th>
                            </tr>
                     
                            <tr class="borderBottom">
                                <th colspan="2" class="tableTitle">Equipe 1</th>
                            </tr>

                            <tr class="borderBottom">
                                <td class="left">Nome</td>
                                <td class="right"> {{ item.NAME_D }} </td>
                            </tr>

                            <tr class="borderBottom">
                                <td class="left">Pontos no teleoperado (PTT)</td>
                                <td class="right"> {{ item.PTT_D }} </td>
                            </tr>

                            <tr class="borderBottom">
                                <td class="left">Pontos no automático (PTA)</td>
                                <td class="right"> {{ item.PTA_D }} </td>
                            </tr>

                            <tr class="borderBottom">
                                <td class="left">Total de pontos no automático e no teleoperado</td>
                                <td class="right"> {{ item.PTT_D + item.PTA_D }} </td>
                            </tr>

                            <tr class="borderBottom">
                                <td class="left">Diferença de pontos no automático e no teleoperado</td>
                                <td class="right"> {{ Math.abs(item.PTT_D - item.PTA_D) }} </td>
                            </tr>

                            <tr class="borderBottom">
                                <td class="left">Função do robô</td>
                                <td class="right"> {{ item.FR_D }} </td>
                            </tr>

                            <tr class="description">
                                <th colspan="2" class="descriptionTitle">Descrição</th>
                            </tr>

                            <tr class="description-text noWRAP">
                                <th colspan="2" class="text-description"> {{ item.DS_D }} </th>
                            </tr>

                            <tr class="borderBottom">
                                <th colspan="2" class="tableTitle">Equipe 2</th>
                            </tr>
                            
                            <tr class="borderBottom">
                                <td class="left">Nome</td>
                                <td class="right"> {{ item.NAME_E }} </td>
                            </tr>

                            <tr class="borderBottom">
                                <td class="left">Pontos no teleoperado (PTT)</td>
                                <td class="right"> {{ item.PTT_E }} </td>
                            </tr>

                            <tr class="borderBottom">
                                <td class="left">Pontos no automático (PTA)</td>
                                <td class="right"> {{ item.PTA_E }} </td>
                            </tr>

                            <tr class="borderBottom">
                                <td class="left">Total de pontos no automático e no teleoperado</td>
                                <td class="right"> {{ item.PTT_E + item.PTA_E }} </td>
                            </tr class="borderBottom">

                            <tr class="borderBottom">
                                <td class="left">Diferença de pontos no automático e no teleoperado</td>
                                <td class="right"> {{ Math.abs(item.PTT_E - item.PTA_E) }} </td>
                            </tr>

                            <tr class="borderBottom">
                                <td class="left">Função do robô</td>
                                <td class="right"> {{ item.FR_E }} </td>
                            </tr>

                            <tr class="description">
                                <th colspan="2" class="descriptionTitle">Descrição</th>
                            </tr>

                            <tr class="description-text noWRAP">
                                <th colspan="2" class="text-description"> {{ item.DS_E }} </th>
                            </tr>

                            <tr class="borderBottom">
                                <th colspan="2" class="tableTitle">Equipe 3</th>
                            </tr>
                            
                            <tr class="borderBottom">
                                <td class="left">Nome</td>
                                <td class="right"> {{ item.NAME_F }} </td>
                            </tr>

                            <tr class="borderBottom">
                                <td class="left">Pontos no teleoperado</td>
                                <td class="right"> {{ item.PTT_F }} </td>
                            </tr>

                            <tr class="borderBottom">
                                <td class="left">Pontos no automático</td>
                                <td class="right"> {{ item.PTA_F }} </td>
                            </tr>

                            <tr class="borderBottom">
                                <td class="left">Total de pontos no automático e no teleoperado</td>
                                <td class="right"> {{ item.PTT_F + item.PTA_F }} </td>
                            </tr>

                            <tr class="borderBottom">
                                <td class="left">Diferença de pontos no automático e no teleoperado</td>
                                <td class="right"> {{ Math.abs(item.PTT_F - item.PTA_F) }} </td>
                            </tr>

                            <tr class="borderBottom">
                                <td class="left">Função do robô</td>
                                <td class="right"> {{ item.FR_F }} </td>
                            </tr>

                            <tr class="description">
                                <th colspan="2" class="descriptionTitle">Descrição</th>
                            </tr>

                            <tr class="description-text noWRAP">
                                <th colspan="2" class="text-description"> {{ item.DS_F }} </th>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>

            <div class="buttonDiv">
                <button class="enviar" @click="Menu">Retornar para o menu</button>
            </div>
        </div> 

        <div class="err">
            <div class="textErrhidden" id="error">
                <h6 class="title">OPS! Aconteceu um erro ao se comunicar com o servidor, tente novamente mais tarde</h6>
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
    position: relative;
    display: flexbox;
    justify-content: center;
    align-items: center;
}

.err {
    width: 100%;
    position: absolute;
    top: 25px;
    right: 0px;
    left: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.textErr {
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 0, 0, 0.592);
    color: white;
    padding: 5px;
    z-index: 10;
    border-radius: 5px;
    opacity: 1;
    transition: opacity 2s ease;
}

.textErrhidden {
    opacity: 0;
    transition: opacity 2s ease;
}

.title {
    font-family:var(--font);
    font-weight: 600;
    font-size: 20px;
    color: black;
    background-color: rgba(216, 145, 39, 0.764);
}

.dados {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.bigTitle {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
}

.bigTitleText {
    font-family: var(--font);
    font-weight: 700;
    font-size: 25px;
    color: black;
}

.table {
    width: 680px;
    border-collapse: collapse;
    border: 3px solid rgb(0, 0, 0);
    margin-bottom: 15px;
    max-width: 800px;
}

.tableTitle {
    font-family:var(--font);
    font-weight: 600;
    font-size: 15px;
    color: black;
    background-color: rgba(255, 226, 109, 0.733);
}

.descriptionTitle {
    font-family: var(--font);
    font-weight: 600;
    font-size: 15px;
    color: black;
}

.noWRAP {
    white-space: nowrap;
}

.borderBottom {
    border-bottom: 2px solid rgb(0, 0, 0);
}

.description-text {
    border-bottom: 2px solid rgb(0, 0, 0);
}

.text-description {
    font-family: var(--font);
    font-weight: 400;
    font-size: 15px;  
    color: black;
}

.left {
    border-right: 2px solid rgb(0, 0, 0);
    font-family: var(--font);
    font-weight: 500;
    font-size: 15px;  
    width: 70%;
    color: black;
}

.right {
    vertical-align: middle;
    text-align: center;
    width: 30%;
    font-family: var(--font);
    font-weight: 400;
    font-size: 15px;
    color: black;
}

.buttonDiv {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 20px;
}

button {
    background-color: rgb(255, 255, 255);
    color: rgb(0, 0, 0);
    padding: 10px 20px;
    cursor: pointer;
    border-style: solid;
    border-width: 1px;
    border-color: black;
    border-radius: 5px;
    box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.447);
    transition: ease 600ms;
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