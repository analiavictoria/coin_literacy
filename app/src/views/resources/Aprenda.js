import React from 'react';
import { Grid, Typography, Divider } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import SubCard from 'ui-component/cards/SubCard';
import YouTube from 'react-youtube';
import Crypto101 from './Crypto101';
import Glossary from './Glossary';
import { gridSpacing } from 'store/constant';

const Aprenda = () => {
  const videoOptions = {
<<<<<<< HEAD
    height: '400px',
    width: '100%',
=======
    height: '250',
    width: '400',
>>>>>>> 2d27298a3149859f70b2ae9a0ba41ae43054c53a
    playerVars: {
      autoplay: 0,
    },
  };

  const blockchainVideoId = '9JWCAbVTMlY';
  const bitcoinVideoId = '7avdgcSATXw';

<<<<<<< HEAD
=======
  const cardStyle = {
    // Set a fixed height or minHeight for the cards
    maxHeight: '100%', // Adjust the height as needed
  };

>>>>>>> 2d27298a3149859f70b2ae9a0ba41ae43054c53a
  return (
    <MainCard>
      <Typography
          noWrap
<<<<<<< HEAD
          variant="h2"
=======
          variant="h1"
>>>>>>> 2d27298a3149859f70b2ae9a0ba41ae43054c53a
          color="primary"
          align="center"
          sx={{ flex: 1, my:1 }}
        >
         Coin Literacy explica
        </Typography>
        <Divider sx={{m:2}}></Divider>
      <Grid container spacing={gridSpacing} >
<<<<<<< HEAD
        <Grid item xs={12} sm={6} lg={6} >
          <Crypto101 />
        </Grid>
        <Grid item xs={12} sm={6} lg={6} >
=======
        <Grid item xs={12} sm={6} lg={6} style={cardStyle}>
          <Crypto101 />
        </Grid>
        <Grid item xs={12} sm={6} lg={6} style={cardStyle}>
>>>>>>> 2d27298a3149859f70b2ae9a0ba41ae43054c53a
          <Glossary />
        </Grid>

        <Grid item xs={12} sm={6} lg={6}>
          <SubCard title="O que é Blockchain? Conheça essa tecnologia disruptiva" fixedHeight={300}>
            <YouTube videoId={blockchainVideoId} opts={videoOptions} />
          </SubCard>
        </Grid>
        <Grid item xs={12} sm={6} lg={6}>
          <SubCard title="Bitcoin: conheça a primeira criptomoeda" fixedHeight={300}>
            <YouTube videoId={bitcoinVideoId} opts={videoOptions} />
          </SubCard>
        </Grid>
       
      </Grid>
    </MainCard>
  );
};

export default Aprenda;
