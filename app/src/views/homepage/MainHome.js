import React from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { Typography, Button, Grid, Divider } from '@mui/material';
=======
import {Link} from 'react-router-dom';
import {
  Typography,
  Button,
  Grid,
  Divider,
} from '@mui/material';
>>>>>>> 2d27298a3149859f70b2ae9a0ba41ae43054c53a
import Navbar from './Navbar';
import AboutSection from './AboutSection';
import CardsSection from './CardsSection';
import ToolsSection from './ToolsSection';
import Footer from './Footer';
import blockchain from 'assets/images/home/data.jpg';

<<<<<<< HEAD
const LandingPage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
=======

const LandingPage = () => {
  return (
    <div> 
    
     <Navbar></Navbar>
>>>>>>> 2d27298a3149859f70b2ae9a0ba41ae43054c53a

      <coingecko-coin-price-marquee-widget
        coin-ids="bitcoin,eos,ethereum,ripple,tether,binancecoin,solana,dogecoin,shiba-inu"
        currency="brl"
        background-color="#ffffff"
        locale="pt"
<<<<<<< HEAD
        style={{ flexShrink: 0 }}
      ></coingecko-coin-price-marquee-widget>

      <Grid container id="home" style={{ flex: '1 0 auto', minHeight: '100vh' }}>
        <Grid item xs={12} style={{ position: 'relative', minHeight: '100vh' }}>
          <div style={{ height: '100%' }}>
            <img
              src={blockchain}
              alt="blockchain"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
=======
      ></coingecko-coin-price-marquee-widget>

      <Grid container id="home">
        <Grid item xs={12} style={{ position: 'relative' }}>
          <div>
            <img
              src={blockchain}
              alt="blockchain"
              style={{ width: '100%',  maxHeight: '50rem', backgroundSize: '100% 100%' }}
>>>>>>> 2d27298a3149859f70b2ae9a0ba41ae43054c53a
            />
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
<<<<<<< HEAD
                height: '100%',
=======
                height: '99%',
>>>>>>> 2d27298a3149859f70b2ae9a0ba41ae43054c53a
                background: 'rgba(0, 0, 0, 0.6)', // Black with adjustable opacity
                zIndex: 2,
              }}
            ></div>
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                textAlign: 'center',
                zIndex: 3,
              }}
            >
<<<<<<< HEAD
              <Typography variant="h1" gutterBottom color={'white'} sx={{ fontSize: [20, 40, 40, 60] }}>
                Faça parte da revolução financeira
              </Typography>
              <Typography variant="h4" color={'white'} sx={{ fontSize: [16, 20, 30, 40] }}>
                Conheça o ecossistema cripto.
              </Typography>
              <Typography variant="h5" paragraph color={'white'} sx={{ fontSize: [14, 20, 25, 35] }}>
                Aprenda, explore e atualize-se!
              </Typography>
              <Button
                sx={{ fontSize: 20, mt:'3%' }}
=======
              <Typography variant="h2" gutterBottom color={'white'} sx={{fontSize: [14, 16, 18, 20]}}>
                Faça parte da revolução financeira
              </Typography>
              <Typography variant="h4" color={'white'} sx={{fontSize: [14, 16, 18, 20]}}>
                Conheça o ecossistema cripto.
              </Typography>
              <Typography variant="subtitle1" paragraph color={'white'} sx={{fontSize: [14, 16, 18, 20]}}>
                Aprenda, explore e atualize-se!
              </Typography>
              <Button
>>>>>>> 2d27298a3149859f70b2ae9a0ba41ae43054c53a
                variant="contained"
                color="secondary"
                component={Link}
                to="/cadastro"
              >
                Começar
              </Button>
            </div>
          </div>
        </Grid>
      </Grid>
<<<<<<< HEAD
      <Divider />
      <div style={{ flex: '1 0 auto', minHeight: '100vh' }}>
        <CardsSection />
      </div>
      <Divider />
      <div style={{ flex: '1 0 auto', minHeight: '100vh' }}>
        <AboutSection />
      </div>
      <Divider />
      <div style={{ flex: '1 0 auto', minHeight: '100vh' }}>
        <ToolsSection />
      </div>
      <Footer style={{ flexShrink: 0 }} />
=======
      <Divider></Divider>
      <CardsSection></CardsSection>
      <Divider></Divider>
      <AboutSection></AboutSection>
      <Divider></Divider>
      <ToolsSection></ToolsSection>
      <Footer></Footer>
>>>>>>> 2d27298a3149859f70b2ae9a0ba41ae43054c53a
    </div>
  );
};

export default LandingPage;
