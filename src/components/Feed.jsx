import { Box, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {Sidebar,Videos} from './index'
import { FetchFromApi } from '../utils/FetchFromApi'
const Feed = () => {

  const [selectedCategory, setSelectedCategory]= useState('New')
const [videos, setVideos]= useState([])

useEffect(() => {
  const fetchData = async () => {
    try {
      const data = await FetchFromApi(`search?part=snippet&q=${selectedCategory}`);
      setVideos(data.items)
      // console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchData();
}, [selectedCategory]);

  return (
    <Stack sx={{flexDirection:{
      sx:"column", md:'row'}}}>
<Box sx={{height:{sx:"auto", md:'92vh'}, borderRight:'1px solid #3d3d3d', px:{sx:0, md:2}}}>
  <Sidebar selectedCategory ={selectedCategory}
  setSelectedCategory ={setSelectedCategory}
  />
<Typography className='copyright' variant='body2' sx={{mt:1.5, color:'#fff'}}>
  copyright 2022 developerrabbil
</Typography>
</Box>
<Box  sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
    {selectedCategory} <span style={{color:'blue'}}>Videos</span>
  </Typography>
  <Videos videos={videos} /> 
</Box>


    </Stack>
  )
}

export default Feed