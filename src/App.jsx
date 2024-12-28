import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState } from 'react';
import { Navbar } from './Component/Navbar';
import { Banner } from './Component/Banner';
import { About } from './Component/About';
// import { About } from './Component/About'; // Import About Component
// import { Services } from './Component/Services'; // Import Services Component
// import { Resume } from './Component/Resume'; // Import Resume Component
// import { Portfolio } from './Component/Portfolio'; // Import Portfolio Component
// import { Testimonial } from './Component/Testimonial'; // Import Testimonial Component
// import { Blog } from './Component/Blog'; // Import Blog Component
// import { Contact } from './Component/Contact'; // Import Contact Component

function App() {
  const [menu, setMenu] = useState('Navbar');

  const handleMenu = (menuItem) => {
    setMenu(menuItem);
  };

  return (
    <>
      <section className='font-serif py-5 bg-[#FFF5EF]'>
        <div className="container">
          <h4 className='text-center m-0'>Dashboard</h4>
          <div className="row">
            <div className="col-lg-4">
              <div className='bg-white shadow-md rounded-md p-4'>
                <li onClick={() => handleMenu("Banner")} className='list-none p-2 m-2 rounded-sm shadow-sm hover:bg-slate-600 hover:text-white text-center cursor-pointer border border-back'>Banner</li>
                <li onClick={() => handleMenu("About")} className='list-none p-2 m-2 rounded-sm shadow-sm hover:bg-slate-600 hover:text-white text-center cursor-pointer border border-back'>About</li>
                <li onClick={() => handleMenu("Service")} className='list-none p-2 m-2 rounded-sm shadow-sm hover:bg-slate-600 hover:text-white text-center cursor-pointer border border-back'>Service</li>
                <li onClick={() => handleMenu("Resume")} className='list-none p-2 m-2 rounded-sm shadow-sm hover:bg-slate-600 hover:text-white text-center cursor-pointer border border-back'>Resume</li>
                <li onClick={() => handleMenu("Portfolio")} className='list-none p-2 m-2 rounded-sm shadow-sm hover:bg-slate-600 hover:text-white text-center cursor-pointer border border-back'>Portfolio</li>
                <li onClick={() => handleMenu("Testimonial")} className='list-none p-2 m-2 rounded-sm shadow-sm hover:bg-slate-600 hover:text-white text-center cursor-pointer border border-back'>Testimonial</li>
                <li onClick={() => handleMenu("Blog")} className='list-none p-2 m-2 rounded-sm shadow-sm hover:bg-slate-600 hover:text-white text-center cursor-pointer border border-back'>Blog</li>
                <li onClick={() => handleMenu("Contact")} className='list-none p-2 m-2 rounded-sm shadow-sm hover:bg-slate-600 hover:text-white text-center cursor-pointer border border-back'>Contact</li>
              </div>
            </div>
            <div className="col-lg-8">
              <div className='p-3 m-3'>
                {menu === "Banner" && <Banner />}
                {menu === "About" && <About />}
                {menu === "Service" &&  <h1>services</h1> }
                {menu === "Resume" && <Resume />}
                {menu === "Portfolio" && <Portfolio />}
                {menu === "Testimonial" && <Testimonial />}
                {menu === "Blog" && <Blog />}
                {menu === "Contact" && <Contact />}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
