import Image  from "next/image"
import Link from "next/link"


export default function author() {
  return (
    <div className="author flex py-5">
        <Image src={"/images/author/profile avatar.png"} width={45} height={45} className="rounded-full"></Image>
        <div className="flex flex-col justify-center px-4">
            <Link legacyBehavior href={"/"}><a className="text-md font-bold text-gray-800 hover:text-gray-600">Hdk</a></Link>
            <span className=" text-sm text-gray-500">Admin</span>
        </div>
    </div>  

  )
}
