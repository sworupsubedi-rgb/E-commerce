const menulink= [
    {
        id :1,
        name:"Home",
        link: "" ,
    },
    {
        id:2,
        name:"About",
        link:"",
    },
    {
        id:3,
        name:"Shop",
        link:""
    },
    {
      id: 4,
      name: "Blogs",
      link:""
    }

]

let Dropdown = [
{
  id:1,
  name:"Trending",
  link:"",
},
{
  id:2,
  name:"Top rated",
  link:"",
},
{
  id:3,
  name:"Best selling",
  link:"",
}
]
import { RiArrowDownSFill } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { FaOpencart } from "react-icons/fa";

export const Navbar = () => {
  return (

    <nav className="  flex gap-20 justify-between shadow-2xl  ">
          
    {/* left side */}
    <div  className="py-5 flex items-center">
      <a className="uppercase text-red-800 font-bold text-5xl" href=""> e-shop</a>
        <ul className=" hidden sm:flex gap-4">
            
              {menulink.map((data) =>(
                <li key={data.id} className="px-4 text-gray-400 
                hover:text-black hover:font-bold duration-900 cursor-pointer" ><a href={data.link}className="flex">
                  {data.name}</a>
                </li>
              ))}

              <li className="group ">
                <a href="" className="flex items-center px-4 text-gray-400  group
                hover:text-black font-semibold duration-200 cursor-pointer"> Quick link 
                < RiArrowDownSFill className="group-hover:rotate-180 duration-1000"/>
              </a>
              <div className="hidden group-hover:block absolute  shadow-xl p-2 w-44">

                {Dropdown.map((data) =>(
                  <ul>
                    <li key={data.id}>
                      <a href={data.limk} className="text-gray-500 cursor-pointer  hover:text-black duration-200 
                      p-2 hover:bg-red-500/20 inline-block w-full rounded-md">
                        {data.name}
                        </a>
                      </li>
                  </ul>
                )
              
              )}
              </div>
          </li>
           
        </ul>
    </div>

{/* 
right side */}
 <div className="group flex items-center p-3">
     <div className="flex relative group">
     <input type="text" placeholder="Search"
     className="w-0 group-hover:w-[200px] 
     group-hover:border group-hover:border-gray-600 rounded-full px-4 duration-1500" />
      <CiSearch className=" absolute top-1/2-translate-y-2/3  right-3 duration-200 text-2xl group-hover:text:red-600" />
    </div>

      <div className='relative p-3'>
          <FaOpencart />
          <span className='text-white bg-red-700 rounded-full absolute top-0 right-0 flex items-center justify-center text-xs w-4 h-4'>4</span>
        </div>
        </div>
    




    </nav>
    
    

  )
}
