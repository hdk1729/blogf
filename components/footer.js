import { ImFacebook, ImYoutube, ImTwitter, ImInstagram } from 'react-icons/im';
import Newsletter from "./newsletter"

export default function Footer() {
  return (
    <footer class=" container mx-auto py-14 px-8 grid lg:grid-cols-3 justify-between gap-8 text-gray-50 ">
  <div className=' container  '>
    <h1 className=" text-3xl  mx-4 font-bold text-black">Drah. </h1>
    <p className='text-black mt-5 mx-4'>loren cknsknknmnmnsman am cnasc as ccccccccd dcnkcnklbhbhhhkbbjkjnjnbkbbkbubub hbb kdc</p>
    <div class='flex gap-6  mx-4 my-5'>
      <a><ImFacebook color='gray' size={20}/></a>
      <a><ImYoutube color='gray' size={20}/></a>
      <a><ImTwitter color='gray' size={20}/></a>
      <a><ImInstagram color='gray' size={18}/></a>
    </div>
  </div>

  <div class='lg:col-span-1 flex justify-between text-lg '>
    <div className='mx-4'>
      <h6 class='font-medium text-gray-400'>Solution</h6>
      <ul class='text-black mt-3 px-2'>
        <li class='py-2 text-sm'>Analytics</li>
        <li class='py-2 text-sm'>marketing</li>
        <li class='py-2 text-sm'>Commerce</li>
        <li class='py-2 text-sm'>insights</li>
      </ul>
    </div>
    <div>
      <h6 class='font-medium text-gray-400'>Support</h6>
      <ul class='text-black mt-3 px-2'>
        <li class='py-2 text-sm'>Analytics</li>
        <li class='py-2 text-sm'>marketing</li>
        <li class='py-2 text-sm'>Commerce</li>
        <li class='py-2 text-sm'>insights</li>
      </ul>
    </div>
    <div>
      <h6 class='font-medium text-gray-400'>Support</h6>
      <ul class='text-black mt-3 px-2'>
        <li class='py-2 text-sm'>Analytics</li>
        <li class='py-2 text-sm'>marketing</li>
        <li class='py-2 text-sm'>Commerce</li>
        <li class='py-2 text-sm'>insights</li>
      </ul>
    </div>
    
  </div>

  <div className='mx-'><Newsletter/></div>
  <div></div>
  <div className="container mx-auto flex justify-center  text-center ">
    <p class=' text-gray-400 '>Copyright@hdk-ak All rights reserved</p>
  </div>

</footer>
  )
}