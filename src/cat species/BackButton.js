import React, { useState } from 'react';
import { Box, Collapse, IconButton, Typography } from '@mui/material';
import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const Dropdown = () => {
    const navigate = useNavigate();
  
    const handleClick = () => {
      navigate(-1);
    };

  return (
    <Button variant="contained" onClick={handleClick}>Back</Button>
  );
};

export default Dropdown;