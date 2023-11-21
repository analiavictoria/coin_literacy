import { Grid } from '@mui/material';
import { gridSpacing } from 'store/constant';
import SubCard from 'ui-component/cards/SubCard';


// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {

  return (
      <>
        <Grid container spacing={gridSpacing}>
                    
          <Grid item xs={12} sm={6}>
            <SubCard title="Lista de Moedas">
              <coingecko-coin-list-widget coin-ids="bitcoin,eos,ethereum,litecoin,ripple,tether,binancecoin,solana,usd-coin,staked-ether,cardano,dogecoin,tron,polkadot,dai,litecoin,shiba-inu,matic-network,avalanche-2,chainlink" currency="brl" locale="pt" width="400" />
            </SubCard>
          </Grid> 

          <Grid item xs={12} sm={6}>
            <SubCard>
                <coingecko-coin-compare-chart-widget coin-ids="bitcoin,ethereum,eos,ripple,litecoin" currency="usd" locale="pt" />
            </SubCard>
          </Grid>  

          <Grid item>
            <SubCard>
            </SubCard>
          </Grid>

        </Grid>
      </>
  );
};

export default Dashboard;
