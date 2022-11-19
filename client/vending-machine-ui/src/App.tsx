import { Box } from '@mui/material';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { mainContainer } from './App.styles';
import AppHeader from './components/Header';
import Login from './login/Page';
import Register from './register/Page';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <AppHeader userToken={null} />
          <Box sx={mainContainer}>
            <Routes>
              <Route path="/login" element={<Login/>} />
              <Route path="/register" element={<Register/>} />
            </Routes>
          </Box>
          </BrowserRouter>

    </div>
  );
}

export default App;
