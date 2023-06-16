import Format from "../../../layout/format"
import Author from "../../../components/author"
import Image from "next/image"
import Related from "../../../components/related"
export default function Page(){
    return(
    <Format>
        <section className="container mx-auto md:px-2 py-16 w-1/2">
            <div className="flex justify-center">
                <Author></Author>
            </div>
            <div className="post py-8 ">
            <Image></Image>
                <h1 className="text-center text-xl font-bold">
                "Saare jahan se achha, Hindustan hamara" - This famous line from a patriotic poem by Muhammad Iqbal translates to "Our Hindustan is better than the entire world." It symbolizes the love and pride that Indians hold for their country, celebrating its beauty and greatness.
                </h1>
                <p className="text-left px-5 ">
                "Atithi Devo Bhava" signifies the extraordinary significance given to guests in Indian culture and reflects the beauty of Indian hospitality, where visitors are treated with utmost care, respect, and kindness. 
                </p>
                
            </div>
            <Related></Related>
        </section>
    </Format>
    )
}