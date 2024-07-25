import { Grid, Typography } from '@mui/material';
import { gridSpacing } from 'store/constant';
import SubCard from 'ui-component/cards/SubCard';
import CryptoList from './CryptoList';
import CryptoComparison from './CryptoComparison';
import CryptoMarket from  './CryptoMarketTable'

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {

  return (
      <>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12}>
            <Grid container spacing={gridSpacing}>
            {/*lg= large screens, md=medium screens, sm=: small screens, xs=: extra-small screens*/}       
            <Grid item  lg={12} md={12} sm={12} xs={12}>
                <SubCard>
<<<<<<< HEAD
                  <Typography variant='h3' marginBottom={5} color="secondary" textAlign={'center'}>Visão Geral do Mercado Crypto - Top 10</Typography>
=======
                  <Typography variant='h2' marginBottom={5} color="secondary" textAlign={'center'}>Visão Geral do Mercado Crypto</Typography>
>>>>>>> 2d27298a3149859f70b2ae9a0ba41ae43054c53a
                  <CryptoMarket></CryptoMarket>
                </SubCard>
              </Grid>  
              <Grid item lg={6} md={6} sm={6} xs={12}>
                <SubCard>
<<<<<<< HEAD
                  <Typography variant='h3' marginBottom={5} color="secondary">Cotação de criptomoedas</Typography>
=======
                  <Typography variant='h2' marginBottom={5} color="secondary">Cotação de criptomoedas</Typography>
>>>>>>> 2d27298a3149859f70b2ae9a0ba41ae43054c53a
                <CryptoList></CryptoList>
                </SubCard>
              </Grid>
              
              <Grid item lg={6} md={6} sm={6} xs={12}>
                <SubCard>
<<<<<<< HEAD
                <Typography variant='h3' marginBottom={5} color="secondary">Comparação de Preços entre Criptomoedas</Typography>
=======
                <Typography variant='h2' marginBottom={5} color="secondary">Comparação de Preços entre Criptomoedas</Typography>
>>>>>>> 2d27298a3149859f70b2ae9a0ba41ae43054c53a
                  <CryptoComparison></CryptoComparison>
                </SubCard>
              </Grid>  
              
            </Grid>
          </Grid> 

        </Grid>
      </>
  );
};

export default Dashboard;
