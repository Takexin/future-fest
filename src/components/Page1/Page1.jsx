import { useRef } from "react";
import Card from '../Card/Card'
import ClientReview from '../ClientReview/ClientReview'
import Demo from '../Demo/Demo'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import AboutUs from '../AboutUs/AboutUs'
import Welcome from '../Welcome/Welcome'

function Page1(props) {
  const homeRef = useRef(null);
  const missionRef = useRef(null);
  const testRef = useRef(null);
  const teamRef = useRef(null);

  const scrollToSection = ( ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div>
      <Header scrollToSection={scrollToSection} servicePage={props.servicePage}
              homeRef={homeRef} 
              missionRef={missionRef} 
              testRef={testRef} 
              teamRef={teamRef} 
              />

      <Welcome ref={homeRef}/>
      <Card ref={missionRef}/>
      <Demo ref={testRef} changePage={props.changePage} servicePage={props.servicePage}/>
      <ClientReview />
      <AboutUs ref={teamRef}/>

      <Footer />
    </div>
  )
}

export default Page1
