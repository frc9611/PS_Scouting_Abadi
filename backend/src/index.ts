import express from 'express'
import cors from 'cors'
import e from 'express'
import path from 'path'
const fs = require('fs')

import SavedData from './Data/dados.json';
import { ifError } from 'assert'
import { error } from 'console'

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.static(path.join(__dirname, './Data')));

const filePath = path.join(__dirname, './Data/dados.json');

function saveJSONToFile(data1: any, data2: any, data3: any, data4: any, data5: any, data6: any): void {
  const dirPath = path.dirname(filePath);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  
  let savedArray: any[] = [];

  if(fs.existsSync(filePath)){
    try {
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      savedArray = JSON.parse(fileContent);
    } catch (err) {
      console.error(`Erro ao ler arquivo para salvamento ${err}`);
    }
  }

  let team1 = {
    NAME_A: data1.TM,
    PTA_A: data1.PTA,
    PTT_A: data1.PTT,
    FR_A: data1.FR,

    NAME_B: data2.TM,
    PTA_B: data2.PTA,
    PTT_B: data2.PTT,
    FR_B: data2.FR,

    NAME_C: data3.TM,
    PTA_C: data3.PTA,
    PTT_C: data3.PTT,
    FR_C: data3.FR
  }

  let team2 = {
    NAME_A: data4.TM,
    PTA_A: data4.PTA,
    PTT_A: data4.PTT,
    FR_A: data4.FR,

    NAME_B: data5.TM,
    PTA_B: data5.PTA,
    PTT_B: data5.PTT,
    FR_B: data5.FR,

    NAME_C: data6.TM,
    PTA_C: data6.PTA,
    PTT_C: data6.PTT,
    FR_C: data6.FR
  }

  savedArray.push({
    1: { ...team1 },
    2: { ...team2 }
  });

  fs.writeFileSync(filePath, JSON.stringify(savedArray, null, 2));
  console.log(`Saved data: ${team1} and ${team2}`);
}

function openJSON() {
  if(fs.existsSync(filePath)) { // se o arquivo existir execute isso
      const content = fs.readFileSync(filePath, 'utf-8');  // ler o arquivo e salvar como utf-8
      return JSON.parse(content); // converter string JSON em um Objeto javascript
  }
}

function AcessElementInJSON(NUMBER?: any, TEAMd?: any, FR?: any) {
  let data = openJSON();
  console.log(JSON.stringify(data));

  try {

    console.log(typeof NUMBER);

    if((NUMBER != null) && (TEAMd != null)) {

      let NUM: number;
      let PR: number;
      let TEAM: number;

      NUM = Number(NUMBER);
      TEAM = Number(TEAMd);

      const VerifyNUM = Number.isFinite(NUM);

      if (!VerifyNUM) {
        return "ERROR: You passed data of type String to a variable of type Number";
      }

      const Elem = [NUM, TEAM];
      
      if(NUM > 0) {
        NUM = NUM - 1;
      }  // Reduz o numero para que o numero passado possa começar em 1  

      let ARGS = [`${TEAM}`, FR]; // [PR, TEAM, FR]
      let ArgsResult = data[NUM];

      console.log(`ARGS: ${ARGS} `);
      console.log(`result arg: ${JSON.stringify(ArgsResult)} `);

      for(let arg of ARGS) {
        if(arg != null && ArgsResult) {
          ArgsResult = ArgsResult[arg];
          console.log(`result esjrcfu: ${JSON.stringify(ArgsResult)} `);
        } else {
          break;
        }
      }
      console.log(`result arg: ${ArgsResult} `);
      const text = JSON.stringify(ArgsResult); // data[NP]?.[PR]?.TEAM1?.NAME
      console.log(`text: ${text}`)
      return text; 
    } else if (NUMBER == null) {
      return JSON.stringify(data);
    } else if ((TEAMd == null) && (FR == null)) {
      let NUM: number;
      NUM = Number(NUMBER);

      console.log('passou');

      const VerifyNUM = Number.isFinite(NUM);

      if (!VerifyNUM) {
        return "ERROR: You passed data of type String to a variable of type Number";
      }

      let arr = data[NUM];
      if (arr == undefined) {
        return 'end'
      }
      console.log(arr)
      return arr;
    }
  } catch (err) { return `${err}`}
}

function GetNumberJSON() {
  let count: number;
  for (let index = 0; index < 10; index++) {
      const element = AcessElementInJSON(index);
    if(element != 'end') {
      count = index;
    } else {
      return index;
    }
  }
}

app.get('/', (req, res) => {
  res.send('API está funcionando!');
})

app.get('/savedata', function (req, res) { //http://localhost:3000/savedata/?equipes=edjwiwjei

  const team_A = req.query.team_a; // equipes
  const PTA_A = req.query.pta_a; // Pontos no automático
  const PTT_A = req.query.ptt_a; // Pontos no teleoperado
  const FR_A = req.query.fr_a;  //  Função do robô

  const team_B = req.query.team_b; // equipes
  const PTA_B = req.query.pta_b; // Pontos no automático
  const PTT_B = req.query.ptt_b; // Pontos no teleoperado
  const FR_B = req.query.fr_b;  //  Função do robô

  const team_C = req.query.team_c; // equipes
  const PTA_C = req.query.pta_c; // Pontos no automático
  const PTT_C = req.query.ptt_c; // Pontos no teleoperado
  const FR_C = req.query.fr_c;  //  Função do robô

  const team_D = req.query.team_d; // equipes
  const PTA_D = req.query.pta_d; // Pontos no automático
  const PTT_D = req.query.ptt_d; // Pontos no teleoperado
  const FR_D = req.query.fr_d;  //  Função do robô

  const team_E = req.query.team_e; // equipes
  const PTA_E = req.query.pta_e; // Pontos no automático
  const PTT_E = req.query.ptt_e; // Pontos no teleoperado
  const FR_E = req.query.fr_e;  //  Função do robô

  const team_F = req.query.team_f; // equipes
  const PTA_F = req.query.pta_f; // Pontos no automático
  const PTT_F = req.query.ptt_f; // Pontos no teleoperado
  const FR_F = req.query.fr_f;  //  Função do robô

  const DatasToSave_A = {TM: team_A, PTA: PTA_A, PTT: PTT_A, FR: FR_A};
  const DatasToSave_B = {TM: team_B, PTA: PTA_B, PTT: PTT_B, FR: FR_B};
  const DatasToSave_C = {TM: team_C, PTA: PTA_C, PTT: PTT_C, FR: FR_C};
  const DatasToSave_D = {TM: team_D, PTA: PTA_D, PTT: PTT_D, FR: FR_D};
  const DatasToSave_E = {TM: team_E, PTA: PTA_E, PTT: PTT_E, FR: FR_E}; 
  const DatasToSave_F = {TM: team_F, PTA: PTA_F, PTT: PTT_F, FR: FR_F};

  const All = [
  { TM: req.query.team_a, PTA: req.query.pta_a, PTT: req.query.ptt_a, FR: req.query.fr_a },
  { TM: req.query.team_b, PTA: req.query.pta_b, PTT: req.query.ptt_b, FR: req.query.fr_b },
  { TM: req.query.team_c, PTA: req.query.pta_c, PTT: req.query.ptt_c, FR: req.query.fr_c },
  { TM: req.query.team_d, PTA: req.query.pta_d, PTT: req.query.ptt_d, FR: req.query.fr_d },
  { TM: req.query.team_e, PTA: req.query.pta_e, PTT: req.query.ptt_e, FR: req.query.fr_e },
  { TM: req.query.team_f, PTA: req.query.pta_f, PTT: req.query.ptt_f, FR: req.query.fr_f },
];


  /*
    {
    "PR1": {
      "1": {
        "TEAM1": {
          "NAME": "x",
          "PTA": "90",
          "PTT": "40",
          "FR": "run"
        }

        "TEAM2": {
          "NAME": "x",
          "PTA": "97",
          "PTT": "38",
          "FR": "reef"
        }
      }
    }    
  */ 


  const Allempyt = All.every(obj =>
    Object.values(obj).every(value => value !== '' && value !== undefined)
  );

  //http://localhost:3000/savedata/?team_a=asc&pta_a=3223&ptt_a=64&fr_a=reef&team_b=asc&pta_b=3223&ptt_b=64&fr_b=reef

  if (Allempyt) {
    saveJSONToFile(DatasToSave_A, DatasToSave_B, DatasToSave_C, DatasToSave_D, DatasToSave_E, DatasToSave_F);
    res.write('state: OK');
    res.end();
  } else {
    //res.send('ERROR: Could not save because there are not enough elements');
    res.send('ERRORfELEMENTS');
  }
})

app.get("/test", function(req, res) { // http://localhost:3000/test/
  let response = GetNumberJSON();
  res.write(response?.toString());
  res.end();
})

app.get("/readnumberjson", function(req, res) { // http://localhost:3000/test/
  let response = GetNumberJSON();
  res.write(response?.toString());
  res.end();
})


app.get("/read", function(req, res) {
  const NUM = req.query.num;
  const TEAM = req.query.team;
  const FR = req.query.fr;
  console.log(FR);

  console.log(`NUM: ${NUM} TEAM: ${TEAM} FR: ${FR} `);
  
  // let result = AcessElementInJSON(1, 'PR2', 'TEAM1', 'PTA'); // NUM?: any, PR?: any, TEAM?: any, FR?: any
  let result = AcessElementInJSON(NUM, TEAM, FR);
  if(typeof result != 'string') {
    res.write(JSON.stringify(result));
    res.end();
  }
  console.log(result);
  res.write(result);
  res.end();
})

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
})
