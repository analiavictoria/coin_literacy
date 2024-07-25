import React from 'react';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';
import Logo from 'ui-component/Logo';


const Footer = () => {
  return (
    <AppBar position="static" color="primary" >
      <Container>
        <Toolbar sx={{flexDirection:'row', justifyContent:'space-between'}}>
        <Logo/>
          <Typography variant="body1" color="inherit">
            © {new Date().getFullYear()} Coin Literacy
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Footer;
