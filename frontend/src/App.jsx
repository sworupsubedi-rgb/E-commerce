
import Banner from './components/banner/Banner'
import Catagory from './components/category/Catagory'
import Category from './components/category/Category'
import Hero from './components/Hero/Hero'
import { Navbar } from './components/navbar/navbar'
import Services from './components/Services/Services'
import headphone from './assets/pics/headphone.png'
import smartwatch from './assets/componentpics/smartwatch.png'
import Products from './components/products/Products'
import Blog from './components/blog/Blog'
import Sponser from './components/sponser/Sponser'
import Footer from './components/footer/Footer'
const bannerdata ={
  discount:"30% OFF",
  title: "Fine Smile",
  date:"10 Jun to 28 Jun",
  image:headphone,
  title2:"Air Solo Bass",
  title3:"Winter Sale",
  title4:"Circuit boards, soldering, using a multimeter or oscilloscope",
  classname:"bg-red-600 text-red-600"

}
const bannerdat ={
  discount:"30% OFF",
  title: "Fine Smile",
  date:"10 Jun to 28 Jun",
  image:smartwatch,
  title2:"Layers Anarc",
  title3:"Winter Sale",
  title4:"Circuit boards, soldering, using a multimeter or oscilloscope",
  classname:"bg-green-400 text-green-400"

}


function App() {
  return(
    <>
      <Navbar />
      <Hero />
      <Category />
      <Catagory />
      <Services/>
      <Banner data={bannerdata} />
      <Products />
      <Banner data={bannerdat} />
      <Blog />
      <Sponser />
      <Footer />
    </>
  )
  

}

export default App
