  import './TryTheProduct.css'
  
  export default function TryTheProduct(props){
    return(
      <div className="main-try">
        <h1>Teste o nosso questionário</h1>
        <p>Você está prestes a fazer um teste gratuito da nossa avaliação psicológica.
        <br />
        <br />
        Por favor, mantenha em mente que, como isto é apenas para você experimentar, qualquer resultado não deve ser levado a sério, já que é apenas para mostrar como funciona. Suas respostas não serão visualizadas pela equipe Mentis. O teste verdadeiro é maior, o teste a seguir é apenas uma demonstração.</p>
        <button onClick={(e) => {e.preventDefault(); props.changePage()}}>iniciar teste</button>
      </div>
    )
  }