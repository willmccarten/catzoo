import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import {Link} from 'react-router-dom';
import { createTheme,  ThemeProvider } from '@mui/material/styles';
import {BsFillHouseFill} from 'react-icons/bs';
import './App.css';

const styles={
  title: {
    flexGrow: 1,
    alignItems: 'center',
  },
};

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#f0c199',
      darker: '#000000',
    },
    neutral: {
      main: '#000000',
      contrastText: '#fff',
    },
  },
  minHeight:'calc(100vh - 89px)'
});
function Header(props)  {
  const classes = props;
  return (
    <ThemeProvider theme={theme}>
    <AppBar className="App-header" position="static">
      <Toolbar disableGutters>
        <IconButton className="icons" component={Link} to="/" size='large' sx={{display: 'flex'}}>
          <BsFillHouseFill/>
        </IconButton>
        <Typography variant="h3" justifyContent="center" sx={{flexGrow:1, display:'flex', fontWeight:700}}>
          CATZOO
        </Typography>
      </Toolbar>
    </AppBar>
    </ThemeProvider>
  );
};

export default Header;