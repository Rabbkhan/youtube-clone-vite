import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Navbar, Feed, VideoDetails, ChannelDetails, SearchFeed } from './components'
import { Box } from '@mui/material'

const App = () => {
  return (
    <Box sx={{backgroundColor:"#000"}}>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<Feed/>} />
        <Route path='/video/:id'  element={<VideoDetails/>} />
        <Route path='/channel/:id'  element={<ChannelDetails/>} />
        <Route path='/search/:searchTerm'  element={<SearchFeed/>} />

      </Routes>
    </Router>
    
    </Box>
  )
}

export default App