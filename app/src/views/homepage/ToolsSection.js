import React, { useState } from 'react';
import { Grid, Typography, Box } from '@mui/material';
import BitcoinSVG from './Bitcoin.svg';
import WalletSVG from './E-Wallet.svg';
import RevenueSVG from './Revenue.svg';

const BitcoinIcon = ({ isHovered }) => (
  <img src={BitcoinSVG} alt="Bitcoin Icon" style={{ width: 300, height: 300, transform: isHovered ? 'scale(1.1)' : 'scale(1)' }} />
);

const WalletIcon = ({ isHovered }) => (
  <img src={ WalletSVG} alt="e-wallet Icon" style={{ width: 300, height: 300, transform: isHovered ? 'scale(1.1)' : 'scale(1)' }} />
);

const RevenueIcon = ({ isHovered }) => (
  <img src={RevenueSVG} alt="Revenue Icon" style={{ width: 300, height: 300, transform: isHovered ? 'scale(1.1)' : 'scale(1)' }} />
);

const ToolsSection = () => {

  const [hoveredItem, setHoveredItem] = useState(null);

  const sectionItems = [
    {
      id: 1,
      icon: <BitcoinIcon isHovered={hoveredItem === 1} />,
      title:'Explore',
      sentence: 'Você já se questionou sobre o fascinante mundo das criptomoedas? Bem, aperte o cinto porque estamos prestes embarcar nesta emocionante montanha-russa de informações!',
    },
    {
      id: 2,
      icon: <RevenueIcon isHovered={hoveredItem === 2}/>,
      title: 'Informe-se',
      sentence: 'Antes de entrar no mercado cripto, é importante entender o básico. É crucial fazer o seu dever de casa para tomar decisões informadas. Comece familiarizando-se com termos e bom estudo!',
    },
    {
      id: 3,
      icon: <WalletIcon isHovered={hoveredItem === 3}  />,
      title:'Decida',
      sentence: 'Você está pronto para mergulhar no mundo das criptomoedas? Depois de entender o básico, você estará ansioso para decidir se é certo para você. Chegou a hora de explorar a infinidade de criptomoedas disponíveis. Aproveite as oportunidades e previna-se dos riscos!',
    },
  ];

  return (
    <Box sx={{ flexGrow: 1, minHeight: '400px', py: '10%' }} id='tools'>
      <Grid container sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
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
            <Typography variant='h1' margin={3}>
              {item.title}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              {item.sentence}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ToolsSection;
