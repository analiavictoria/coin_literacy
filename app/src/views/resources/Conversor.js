import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FormControl, MenuItem, TextField, Typography, Box, InputAdornment } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import BannerImage from './Coin Literacy Conversor.png'


function Conversor() {
  const [cripto, setCripto] = useState('bitcoin');
  const [fiat, setFiat] = useState('brl');
  const [valorCripto, setValorCripto] = useState(0);
  const [valorFiat, setValorFiat] = useState(0);

  useEffect(() => {
    // Função para buscar taxas de câmbio
    const fetchExchangeRates = async () => {
      try {
        const response = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${cripto}&vs_currencies=${fiat}`);

        const exchangeRate = response.data[cripto][fiat];
        const convertedValue = valorCripto * exchangeRate;

        setValorFiat(convertedValue);
      } catch (error) {
        console.error('Erro ao buscar taxas de câmbio', error);
      }
    };

    if (cripto && fiat) {
      fetchExchangeRates();
    }
  }, [cripto, fiat, valorCripto]);

  
  return (
    <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '35ch'},
    }}
    >
      <MainCard>
      <img 
        src={BannerImage} 
        alt="Banner Criptomoedas"
        style={{ width: '100%', marginBottom: '16px' }} 
        >
        </img>
        <Typography variant='h2' m={2} color={'primary'}>Desbrave o mundo das criptomoedas com facilidade! </Typography>
        <Typography variant="h5" m={2}>     
        Nosso conversor simplifica a conversão entre diferentes moedas, uma ferramenta essencial para quem busca acompanhar as tendências do mercado e realizar transações com praticidade e segurança. Experimente!
      </Typography>

      <FormControl>
          <TextField select label="Criptomoeda" value={cripto} onChange={(e) => setCripto(e.target.value)}>
            <MenuItem value="bitcoin">Bitcoin (BTC)</MenuItem>
            <MenuItem value="ethereum">Ethereum (ETH)</MenuItem>
            <MenuItem value="binancecoin">Binance Coin (BNB)</MenuItem>
            <MenuItem value="cardano">Cardano (ADA)</MenuItem>
            <MenuItem value="solana">Solana (SOL)</MenuItem>
            <MenuItem value="ripple">XRP (XRP)</MenuItem>
            <MenuItem value="polkadot">Polkadot (DOT)</MenuItem>
            <MenuItem value="dogecoin">Dogecoin (DOGE)</MenuItem>
            <MenuItem value="chainlink">Chainlink (LINK)</MenuItem>
            <MenuItem value="litecoin">Litecoin (LTC)</MenuItem>
          </TextField>
        </FormControl>


        <FormControl>
          <TextField select label="Moeda fiduciária*" value={fiat} onChange={(e) => setFiat(e.target.value)}>
          <MenuItem value="brl"> Real Brasileiro (BRL)</MenuItem>
            <MenuItem value="usd"> Dólar Americano (USD)</MenuItem>
            <MenuItem value="eur">Euro (EUR)</MenuItem>
            <MenuItem value="gbp">Libra Esterlina (GBP)</MenuItem>
            <MenuItem value="jpy">Iene Japonês (JPY)</MenuItem>
            <MenuItem value="chf">Franco Suíço (CHF)</MenuItem>
            <MenuItem value="cad">Dólar Canadense (CAD)</MenuItem>
            <MenuItem value="aud">Dólar Australiano (AUD)</MenuItem>
            <MenuItem value="cny">Yuan Chinês (CNY)</MenuItem>
            <MenuItem value="sgd">Dólar de Cingapura (SGD)</MenuItem>
            <MenuItem value="mxn">Peso Mexicano (MXN)</MenuItem>
          </TextField>
        </FormControl >

        <TextField label="Valor em Criptomoeda" type="number" value={valorCripto} onChange={(e) => setValorCripto(e.target.value)}  InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }} />
        <TextField label="Valor em Moeda Fiduciária" type="number" value={valorFiat} InputProps={{
           readOnly: true, startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }} />
      </MainCard>
      </Box>
  );
}
export default Conversor;
