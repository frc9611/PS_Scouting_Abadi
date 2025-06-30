import express, { response } from 'express'
import cors from 'cors'
import path from 'path'
const fs = require('fs')


const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json()); // <- ESSENCIAL para entender JSON no body!
app.use(express.static(path.join(__dirname, './Data')));

const filePath = path.join(__dirname, './Data/dados.json');

function Response(errNUM: number): string {
  const err: Record<number, string> = {
    1: "OPS: Não foi possível se comunicar com o servidor",
    2: "OPS: O dado passado para o servidor não está de acordo com o exigido",
    3: "OPS: Não foi possivel salvar os dados",
    4: "OPS: Não foi possivel receber dados do servidor",
    5: "OPS: Não foi possivel editar os dados",
    6: "OPS: Não foi possivel deletar o dado",
    7: "OPS: Erro interno",
    8: "Você não preencheu todos os campos",

    //...200

    201: "Salvado com sucesso",
    202: "Editado com sucesso",


    //...400
  }

  const message = err[errNUM] ?? "Erro desconhecido";
  return message

  //console.error("Erro:", message)
}

function saveJSONToFile(data1: any, data2: any, data3: any, data4: any, data5: any, data6: any): string {
  try {
    const dirPath = path.dirname(filePath);

    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }

    let i = 0;
    
    let savedArray: any[] = [];

    if(fs.existsSync(filePath)){
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      savedArray = JSON.parse(fileContent);
    }

    let team1 = {
      NAME_A: data1.TM,
      PTA_A: data1.PTA,
      PTT_A: data1.PTT,
      FR_A: data1.FR,
      DS_A: data1.DS,

      NAME_B: data2.TM,
      PTA_B: data2.PTA,
      PTT_B: data2.PTT,
      FR_B: data2.FR,
      DS_B: data2.DS,

      NAME_C: data3.TM,
      PTA_C: data3.PTA,
      PTT_C: data3.PTT,
      FR_C: data3.FR,
      DS_C: data3.DS
    }

    let team2 = {
      NAME_A: data4.TM,
      PTA_A: data4.PTA,
      PTT_A: data4.PTT,
      FR_A: data4.FR,
      DS_A: data4.DS,

      NAME_B: data5.TM,
      PTA_B: data5.PTA,
      PTT_B: data5.PTT,
      FR_B: data5.FR,
      DS_B: data5.DS,

      NAME_C: data6.TM,
      PTA_C: data6.PTA,
      PTT_C: data6.PTT,
      FR_C: data6.FR,
      DS_C: data6.DS
    }

    savedArray.push({
      1: { ...team1 },
      2: { ...team2 }
    });

    try {
      fs.writeFileSync(filePath, JSON.stringify(savedArray, null, 2));
      return Response(201);
    } catch (err) { return Response(3); }
  } catch (err) { return Response(7); }
}

function openJSON() { // SEM RETORNO DE ERRO
  if(fs.existsSync(filePath)) { // se o arquivo existir execute isso
      const content = fs.readFileSync(filePath, 'utf-8');  // ler o arquivo e salvar como utf-8
      return JSON.parse(content); // converter string JSON em um Objeto javascript
  }
}

function deleteLineInJSON(NUM: any) {
  try {
    if (typeof NUM == 'number' && NUM != null) {
      let data = openJSON();

      console.log("num: ", NUM);

      let dataToSaveArray: any[] = [];

      let maxNumber = GetNumberJSON();

      if (NUM != 0 && maxNumber != null) {

        if (NUM != 0) {
          for(let i = NUM - 1; i > 0; i--) {
            let previousOf = data?.[i];
            //console.log("previousOf: ", previousOf);
            dataToSaveArray.push(previousOf);
          }
        }

        if(NUM < maxNumber) {
          for(let i = NUM; i < maxNumber; i++) {
            let nextOf = data?.[i];
            //console.log("nextOf: ", nextOf);
            dataToSaveArray.push(nextOf);
          }
        }

        fs.writeFileSync(filePath, JSON.stringify(dataToSaveArray, null, 2));
      }
    } else {
      return Response(2);
    }
  } catch (err) { return Response(7); }
}

function editJSON(arrNUM: any, data1: any, data2: any, data3: any, data4: any, data5: any, data6: any) {
  try {
    if (typeof arrNUM == 'number' && arrNUM != null) {
      let data = openJSON();

      let maxNumber = GetNumberJSON();

      let dataToSaveArray: any[] = [];

      let team1 = {
        NAME_A: data1.TM,
        PTA_A: data1.PTA,
        PTT_A: data1.PTT,
        FR_A: data1.FR,
        DS_A: data1.DS,

        NAME_B: data2.TM,
        PTA_B: data2.PTA,
        PTT_B: data2.PTT,
        FR_B: data2.FR,
        DS_B: data2.DS,

        NAME_C: data3.TM,
        PTA_C: data3.PTA,
        PTT_C: data3.PTT,
        FR_C: data3.FR,
        DS_C: data3.DS
      }

      let team2 = {
        NAME_A: data4.TM,
        PTA_A: data4.PTA,
        PTT_A: data4.PTT,
        FR_A: data4.FR,
        DS_A: data4.DS,

        NAME_B: data5.TM,
        PTA_B: data5.PTA,
        PTT_B: data5.PTT,
        FR_B: data5.FR,
        DS_B: data5.DS,

        NAME_C: data6.TM,
        PTA_C: data6.PTA,
        PTT_C: data6.PTT,
        FR_C: data6.FR,
        DS_C: data6.DS
      }

      if (arrNUM != 0 && maxNumber != null) {

        if(arrNUM != 0) {
          for(let i = arrNUM - 1; i > 0; i--) {
            let previousOf = data?.[i];
            dataToSaveArray.push(previousOf);
          }
        }

        dataToSaveArray.push({
          1: { ...team1 },
          2: { ...team2 }
        });

        if(arrNUM < maxNumber) {
          for(let i = arrNUM; i < maxNumber; i++) {
            let nextOf = data?.[i];
            dataToSaveArray.push(nextOf);
          }
        }

        //console.log(JSON.stringify(dataToSaveArray));
        //console.log(`OP1 Result: ${JSON.stringify(dataToSaveArray)}`);

        try {
          fs.writeFileSync(filePath, JSON.stringify(dataToSaveArray, null, 2));
          Response(202);
        } catch (err) { return Response(5); }

      } else if (maxNumber != null) {
        
          let nextOf = data?.[arrNUM + 1];
          

          dataToSaveArray.push({
            1: { ...team1 },
            2: { ...team2 }
          });

          if(arrNUM <= maxNumber) {
            dataToSaveArray.push(nextOf);
          }
          //console.log(`OP2 Result: ${JSON.stringify(dataToSaveArray)}`);

        try {
          fs.writeFileSync(filePath, JSON.stringify(dataToSaveArray, null, 2));
          return Response(202);
        } catch (err) { return Response(5); }
      }
    } else {
      return Response(2);
    }
  } catch (err) { return Response(7); }
}

function AcessElementInJSON(NUMBER?: any, TEAMd?: any, FR?: any) {
  try {
    let data = openJSON();
    //console.log(JSON.stringify(data));
    //console.log(typeof NUMBER);

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

      //console.log(`ARGS: ${ARGS} `);
      //console.log(`result arg: ${JSON.stringify(ArgsResult)} `);

      for(let arg of ARGS) {
        if(arg != null && ArgsResult) {
          ArgsResult = ArgsResult[arg];
          //console.log(`result esjrcfu: ${JSON.stringify(ArgsResult)} `);
        } else {
          break;
        }
      }
      //console.log(`result arg: ${ArgsResult} `);
      const text = JSON.stringify(ArgsResult); // data[NP]?.[PR]?.TEAM1?.NAME
      //console.log(`text: ${text}`)
      return text; 
    } else if (NUMBER == null) {
      return JSON.stringify(data);
    } else if ((TEAMd == null) && (FR == null)) {
      let NUM: number;
      NUM = Number(NUMBER);

      //console.log('passou');

      const VerifyNUM = Number.isFinite(NUM);

      if (!VerifyNUM) {
        return "ERROR: You passed data of type String to a variable of type Number";
      }

      let arr = data[NUM];
      if (arr == undefined) {
        return 'end'
      }
      //console.log(arr)
      return arr;
    }
  } catch (err) { return Response(4) }
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

app.post("/savedata", (req, res) => { //http://localhost:3000/savedata/?equipes=edjwiwjei

  const DatasToSave_A = { TM: req.body.team_A, PTA: req.body.PTA_A, PTT: req.body.PTT_A, FR: req.body.FR_A, DS: req.body.DS_A };
  const DatasToSave_B = { TM: req.body.team_B, PTA: req.body.PTA_B, PTT: req.body.PTT_B, FR: req.body.FR_B, DS: req.body.DS_B };
  const DatasToSave_C = { TM: req.body.team_C, PTA: req.body.PTA_C, PTT: req.body.PTT_C, FR: req.body.FR_C, DS: req.body.DS_C };
  const DatasToSave_D = { TM: req.body.team_D, PTA: req.body.PTA_D, PTT: req.body.PTT_D, FR: req.body.FR_D, DS: req.body.DS_D };
  const DatasToSave_E = { TM: req.body.team_E, PTA: req.body.PTA_E, PTT: req.body.PTT_E, FR: req.body.FR_E, DS: req.body.DS_E }; 
  const DatasToSave_F = { TM: req.body.team_F, PTA: req.body.PTA_F, PTT: req.body.PTT_F, FR: req.body.FR_F, DS: req.body.DS_F };

  const All = ['A', 'B', 'C', 'D', 'E', 'F'].map(letra => ({
    TM: req.body[`team_${letra}`],
    PTA: req.body[`PTA_${letra}`],
    PTT: req.body[`PTT_${letra}`],
    FR: req.body[`FR_${letra}`]
  }));
  
  const Allempyt = All.every(obj =>
    Object.values(obj).every(value => value !== '' && value !== undefined)
  );

  if (Allempyt) {
    let response = saveJSONToFile(DatasToSave_A, DatasToSave_B, DatasToSave_C, DatasToSave_D, DatasToSave_E, DatasToSave_F);
    res.json({ "response": response });
  } else {
    res.json({ "response": Response(8) });
  }
});

app.post("/delete", (req, res) => {
  let NUM = req.body.NUM;

  if(NUM != 0) {
    NUM = NUM - 1;
  }

  
  let response = deleteLineInJSON(NUM);
  res.json({ "response": response });
  //console.log(response);
})

app.post("/edit", (req, res) => {
  //res.send('API está funcionando!');
  //editJSON(arrNUM: any, data1: any, data2: any, data3: any, data4: any, data5: any, data6: any)
  const NUM = req.body.arrnum; // Numero do array
  const arrNUM = Number(NUM); // Convertendo para numero

  const DatasToSave_A = { TM: req.body.team_A, PTA: req.body.PTA_A, PTT: req.body.PTT_A, FR: req.body.FR_A, DS: req.body.DS_A };
  const DatasToSave_B = { TM: req.body.team_B, PTA: req.body.PTA_B, PTT: req.body.PTT_B, FR: req.body.FR_B, DS: req.body.DS_B };
  const DatasToSave_C = { TM: req.body.team_C, PTA: req.body.PTA_C, PTT: req.body.PTT_C, FR: req.body.FR_C, DS: req.body.DS_C };
  const DatasToSave_D = { TM: req.body.team_D, PTA: req.body.PTA_D, PTT: req.body.PTT_D, FR: req.body.FR_D, DS: req.body.DS_D };
  const DatasToSave_E = { TM: req.body.team_E, PTA: req.body.PTA_E, PTT: req.body.PTT_E, FR: req.body.FR_E, DS: req.body.DS_E }; 
  const DatasToSave_F = { TM: req.body.team_F, PTA: req.body.PTA_F, PTT: req.body.PTT_F, FR: req.body.FR_F, DS: req.body.DS_F };

  const All = ['A', 'B', 'C', 'D', 'E', 'F'].map(letra => ({
    TM: req.body[`team_${letra}`],
    PTA: req.body[`PTA_${letra}`],
    PTT: req.body[`PTT_${letra}`],
    FR: req.body[`FR_${letra}`]
  }));

  //console.log(All);

  const Allempyt = All.every(obj =>
    Object.values(obj).every(value => value !== '' && value !== undefined)
  );

  //console.log(`all empyt ${Allempyt}`);
  if (Allempyt) {
    let response = editJSON(arrNUM, DatasToSave_A, DatasToSave_B, DatasToSave_C, DatasToSave_D, DatasToSave_E, DatasToSave_F);
    console.log(NUM);
    res.json({ "response": response });
  } else {
    res.json({ "response": Response(8) });
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
  //console.log(FR);

  //console.log(`NUM: ${NUM} TEAM: ${TEAM} FR: ${FR} `);
  
  let response = AcessElementInJSON(NUM, TEAM, FR);

  if(typeof response != 'string') {
    res.write(JSON.stringify(response));
    res.end();
  }
  //console.log(result);
  res.write(response);
  res.end();
})

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
})
