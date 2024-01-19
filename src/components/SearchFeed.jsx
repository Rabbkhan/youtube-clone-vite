import { Box,  Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {Videos} from './index'
import { FetchFromApi } from '../utils/FetchFromApi'
import { useParams } from 'react-router-dom'
const SearchFeed = () => {
const [videos, setVideos]= useState([])
const{searchTerm} = useParams()
useEffect(() => {
  const fetchData = async () => {
    try {
      const data = await FetchFromApi(`search?part=snippet&q=${searchTerm}`);
      setVideos(data.items)
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchData();
}, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
    <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
Search Results for: <span style={{color:'blue'}}>{searchTerm}</span>
</Typography>
<Videos videos={videos} /> 
</Box>
  )
}

export default SearchFeed