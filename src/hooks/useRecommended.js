import axios from "axios"
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useRecommended=(category,endpoint)=>{
    const [recommend,setRecommend]=useState(null)
    const recommendImage=useSelector((state)=>state.moviflix.imageUrl)
    const fetchData=async()=>{
        try {
            const response=await axios.get(`https://api.themoviedb.org/3/${category}/${endpoint}/recommendations`, {
                params: {
                  api_key: "0d50bc767391994a3e42ce9d3b9cdd10",
                },
              });
              console.log("useRecommend : ",response.data.results);
              setRecommend(response.data)
        }
      
        catch (error) {
            console.log("Error:",error)
        }
    }
    useEffect(()=>{
        fetchData();

    },category,endpoint)
    return{recommend,recommendImage}
}

export default useRecommended