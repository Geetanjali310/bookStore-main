
import React, { useEffect, useState } from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import axios from "axios"

import Cards from './Cards';

function Freebook() {
  const [book,setBook]=useState([])
  useEffect(() =>{
      const getBook=async()=>{
        try {
          const res=await  axios.get("http://localhost:4001/book")
          
          console.log(res.data);
          const data=res.data.filter((data) => data.category === "Free")
          setBook(data);
    
        } catch (error) {
          console.log(error)
        }
      }
      getBook();
  },[])

    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
     <div>
     <h1 className='font-bold text-x1  pb-2'>Free Offered Courses</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat repudiandae cupiditate accusamus
        scroll perspiciatis minus expedita doloremque illo unde nisi maxime ad, illum possimus! 
        Iusto vel nemo ipsa, recusandae quam ab!</p>
     </div>
    
    <div>
    <Slider {...settings}>
        {book.map((item) => (
          <Cards item={item} key={item.id}/>
        ))}
      </Slider>
    </div>
    </div>
    </>
  )
}

export default Freebook;