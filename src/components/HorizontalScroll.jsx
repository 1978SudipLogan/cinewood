import React from "react";
import Card from "./Card";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import { useRef } from "react";



const HorizontalScroll = ({ trendingData, trendingImage, heading, media_type }) => {

    const scrollRef=useRef(null);

    const scrollLeft = () => {
        scrollRef.current.scrollBy({
          left: -window.innerWidth,
          behavior: "auto",
        });
      };

      const scrollRight = () => {
        scrollRef.current.scrollBy({
          left: window.innerWidth,
          behavior: "auto",
        });
      };

   

  return (
    <div className="w-full mt-10" 
    >
      <div className="container mx-auto px-6 " >
        <p className="text-white text-xl lg:text-3xl font-bold ">
        {heading}
        </p>
        <div className="hidden lg:block text-white flex relative z-10 ">
          <div className="absolute top-40 -left-2">
            <FaArrowCircleLeft style={{fontSize:"30px"}} onClick={scrollLeft}/>
          </div>
          <div className="absolute top-40 right-1">
            <FaArrowCircleRight style={{fontSize:"30px"}} onClick={scrollRight}/>
          </div>
        </div>
        <div className="ml-3 lg:ml-0 flex gap-6 lg:gap-4 overflow-x-scroll scroll-none "
       ref={scrollRef}
        >
          {trendingData.map((data, index) => {
            return <Card key={index} data={data} image={trendingImage} media_type={media_type}/>;
          })}
        </div>
      </div>
    </div>
  );
};

export default HorizontalScroll;

//grid grid-cols-[repeat(auto-fit,230px)] grid-flow-col gap-4 overflow-x-scroll
