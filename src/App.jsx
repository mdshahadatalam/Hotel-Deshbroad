import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState } from 'react';
import { Banner } from './Component/Banner';
import { About } from './Component/About';
import { Room } from './Component/Room';
import { Booking } from './Component/Booking';
import { Service } from './Component/Service';

function App() {
  const [menu, setMenu] = useState('Navbar');

  const handleMenu = (menuItem) => {
    setMenu(menuItem);
  };

  return (
    <>
      <section className='font-serif py-5 h-screen bg-[#FFF5EF]'>
        <div className="container">
          <h4 className='text-center m-0'> Hotel Dashboard</h4>
          <div className="row">
            <div className="col-lg-4">
              <div className='bg-white shadow-md rounded-md p-4'>
                <li onClick={() => handleMenu("Banner")} className='list-none p-2 m-2 rounded-sm shadow-sm hover:bg-slate-600 hover:text-white text-center cursor-pointer border border-back'>Banner</li>
                <li onClick={() => handleMenu("Room")} className='list-none p-2 m-2 rounded-sm shadow-sm hover:bg-slate-600 hover:text-white text-center cursor-pointer border border-back'>Room</li>
                <li onClick={() => handleMenu("Service")} className='list-none p-2 m-2 rounded-sm shadow-sm hover:bg-slate-600 hover:text-white text-center cursor-pointer border border-back'>Service</li>
                <li onClick={() => handleMenu("AboutUs")} className='list-none p-2 m-2 rounded-sm shadow-sm hover:bg-slate-600 hover:text-white text-center cursor-pointer border border-back'>About Us</li>
                <li onClick={() => handleMenu("Booking")} className='list-none p-2 m-2 rounded-sm shadow-sm hover:bg-slate-600 hover:text-white text-center cursor-pointer border border-back'>Booking</li>
              </div>
            </div>
            <div className="col-lg-8">
              <div className='p-3 m-3'>
                {menu === "Banner" && <Banner />}
                {menu === "Room" && <Room/>}
                {menu === "Service" &&  <Service/> }
                {menu === "AboutUs" && <About />}
                {menu === "Booking" && <Booking/>}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
