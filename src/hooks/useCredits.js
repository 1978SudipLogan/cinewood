import axios from "axios";
import { useState,useEffect } from "react"
import { useSelector } from "react-redux";



const useCredits=(category,endpoint)=>{
    const[member,setMember]=useState(null)
const memberImage = useSelector((state) => state.moviflix.imageUrl);
const fetchCredit=async ()=>{
    try {
        const response=await axios.get(`https://api.themoviedb.org/3/${category}/${endpoint}/credits`, {
            params: {
              api_key: "0d50bc767391994a3e42ce9d3b9cdd10",
            },
          });
        
          setMember(response.data)
    }
  
    catch (error) {
        console.log("Error:",error)
    }


}
  useEffect(()=>{
        fetchCredit();
    },[category,endpoint])
return {member,memberImage}
}

export default useCredits