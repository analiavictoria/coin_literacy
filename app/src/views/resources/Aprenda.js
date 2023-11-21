import { Grid } from '@mui/material';
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import YouTube from 'react-youtube';

const Aprenda = () => {
  const videoOptions = {
    height: '250',
    width: '400',
    playerVars: {
      autoplay: 0,
    },
  };

  const BlockchainVideoId = '9JWCAbVTMlY'; 
  
  return (
    <MainCard title="Coin literacy explica:">

      <Grid container spacing={gridSpacing}>

        <Grid item xs={12} sm={6}>
          <SubCard title="Cripto 101: dando os primeiros passos">
          </SubCard>
        </Grid>

        <Grid item xs={12} sm={6}>
          <SubCard title="O que é blockchain?">
          </SubCard>
        </Grid>

        <Grid item xs={12} sm={6}>
          <SubCard title="Bitcoin: conheça a primeira criptomoeda">
            <YouTube videoId={BlockchainVideoId} opts={videoOptions} />
          </SubCard>
        </Grid>

        <Grid item xs={12} sm={6}>
          <SubCard title="Dicionário do cripto">
          </SubCard>
        </Grid>

      </Grid>  
    </MainCard>
  );
};

export default Aprenda;