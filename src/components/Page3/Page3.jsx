import Header from "../Header/Header";
import './Page3.css'
function postMethod() {
  var respostas = {};

  for (let i = 1; i <= 6; i++) {
    const checkedRadio = document.querySelector(`input[name="pergunta_${i}"]:checked`);
    if (checkedRadio) {
      respostas[`resposta${i}`] = checkedRadio.value;
    }
  }

  respostas = JSON.stringify(respostas)

  try{
    fetch("http://localhost:3000/respostas", {
      method: "POST",
      headers: {
        'Content-type': 'application/json',
      },
      body: respostas,
    })
  } catch(err){
    console.error(err)
  }

}
export default function Page3(props) {
  const sendForm = () =>{
    var respostas = {};

    for (let i = 1; i <= 6; i++) {
      const checkedRadio = document.querySelector(`input[name="pergunta_${i}"]:checked`);
      if (checkedRadio) {
        respostas[`resposta${i}`] = checkedRadio.value;
      }
    }

    respostas = JSON.stringify(respostas)
    props.onFormSend(respostas);
  }
  return (
    <div className="main-page3">

      <Header scrollToSection={props.headerChange} servicePage={props.servicePage}/>
      <form className="page3-questions" onSubmit={(e) => {
        e.preventDefault()
        sendForm();
        props.changePage()
      }}>
        <div className="questions question-1">
          <h1>Como você julga que está sua saúde mental no momento?</h1>

          <div className="radios">
            <p className="p-pessima">péssima</p>
            <input type="radio" name="pergunta_1" value={1} className="radios-child1" required />
            <input type="radio" name="pergunta_1" value={2} className="radios-child2" />
            <input type="radio" name="pergunta_1" value={3} className="radios-child3" />
            <input type="radio" name="pergunta_1" value={4} className="radios-child4" />
            <input type="radio" name="pergunta_1" value={5} className="radios-child5" />
            <input type="radio" name="pergunta_1" value={6} className="radios-child6" />
            <input type="radio" name="pergunta_1" value={7} className="radios-child7" />
            <p className="p-otimo">ótima</p>
          </div>
        </div>
        <div className="questions question-2">
          <h1>Você tem se sentido muito nervoso, ansioso ou depressivo ultimamente?</h1>
          <div className="radios">
            <p className="p-pessima">discordo</p>
            <input type="radio" name="pergunta_2" value={1} className="radios-child1" required />
            <input type="radio" name="pergunta_2" value={2} className="radios-child2" />
            <input type="radio" name="pergunta_2" value={3} className="radios-child3" />
            <input type="radio" name="pergunta_2" value={4} className="radios-child4" />
            <input type="radio" name="pergunta_2" value={5} className="radios-child5" />
            <input type="radio" name="pergunta_2" value={6} className="radios-child6" />
            <input type="radio" name="pergunta_2" value={7} className="radios-child7" />
            <p className="p-otimo">concordo</p>
          </div>
        </div>
        <div className="questions question-3">
          <h1>Você acha que seu estado de saúde mental tem atrapalhado seu desempenho no trabalho?</h1>
          <div className="radios">
            <p className="p-pessima">discordo</p>
            <input type="radio" name="pergunta_3" value={1} className="radios-child1" required />
            <input type="radio" name="pergunta_3" value={2} className="radios-child2" />
            <input type="radio" name="pergunta_3" value={3} className="radios-child3" />
            <input type="radio" name="pergunta_3" value={4} className="radios-child4" />
            <input type="radio" name="pergunta_3" value={5} className="radios-child5" />
            <input type="radio" name="pergunta_3" value={6} className="radios-child6" />
            <input type="radio" name="pergunta_3" value={7} className="radios-child7" />
            <p className="p-otimo">concordo</p>
          </div>
        </div>
        <div className="questions question-4">
          <h1>Você já fez terapia?</h1>
          <div className="radios">
            <p className="p-pessima">discordo</p>
            <input type="radio" name="pergunta_4" value={1} className="radios-child1" required />
            <input type="radio" name="pergunta_4" value={7} className="radios-child7" />
            <p className="p-otimo">concordo</p>
          </div>
        </div>
        <div className="questions question-5">
          <h1>Você toma ou já tomou algum medicamento psiquiátrico?</h1>
          <div className="radios">
            <p className="p-pessima">discordo</p>
            <input type="radio" name="pergunta_5" value={1} className="radios-child1" required />
            <input type="radio" name="pergunta_5" value={7} className="radios-child7" />
            <p className="p-otimo">concordo</p>
          </div>
        </div>
        <div className="questions question-6">
          <h1>Você tem conseguido dormir bem, descansar e ter momentos de lazer fora do ambiente de trabalho?</h1>
          <div className="radios">
            <p className="p-pessima">discordo</p>
            <input type="radio" name="pergunta_6" value={1} className="radios-child1" required />
            <input type="radio" name="pergunta_6" value={2} className="radios-child2" />
            <input type="radio" name="pergunta_6" value={3} className="radios-child3" />
            <input type="radio" name="pergunta_6" value={4} className="radios-child4" />
            <input type="radio" name="pergunta_6" value={5} className="radios-child5" />
            <input type="radio" name="pergunta_6" value={6} className="radios-child6" />
            <input type="radio" name="pergunta_6" value={7} className="radios-child7" />
            <p className="p-otimo">concordo</p>
          </div>
        </div>
        <button>enviar teste</button>
      </form>
    </div>
  )
}
