import React from 'react'
import SideDrawer from './SideDrawer';
import { Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//components
import Notes from './notes/Notes';
import Archives from './archives/Archives';
import DeleteNotes from './delete/DeleteNotes';

const Home = () => {
  return (
    <Box style={{ display: 'flex' }}>
      <Router>
      <SideDrawer />
        <Routes>
          <Route path='/' element={<Notes />} />
          <Route path='/archive' element={<Archives />} />
          <Route path='/delete' element={<DeleteNotes />} />
        </Routes>
      </Router>
    </Box>
  )
}

export default Home;