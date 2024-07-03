import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';
import './Appbar2.css';

const Appbar2 = () => {
  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "blue" }}>
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ fontFamily: 'Cursive' ,textAlign:'center'}}>
            Products
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Appbar2;