import { Box, Stack } from '@mui/material'
import React from 'react'
import {VideoCard,ChannelCard }from '../components/index'
import Loader from './Loader';

const Videos = ({ videos, direction }) => {
  if(!videos?.length) return <Loader />;
  console.log(videos)
  return (
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} /> }
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
}

export default Videos