import axios from "axios";
import { useEffect,useState } from "react";
import { useSelector } from "react-redux";



const useFetch=(category,endpoint)=>{
    const[data,setData]=useState([])
    const trendingImage = useSelector((state) => state.moviflix.imageUrl);
    const fetchData=async ()=>{
        try {
            const response=await axios.get(`https://api.themoviedb.org/3/${category}/${endpoint}`, {
                params: {
                  api_key: "0d50bc767391994a3e42ce9d3b9cdd10",
                },
              });
             
              setData(response.data)
        }
      
        catch (error) {
            console.log("Error:",error)
        }
    }
    useEffect(()=>{
        fetchData();
    },[category,endpoint])

    return {data,trendingImage}
}

export default useFetch;