
import './Header.css';
import React from 'react';

function Header({ scrollToSection, homeRef, missionRef, testRef, teamRef, servicePage}) {
  return (
    <div className="main">
      <div className='main__logo'>
        <img src="logo-mentis.svg" alt="" className="img-logo" onClick={() => {scrollToSection(homeRef)}}/>
      </div>
      <div className='links'>
        <div className='link-group' id='link1'>
          <a href="#" className='links__link' onClick={(e) => { e.preventDefault(); scrollToSection(homeRef); }}>
            Home
          </a>
        </div>
        <div className='link-group' id='link2'>
          <a href="#" className='links__link' onClick={(e) => { e.preventDefault(); scrollToSection(missionRef); }}>
            Nossa missão
          </a>
        </div>
        <div className='link-group' id='link3'>
          <a href="#" className='links__link' onClick={(e) => { e.preventDefault(); scrollToSection(testRef); }}>
            Faça o teste
          </a>
        </div>
        <div className='link-group' id='link4'>
          <a href="#" className='links__link' onClick={(e) => { e.preventDefault(); scrollToSection(teamRef); }}>
            Nosso time
          </a>
        </div>
        <button className='links__button' onClick={(e) => {e.preventDefault(); servicePage()}}>
          Serviço
        </button>
      </div>
    </div>
  );
}

export default Header;

