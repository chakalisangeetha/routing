import React, { useState } from 'react';
import './Carousel.css';
const images = [
  'https://i.pinimg.com/736x/f4/29/62/f42962b8993ea3dd768e0ac1f49a97e8.jpg',
  'https://t3.ftcdn.net/jpg/07/08/45/24/360_F_708452458_SgLxoyB2qr7B0KWihnFU4isZ7rVK65sF.jpg',
  'https://st4.depositphotos.com/1719108/23484/i/450/depositphotos_234846326-stock-illustration-cartoon-autumn-nature-background-mountains.jpg',
  'https://i.pinimg.com/originals/2b/81/05/2b81057c7ca0d72f6397bcd7016ca818.jpg',
  'https://static.vecteezy.com/system/resources/thumbnails/046/535/264/small_2x/beautiful-fantasy-summer-natural-scenery-background-animation-with-japanese-anime-watercolor-painting-illustration-style-video.jpg',
];

const Caro=()=>{
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  return (
    <div className="carousel-container">
      <div className="arrow left-arrow" onClick={prevSlide}>
        ❮ 
      </div>

      <div className="carousel-image-wrapper">
        {images.map((item, index) => (
          <div
            className={`carousel-image ${current === index ? 'active' : ''}`}
            key={index}
          >
            {current === index && <img src={item} alt="err" />}
          </div>
        ))}
      </div>

      <div className="arrow right-arrow" onClick={nextSlide}>
        ❯
      </div>
    </div>
  );
}

export default Caro;
