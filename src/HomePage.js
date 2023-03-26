import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import catlogo from './assets/catlogo.png';

const HomePage = () => {
  const navigate = useNavigate();
  
  const handleAClick = () => {
    navigate('/applicationA');
  };
  const handleBClick = () => {
    navigate('/applicationB');
  };
  

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="calc(100vh - 120px)">
        <img src={catlogo} className="App-logo" alt="logo" />
        <Typography variant="h2">Welcome to CatZoo!</Typography>
          <Stack direction="row" spacing={2}>
              <Button variant="contained" onClick={handleAClick}>Application A</Button>
              <Button variant="contained" onClick={handleBClick}>Application B</Button>
          </Stack>
        
    </Box>
  );
};

export default HomePage;