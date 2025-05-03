import React from 'react'
import axios from 'axios'

const fetchDetails = async (category,endpoint) => {
  const response=await axios.get(`https://api.themoviedb.org/3/${category}/${endpoint}`, {
    params: {
      api_key: "0d50bc767391994a3e42ce9d3b9cdd10",
    },
  });
}

export default fetchDetails
