import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import useFetch from '../hooks/useFetch';
import useCredits from '../hooks/useCredits';
import useSimilar from '../hooks/useSimilar';
import useRecommended from '../hooks/useRecommended';
import VideoPlay from '../components/VideoPlay';

const DetailsPage = () => {
  const[playVideo,setPlayVideo]=useState(false);
  const[playVideoId,setPlayVideoId]=useState("");
  const param = useParams();
  const { data, trendingImage } = useFetch(param.explore, param.id);
  const { member, memberImage } = useCredits(param.explore, param.id);
  const { similar, similarImage } = useSimilar(param.explore, param.id);
  const{recommend,recommendImage}=useRecommended(param.explore,param.id)
  

  const handleVideo=(data)=>{
    setPlayVideoId(data)
    setPlayVideo(true)
  }

  return (
    <div className="text-white relative w-full min-h-screen bg-black">
      {/* BACKDROP */}
      <div className="relative w-full h-[60vh]">
        <img
          src={trendingImage + data?.backdrop_path}
          alt=""
          className="w-full h-full object-cover contrast-125 saturate-100 brightness-100"
        />
        <div className="absolute inset-0 bg-black opacity-60" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 -mt-48 px-4 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* POSTER */}
          <div className="relative w-full max-w-xs mx-auto lg:mx-0">
            <img
              src={trendingImage + data?.poster_path}
              alt=""
              className="w-full h-auto rounded border"
            />
            <button onClick={()=>handleVideo(data)} className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white text-black font-medium py-2 px-4 rounded ">
              Play Now
            </button>
          </div>

          {/* DETAILS */}
          <div className="flex-1 mt-10 lg:mt-0">
            <p className="text-3xl font-semibold">
              {data?.original_title || data?.original_name}
            </p>
            <p className="text-neutral-400 mt-1">{data?.tagline}</p>
            <hr className="my-4 border-neutral-700" />

            <div className="flex flex-wrap gap-4 text-neutral-300">
              <span>Rating: {Number(data.vote_average).toFixed(1)}+</span>
              <span>Views: {data.vote_count}</span>
              <span>Runtime: {data.runtime}min</span>
            </div>

            <hr className="my-4 border-neutral-700" />
            <p className="text-2xl font-medium">Overview</p>
            <p className="text-cyan-200 mt-2">{data.overview}</p>

            <hr className="my-4 border-neutral-700" />
            <div className="flex flex-wrap gap-6 text-neutral-300">
              <span>Status: {data.status}</span>
              <span>Release Date: {data.release_date}</span>
              <span>Revenue: ₹{data.revenue?.toLocaleString()}</span>
            </div>

            <hr className="my-4 border-neutral-700" />
            <p className="font-normal text-lg">
              <span className="text-cyan-500 font-medium">Created by</span>: <span className="text-green-500">N/A</span>
            </p>

            {/* CAST */}
            <div className="mt-6">
              <p className="text-2xl font-medium">Cast:</p>
              <div className="flex flex-wrap gap-4 mt-4">
                {member?.cast?.length > 0 ? (
                  member.cast.slice(0, 50).map((ele, index) => (
                    <div key={index} className="w-20">
                      <img
                        src={
                          ele.profile_path
                            ? memberImage + ele.profile_path
                            : 'https://via.placeholder.com/80?text=No+Image'
                        }
                        alt={ele.name}
                        className="w-20 h-20 object-cover rounded-full bg-cyan-600"
                      />
                      <p className="text-xs text-center mt-1 break-words">{ele.name}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-neutral-400">No Cast Information Available</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* SIMILAR MOVIES */}
        <div className="mt-16">
          <p className="text-2xl font-medium mb-4">Similar Movies:</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {similar?.results?.length > 0 ? (
              similar.results.slice(0, 12).map((item, index) => (
                <div key={index} className="text-center">
                  <img
                    src={
                      item.poster_path
                        ? similarImage + item.poster_path
                        : 'https://via.placeholder.com/150x225?text=No+Image'
                    }
                    alt={item.title || item.name}
                    className="rounded-md shadow-md w-full h-80 object-cover"
                  />
                  <p className="text-sm mt-2 text-white truncate">
                    {item.title || item.name}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-neutral-400">No Similar Movies Found</p>
            )}
          </div>
        </div>
       
        {/* RECOMMENDED MOVIES */}
<div className="mt-16">
  <p className="text-2xl font-medium mb-4">Recommended Movies:</p>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
    {recommend?.results?.length > 0 ? (
      recommend.results.slice(0, 12).map((item, index) => (
        <div key={index} className="text-center">
          <img
            src={
              item.poster_path
                ? recommendImage + item.poster_path
                : 'https://via.placeholder.com/150x225?text=No+Image'
            }
            alt={item.title || item.name}
            className="rounded-md shadow-md w-full h-80 object-cover"
          />
          <p className="text-sm mt-2 text-white truncate">
            {item.title || item.name}
          </p>
        </div>
      ))
    ) : (
      <p className="text-neutral-400">No Recommended Movies Found</p>
    )}
  </div>
</div>
{
  playVideo && (
<VideoPlay data={playVideoId} close={()=>setPlayVideo(false)} media_type={param.explore}/>
  )
}

      </div>
    </div>
  );
};

export default DetailsPage;
