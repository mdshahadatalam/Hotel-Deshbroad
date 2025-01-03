import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const Service = () => {
  
  const [img,setImg] = useState("")
  const [subHead,setSubHead] = useState("")
  const [paragraph,setParagraph] = useState("")
  const [showImg, setShowImg] = useState(false)

   const handleFile =(e)=>{
    setImg(e.target.files[0])
   }
 
  const handleSubHead =(e)=>{
    setSubHead(e.target.value)
  }
  const handleParagraph =(e)=>{
    setParagraph(e.target.value)
  }
  const handleImgShow =(e)=>{
    setShowImg(e.target.checked)
  }

  const handleSubmit =()=>{
    let data = new FormData()
    data.append('serImg',img)
    data.append('subHead',subHead)
    data.append('paragraph',paragraph)
    data.append('showImg',showImg)

    axios.post('http://localhost:3000/service',data).then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(err)
     })



  }
  return (
    <>
    <div className="p-6 bg-white rounded-lg shadow-lg w-full max-w-lg mx-auto">
     <p className='text-center text-xl text-slate-600'>Add your new service here</p>
    <div className="mb-2">
    <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="file-upload">
      Upload File
    </label>
    <input
      onChange={handleFile}
      className="py-2 px-4 w-full border border-[#E0E0E0] rounded-lg shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
      type="file"
      id="file-upload"
    />
  </div>

 
  <div className="mb-2">
    <label className="block text-sm font-semibold text-gray-700 mb-2" >
    Sub Heading
    </label>
    <input
      //  value={subHeading}
       onChange={handleSubHead}
      className="w-full h-12 px-4 border border-[#E0E0E0] rounded-lg shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
      type="text"
      id="menu-name"
      placeholder="Sub heading"
    />
  </div>

  <div className="max-w-xl mx-auto">
<label  className="block text-sm font-semibold text-gray-700 mb-2">
 Paragraph
</label>
<textarea
  // value={paragraph}
  onChange={handleParagraph}
  id="dashboardTextarea"
  rows="5"
  className="w-full p-4 border border-gray-300 rounded-lg shadow-sm outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-gray-900 placeholder-gray-400 resize-none"
  placeholder="Write your content here..."
></textarea>
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
