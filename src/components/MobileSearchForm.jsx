import React, { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import SearchIcon from "@mui/icons-material/Search";
const MobileSearchForm = () => {
    const[nav,setNav]=useState("");
    const navigate=useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault()
        navigate(`?q=${nav}`)
    }
  return (
    <form onSubmit={handleSubmit} className='flex gap-2 block lg:hidden'>
      <input
              type="text"
              placeholder="Search Movies, Tv Show & Cast Names here..."
              className="text-xs md:font-bold capitalize text-yellow-400  w-full px-2 py-1 lg:w-[500px] outline-none  rounded-full block lg:hidden bg-black border-2 "
               onChange={(e)=>setNav(e.target.value)}
            />
             <button>
              <SearchIcon className=" text-white hover:text-red-500" />
            </button>
            </form>
  )
}

export default MobileSearchForm
