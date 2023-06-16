import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import Author from './author';
import Image from 'next/image';

export default function section4() {
  return (
    <section className='container mx-auto md:px-20 py-16'>
        <div className='grid lg:grid-cols-2'>
            <div className='item'>
                <h1 className='font-bold text-4xl py-12'>Technology</h1>
                <div className='flex flex-col gap-6'>
                    {/*posts*/}
                    {Post()}
                    {Post()}
                    {Post()}
                    {Post()}

                </div>
            </div>
        </div>
    </section>
  )
}



function Post(){
  return(
    <div className='flex gap-5'>
      <div className='images flex flex-col justify-start'>
         <Link href={"/"}><Image src={"/images/card image/img2.jpg"} alt='' width={200} height={150} className='rounded'/></Link>
      </div>
      <div className='info flex justify-center flex-col'>
        <div className="cat " >
             <Link legacyBehavior href={"/"}><a className="text-orange-600 hover:text-orange-800">LifeStyle,Motivation</a></Link>
             <Link legacyBehavior href={"/"}><a className="text-gray-600 hover:text-gray-600">-July 3,2022</a></Link>
        </div>
        <div className="title">
             <Link  legacyBehavior href={"/"}><a className="text-xl font-bold text-gray-800 hover:text-gray-600" > This is my vlog</a></Link>
        </div>
        <Author></Author>
      </div>
    </div>
  )
}

