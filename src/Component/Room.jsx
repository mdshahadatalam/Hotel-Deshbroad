import React, { useState } from 'react'

export const Room = () => {
  const [img,setImg] = useState("")
  const [price,setPrice] = useState("")
  const [subHeading, setSubHeading] = useState("")
  const [head,setHead] = useState("")
  const [showImg,setShowImg] = useState(false)

  const handlePrice =(e)=>{
    setPrice(e.target.value)
  }
  const handleSubHead =(e)=>{
    setSubHeading(e.target.value)
  }
  const handleHead =(e)=>{
    setHead(e.target.value)
  }
  const handleImgShow =(e)=>{
    setShowImg(e.target.checked)
  }

  const handleSubmit =()=>{
    console.log(price,subHeading,head,showImg)
    
  }
  return (
    <>
     <div className="p-6 bg-white rounded-lg shadow-lg w-full max-w-lg mx-auto">
     <p className='text-center text-xl text-slate-600'>Add your room here</p>
    <div className="mb-2">
    <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="file-upload">
      Upload File
    </label>
    <input
      // onChange={handleFile}
      className="py-2 px-4 w-full border border-[#E0E0E0] rounded-lg shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
      type="file"
      id="file-upload"
    />
  </div>

  <div className="mb-2">
    <label className="block text-sm font-semibold text-gray-700 mb-2" >
      Price
    </label>
    <input
      // value={date}
      onChange={handlePrice}
      className="w-full h-12 px-4 border border-[#E0E0E0] rounded-lg shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
      type="text"
      id="menu-name"
      placeholder="Price"
    />
  </div>

  <div className="mb-2">
    <label className="block text-sm font-semibold text-gray-700 mb-2" >
    Sub Heading
    </label>
    <input
      //  value={subHead}
       onChange={handleSubHead}
      className="w-full h-12 px-4 border border-[#E0E0E0] rounded-lg shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
      type="text"
      id="menu-name"
      placeholder="Sub heading"
    />
  </div>

  <div className="mb-2">
    <label className="block text-sm font-semibold text-gray-700 mb-2" >
      Heading
    </label>
    <input
      // value={head}
      onChange={handleHead}
      className="w-full h-12 px-4 border border-[#E0E0E0] rounded-lg shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
      type="text"
      id="menu-name"
      placeholder="Head"
    />
  </div>

  <div className="mb-2 flex items-center">
    <input
    //  checked={showImg}
     onChange={handleImgShow}
     className="my-2 h-4 w-4 border-[#E0E0E0] rounded-sm focus:ring-2 focus:ring-indigo-500" type="checkbox" />
    <label className="text-sm ps-2 text-gray-700" htmlFor="show-button">Show Image</label>
  </div>


  <div className="mt-3 text-center">
    <button
       onClick={handleSubmit}
      className="px-6 py-2 bg-indigo-600 text-white font-semibold text-sm rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
    >
      Submit
    </button>
  </div>
</div>

    </>
  )
}
