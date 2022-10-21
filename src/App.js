import React from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Home from './pages/Home';
import ExerciseDetail from './pages/ExerciseDetail';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
const App = () => {
  return (
    
    <Box width="25rem" sx={{width: { xl:'1488px'}}} m="auto">
      <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/exercise/:id' element={<ExerciseDetail />} />
    </Routes>
    <Footer />
    </Box>

  )
}

export default App