import React, { Component, useState } from 'react';
import { Box, Collapse, IconButton, Typography } from '@mui/material';
import { IoIosArrowDropright, IoIosArrowDropdown } from 'react-icons/io';
import './App.css';
import { createTheme,  ThemeProvider } from '@mui/material/styles';
import Stack from'@mui/material/Stack';

const Dropdown = ({ title,element }) => {
  const theme = createTheme({
   
    palette: {
      primary: {
        main: '#000000',
        darker: '#000000',
      },
    }
  });
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={theme}>
    <Box sx={{width:1, border:3, borderRadius: 2, maxWidth:700}}>
      <Stack direction='row' justifyContent="center" spacing={2} >
        <h1 className="fredoka" style={{fontSize:50}} >
          {title}
        </h1>
        <IconButton color='primary' className="icons2" onClick={handleClick}>
          {open ? < IoIosArrowDropdown/> : < IoIosArrowDropright/>}
        </IconButton>
      </Stack>
      <Collapse in={open}>
        {element}
      </Collapse>
    </Box>
    </ThemeProvider>
  );
};

export default Dropdown;