import React from 'react'
import FancyCarousel from "react-fancy-circular-carousel";
import 'react-fancy-circular-carousel/FancyCarousel.css';
import styles from './Feature.module.css'

import image1 from '../assets/image1.jpeg';
import image2 from '../assets/image2.jpeg';
import image3 from '../assets/image3.jpeg';
import image4 from '../assets/image1.jpeg';
import image5 from '../assets/image2.jpeg';
import image6 from '../assets/image3.jpeg';

import { useState } from 'react';

const Feature = () => {
    const [focusElement, setFocusElement] = useState(0);
    const images = [image1, image2, image3, image4, image5, image6];
  return (
    <div className={`bg-white flex justify-center items-center mt-2 h-full mb-2 ${styles.Container}`}>
      <div className="carousel">
        <div className={styles.Main}>
          <FancyCarousel 
            images={images} 
            setFocusElement={setFocusElement}
            carouselRadius={140}
            peripheralImageRadius={45}
            centralImageRadius={60}
            focusElementStyling={{border: '2px solid #ba4949'}}
            autoRotateTime={2}
            borderWidth={4}
            borderHexColor={'1c364f'}
          />
        </div>
      </div>
    </div>
  )
}

export default Feature;