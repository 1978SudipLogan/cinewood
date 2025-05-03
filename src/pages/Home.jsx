import React, { useRef, useEffect } from "react";
import BannerHome from "../components/BannerHome";
import HorizontalScroll from "../components/HorizontalScroll";

import { useSelector } from "react-redux";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

import {
  setBannerData,
  setNowPlayingData,
  setPopularData,
  setTopRatedData,
  setUpcomingData,
  setOnTheAirData,
  setPopularTvData,
  setTopRatedTvData,
} from "../store/moviflixSlice";

import { useDispatch } from "react-redux";
import fetchApi from "../hooks/fetchApi";

const Home = () => {
  const trendingData = useSelector((state) => state.moviflix.bannerData);
  const trendingImage = useSelector((state) => state.moviflix.imageUrl);

  const nowPlayingData = useSelector((state) => state.moviflix.nowPlayingData);

  const popularData = useSelector((state) => state.moviflix.popularData);

  const topRatedData = useSelector((state) => state.moviflix.topRatedData);

  const upcomingData = useSelector((state) => state.moviflix.upcomingData);

  const ontheairData = useSelector((state) => state.moviflix.ontheairData);

  const popularTvData = useSelector((state) => state.moviflix.popularTvData);

  const topRatedTvData = useSelector((state) => state.moviflix.topRatedTvData);

  const dispatch = useDispatch();

  useEffect(() => {
    fetchApi("movie", "now_playing", setNowPlayingData, dispatch);
    fetchApi("movie", "popular", setPopularData, dispatch);
    fetchApi("movie", "top_rated", setTopRatedData, dispatch);
    fetchApi("movie", "upcoming", setUpcomingData, dispatch);
    fetchApi("tv", "on_the_air", setOnTheAirData, dispatch);
    fetchApi("tv", "popular", setPopularTvData, dispatch);
    fetchApi("tv", "top_rated", setTopRatedTvData, dispatch);
  }, []);

  return (
    <div>
      <BannerHome />
      <HorizontalScroll
        trendingData={trendingData}
        trendingImage={trendingImage}
        heading={"Trending Show"}
      />
      <HorizontalScroll
        trendingData={nowPlayingData}
        trendingImage={trendingImage}
        heading={"Now Playing"}
        media_type={"movie"}
      />
      <HorizontalScroll
        trendingData={popularData}
        trendingImage={trendingImage}
        heading={"Popular"}
        media_type={"movie"}
      />
      <HorizontalScroll
        trendingData={topRatedData}
        trendingImage={trendingImage}
        heading={"Top Rated"}
        media_type={"movie"}
      />
      <HorizontalScroll
        trendingData={upcomingData}
        trendingImage={trendingImage}
        heading={"Upcoming"}
        media_type={"movie"}
      />
      <HorizontalScroll
        trendingData={ontheairData}
        trendingImage={trendingImage}
        heading={"On The Air"}
        media_type={"tv"}
      />
      <HorizontalScroll
        trendingData={popularTvData}
        trendingImage={trendingImage}
        heading={"Popular TV Show"}
        media_type={"tv"}
      />
      <HorizontalScroll
        trendingData={topRatedTvData}
        trendingImage={trendingImage}
        heading={"Top Rated TV Show"}
        media_type={"tv"}
      />
    </div>
  );
};

export default Home;
