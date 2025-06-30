<script setup lang="ts">
    import { ref, onMounted } from 'vue'

    function Menu(event: Event) {
        window.location.href = '/menu'; // Retorna para o menu
    } 

    const props = defineProps({
        initialData: {
            type: Object,
            required: true
        }
    })

    async function edit() {
    try {
        // Pegar elementos html
        // Pegar elementos html
        const team_A = document.getElementById('team-A') as HTMLInputElement;
        const PTA_A = document.getElementById('PTA-A') as HTMLInputElement;
        const PTT_A = document.getElementById('PTT-A') as HTMLInputElement;
        const FR_A = document.getElementById('FR-A') as HTMLInputElement;
        const DS_A = document.getElementById('DS-A') as HTMLInputElement;

        const team_B = document.getElementById('team-B') as HTMLInputElement;
        const PTA_B = document.getElementById('PTA-B') as HTMLInputElement;
        const PTT_B = document.getElementById('PTT-B') as HTMLInputElement;
        const FR_B = document.getElementById('FR-B') as HTMLInputElement;
        const DS_B = document.getElementById('DS-B') as HTMLInputElement;

        const team_C = document.getElementById('team-C') as HTMLInputElement;
        const PTA_C = document.getElementById('PTA-C') as HTMLInputElement;
        const PTT_C = document.getElementById('PTT-C') as HTMLInputElement;
        const FR_C = document.getElementById('FR-C') as HTMLInputElement;
        const DS_C = document.getElementById('DS-C') as HTMLInputElement;

        const team_D = document.getElementById('team-D') as HTMLInputElement;
        const PTA_D = document.getElementById('PTA-D') as HTMLInputElement;
        const PTT_D = document.getElementById('PTT-D') as HTMLInputElement;
        const FR_D = document.getElementById('FR-D') as HTMLInputElement;
        const DS_D = document.getElementById('DS-D') as HTMLInputElement;

        const team_E = document.getElementById('team-E') as HTMLInputElement;
        const PTA_E = document.getElementById('PTA-E') as HTMLInputElement;
        const PTT_E = document.getElementById('PTT-E') as HTMLInputElement;
        const FR_E = document.getElementById('FR-E') as HTMLInputElement;
        const DS_E = document.getElementById('DS-E') as HTMLInputElement;

        const team_F = document.getElementById('team-F') as HTMLInputElement;
        const PTA_F = document.getElementById('PTA-F') as HTMLInputElement;
        const PTT_F = document.getElementById('PTT-F') as HTMLInputElement;
        const FR_F = document.getElementById('FR-F') as HTMLInputElement;
        const DS_F = document.getElementById('DS-F') as HTMLInputElement;

        if (
            team_A.value.trim() === '' ||
            PTA_A.value.trim() === '' ||
            PTT_A.value.trim() === '' ||
            FR_A.value.trim() === '' ||

            team_B.value.trim() === '' ||
            PTA_B.value.trim() === '' ||
            PTT_B.value.trim() === '' ||
            FR_B.value.trim() === '' ||

            team_C.value.trim() === '' ||
            PTA_C.value.trim() === '' ||
            PTT_C.value.trim() === '' ||
            FR_C.value.trim() === '' ||

            team_D.value.trim() === '' ||
            PTA_D.value.trim() === '' ||
            PTT_D.value.trim() === '' ||
            FR_D.value.trim() === '' ||

            team_E.value.trim() === '' ||
            PTA_E.value.trim() === '' ||
            PTT_E.value.trim() === '' ||
            FR_E.value.trim() === '' ||

            team_F.value.trim() === '' ||
            PTA_F.value.trim() === '' ||
            PTT_F.value.trim() === '' ||
            FR_F.value.trim() === ''

        ) {
            console.log("wec");
        } else {
            

            const data = {
                "arrnum": props.initialData.PR,
                "team_A": team_A.value,
                "PTA_A": PTA_A.value,
                "PTT_A": PTT_A.value,
                "FR_A": FR_A.value,
                "DS_A": DS_A.value,

                "team_B": team_B.value,
                "PTA_B": PTA_B.value,
                "PTT_B": PTT_B.value,
                "FR_B": FR_B.value,
                "DS_B": DS_B.value,

                "team_C": team_C.value,
                "PTA_C": PTA_C.value,
                "PTT_C": PTT_C.value,
                "FR_C": FR_C.value,
                "DS_C": DS_C.value,

                "team_D": team_D.value,
                "PTA_D": PTA_D.value,
                "PTT_D": PTT_D.value,
                "FR_D": FR_D.value,
                "DS_D": DS_D.value,

                "team_E": team_E.value,
                "PTA_E": PTA_E.value,
                "PTT_E": PTT_E.value,
                "FR_E": FR_E.value,
                "DS_E": DS_E.value,

                "team_F": team_F.value,
                "PTA_F": PTA_F.value,
                "PTT_F": PTT_F.value,
                "FR_F": FR_F.value,
                "DS_F": DS_F.value
            }

            
            console.log(data);


            fetch("http://localhost:3000/edit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
                })
                .then(response => response.json())
                .then(result => {
                console.log("Resposta do servidor:", result);
                })
                .catch(error => {
                console.error("Erro ao enviar:", error);
            });
        }

        team_A.value = '';
        PTA_A.value = '';
        PTT_A.value = '';
        FR_A.value = '';
        DS_A.value = '';

        team_B.value = '';
        PTA_B.value = '';
        PTT_B.value = '';
        FR_B.value = '';
        DS_B.value = '';

        team_C.value = '';
        PTA_C.value = '';
        PTT_C.value = '';
        FR_C.value = '';
        DS_C.value = '';

        team_D.value = '';
        PTA_D.value = '';
        PTT_D.value = '';
        FR_D.value = '';
        DS_D.value = '';

        team_E.value = '';
        PTA_E.value = '';
        PTT_E.value = '';
        FR_E.value = '';
        DS_E.value = '';

        team_F.value = '';
        PTA_F.value = '';
        PTT_F.value = '';
        FR_F.value = '';
        DS_F.value = '';

        } catch(err) {
            console.log("erro: ", err);
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
    };

    async function readJSON(num: any) {
        try {

            const NUM = await fetch(`http://localhost:3000/readnumberjson/`)
            const responseNUM = await NUM.json()

            const REQ = await fetch(`http://localhost:3000/read/`)
            const response = await REQ.json()
    
            let arr: dado[] = []  // Cria o array arr

            if (responseNUM > num) { // Faz um loop para cada responseNUM
                const item = response?.[num] // acessei o primeiro "conjunto de dados"
                if (item) { // se item for verdadeiro
                const obj: dado = { // cria uma variavel com o nome obj e da a variavel dado
                    PR_A: 1,
                    PR_B: 2, 

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
        //console.log(JSON.stringify(props.initialData.PR))
        //readJSON(JSON.stringify(props.initialData.PR));
        console.log(typeof props.initialData.PR);
        readJSON(props.initialData.PR);
    })

    interface dado {
        PR_A: number;
        PR_B: number;

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
</script>

<template>
    <div class="conteudo">
        <div v-for="(item, index) in dados" :key="index">

            <div id="cont" >
                <div class="titleDiv">
                    <h1 class="title">Editar os dados da Match {{ initialData.PR + 1 }}:</h1>
                </div>

                <div class="form1">
                   <h6 class="caption-pr">Dados da aliança 1:</h6>

                    <h6 class="caption">Equipe 1:</h6>

                    <input id="team-A" type="text" placeholder="Nome - TimeA" :value="item.NAME_A">
                    <input id="PTA-A" type="number" placeholder="Pontos no Autonomo" :value="item.PTA_A">
                    <input id="PTT-A" type="number" placeholder="Pontos no teleoperado" :value="item.PTT_A">
                    <input id="FR-A" type="text" placeholder="Função do robô" :value="item.FR_A">
                    <textarea id="DS-A" class="description" type="text" placeholder="Descrição" :value="item.DS_A"></textarea>

                    <h6 class="caption">Equipe 2:</h6>

                    <input id="team-B" type="text" placeholder="Nome - TimeB" :value="item.NAME_B">
                    <input id="PTA-B" type="number" placeholder="Pontos no Autonomo" :value="item.PTA_B">
                    <input id="PTT-B" type="number" placeholder="Pontos no teleoperado" :value="item.PTT_B">
                    <input id="FR-B" type="text" placeholder="Função do robô" :value="item.FR_B">
                    <textarea id="DS-B" class="description" type="text" placeholder="Descrição" :value="item.DS_B"></textarea>

                    <h6 class="caption">Equipe 3:</h6>

                    <input id="team-C" type="text" placeholder="Nome - TimeC" :value="item.NAME_C">
                    <input id="PTA-C" type="number" placeholder="Pontos no Autonomo" :value="item.PTA_C">
                    <input id="PTT-C" type="number" placeholder="Pontos no teleoperado" :value="item.PTT_C">
                    <input id="FR-C" type="text" placeholder="Função do robô" :value="item.FR_C">
                    <textarea id="DS-C" class="description" type="text" placeholder="Descrição" :value="item.DS_C"></textarea>
                </div>

                <div class="form2">
                    <h6 class="caption-pr">Dados da aliança 2:</h6>

                    <h6 class="caption">Equipe 1:</h6>
                    <input id="team-D" type="text" placeholder="Nome - TimeA" :value="item.NAME_D">
                    <input id="PTA-D" type="number" placeholder="Pontos no Autonomo" :value="item.PTA_D">
                    <input id="PTT-D" type="number" placeholder="Pontos no teleoperado" :value="item.PTT_D">
                    <input id="FR-D" type="text" placeholder="Função do robô" :value="item.FR_D">
                    <textarea id="DS-D" class="description" type="text" placeholder="Descrição" :value="item.DS_D"></textarea>

                    <h6 class="caption">Equipe 2:</h6>
                    <input id="team-E" type="text" placeholder="Nome - TimeB" :value="item.NAME_E">
                    <input id="PTA-E" type="number" placeholder="Pontos no Autonomo" :value="item.PTA_E">
                    <input id="PTT-E" type="number" placeholder="Pontos no teleoperado" :value="item.PTT_E">
                    <input id="FR-E" type="text" placeholder="Função do robô" :value="item.FR_E">
                    <textarea id="DS-E" class="description" type="text" placeholder="Descrição" :value="item.DS_E"></textarea>

                    <h6 class="caption">Equipe 3:</h6>
                    <input id="team-F" type="text" placeholder="Nome - TimeC" :value="item.NAME_F">
                    <input id="PTA-F" type="number" placeholder="Pontos no Autonomo" :value="item.PTA_F">
                    <input id="PTT-F" type="number" placeholder="Pontos no teleoperado" :value="item.PTT_F">
                    <input id="FR-F" type="text" placeholder="Função do robô" :value="item.FR_F">
                    <textarea id="DS-F" class="description" type="text" placeholder="Descrição" :value="item.DS_F"></textarea>
                </div>


                <div class="buttonDiv">
                    <button @click="edit" class="enviar">Editar</button>
                    <button @click="Menu" class="enviar">Retornar para o menu</button>
                </div>
            </div>
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
    outline: 0;
    border: 0;
}

body {
    font-size: 5px;
}

.conteudo {
    display: flex;
    justify-content: center;
    align-items: center;
}

.form1 {
    display: flex;
    flex-direction: column;
    width: 400px;
    background-color: white;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
    text-align: center;
    margin-bottom: 20px;
}

.form2 {
    display: flex;
    flex-direction: column;
    width: 400px;
    background-color: white;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
    text-align: center;
}

.titleDiv {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 15px;
}

.title {
    font-family: var(--font);
    font-size: 1.2rem;
    font-weight: 900;
    color: black;
}

.caption-pr {
    font-family: var(--font);
    font-size: 1.1rem;
    font-weight: 600;
    color: black;
    margin-bottom: 20px;
}

.caption {
    font-family: var(--font);
    font-size: 1rem;
    font-weight: 500;
    color: rgb(32, 32, 32);
    margin-bottom: 20px;
}

input {
    font-family: var(--font);
    display: block;
    box-sizing: border-box;
    max-width: 100%;
    text-align: center;
    min-height: 28px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.description {
    font-family: var(--font);
    width: 100%;
    height: 28px;
    min-height: 28px;
    border: 1px solid #ccc;
    border-radius: 5px;
    max-width: 100%;
    min-width: 100%;
    margin-bottom: 15px;
}

.description::placeholder {
    text-align: center;
}

.buttonDiv {
    display: flex;
    flex-direction: column;
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
    border: solid 1px black;
    border-radius: 11px;
    box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.447);
    margin-bottom: 9px;
    transition: ease 600ms;
}

button:hover {
    background-color: rgb(21, 21, 21);
    color: white;
    cursor: pointer;
    box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.447);
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
</style>
