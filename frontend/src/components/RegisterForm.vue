<script setup lang="ts">
    function Menu(event: Event) {
        window.location.href = '/menu'; // Retorna para o menu
    } 

    async function register() {
    try {
        // Pegar elementos html
        const team_A = document.getElementById('team-A') as HTMLInputElement;
        const PTA_A = document.getElementById('PTA-A') as HTMLInputElement;
        const PTT_A = document.getElementById('PTT-A') as HTMLInputElement;
        const FR_A = document.getElementById('FR-A') as HTMLInputElement;

        const team_B = document.getElementById('team-B') as HTMLInputElement;
        const PTA_B = document.getElementById('PTA-B') as HTMLInputElement;
        const PTT_B = document.getElementById('PTT-B') as HTMLInputElement;
        const FR_B = document.getElementById('FR-B') as HTMLInputElement;

        const team_C = document.getElementById('team-C') as HTMLInputElement;
        const PTA_C = document.getElementById('PTA-C') as HTMLInputElement;
        const PTT_C = document.getElementById('PTT-C') as HTMLInputElement;
        const FR_C = document.getElementById('FR-C') as HTMLInputElement;

        const team_D = document.getElementById('team-D') as HTMLInputElement;
        const PTA_D = document.getElementById('PTA-D') as HTMLInputElement;
        const PTT_D = document.getElementById('PTT-D') as HTMLInputElement;
        const FR_D = document.getElementById('FR-D') as HTMLInputElement;

        const team_E = document.getElementById('team-E') as HTMLInputElement;
        const PTA_E = document.getElementById('PTA-E') as HTMLInputElement;
        const PTT_E = document.getElementById('PTT-E') as HTMLInputElement;
        const FR_E = document.getElementById('FR-E') as HTMLInputElement;

        const team_F = document.getElementById('team-F') as HTMLInputElement;
        const PTA_F = document.getElementById('PTA-F') as HTMLInputElement;
        const PTT_F = document.getElementById('PTT-F') as HTMLInputElement;
        const FR_F = document.getElementById('FR-F') as HTMLInputElement;


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

            const REQ = await fetch(`http://localhost:3000/savedata/?` +
            `team_a=${team_A.value}&pta_a=${PTA_A.value}&ptt_a=${PTT_A.value}&fr_a=${FR_A.value}` +
            `&team_b=${team_B.value}&pta_b=${PTA_B.value}&ptt_b=${PTT_B.value}&fr_b=${FR_B.value}` +
            `&team_c=${team_C.value}&pta_c=${PTA_C.value}&ptt_c=${PTT_C.value}&fr_c=${FR_C.value}` +
            `&team_d=${team_D.value}&pta_d=${PTA_D.value}&ptt_d=${PTT_D.value}&fr_d=${FR_D.value}` +
            `&team_e=${team_E.value}&pta_e=${PTA_E.value}&ptt_e=${PTT_E.value}&fr_e=${FR_E.value}` +
            `&team_f=${team_F.value}&pta_f=${PTA_F.value}&ptt_f=${PTT_F.value}&fr_f=${FR_F.value}`
            ); // Se comunica com o Backend para salvar dados
        }

        team_A.value = '';
        PTA_A.value = '';
        PTT_A.value = '';
        FR_A.value = '';

        team_B.value = '';
        PTA_B.value = '';
        PTT_B.value = '';
        FR_B.value = '';

        team_C.value = '';
        PTA_C.value = '';
        PTT_C.value = '';
        FR_C.value = '';

        team_D.value = '';
        PTA_D.value = '';
        PTT_D.value = '';
        FR_D.value = '';

        team_E.value = '';
        PTA_E.value = '';
        PTT_E.value = '';
        FR_E.value = '';

        team_F.value = '';
        PTA_F.value = '';
        PTT_F.value = '';
        FR_F.value = '';

    } catch(err) {
        const elemento = document.getElementById("error") as HTMLElement;

        if (elemento.className == "textErrhidden") {
            elemento.classList.add("textErr");      // adiciona uma classe
            elemento.classList.remove("textErrhidden"); // remove uma classe
        }

        setTimeout(() => {
            elemento.classList.add("textErrhidden");      // adiciona uma classe
            elemento.classList.remove("textErr"); // remove uma classe 
        }, 3000);
        //return []; // retorna uma string vazia se der erro
    }
};
</script>

<template>
    <div class="conteudo">

        <div id="cont">
            <div class="titleDiv">
                <H1 class="title">Dados da partida:</H1>
            </div>

            <div class="form1">
                <H6 class="caption">Dados da aliança 1:</H6>

                <H6 class="caption">Equipe 1:</H6>

                <input id="team-A" type="text" placeholder="Nome - TimeA">
                <input id="PTA-A" type="number" placeholder="Pontos no Autonomo">
                <input id="PTT-A" type="number" placeholder="Pontos no teleoperado">
                <input id="FR-A" type="text" placeholder="Função do robô">

                <H6 class="caption">Equipe 3:</H6>

                <input id="team-B" type="text" placeholder="Nome - TimeA">
                <input id="PTA-B" type="number" placeholder="Pontos no Autonomo">
                <input id="PTT-B" type="number" placeholder="Pontos no teleoperado">
                <input id="FR-B" type="text" placeholder="Função do robô">

                <H6 class="caption">Equipe 3:</H6>

                <input id="team-C" type="text" placeholder="Nome - TimeA">
                <input id="PTA-C" type="number" placeholder="Pontos no Autonomo">
                <input id="PTT-C" type="number" placeholder="Pontos no teleoperado">
                <input id="FR-C" type="text" placeholder="Função do robô">
            </div>

            <div class="form2">
                <H6 class="caption">Dados da aliança 2:</H6>

                <H6 class="caption">Equipe 1:</H6>
                <input id="team-D" type="text" placeholder="Nome - TimeB">
                <input id="PTA-D" type="number" placeholder="Pontos no Autonomo">
                <input id="PTT-D" type="number" placeholder="Pontos no teleoperado">
                <input id="FR-D" type="text" placeholder="Função do robô">

                <H6 class="caption">Equipe 2:</H6>
                <input id="team-E" type="text" placeholder="Nome - TimeB">
                <input id="PTA-E" type="number" placeholder="Pontos no Autonomo">
                <input id="PTT-E" type="number" placeholder="Pontos no teleoperado">
                <input id="FR-E" type="text" placeholder="Função do robô">

                <H6 class="caption">Equipe 3:</H6>
                <input id="team-F" type="text" placeholder="Nome - TimeB">
                <input id="PTA-F" type="number" placeholder="Pontos no Autonomo">
                <input id="PTT-F" type="number" placeholder="Pontos no teleoperado">
                <input id="FR-F" type="text" placeholder="Função do robô">
            </div>


            <div class="buttonDiv">
                <button @click="register" class="enviar">Enviar</button>
                <button @click="Menu" class="enviar">Retornar para o menu</button>
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

* {
    margin: 0;
    padding: 0;
}

.conteudo {
    display: flexbox;
    justify-content: center;
    align-items: center;
}

.form1 {
    display: flexbox;
    width: 400px;
    background-color: white;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
    text-align: center;
    margin-bottom: 20px;
}

.form2 {
    display: flexbox;
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
    margin-bottom: 20px;
}

.title {
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 600;
    font-size: 30px;
    color: black;
}

.caption {
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 400;
    font-size: 20px;
    color: black;
    margin-bottom: 20px;
}

input {
    display: block;
    width: 100%;
    text-align: center;
    padding-bottom: 10px;
    margin: 15px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
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
