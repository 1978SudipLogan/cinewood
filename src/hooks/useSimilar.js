import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const useSimilar = (category, endpoint) => {
  const [similar, setSimilar] = useState(null);
  const similarImage = useSelector((state) => state.moviflix.imageUrl);

  const fetchSimilar = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/${category}/${endpoint}/similar`,
        {
          params: {
            api_key: '0d50bc767391994a3e42ce9d3b9cdd10',
          },
        }
      );
     
      setSimilar(response.data);
    } catch (error) {
      console.log('Error:', error);
    }
  };

  useEffect(() => {
    fetchSimilar();
  }, [category, endpoint]);

  return {similar, similarImage};
};

export default useSimilar;
