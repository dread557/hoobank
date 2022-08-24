import React from "react";
import { Navbar, HeroSection, Main, Testimonial, Footer } from './components/index'


function App() {
  return (
    <div className='bg-[#00040f] font-poppins text-gray-200'>
      <Navbar />
      <HeroSection />
      <Main />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
