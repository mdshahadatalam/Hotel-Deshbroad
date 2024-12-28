import React from 'react'

export const Banner = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg w-full max-w-lg mx-auto">
 <h4 className='font-serif text-center m-0'>Banner</h4>

 {/* <img width={50} src={`http://localhost:3000/${bannerImg}`} alt="images" /> */}

  <div className="mb-2">
    <label className="block text-sm font-semibold text-gray-700 mb-2" >
      Subheading
    </label>
    <input
    //   value={subhead}
    //   onChange={handleSubhead}
      className="w-full h-12 px-4 border border-[#E0E0E0] rounded-lg shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
      type="text"
      id="menu-name"
      placeholder="Subheading"
    />
  </div>

  <div className="mb-2">
    <label className="block text-sm font-semibold text-gray-700 mb-2" >
     Heading
    </label>
    <input
    //   value={head}
    //   onChange={handleHeading}
      className="w-full h-12 px-4 border border-[#E0E0E0] rounded-lg shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
      type="text"
      id="menu-name"
      placeholder="Heading"
    />
  </div>

  <div className="mb-2">
    <label className="block text-sm font-semibold text-gray-700 mb-2" >
     Tittle
    </label>
    <input
    //   value={head}
    //   onChange={handleHeading}
      className="w-full h-12 px-4 border border-[#E0E0E0] rounded-lg shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
      type="text"
      id="menu-name"
      placeholder="Tittle"
    />
  </div>


  <div className="mb-2">
    <label className="block text-sm font-semibold text-gray-700 mb-2">
      Button Text
    </label>
    <input
    //   value={buttonText}
    //   onChange={handleButtonText}
      className="w-full h-12 px-4 border border-[#E0E0E0] rounded-lg shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
      type="text"
      id="button-text"
      placeholder="Button text"
    />
  </div>

  <div className="mb-2 flex items-center">
    <input
    //   checked={buttonShow}
    //   onChange={handleButtonShow}
     className="my-2 h-4 w-4 border-[#E0E0E0] rounded-sm focus:ring-2 focus:ring-indigo-500" type="checkbox" />
    <label className="text-sm ps-2 text-gray-700" >Show Button</label>
  </div>

  <div className="mt-3 text-center">
    <button
    //    onClick={handleSubmit}
      className="px-6 py-2 bg-indigo-600 text-white font-semibold text-sm rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
    >
      Submit
    </button>
  </div>
</div>
  )
}
