import React from 'react';
import {Link} from 'react-router-dom';
import {
  Typography,
  Button,
  Grid,
  Divider,
} from '@mui/material';
import Navbar from './Navbar';
import AboutSection from './AboutSection';
import CardsSection from './CardsSection';
import ToolsSection from './ToolsSection';
import Footer from './Footer';
import blockchain from 'assets/images/home/data.jpg';


const LandingPage = () => {
  return (
    <div> 
    
     <Navbar></Navbar>

      <coingecko-coin-price-marquee-widget
        coin-ids="bitcoin,eos,ethereum,ripple,tether,binancecoin,solana,dogecoin,shiba-inu"
        currency="brl"
        background-color="#ffffff"
        locale="pt"
      ></coingecko-coin-price-marquee-widget>

      <Grid container id="home">
        <Grid item xs={12} style={{ position: 'relative' }}>
          <div>
            <img
              src={blockchain}
              alt="blockchain"
              style={{ width: '100%',  maxHeight: '50rem', backgroundSize: '100% 100%' }}
            />
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '99%',
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
      <Divider></Divider>
      <CardsSection></CardsSection>
      <Divider></Divider>
      <AboutSection></AboutSection>
      <Divider></Divider>
      <ToolsSection></ToolsSection>
      <Footer></Footer>
    </div>
  );
};

export default LandingPage;
