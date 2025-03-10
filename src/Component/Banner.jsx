import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify';

export const Banner = () => {

  const [subHead,setSubHead] =useState("")
  const [head,setHead] =useState("")
  const [title,setTittle] = useState("")
  const [buttonText,setButtonText] =useState("")
  const [showButton,setShowButton] =useState(false)
  const [id,setId] =useState("")

  const handleSubhead =(e)=>{
    setSubHead(e.target.value)
  }
  const handleHeading =(e)=>{
    setHead(e.target.value)
  }
  const handleTittle =(e)=>{
    setTittle(e.target.value)
  }

  const handleButtonText =(e)=>{
    setButtonText(e.target.value)
  }

  const handleButtonShow =(e)=>{
    setShowButton(e.target.checked)
  }

  const handleSubmit =()=>{
    if(id){
      axios.put('https://hotel-backend-git-main-md-shahadat-alams-projects.vercel.app/banner/'+id,{
        subHead:subHead,
        head:head,
        tittle:title,
        buttonText:buttonText,
        showButton:showButton,
      }).then(res=>{
        console.log(res.data)
        setSubHead('')
        setHead('')
        setTittle('')
        setButtonText('')
        setShowButton('')
        toast.success('Banner Updated', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          // transition: Bounce,
          });
      }).catch(err=>{
        console.log(err)
        toast.error('Please try again', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          // transition: Bounce,
          });
      })

    }else{
      axios.post('https://hotel-backend-git-main-md-shahadat-alams-projects.vercel.app/banner',{
        subHead:subHead,
        head:head,
        tittle:title,
        buttonText:buttonText,
        showButton:showButton,
       }).then(res=>{console.log(res);
    
        setSubHead('')
        setHead('')
        setTittle('')
        setButtonText('')
        setShowButton('')

        toast.success('Banner Created', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          // transition: Bounce,
          });
    
       }).catch(err=>{
        console.log(err)
       })    
    }
   
  }


 useEffect(()=>{
  async function data(){
    let data = await axios.get('https://hotel-backend-git-main-md-shahadat-alams-projects.vercel.app/bannerItem')
    //  console.log(data.data);
     setSubHead(data.data.subHead)
     setHead(data.data.head)
     setTittle(data.data.tittle)
     setButtonText(data.data.buttonText)
     setShowButton(data.data.showButton)
     setId(data.data._id)
     }
  data()
 },[])

  
 
  
  return (
    <>
    <div className="p-6 bg-white rounded-lg shadow-lg w-full max-w-lg mx-auto">
 <h4 className='font-serif text-center m-0'>Banner</h4>

  <div className="mb-2">
    <label className="block text-sm font-semibold text-gray-700 mb-2" >
      Subheading
    </label>
    <input
      value={subHead}
      onChange={handleSubhead}
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
      value={head}
      onChange={handleHeading}
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
      value={title}
      onChange={handleTittle}
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
      value={buttonText}
      onChange={handleButtonText}
      className="w-full h-12 px-4 border border-[#E0E0E0] rounded-lg shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
      type="text"
      id="button-text"
      placeholder="Button text"
    />
  </div>

  <div className="mb-2 flex items-center">
    <input
      checked={showButton}
      onChange={handleButtonShow}
     className="my-2 h-4 w-4 border-[#E0E0E0] rounded-sm focus:ring-2 focus:ring-indigo-500" type="checkbox" />
    <label className="text-sm ps-2 text-gray-700" >Show Button</label>
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

<ToastContainer />
</>

  )
}
