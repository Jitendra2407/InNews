import React from 'react';
import Image1 from '../assets/Image1.jpeg';
import Image2 from '../assets/Image2.jpeg';
import Image3 from '../assets/Image3.jpeg';
import entertainment from '../assets/entertainment.png';
import others from '../assets/others.png';
import politics from '../assets/politics.png';
import sports from '../assets/sports.png';
import technology from '../assets/technology.png';
import world from '../assets/world.png';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from 'react-router-dom';


const CardSlider = () => {

  const navigate = useNavigate();

  const data = [
    {
      img: politics,
      name: "Politics",
      route: "/the-hindu",
    },
    {
      img: sports,
      name: "Sports",
      route: "/hindustan-times",
    },
    {
      img: technology,
      name: "Technology",
      route: "/new-york-times",
    },
    {
      img: entertainment,
      name: "Entertainment",
      route: "/hindustan-times",
    },
    {
      img: world,
      name: "World",
      route: "/hindustan-times",
    },
    {
      img: others,
      name: "Others",
      route: "/hindustan-times",
    }
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <div className="w-85 m-auto">
      <div className="mt-14">
      <Slider {...settings}>
        {data.map((item) => (
          <div className="bg-white h-[400px] text-black rounded-xl overflow-hidden transform transition-transform duration-300 hover:scale-105 cursor-pointer"
            onClick={() => navigate(item.route)}
          >
            <div className="rounded-t-xl h-[315px] bg-indigo-500 flex justify-center items-center">
              <img src={item.img} alt="" className="w-full h-full object-cover"/>
            </div>
            <div className="flex flex-col justify-center items-center gap-4 p-4 bg-custom-dark-blue">
              <p className="text-xl font-semibold text-white">{item.name}</p>
            </div>
          </div>
        ))}
      </Slider>
      </div>
    </div>
  );
};

export default CardSlider;
