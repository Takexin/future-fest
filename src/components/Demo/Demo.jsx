import React, { forwardRef } from 'react';
import SliderCarousel from '../Carousel/Carousel';
import './Demo.css';

const Demo = forwardRef((props, ref) => {
  return (
    <div className='main-carousel' ref={ref}>
      <h1>Como a <strong id="strong-mentis">Mentis™</strong> funciona</h1>
      <div className='carousel-component'>
        <SliderCarousel />
      </div>
      <div className='div-buttons'>
        <button id='button-1-div' onClick={(e) => {e.preventDefault(); props.servicePage()}}>contrate nosso serviço</button>
        <button id='button-2-div' onClick={(e) => {e.preventDefault(); props.changePage()}}>faça o teste</button>
      </div>
    </div>
  );
});

export default Demo;
