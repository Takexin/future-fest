import { forwardRef } from 'react';
import './AboutUs.css';

const AboutUs = forwardRef((props, ref) => {
  return (
    <div id='body-about' ref={ref}>
      <section className="nossotime">
        <div className="nossotime-title">
          <h2>Nosso Time</h2>
        </div>
        <div className="time">
          <div className="characters">
            <div>
              <img src="luisa.png" alt="" className="charactersimg" />
            </div>
            <div className="characterstxt">
              <h2 className="charactername">Luisa Feher</h2>
              <p className="apresentacao">
                Líder do grupo Mentis™, responsável pela gestão e mentoria. Web designer,
                sendo quem criou a aparência da interface usada pela Mentis™. Apaixonada pela mente, sempre
                possui o bem do usuário como prioridade.
              </p>
              <div className="charactermedia" id="luisaicons">
                <a href="">
                  <img src="linke.svg" alt="linkedim" title="Luisa Feher Linkedin" className="logos" />
                </a>
                <a href="">
                  <img src="insta.svg" alt="linkedim" title="Luisa Feher Instagram" className="logos" />
                </a>
                <a href="">
                  <img src="x.svg" alt="linkedim" title="Luisa Feher X" className="logos" />
                </a>
              </div>
            </div>
          </div>
          <div className="characters">
            <div>
              <img src="gabriel.png" alt="" className="charactersimg" />
            </div>
            <div className="characterstxt">
              <h2 className="charactername">Gabriel Martins</h2>
              <p className="apresentacao">
                Responsável pelo desenvolvimento back-end da Mentis™. Sua função na equipe é
                garantir o funcionamento das tecnologias que são aplicadas que estão por trás da Mentis™,
                entusiasta na área da tecnologia e estudioso.
              </p>
              <div className="charactermedia" id="gabrielicons">
                <a href="">
                  <img src="linke.svg" alt="linkedim" title="Gabriel Martins Linkedin" className="logos" />
                </a>
                <a href="">
                  <img src="insta.svg" alt="linkedim" title="Gabriel Martins Instagram" className="logos" />
                </a>
                <a href="">
                  <img src="x.svg" alt="linkedim" title="Gabriel Martins X" className="logos" />
                </a>
              </div>
            </div>
          </div>
          <div className="characters">
            <div>
              <img src="mateus.png" alt="" className="charactersimg" />
            </div>
            <div className="characterstxt">
              <h2 className="charactername">Mateus Santos</h2>
              <p className="apresentacao">
                Auxiliar de desenvolvimento front-end da Mentis™. Sua função na equipe é
                colocar em prática a aparência da interface da Mentis™. Uma pessoa proativa, Mateus é
                comunicativo e atento aos detalhes.
              </p>
              <div className="charactermedia" id="takeshiicons">
                <a href="">
                  <img src="linke.svg" alt="linkedim" title="Mateus Santos Linkedin" className="logos" />
                </a>
                <a href="">
                  <img src="insta.svg" alt="linkedim" title="Mateus Santos Instagram" className="logos" />
                </a>
                <a href="">
                  <img src="x.svg" alt="linkedim" title="Mateus Santos X" className="logos" />
                </a>
              </div>
            </div>
          </div>
          <div className="characters">
            <div>
              <img src="takeshi.png" alt="" className="charactersimg" />
            </div>
            <div className="characterstxt">
              <h2 className="charactername">Felipe Takeshi</h2>
              <p className="apresentacao">
                Auxiliar de desenvolvimento back-end da Mentis™. Sua função na equipe é
                colocar em prática o funcionamento das ferramentas por trás da Mentis™. Uma pessoa comunicativa
                e apaixonada por soluções.
              </p>
              <div className="charactermedia" id="mateusicons">
                <a href="">
                  <img src="linke.svg" alt="linkedim" title="Felipe Takeshi Linkedin" className="logos" />
                </a>
                <a href="">
                  <img src="insta.svg" alt="linkedim" title="Felipe Takeshi Instagram" className="logos" />
                </a>
                <a href="">
                  <img src="x.svg" alt="linkedim" title="Felipe Takeshi X" className="logos" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});

export default AboutUs;