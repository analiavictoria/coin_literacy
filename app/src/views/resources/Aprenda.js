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
    height: '250',
    width: '400',
    playerVars: {
      autoplay: 0,
    },
  };

  const blockchainVideoId = '9JWCAbVTMlY';
  const bitcoinVideoId = '7avdgcSATXw';

  const cardStyle = {
    // Set a fixed height or minHeight for the cards
    maxHeight: '100%', // Adjust the height as needed
  };

  return (
    <MainCard>
      <Typography
          noWrap
          variant="h1"
          color="primary"
          align="center"
          sx={{ flex: 1, my:1 }}
        >
         Coin Literacy explica
        </Typography>
        <Divider sx={{m:2}}></Divider>
      <Grid container spacing={gridSpacing} >
        <Grid item xs={12} sm={6} lg={6} style={cardStyle}>
          <Crypto101 />
        </Grid>
        <Grid item xs={12} sm={6} lg={6} style={cardStyle}>
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
