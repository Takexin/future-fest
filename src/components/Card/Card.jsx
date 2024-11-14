import React, { forwardRef } from 'react';
import './Card.css';

const Card = forwardRef((props, ref) => {
  return (
    <div className='main-card' ref={ref}>
      <div className='main-card__txt main-card__section'>
        <h1>O que fazemos</h1>
        <br />
        <br />
        <p>     Nós, da Mentis, temos como objetivo melhorar a saúde mental no ambiente de trabalho por meio de um questionário totalmente anônimo, permitindo que você se sinta confortável para ser honesto sobre como realmente se sente.
Atualmente, o trabalho é uma das principais causas de problemas de saúde mental, como burnout, depressão e ansiedade.
     As respostas do questionário serão processadas pela nossa inteligência artificial, que analisará os dados para identificar predisposições a possíveis problemas mentais, além de apontar sinais de questões já existentes. A Mentis não fornece diagnósticos, mas mantém-se atualizada sobre potenciais problemas e notifica você sobre eles.
     Os resultados da análise serão enviados ao RH e ao EHS, substituindo a atual “Pesquisa de Clima”, facilitando o trabalho dessas áreas para que possam estar mais atentos às necessidades dos colaboradores.</p>
      </div>
      <video className='main-card__video main-card__section' width={464} height={500} autoPlay muted loop>
        <source src='video.mp4' type='video/mp4' className='src-video' />
      </video>
    </div>
  );
});

export default Card;