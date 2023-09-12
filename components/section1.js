import Image from "next/image"
import Link  from "next/link"
import Author from "./author"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import SwiperCore,{Autoplay} from 'swiper';
import 'swiper/css';


export default function Section1() {

  //const bg={
   //background:"url('images/background/bg2.jpg') no-repeat",
   //backgroundPosition:"right"
 // }
   SwiperCore.use([Autoplay])

  return (
   // <section className="py-16" style={bg}>
     <div className="container mx-auto md:px-20">
      <h1 className="font-bold text-4xl pb-12  mt-10 text-center">Trending</h1>
      
      <Swiper
        slidesPerView={1}
        autoplay={{
          delay:2000
        }}
      >
        <SwiperSlide>   {Slide()}</SwiperSlide>
        <SwiperSlide>   {Slide()}</SwiperSlide>
        <SwiperSlide>   {Slide()}</SwiperSlide>
        <SwiperSlide>   {Slide()}</SwiperSlide>  
        <SwiperSlide>   {Slide()}</SwiperSlide>  
        <SwiperSlide>   {Slide()}</SwiperSlide>  
        <SwiperSlide>   {Slide()}</SwiperSlide>  
      ...
    </Swiper>
    
    
    
    
    
    


     </div>
   // </section>
  )
}


function Slide(){
  return(
    <div className="grid md:grid-cols-2 ">
      <div className="image mx-20  mr-20">
        <Link href={"/"}><Image
  src={"/images/card image/img2.jpg"}
  alt="Description of the image"
  width={500}
  height={300}
/>
</Link>
        
      </div>
    <div className="info flex justify-center ml-0 mx-0 flex-col">
      <div className="cat " >
        <Link legacyBehavior href={"/"}><a className="text-orange-600 hover:text-orange-800">LifeStyle,Motivation</a></Link>
        <Link legacyBehavior href={"/"}><a className="text-gray-600 hover:text-gray-600">-July 3,2022</a></Link>
      </div>
      <div className="title">
        <Link  legacyBehavior href={"/"}><a className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600" > This is my vlog</a></Link>

      </div>
      <p className="text-gray-500 py-3">
        Hello how are you i am fine even the most powerfull thing i sin m yhand sunday ho ya monday rog kao danduuuuuuu
      </p>
      <Author></Author>



    </div>

    </div>
  )
}