import React, { useState } from 'react';
import { Grid, Typography, Box } from '@mui/material';
import BitcoinSVG from './Bitcoin.svg';
import WalletSVG from './E-Wallet.svg';
import RevenueSVG from './Revenue.svg';
<<<<<<< HEAD
import { iconPropTypes } from './propTypes'; 


const BitcoinIcon = ({ isHovered }) => (
  <img src={BitcoinSVG} alt="Bitcoin Icon" style={{ width: 350, height: 350, transform: isHovered ? 'scale(1.1)' : 'scale(1)' }} />
);

BitcoinIcon.propTypes = iconPropTypes;

const RevenueIcon = ({ isHovered }) => (
  <img src={RevenueSVG} alt="Revenue Icon" style={{ width: 350, height: 350, transform: isHovered ? 'scale(1.1)' : 'scale(1)' }} />
);

RevenueIcon.propTypes = iconPropTypes;

const WalletIcon = ({ isHovered }) => (
  <img src={WalletSVG} alt="e-wallet Icon" style={{ width: 350, height: 350, transform: isHovered ? 'scale(1.1)' : 'scale(1)' }} />
);

WalletIcon.propTypes = iconPropTypes;

const CardsSection = () => {
=======

const BitcoinIcon = ({ isHovered }) => (
  <img src={BitcoinSVG} alt="Bitcoin Icon" style={{ width: 250, height: 250, transform: isHovered ? 'scale(1.1)' : 'scale(1)' }} />
);

const WalletIcon = ({ isHovered }) => (
  <img src={ WalletSVG} alt="e-wallet Icon" style={{ width: 250, height: 250, transform: isHovered ? 'scale(1.1)' : 'scale(1)' }} />
);

const RevenueIcon = ({ isHovered }) => (
  <img src={RevenueSVG} alt="Revenue Icon" style={{ width: 250, height: 250, transform: isHovered ? 'scale(1.1)' : 'scale(1)' }} />
);

const ToolsSection = () => {
>>>>>>> 2d27298a3149859f70b2ae9a0ba41ae43054c53a

  const [hoveredItem, setHoveredItem] = useState(null);

  const sectionItems = [
    {
      id: 1,
      icon: <BitcoinIcon isHovered={hoveredItem === 1} />,
<<<<<<< HEAD
      title: 'Explore',
=======
      title:'Explore',
>>>>>>> 2d27298a3149859f70b2ae9a0ba41ae43054c53a
      sentence: 'Você já se questionou sobre o fascinante mundo das criptomoedas? Bem, aperte o cinto porque estamos prestes embarcar nesta emocionante montanha-russa de informações!',
    },
    {
      id: 2,
<<<<<<< HEAD
      icon: <RevenueIcon isHovered={hoveredItem === 2} />,
=======
      icon: <RevenueIcon isHovered={hoveredItem === 2}/>,
>>>>>>> 2d27298a3149859f70b2ae9a0ba41ae43054c53a
      title: 'Informe-se',
      sentence: 'Antes de entrar no mercado cripto, é importante entender o básico. É crucial fazer o seu dever de casa para tomar decisões informadas. Comece familiarizando-se com termos e bom estudo!',
    },
    {
      id: 3,
<<<<<<< HEAD
      icon: <WalletIcon isHovered={hoveredItem === 3} />,
      title: 'Decida',
=======
      icon: <WalletIcon isHovered={hoveredItem === 3}  />,
      title:'Decida',
>>>>>>> 2d27298a3149859f70b2ae9a0ba41ae43054c53a
      sentence: 'Você está pronto para mergulhar no mundo das criptomoedas? Depois de entender o básico, chegou a hora de explorar a infinidade de criptomoedas disponíveis. Aproveite as oportunidades e previna-se dos riscos!',
    },
  ];

<<<<<<< HEAD
 
  return (
    <Box sx={{ flexGrow: 1, py: '10%', minHeight: '300px', px: '3%' }} >
      <Grid container sx={{ display: 'flex', justifyContent: 'center', gap: 8 }}>
=======
  return (
    <Box sx={{ flexGrow: 1, py:'10%', minHeight: '300px', px:'3%'}} >
      <Grid container sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
>>>>>>> 2d27298a3149859f70b2ae9a0ba41ae43054c53a
        {sectionItems.map((item) => (
          <Grid
            item
            xs={12}
            md={3.5}
            minHeight={300}
            key={item.id}
            sx={{ textAlign: 'center' }}
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            {item.icon}
<<<<<<< HEAD
            <Typography variant='h2' margin={3}>
              {item.title}
            </Typography>
            <Typography variant="body2" gutterBottom>
=======
            <Typography variant='h1' margin={3}>
              {item.title}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
>>>>>>> 2d27298a3149859f70b2ae9a0ba41ae43054c53a
              {item.sentence}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

<<<<<<< HEAD
export default CardsSection;
=======
export default ToolsSection;
>>>>>>> 2d27298a3149859f70b2ae9a0ba41ae43054c53a
