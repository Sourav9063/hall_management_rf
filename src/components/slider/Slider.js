import React, { useState } from 'react';
import { SliderData } from './SliderData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import style from "./slide.module.css"

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className={style.slider}>
      <FaArrowAltCircleLeft className={style.left_arrow} onClick={prevSlide} />

      <div>
        {SliderData.map((slide, index) => {
          return (
            <div
              className={index === current ? `${style.slide} ${style.active}` : `${style.slide}`}
              key={index}
            >
              {index === current && (
                <div className={style.image} style={{ backgroundImage: "url(" + slide.image + ")" }}></div>
              )}
            </div>
          );
        })}
      </div>
      <FaArrowAltCircleRight className={style.right_arrow} onClick={nextSlide} />
    </section>
  );
};

export default Slider;