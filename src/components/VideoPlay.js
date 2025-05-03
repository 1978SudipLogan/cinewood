import React from 'react';
import { GiCancel } from "react-icons/gi";
import useVideo from '../hooks/useVideo';

const VideoPlay = ({ data, close, media_type }) => {
  const { video } = useVideo(media_type, data.id);
  console.log("video data: ", video);

  return (
    <section className="fixed inset-0 z-40 bg-neutral-700 bg-opacity-70 flex justify-center items-center px-4">
      <div className="relative w-full max-w-5xl aspect-video bg-black rounded-lg overflow-hidden shadow-lg">

        {/* Close Button */}
        <button
          onClick={close}
          className="absolute top-2 right-0 text-white hover:text-red-400 transition-all duration-200 z-50"
        >
          <GiCancel className="text-3xl" />
        </button>

        {/* Video Iframe */}
        {video?.results?.[0]?.key ? (
          <iframe
            src={`https://www.youtube.com/embed/${video.results[0].key}`}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="w-full h-full"
            title="Video Player"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white text-lg">
            No video available
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoPlay;
