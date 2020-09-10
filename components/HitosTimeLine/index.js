import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { ContainerSlider, Hito, HitoTitulo, HitoAnio } from './styles';

function HitosTimeLine() {
  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block' }}
        onClick={onClick}>
        <img src="/images/icons/arrowRight.svg" alt="Right" />
      </div>
    );
  }

  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block' }}
        onClick={onClick}>
        <img src="/images/icons/arrowLeft.svg" alt="Left" />
      </div>
    );
  }

  const [selectedHito, setSelectedHito] = useState('');

  function handleClickHito(hito) {
    setSelectedHito(hito);
  }

  var settings = {
    slidesToShow: 6,
    infinite: false,
    slidesToScroll: 1,
    infinite: false,
    dots: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          dots: true,
          infinite: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          dots: true,
          infinite: true,
        },
      },
      {
        breakpoint: 468,
        settings: {
          centerMode: true,
          slidesToShow: 1,
          centerPadding: '40px',
          slidesToScroll: 1,
          dots: true,
          infinite: true,
        },
      },
    ],
  };

  return (
    <ContainerSlider>
      <Slider {...settings}>
        <Hito
          onClick={() => handleClickHito('200')}
          selected={selectedHito === '200' ? true : false}>
          <HitoTitulo
            selected={selectedHito === '200' ? true : false}>
            Titulo del hito seleccionado
          </HitoTitulo>
          <HitoAnio
            selected={selectedHito === '200' ? true : false}>
            200
          </HitoAnio>
        </Hito>

        <Hito
          selected={selectedHito === '1500' ? true : false}
          onClick={() => handleClickHito('1500')}>
          <HitoTitulo
            selected={selectedHito === '1500' ? true : false}>
            Titulo del hito seleccionado
          </HitoTitulo>
          <HitoAnio
            selected={selectedHito === '1500' ? true : false}>
            1500
          </HitoAnio>
        </Hito>

        <Hito
          selected={selectedHito === '2020' ? true : false}
          onClick={() => handleClickHito('2020')}>
          <HitoTitulo
            selected={selectedHito === '2020' ? true : false}>
            Titulo del hito seleccionado
          </HitoTitulo>
          <HitoAnio
            selected={selectedHito === '2020' ? true : false}>
            2020
          </HitoAnio>
        </Hito>

        <Hito
          selected={selectedHito === '2032' ? true : false}
          onClick={() => handleClickHito('2032')}>
          <HitoTitulo
            selected={selectedHito === '2032' ? true : false}>
            Titulo del hito seleccionado
          </HitoTitulo>
          <HitoAnio
            selected={selectedHito === '2032' ? true : false}>
            2032
          </HitoAnio>
        </Hito>

        <Hito
          selected={selectedHito === '2040' ? true : false}
          onClick={() => handleClickHito('2040')}>
          <HitoTitulo
            selected={selectedHito === '2040' ? true : false}>
            Titulo del hito seleccionado
          </HitoTitulo>
          <HitoAnio
            selected={selectedHito === '2040' ? true : false}>
            2040
          </HitoAnio>
        </Hito>

        <Hito
          selected={selectedHito === '2072' ? true : false}
          onClick={() => handleClickHito('2072')}>
          <HitoTitulo
            selected={selectedHito === '2072' ? true : false}>
            Titulo del hito seleccionado
          </HitoTitulo>
          <HitoAnio
            selected={selectedHito === '2072' ? true : false}>
            2072
          </HitoAnio>
        </Hito>

        <Hito
          selected={selectedHito === '2086' ? true : false}
          onClick={() => handleClickHito('2086')}>
          <HitoTitulo
            selected={selectedHito === '2086' ? true : false}>
            Titulo del hito seleccionado
          </HitoTitulo>
          <HitoAnio
            selected={selectedHito === '2086' ? true : false}>
            2086
          </HitoAnio>
        </Hito>

        <Hito
          selected={selectedHito === '2098' ? true : false}
          onClick={() => handleClickHito('2098')}>
          <HitoTitulo
            selected={selectedHito === '2098' ? true : false}>
            Titulo del hito seleccionado
          </HitoTitulo>
          <HitoAnio
            selected={selectedHito === '2098' ? true : false}>
            2098
          </HitoAnio>
        </Hito>
      </Slider>
    </ContainerSlider>
  );
}

export default HitosTimeLine;
