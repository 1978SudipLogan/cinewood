import axios from "axios";
import { useEffect, useState } from "react";

const useVideo = (category, endpoint) => {
  const [video, setVideo] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/${category}/${endpoint}/videos`,
        {
          params: {
            api_key: '0d50bc767391994a3e42ce9d3b9cdd10',
          },
        }
      );
      console.log("video : ", response.data);
      setVideo(response.data); // ✅ Set the video data
    } catch (error) {
      console.log("Error : ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [category, endpoint]);

  return { video };
};

export default useVideo;
