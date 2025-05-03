import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Card = ({ data, media_type }) => {
  const img = useSelector((state) => state.moviflix.imageUrl);
  const mediatype = data.media_type ?? media_type;


  return (
    <Link
      to={`/${mediatype}/${data.id}`}
      className="contrast-125 saturate-100 brightness-100 hover:border-2 hover:border hover:border-blue-500  shadow-2xl   block cursor-pointer w-full min-w-[250px] max-w-[250px] lg:min-w-[230px] lg:max-w-[230px] mt-5 ml-2 h-80 overflow-hidden  rounded relative"
    >
      {data.poster_path ? (
        <img src={img + data.poster_path} />
      ) : (
        <div className="flex justify-center items-center h-full capitalize bg-cyan-800 text-xl font-medium">No image Found</div>
      )}

      <div className="absolute bottom-0 w-full h-14 backdrop-blur-3xl px-3 font-medium hover:invert">
        <div className="cursor-text text-white text-ellipsis line-clamp-1 hover:invert">
          {data.name || data.title}
        </div>
        <div className="text-white flex justify-between">
          <div className=" cursor-text text-neutral-400">
            {data.first_air_date}
            {data.release_date}
          </div>
          <div className="cursor-text bg-slate-600 rounded-full px-1 font-medium">
            Rating : {Number(data.vote_average).toFixed(1)}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
