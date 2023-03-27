import React from 'react';
import Dropdown from '../Dropdown';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Header from '../Header';
import CityCatBox from './CityCatBox';

const HomeB = () => {
  return (
    <>
    <Header/>
    <Box display='flex' justifyContent="center" sx={{ bgcolor: '#fbf4e2', pt: 8, pb: 6,}} minHeight='calc(69vh)' mt={0}>
        <Container align="center">
        <Stack direction="column" spacing={4} alignItems="center" justifyContent="center">
            <Dropdown className="fredoka" title="CITY CATS" element={<CityCatBox/>} />
            <Dropdown title="Dropdown 2" element={<CityCatBox/>}/>
        </Stack>
        </Container>
    </Box>
    </>
  );
};

export default HomeB;