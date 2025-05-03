import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Card from "../components/Card";

const ExplorePage = () => {
  const [pageNo, setPageNo] = useState(1);
  const [data, setData] = useState([]);
  const [totalPageNo, setTotalPageNo] = useState(0);
  const [loading, setLoading] = useState(false);

  const param = useParams();
  

  const fetchData = async () => {
    if (loading) return; // already fetching

    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/${param.explore}`,
        {
          params: {
            page: pageNo,
            api_key: "0d50bc767391994a3e42ce9d3b9cdd10",
          },
        }
      );
      console.log(response.data.results)
      setData((prev) => [...prev, ...response.data.results]);
      setTotalPageNo(response.data.total_pages);
    
    } catch (error) {
      console.log("Error:", error);
    }
    setLoading(false);
  };

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 && // 100px before bottom
      !loading &&
      pageNo < totalPageNo
    ) {
      setPageNo((prev) => prev + 1);
      
    }
  };

  useEffect(() => {
    fetchData();
  }, [pageNo]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // clean up
  }, [handleScroll]);

  useEffect(() => {
    // Reset when explore param changes
    setData([]);
    setPageNo(1);
  }, [param.explore]);

  return (
    <div className="text-white px-6  mt-16">
      <div className="container mx-auto ">
        <h3 className="capitalize mb-4 pt-4 text-2xl font-medium">Popular {param.explore} Show</h3>
        <div className="flex flex-wrap gap-2 -mt-4">
          {data.map((exploreData, index) => (
            <Card
              data={exploreData}
              key={`exploreSection-${param.explore}-${exploreData.id}-${index}`}
              media_type={param.explore}
            />
          ))}
        </div>
        {loading && (
          <div className="text-center py-4">Loading more {param.explore}...</div>
        )}
      </div>
    </div>
  );
};

export default ExplorePage;
