import React,{useEffect, useState} from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import Card from '../components/Card';
import axios from 'axios';

import MobileSearchForm from '../components/MobileSearchForm';




const Search = () => {
const[data,setData]=useState([]);
const[page,setPage]=useState(1);


  const location=useLocation();



  const searchData=async()=>{
    const response=await axios.get(`https://api.themoviedb.org/3/search/multi`,{
      params: {
        query:location.search.slice(3).replace(/%20/g," "),
        page:page,
        api_key: "0d50bc767391994a3e42ce9d3b9cdd10", // 
      },
    })
    setData((prev)=>{
     return[ ...prev,...response.data.results];
    })
    console.log(response.data.results);
  }

  useEffect(()=>{
    setPage(1)
    setData([])
    searchData();
    
  },[location.search])

const handleScroll=()=>{
  if(window.innerHeight + window.scrollY >= document.body.offsetHeight-200){
    setPage(prev=>prev+1)
  }
}

 useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // clean up
  }, [handleScroll]);

  useEffect(()=>{
    searchData();
  },[page])


  
  return (
    <div className='text-white py-16 mx-[10px]'>
      <MobileSearchForm/>
       <div className='container mx-auto'>
       <h3 className="capitalize mb-4 text-2xl py-2 font-medium mx-[10px] lg:mx-0">Search Results of {location.search.slice(3).replace(/%20/g," ")}</h3>
       <div className="flex flex-wrap gap-2 -mt-4 justify-center lg:justify-start">
          {data.map((searchData, index) => (
            <Card
              data={searchData}
              key={searchData.id+index}
             
            />
          ))}
        </div>
       </div>
    </div>
  )
}

export default Search
