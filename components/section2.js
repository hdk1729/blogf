import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Author from "./author"

export default function section2() {
  return (
    <section className='container mx-auto md:px-20 py-10'>
        <h1 className='font- bold text-4xl py-12 text-center'>Latest Post</h1>
    
        {/*grid colums*/}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-14'>
            {Post()}
            {Post()}
            {Post()}
            {Post()}
            {Post()}
            {Post()}
        </div>
    
    
    
    </section>
  )
}


function Post(){
    return(
        <div className='items'>
          <div className='images'>
             <Link href={"/"}><Image src={"/images/card image/img2.jpg"} alt='' width={400} height={300} className='rounded'/></Link>
        
          </div>
          <div className='info flex justify-center flex-col py-4'>
            <div className="cat " >
             <Link legacyBehavior href={"/"}><a className="text-orange-600 hover:text-orange-800">LifeStyle,Motivation</a></Link>
             <Link legacyBehavior href={"/"}><a className="text-gray-600 hover:text-gray-600">-July 3,2022</a></Link>
            </div>
            <div className="title">
             <Link  legacyBehavior href={"/"}><a className="text-xl  font-bold text-gray-800 hover:text-gray-600" > This is my vlog</a></Link>
            </div>
            <p className="text-gray-500 py-3">
            Hello how are you i am finn even the most powerfull thing i sin m yhand sunday ho ya monday rog kao danduuuuuuu
            </p>
              <Author></Author>

          </div>
        </div>
    )

}
