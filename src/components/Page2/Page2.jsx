import Header from "../Header/Header";
import TryTheProduct from "../TryTheProduct/TryTheProduct";

export default function Page2(props){
  return(
    <div>
      <Header scrollToSection={props.headerChange} servicePage={props.servicePage}/>
      <TryTheProduct changePage={props.changePage}/>
    </div>
  )
}
