import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { ContainerSlider, Hito, HitoTitulo, HitoAnio } from './styles';

function HitosTimeLine() {
  const [selectedHito, setSelectedHito] = useState(null);

  function handleClickHito(hito) {
    setSelectedHito(hito);
  }

  var settings = {
    slidesToShow: 6,
    infinite: false,
    slidesToScroll: 1,
    infinite: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        }
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: false,
          dots: false,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          dots: true,
          infinite: false,
        }
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
          colorFondo={selectedHito === '200' ? true : false}
          onClick={() => handleClickHito('200')}>
          <HitoTitulo
            colorTypo={selectedHito === '200' ? true : false}
            fontWeight={selectedHito === '200'}
            onClick={() => handleClickHito('200')}>
            Titulo del hito seleccionado
          </HitoTitulo>
          <HitoAnio
            colorTypo={selectedHito === '200' ? true : false}
            fontWeight={selectedHito === '200'}
            onClick={() => handleClickHito('200')}>
            200
          </HitoAnio>
        </Hito>

        <Hito
          colorFondo={selectedHito === '1500' ? true : false}
          onClick={() => handleClickHito('1500')}>
          <HitoTitulo
            colorTypo={selectedHito === '1500' ? true : false}
            fontWeight={selectedHito === '1500'}
            onClick={() => handleClickHito('1500')}>
            Titulo del hito seleccionado
          </HitoTitulo>
          <HitoAnio
            colorTypo={selectedHito === '1500' ? true : false}
            fontWeight={selectedHito === '1500'}
            onClick={() => handleClickHito('1500')}>
            1500
          </HitoAnio>
        </Hito>

        <Hito
          colorFondo={selectedHito === '2020' ? true : false}
          onClick={() => handleClickHito('2020')}>
          <HitoTitulo
            colorTypo={selectedHito === '2020' ? true : false}
            fontWeight={selectedHito === '2020'}
            onClick={() => handleClickHito('2020')}>
            Titulo del hito seleccionado
          </HitoTitulo>
          <HitoAnio
            colorTypo={selectedHito === '2020' ? true : false}
            fontWeight={selectedHito === '2020'}
            onClick={() => handleClickHito('2020')}>
            2020
          </HitoAnio>
        </Hito>

        <Hito
          colorFondo={selectedHito === '2032' ? true : false}
          onClick={() => handleClickHito('2032')}>
          <HitoTitulo
            colorTypo={selectedHito === '2032' ? true : false}
            fontWeight={selectedHito === '2032'}
            onClick={() => handleClickHito('2032')}>
            Titulo del hito seleccionado
          </HitoTitulo>
          <HitoAnio
            colorTypo={selectedHito === '2032' ? true : false}
            fontWeight={selectedHito === '2032'}
            onClick={() => handleClickHito('2032')}>
            2032
          </HitoAnio>
        </Hito>

        <Hito
          colorFondo={selectedHito === '2040' ? true : false}
          onClick={() => handleClickHito('2040')}>
          <HitoTitulo
            colorTypo={selectedHito === '2040' ? true : false}
            fontWeight={selectedHito === '2040'}
            onClick={() => handleClickHito('2040')}>
            Titulo del hito seleccionado
          </HitoTitulo>
          <HitoAnio
            colorTypo={selectedHito === '2040' ? true : false}
            fontWeight={selectedHito === '2040'}
            onClick={() => handleClickHito('2040')}>
            2040
          </HitoAnio>
        </Hito>

        <Hito
          colorFondo={selectedHito === '2072' ? true : false}
          onClick={() => handleClickHito('2072')}>
          <HitoTitulo
            colorTypo={selectedHito === '2072' ? true : false}
            fontWeight={selectedHito === '2072'}
            onClick={() => handleClickHito('2072')}>
            Titulo del hito seleccionado
          </HitoTitulo>
          <HitoAnio
            colorTypo={selectedHito === '2072' ? true : false}
            fontWeight={selectedHito === '2072'}
            onClick={() => handleClickHito('2072')}>
            2072
          </HitoAnio>
        </Hito>

        <Hito
          colorFondo={selectedHito === '2086' ? true : false}
          onClick={() => handleClickHito('2086')}>
          <HitoTitulo
            colorTypo={selectedHito === '2086' ? true : false}
            fontWeight={selectedHito === '2086'}
            onClick={() => handleClickHito('2086')}>
            Titulo del hito seleccionado
          </HitoTitulo>
          <HitoAnio
            colorTypo={selectedHito === '2086' ? true : false}
            fontWeight={selectedHito === '2086'}
            onClick={() => handleClickHito('2086')}>
            2086
          </HitoAnio>
        </Hito>

        <Hito
          colorFondo={selectedHito === '2098' ? true : false}
          onClick={() => handleClickHito('2098')}>
          <HitoTitulo
            colorTypo={selectedHito === '2098' ? true : false}
            fontWeight={selectedHito === '2098'}
            onClick={() => handleClickHito('2098')}>
            Titulo del hito seleccionado
          </HitoTitulo>
          <HitoAnio
            colorTypo={selectedHito === '2098' ? true : false}
            fontWeight={selectedHito === '2098'}
            onClick={() => handleClickHito('2098')}>
            2098
          </HitoAnio>
        </Hito>
      </Slider>
    </ContainerSlider>
  );
}

export default HitosTimeLine;
