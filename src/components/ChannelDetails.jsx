import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FetchFromApi } from '../utils/FetchFromApi'
import { Box } from '@mui/material';
import {ChannelCard,Videos } from './index'
const ChannelDetails = () => {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState(null);
  const {id}= useParams();

  useEffect(()=>{
    const fetchResults = async ()=>{

    const data = await  FetchFromApi(`channels?part=snippet&id=${id}`)
      setChannelDetail(data?.items[0]);

    const videoData = await  FetchFromApi(`search?channelId=${id}&part=snippet&order=date`)
      setVideos(videoData?.items);
    }
fetchResults();

},[id])
  return (
    <Box minHeight="95vh">
<Box>
<div style={{
  background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(20,168,130,1) 1%, rgba(5,158,159,1) 100%, rgba(0,212,255,1) 100%)',
  zIndex:10,
  height:'300px'
}} 
/>
<ChannelCard channelDetail={channelDetail}   marginTop="-110px"/>
  
</Box>

<Box display="flex" p="2">
  <Box sx={{mr:{sm:'100px'}}}/>
<Videos videos={videos} />
 
</Box>
    </Box>
  )
}

export default ChannelDetails