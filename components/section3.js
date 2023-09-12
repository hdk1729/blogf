import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import Author from './author';
import Image from 'next/image';

export default function section3() {
  return (
    <section className='container mx-auto md:px-20 py-16'>
        <h1 className='font- bold text-4xl py-12 text-center'>Most Popular</h1>
        

        {/*Swipper*/}
        <Swiper slidesPerView={2}>
            <SwiperSlide>{Post()}</SwiperSlide>
            <SwiperSlide>{Post()}</SwiperSlide>
            <SwiperSlide>{Post()}</SwiperSlide>
            <SwiperSlide>{Post()}</SwiperSlide>
            <SwiperSlide>{Post()}</SwiperSlide>
            <SwiperSlide>{Post()}</SwiperSlide>
            <SwiperSlide>{Post()}</SwiperSlide>
        </Swiper>
    </section>
  )
}


function Post(){
    return(
        <div className='grid'>
          <div className='images'>
             <Link href={"/"}><Image src={"/images/card image/img2.jpg"} alt='' width={500} height={300} className='rounded'/></Link>
        
          </div>
          <div className='info flex justify-center flex-col py-4'>
            <div className="cat " >
             <Link legacyBehavior href={"/"}><a className="text-orange-600 hover:text-orange-800">LifeStyle,Motivation</a></Link>
             <Link legacyBehavior href={"/"}><a className="text-gray-600 hover:text-gray-600">-July 3,2022</a></Link>
            </div>
            <div className="title">
             <Link  legacyBehavior href={"/"}><a className="text-3xl md:text-4xl font-bold text-gray-800 hover:text-gray-600" > This is my vlog</a></Link>
            </div>
            <p className="text-gray-500 py-3">
            Hello how are you i am fine even the most powerfull thing i sin m yhand sunday ho ya monday rog kao danduuuuuuu
            </p>
              <Author></Author>

          </div>
        </div>
    )

}
