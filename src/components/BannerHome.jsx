import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import '../App.css'

import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const BannerHome = () => {
  const bannerHome = useSelector((state) => state.moviflix.bannerData);
  const imageHomeURL = useSelector((state) => state.moviflix.imageUrl);
 

  const scrollRef = useRef(null);

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

  const [image, setImage] = useState(0);




  useEffect(() => {
    const interval = setInterval(() => {
      setImage((prevImage) => {
        if (prevImage < bannerHome.length ) {
          scrollRight();
          return prevImage + 1;
        } else {
          scrollRef.current.scrollTo({
            left: -window.innerWidth,
            behavior: "auto",
          });
          return 0;
       // reset to first image
        }
      });
    }, 4000);
  
    return () => clearInterval(interval);
  }, [bannerHome,imageHomeURL]); // remove imageHomeURL unless needed
  



  //const baseImgUrl = "https://image.tmdb.org/t/p/original";
  return (
    <div
      ref={scrollRef}
      className="contrast-125 saturate-100 brightness-100 flex overflow-x-scroll lg:flex lg:w-full h-full  scroll-none"
    >
      {bannerHome.map((ele, index) => {
        return (
          <div className="relative h-96 lg:h-full" key={index}>
            <div className="flex-shrink-0  w-screen lg:h-screen  ">
              <img
                src={imageHomeURL + ele.backdrop_path}
                alt=""
                className=" rounded lg:w-screen lg:h-full h-96"
              />
            </div>

            <div className="absolute top-0 w-full h-full bg-gradient-to-t from-neutral-900 to-transprent"></div>
            {/* This is description for movie in large screen */}
            <div className="hidden lg:block lg:absolute lg:bottom-10  lg:w-[500px] lg:mx-16 lg:text-white ">
              <Typography
                variant="h1"
                component="h2"
                sx={{ fontSize: "3em", fontWeight: "bold" }}
              >
                {ele.original_name}
              </Typography>
              <Typography
                variant="h1"
                component="h2"
                sx={{ fontSize: "3em", fontWeight: "bold" }}
              >
                {ele.original_title}
              </Typography>
              <Typography
              
                style={{ fontSize: "1.3em" }}
                sx={{ fontSize: "1.3em" ,
                  display: "-webkit-box",
                  WebkitLineClamp: 1,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  cursor:"pointer"
                }}
              >
                {ele.overview}...
              </Typography>
              <div className="flex gap-2">
                <Typography>
                  Rating: {Number(ele.vote_average.toFixed(1))}+
                </Typography>
                <Typography style={{ fontWeight: "4em" }} className="font-bold">
                  |
                </Typography>
                <Typography>View: {ele.vote_count}</Typography>
              </div>
              <div className="flex ">
                <Link
                to={"/"+ele.media_type+"/"+ele.id}
                  className="bg-white text-black rounded mt-3 flex justify-center items-center px-3 font-normal transition-bg duration-300 hover:bg-neutral-400"
                >
                  Play Now
                </Link>

                <div
                  className="items-center mx-auto mt-3 flex text-white "
                  style={{ fontSize: "40px" }}
                >
                  <FaArrowCircleLeft
                    onClick={scrollLeft}
                    className="cursor-pointer mx-2 transition-all duration-500 ease-in-out hover:bg-red-500 hover:rounded-full hover:animate-pulse"
                  />

                  <FaArrowCircleRight
                    onClick={scrollRight}
                    className="cursor-pointer mx-2 transition-all duration-500 ease-in-out hover:bg-red-500 hover:rounded-full hover:animate-pulse"
                  />
                </div>
              </div>
            </div>

            {/* This is description for movie in mobile screen upto 1024px */}
            <div className="lg:hidden absolute bottom-4 text-white mx-4">
              <Typography
                variant="h1"
                component="h2"
                sx={{ fontSize: "1.5em", fontWeight: "bold" }}
              >
                {ele.original_name}
              </Typography>
              <Typography
                variant="h1"
                component="h2"
                sx={{ fontSize: "1.5em", fontWeight: "bold" }}
              >
                {ele.original_title}
              </Typography>
              <Typography
                className="text-neutral-300"
                sx={{ fontSize: "0.8em" ,
                  display: "-webkit-box",
                  WebkitLineClamp: 1,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  cursor:"pointer"
                }}
              >
                {ele.overview}
              </Typography>
              <div className="flex gap-2">
                <Typography sx={{ fontSize: "0.7em" }}>
                  Rating: {ele.vote_average}+
                </Typography>
                <Typography sx={{ fontSize: "0.7em" }}>
                  View: {ele.vote_count}
                </Typography>
              </div>
              <div className="flex justify-between">
                <Link
                 to={"/"+ele.media_type+"/"+ele.id}
                 className="bg-white text-black rounded mt-3 flex justify-center items-center px-3 py-2 font-normal transition-bg duration-300 hover:bg-neutral-400"
                 >
                  Play Now
                </Link>
                <div
                  className="lg:hidden items-center flex text-white  "
                  style={{ fontSize: "30px" }}
                >
                  <FaArrowCircleLeft onClick={scrollLeft} className="mx-2 " />
                  <FaArrowCircleRight onClick={scrollRight} className="mx-2" />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BannerHome;
