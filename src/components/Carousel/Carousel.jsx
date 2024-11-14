import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Carousel.css'

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function SliderCarousel() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide id='slide1'>
          <div className='div-slider'>
            <h1>Qual é o papel da IA na nossa missão?</h1>
            <p>As respostas fornecidas por meio do formulário serão diretamente encaminhadas para nossa inteligência artificial (IA). Essa IA é especialmente treinada para analisar os dados coletados nos questionários, com o objetivo de criar um banco de dados robusto que armazena respostas anteriores. Isso permite que a IA identifique padrões e detecte potenciais indícios de danos à saúde mental dos colaboradores, de forma proativa e contínua.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide id='slide2'>
          <div className='div-slider'>
            <h1>Como a Mentis™ te ajuda?</h1>
            <p>A plataforma Mentis é uma ferramenta essencial para auxiliar sua empresa a manter um ambiente de trabalho saudável e humanizado. Ao garantir o bem-estar mental e emocional dos funcionários, não só promovemos uma equipe mais produtiva, mas também contribuímos para o aumento da rentabilidade e o cumprimento de metas organizacionais. O cuidado com a saúde mental reflete diretamente em melhores resultados para a empresa.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide id='slide3'>
          <div className='div-slider'>
            <h1>Quem pode acessar as respostas?</h1>
            <p>Somente a IA tem acesso às respostas completas. Esses dados são completamente anônimos, garantindo total privacidade aos respondentes. Após a análise detalhada realizada pela IA, apenas os resultados consolidados são compartilhados com os departamentos de Recursos Humanos (RH) e Saúde, Segurança e Meio Ambiente (EHS). Caso sejam identificados sinais de possíveis danos à saúde mental, o RH e/ou o EHS serão informados para que a empresa possa tomar as medidas adequadas, assegurando o cuidado com seus colaboradores.
</p>
          </div>
        </SwiperSlide>
        <SwiperSlide id='slide4'>
          <div className='div-slider'>
            <h1>Nós da Mentis™ podemos ver as respostas?</h1>
            <p>De forma alguma! Nós, da Mentis, não temos acesso às respostas individuais. Nosso compromisso é criar um ambiente onde os respondentes se sintam completamente à vontade.</p>
          </div>
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
