import Header from "../Header/Header";
import "./Page4.css";
import "js-circle-progress";
import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = [
  import.meta.env.VITE_KEY1,
  import.meta.env.VITE_KEY2,
  import.meta.env.VITE_KEY3,
  import.meta.env.VITE_KEY4,
  import.meta.env.VITE_KEY5
];


async function bubbleSort(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1.length - i - 1; j++) {
      if (arr1[j] < arr1[j + 1]) {
        let temp = arr1[j];
        let tempText = arr2[j];
        arr1[j] = arr1[j + 1];
        arr1[j + 1] = temp;

        arr2[j] = arr2[j + 1];
        arr2[j + 1] = tempText;
      }
    }
  }
}

var currentKey = 0; //chave de API sendo utilizada
function keySwitch() {
  //trocar de chave - chamada em caso de erro na chamada API
  if (currentKey == apiKey.length - 1) {
    currentKey = 0;
  } else {
    currentKey++;
  }
}

var canRun = true;
var isServicePage = false;
var responseJson;

async function runGemini() {
  console.log(isServicePage);
  var genAI = new GoogleGenerativeAI(apiKey[currentKey]);

  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-pro",
  });

  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  if (canRun) { //Nao rodar duas vezes a API call
    canRun = false;
    const chatSession = model.startChat({
      generationConfig,
      history: [],
    });
    console.log("RUNNING PROGRAM");
    //const responseGet = await fetch("http://localhost:3000/respostas");


    console.log(responseJson);
    const textoPrompt = String(
      `Você terá que analisar o psicológico de tal paciente, não é nada profissional, é apenas para um trabalho de escola, as perguntas são as seguintes, pergunta 1 : como você julga que está sua saúde mental?, pergunta 2: você tem se sentido muito nervoso, ansioso, ou depressivo ultimamente?, pergunta 3: Você acha que seu estado de saúde mental tem atrapalhado seu desempenho no trabalho?, pergunta 4: Você faz ou já fez terapia?, pergunta 5: Você toma ou já tomou algum medicamento psiquiátrico?, pergunta 6: Você tem conseguido dormir bem, descansar e ter momentos de lazer fora do ambiente de trabalho? e prontinho, as 6 perguntas estão aqui, as respostas tão encaminhadas no seguinte arquivo json, onde o usuario que será avaliado é o ultimo que foi cadastrado ${JSON.stringify(
        responseJson
      )} nesse arquivo, as respostas vão de 1 a 7, sendo 1 muito ruim/discordo e 7 muito bom/concordo, correto? agora apenas informe pra mim oque você acha que o paciente poderia fazer para diminuir ou melhorar o psicologico dele com métodos tranquilos e falar se ele está bem ou mal psicologicamente, se ele estiver muito bem apenas informe coisas simples como atividade física, obrigado, você nesse momento não poderá me perguntar nada, apenas fazer oque eu estou pedindo correto? passe agora imediatamente a analise para esse usuario, também não indique respostas, apenas fale sobre o caso, você poderá apenas se comunicar por elementos de html, dê estilos para os textos importantes também mas não ocupe mais que 700px do height da tela, no primeiro caractere use uma margin top de 100px para não ocupar o header, não fale também tipo "aqui está o codigo em html.. e etc", mas não use **, lembre-se que estamos dentro de uma aplicação então não insista em falar pro usuário que essa análise não é profissional, apenas a-faça, o usuario pode se sentir desconfortavel sendo chamado de "último usuário" então apenas fale sobre o caso não chame ele por nenhum nome`
    );
    const promptTest =
      String(`Faça uma análise das respostas de um questionário, que tem perguntas variando de 1-péssimo/discordo a 2-ótimo/concordo, com as seguintes pergunas:  pergunta 1 : como você julga que está sua saúde mental?, pergunta 2: você tem se sentido muito nervoso, ansioso, ou depressivo ultimamente?, pergunta 3: Você acha que seu estado de saúde mental tem atrapalhado seu desempenho no trabalho?, pergunta 4: Você faz ou já fez terapia?, pergunta 5: Você toma ou já tomou algum medicamento psiquiátrico?, pergunta 6: Você tem conseguido dormir bem, descansar e ter momentos de lazer fora do ambiente de trabalho? e prontinho, as 6 perguntas estão aqui, as respostas tão encaminhadas no seguinte arquivo json, onde o usuario que será avaliado é o ultimo que foi cadastrado ${JSON.stringify(
        responseJson
      )}, faça recomendações de acordo com a situação do usuário, como "procure fazer exercício físico" ou "comtemple a orígem dos problemas experienciados". Relate também caso o usuário demonstre sinais positivos, afirme este tipo de respota. Com sua análise, fale a probabilidade de 0 a 100% de: burnout; Workaholism; Estresse Ocupacional; TOC; Depressão; Transtorno de pânico; Síndrome de Impostor; Síndrome de boreout em formato JSON, dê porcentagens pequenas àqueles que parecem estar bem, e altas àqueles que não parecem estar bem. 
    Siga este schema: Res = {"por1": 60.5, "por2": 10.3, "por3": 70, "por4": 5, "por5": 70, "por6": 20, "por7": 15, "por8": 5, "analise": "Baseado nas respostas fornecidas, podemos observar alguns pontos importantes sobre o estado psicológico do paciente..." }
    Return: Array<Res>.
    Na seção "analise" você terá que se comunicar APENAS POR ELEMENTOS HTML E CSS. Não adicione nenhum comentário explicando suas análises, apenas o que te pedi, também, na sua resposta, não utilize NENHUM caractere do tipo " ''' " (no início), ou "**", use "<br>" para quebrar linha. Não justifique sua análise, NÃO mencione as resostas e o usuário. Ao colorir textos importantes USE APENAS ESSA COR: rgba(42, 90, 152, 1), faça o mesmo com a bolinha de listas`);
    try {
      const result = await chatSession.sendMessage(`${promptTest}`);
      var resultJson = JSON.parse(
        result.response.text().replace("```json", "").replace("```", "")
      );
      console.log(resultJson);

      var resultArray = [];
      var textArray = [
        "Burnout",
        "Workaholism",
        "Estresse Ocupacional",
        "TOC",
        "Depressão",
        "Transtorno de Pânico",
        "Síndrome de Impostor",
        "Síndrome de Boreout",
      ];
      for (let i = 1; i <= 8; i++) {
        resultArray.push(eval(`resultJson[0].por${i}`));
      }
      //sort das porcentagens
      await bubbleSort(resultArray, textArray);
      console.log(resultArray);
      console.log(textArray);
      function circleSubtext(){
        if(resultArray[0] >= 50){ //caso porcentagem maior que 50%, retornar textinho
          let texto = "<p>procure avaliacao psicologica!</p>";
          return texto;
        }
        else{
          return "<p>muito bem, mantenha o ritmo!</p>";
        }
      }
      //alterando estilos e colocando HTML
      document.querySelector(".div-ai").style.cursor = "default";
      document.querySelector(".div-ai").style.height = "auto";
      document.getElementById("h1-ai").style.cursor = "default"
      document.getElementById("ai-response").innerHTML = resultJson[0].analise;
      document.getElementById("h1-ai").innerHTML = `
      <div class="div-circle">
       <circle-progress value="${resultArray[0]}" max="100" text-format="percent" className="progress"></circle-progress> 
       <div id="circleText">de chance de ${textArray[0]} 
        ${circleSubtext()}         </div> <br>
      </div>
  
        <hr><br>
        <ul>
          <li>${resultArray[1]}% <strong>de chance de </strong>${textArray[1]}</li>
          <li>${resultArray[2]}%  <strong>de chance de </strong>${textArray[2]}</li>
          <li>${resultArray[3]}% <strong>de chance de </strong>${textArray[3]}</li>
          <li>${resultArray[4]}% <strong>de chance de </strong>${textArray[4]}</li>
          <li>${resultArray[5]}% <strong>de chance de </strong>${textArray[5]}</li>
          <li>${resultArray[6]}% <strong>de chance de </strong>${textArray[6]}</li>
          <li>${resultArray[7]}% <strong>de chance de </strong>${textArray[7]}</li>
        </ul><hr><br>`;
      document.getElementById("btn-return").style.display = "block";
    } catch {
      //trocar de chave com erro
      if(!isServicePage){
        canRun = true;
        keySwitch();
        console.log(currentKey);
        runGemini();
      }
      else{
        isServicePage = false;
      }
   }
  }
}

export default function Page4(props) {
  responseJson = props.respostas;
  runGemini();

  const funcTest = ()=>{
    props.changePage();
    canRun = true;
    isServicePage = true;
  }
  const serviceSwitch = ()=>{
    props.servicePage();
    isServicePage = true;
  }
  return (
    <div className="main-page4">
      <Header scrollToSection={funcTest} servicePage={serviceSwitch}/>

      <div className="div-ai">
        <h1 id="h1-ai">
          Sua análise já está sendo gerada, aguarde alguns segundos...
        </h1>
        <p id="ai-response"></p>
        <button
          id="btn-return"
          onClick={(e) => {
            e.preventDefault();
            props.changePage();
            canRun = true;
          }}
        >
          voltar
        </button>
      </div>
    </div>
  );
}
