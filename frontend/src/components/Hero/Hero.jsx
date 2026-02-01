import headphone from "../../assets/pics/headphone.png"
import image1 from "../../assets/pics/image.png"
import image2 from "../../assets/pics/image1.png"
import image3 from "../../assets/pics/headphone.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import Button from "../Shared/Button";


const herodata= [
    {
        id:1,
        img:image1,
        subtitle:"Apple",
        title:"Laptop",
        title2:"Macbook ",
        discription: "his life will bechange dolar sit amet,consecutor",
    },
{
       id:2,
        img:image2,
        subtitle:"Meta",
        title:"Facebook",
        title2:"Vr box",
        discription: "his life will bechange dolar sit amet,consecutor",
},

{
    id:3,
        img:image3,
        subtitle:"wireless",
        title:"beat solo",
        title2:"headphone",
        discription: "his life will bechange dolar sit amet,consecutor"
}
]
   const Hero = () => {
     var settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
     return (
       <div className="p-[1rem] sm:px-[3rem]">

        <div className="bg-gray-300 h-[500px] rounded-3xl">

          <div className="container">
          <Slider {...settings}>


{herodata.map((data) =>(

     <div>
         <div className="p-4 grid grid-cols-1 sm:grid-cols-2  ">
               
             {/* content */}
               <div className="flex flex-col justify-center gap-4 sm:pl"> 
                <h1 className="text-3xl font-bold">{data.title}</h1>
               <h1 className="text-2xl font-semibold">{data.subtitle}</h1>
               <h1 className="uppercase text-5xl sm:text-[80px] text-white text-shadow-white
               md:text-[100px] xl:text-[150px] font-bold whitespace-nowrap">{data.title2}</h1>
             <div>
              <Button text="Buy Now"
              className="bg-red-500" />
             </div>
  
  
  
               </div>
               

               {/* image */}
               <div>
                <img src={data.img} className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px]
                sm:scale-x-105 lg:scale-110 object-contain mx-auto drop-shadow-2xl" alt="" />
               </div>

               
          </div>
          </div>
          ))}
          </Slider>
          </div>


        </div>


       </div>
     )
   }
   
   export default Hero        