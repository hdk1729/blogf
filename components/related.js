import Link from 'next/link';
import Image from 'next/image';
import Author from './author';


export default function Related() {
    return(
        <section className="pt-20 px-8">
            <h1 className='font-bold text-3xl py-10'>Similar Articles</h1>
            <div className='flex flex-col gap-10 '>
            {Post()}
            </div>
        </section>
    )
}

function Post(){
    return(
        <div className="flex gap-6">
            <div className='images flex flex-col justify-start'>
         <Link href={"/"}><Image src={"/images/card image/img2.jpg"} alt='' width={200} height={150} className='rounded'/></Link>
      </div>
      <div className='info flex justify-center flex-col'>
        <div className="cat " >
             <Link legacyBehavior href={"/"}><a className="text-orange-600 hover:text-orange-800">LifeStyle,Motivation</a></Link>
             <Link legacyBehavior href={"/"}><a className="text-gray-600 hover:text-gray-600">-July 3,2022</a></Link>
        </div>
        <div className="title" style={{ marginLeft: '0px'} }>
             <Link  legacyBehavior href={"/"}><a className="text-xl font-bold text-gray-800 hover:text-gray-600" > This is my vlog</a></Link>
        </div>
        <Author></Author>
      </div>
        </div>
    )
}
