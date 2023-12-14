import React from 'react';
import { Grid } from '@mui/material';
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

  return (
    <MainCard title="Coin literacy explica:">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12} sm={6} lg={4}>
          <Crypto101 />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <Glossary />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <SubCard title="Bitcoin: conheça a primeira criptomoeda">
            <YouTube videoId={blockchainVideoId} opts={videoOptions} />
          </SubCard>
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default Aprenda;
