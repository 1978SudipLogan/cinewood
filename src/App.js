import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MobileNavigation from "./components/MobileNavigation";
import { useEffect } from "react";
import axios from "axios";
import { setBannerData,setImageURL } from "./store/moviflixSlice";
import { useDispatch } from "react-redux";


function App() {

const dispatch=useDispatch();

const fetchTrendingData=async()=>{
  try {
    const response=await axios.get("https://api.themoviedb.org/3/trending/all/week",
      {
        params: {
          api_key: "0d50bc767391994a3e42ce9d3b9cdd10", // 🔑 Replace this with your real TMDb API key
        },
      }
    );
    dispatch(setBannerData(response.data.results))
  

  } catch (error) {
    console.log("error",error);
  }
}

const fetchConfiguration=async ()=>{
  try {
    const response=await axios.get("https://api.themoviedb.org/3/configuration",
      {
        params: {
          api_key: "0d50bc767391994a3e42ce9d3b9cdd10", // 
        },
      }
    );
    dispatch(setImageURL(response.data.images.secure_base_url+"original"))

    //console.log("configuration:",response.data.images.secure_base_url+"original")
  } catch (error) {
    console.error(error)
  }
}

useEffect(()=>{
  fetchTrendingData();
  fetchConfiguration();
},[])


  return (
    <main className="bg-black ">
      <Header/>
      <div className="">
      <Outlet/>
      </div>
      <Footer />
     
       
      <MobileNavigation/>
    </main>
  );
}

export default App;
