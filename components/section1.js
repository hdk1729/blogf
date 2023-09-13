import React, { useState, useEffect } from 'react';
import Image from "next/image"
import Link  from "next/link"
import Author from "./author"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import SwiperCore,{Autoplay} from 'swiper';
import 'swiper/css';


export default function Section1() {
  const [slides, setSlides] = useState([]);
  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const response = await fetch('https://myblog-bk.onrender.com/api/post/trending');
        const data = await response.json();
        setSlides(data.posts);
        //console.log(data.posts);
      } catch (error) {
        console.error('Error fetching slides:', error);
      }
    };

    fetchSlides();
  }, []);

  //const bg={
   //background:"url('images/background/bg2.jpg') no-repeat",
   //backgroundPosition:"right"
 // }
   SwiperCore.use([Autoplay])

  return (
   // <section className="py-16" style={bg}>
     <div className="container mx-auto md:px-20">
      <h1 className="font-bold text-4xl pb-12  mt-10 text-center">Trending</h1>
      
      <Swiper slidesPerView={1} autoplay={{ delay: 2000 }}>
      {slides.map((slide) => (
        <SwiperSlide key={slide._id}>
          <Slide slide={slide} />
        </SwiperSlide>
      ))}
    </Swiper>
     </div>
   // </section>
  )
}


function Slide({ slide }) {
  return (
    <div className="grid md:grid-cols-2">
      <div className="image mx-20 mr-20">
        <Link href={`/post/${slide._id}`}> 
          <Image
            src={slide.thumbnail.url}
            alt={slide.title}
            width={500}
            height={300}
          />
        </Link>
      </div>
      <div className="info flex justify-center ml-0 mx-0 flex-col">
      <div className='cat'>
  {slide.tags.map((tag, index) => (
    <span key={index}>
      <Link href={`/search?tags=${tag}`}>
        <span className='text-orange-600 hover:text-orange-800'>{tag}</span>
      </Link>
      {index < slide.tags.length - 1 && ' | '}
    </span>
  ))}
  <span className='text-gray-600 hover:text-gray-600'>
    - {new Date(slide.createdAt).toLocaleDateString()}
  </span>
</div>
        <div className="title">
          <Link href={`/post/${slide._id}`}>
            <span className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600">
              {slide.title}
            </span>
          </Link>
        </div>
        <p className="text-gray-500 py-3">{slide.content}</p>
      </div>
    </div>
  );
}