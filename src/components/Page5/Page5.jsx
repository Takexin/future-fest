import Header from "../Header/Header";
import "./Page5.css";

export default function Page5(props) {
  var tipoPlano = "mensal";
  var mensalToggle = "opcao-toggle ativa";
  var anualToggle = "opcao-toggle";

  function alternarOpcao(opcaoSelecionada) {
    var mensal = document.getElementById("mensal");
    var anual = document.getElementById("anual");
    var botaoToggle = document.getElementById("botaoToggle");
    anual.className = anual.className.replace(" ativa", "");
    mensal.className = mensal.className.replace(" ativa", "");
    botaoToggle.className = botaoToggle.className.replace(" anual-ativa", "");


    if (opcaoSelecionada.target.id == "anual") {
      anualToggle += " ativa"
      anual.className += " ativa"
      mensal.className = mensal.className.replace(" ativa", "");
      botaoToggle.className += " anual-ativa"
    } else {
      anualToggle = anualToggle.replace(" ativa", "");
      mensal.className += " ativa"
      botaoToggle.className = botaoToggle.className.replace(" anual-ativa", "");
      anual.className = anual.className.replace(" ativa", "");
    }

    tipoPlano = opcaoSelecionada.target.id;
  }
  //animacao de numero incrementando
  var animationRunning = false
  function incNbrRec(currentNumber, endNumber, element, speed) {
    if (currentNumber <= endNumber) {
      element.innerHTML = `R$${currentNumber.toFixed(2)}`;
      setTimeout(function() {
        if(tipoPlano != "anual"){incNbrRec(currentNumber + 7, endNumber, element, speed)}
        else{incNbrRec(currentNumber + 84, endNumber, element, speed)}
      }, speed) //Delay a bit before calling the function again.
    } else {
      animationRunning = false
    }
  }
 
  function calcularValor() {
    animationRunning = true
    const quantidade_funcionarios = parseInt(
      document.getElementById("formulario_mainplanos").value
    );
    if (isNaN(quantidade_funcionarios) || quantidade_funcionarios <= 0) {
      alert("Insira uma quantidade válida de funcionários.");
      return;
    }

    const valorBase = 18.75;
    var valorTotal = quantidade_funcionarios * valorBase;

    var desconto = 0;
    if (quantidade_funcionarios <= 100) {
      desconto = Math.min(12, Math.floor(quantidade_funcionarios / 10) * 2);
    } else if (quantidade_funcionarios <= 1000) {
      desconto = Math.min(20, Math.floor(quantidade_funcionarios / 100) * 4);
    } else {
      desconto = Math.min(25, Math.floor(quantidade_funcionarios / 1000) * 5);
    }

    valorTotal = valorTotal * (1 - desconto / 100);

    if (tipoPlano === "anual") {
      valorTotal *= 12;
    }
    if(animationRunning){
      incNbrRec(0,valorTotal, document.getElementById("valortotal"), 1);
    }
    
  }
   return (
    <div>
      <Header scrollToSection={props.changePage}/>
      <section id="body_planos">
        <div className="planostxt">
          <h1 id="titulotxt">
            Escolha o plano <strong className="marcacao">ideal</strong> pra sua
            empresa.
          </h1>
          <p id="subtitulotxt">
            Sem cobranças invisíveis nem compartilhamento de dados
            desnecessários.
          </p>
        </div>

        <div className="main_planos">
          <div className="mainplanos">
            <h1 id="faca_plano">
              Faça seu plano <br />
              <strong className="marcacao">personalizado.</strong>
            </h1>

            <div className="botao-toggle" id="botaoToggle">
              <div className="indicador-toggle"></div>
              <div
                className={mensalToggle}
                id="mensal"
                onClick={alternarOpcao}
              >
                Mensal
              </div>
              <div className={anualToggle} id="anual" onClick={(alternarOpcao)}>
                Anual
              </div>
            </div>

            <p className="txt_mainplanos">
              Insira a quantidade de funcionários da sua empresa.
            </p>

            <input
              type="number"
              placeholder="Insira a quantidade de funcionários aqui..."
              id="formulario_mainplanos"
            />

            <button id="consultar" onClick={calcularValor}>
              Consultar
            </button>

            <h2 id="valormensal">Valor a pagar mensalmente</h2>

            <h1 id="valortotal">R$0,00</h1>

            <div id="header">
              <p id="como_funciona">
                Como funciona o nosso sistema de cobrança?
              </p>
              <ul>
                <li>
                  <strong>Até 100 funcionários</strong>: 2% de desconto a cada
                  10 funcionários, desconto máximo de 12%/mês
                </li>
                <li>
                  <strong>Até 1000 funcionários</strong>: 4% de desconto a cada
                  100 funcionários, desconto máximo de 20%/mês
                </li>
                <li>
                  <strong>1000+ funcionários</strong>: 5% de desconto a cada
                  1000 funcionários, desconto máximo de 25%/mês
                </li>
              </ul>
            </div>
          </div>
          <div id="mainplanos_esquerda">
            <img src="retangle-49.png" alt="" id="img_main" />
          </div>
        </div>
      </section>
    </div>
  );
}
