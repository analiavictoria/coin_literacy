import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FormControl, InputLabel, MenuItem, Select, TextField, Typography, Box } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBitcoin,
  faEthereum
  // Add cryptocurrency icons
} from '@fortawesome/free-brands-svg-icons';
import { Euro } from '@mui/icons-material';

function Conversor() {
  const [cripto, setCripto] = useState('bitcoin'); // Sets the default cryptocurrency
  const [fiat, setFiat] = useState('brl'); // Sets the default fiat currency
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
    <div>
      <MainCard>
        <Typography variant="h1" m={2}>
          Conversor de criptomoedas
        </Typography>

      <Box  component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}> 
      <FormControl>
          <InputLabel>Criptomoeda</InputLabel>
          <Select value={cripto} onChange={(e) => setCripto(e.target.value)}>
            <MenuItem value="bitcoin">
              <FontAwesomeIcon icon={faBitcoin} />
              Bitcoin (BTC)
            </MenuItem>
            <MenuItem value="ethereum">
              <FontAwesomeIcon icon={faEthereum} />
              Ethereum (ETH)
            </MenuItem>
            <MenuItem value="binancecoin">Binance Coin (BNB)</MenuItem>
            <MenuItem value="cardano">Cardano (ADA)</MenuItem>
            <MenuItem value="solana">Solana (SOL)</MenuItem>
            <MenuItem value="ripple">XRP (XRP)</MenuItem>
            <MenuItem value="polkadot">Polkadot (DOT)</MenuItem>
            <MenuItem value="dogecoin">Dogecoin (DOGE)</MenuItem>
            <MenuItem value="chainlink">Chainlink (LINK)</MenuItem>
            <MenuItem value="litecoin">Litecoin (LTC)</MenuItem>
          </Select>
        </FormControl>


        <FormControl>
          <InputLabel>Moeda Fiduciária</InputLabel>
          <Select value={fiat} onChange={(e) => setFiat(e.target.value)}>
            <MenuItem value="brl">Real Brasileiro (BRL)</MenuItem>
            <MenuItem value="usd">Dólar Americano (USD)</MenuItem>
            <MenuItem value="eur">
              <Euro /> Euro (EUR)
            </MenuItem>
            <MenuItem value="gbp">Libra Esterlina (GBP)</MenuItem>
            <MenuItem value="jpy">Iene Japonês (JPY)</MenuItem>
            <MenuItem value="chf">Franco Suíço (CHF)</MenuItem>
            <MenuItem value="cad">Dólar Canadense (CAD)</MenuItem>
            <MenuItem value="aud">Dólar Australiano (AUD)</MenuItem>
            <MenuItem value="cny">Yuan Chinês (CNY)</MenuItem>
            <MenuItem value="sgd">Dólar de Cingapura (SGD)</MenuItem>
            <MenuItem value="mxn">Peso Mexicano (MXN)</MenuItem>
          </Select>
        </FormControl >
        <TextField label="Valor em Criptomoeda" type="number" value={valorCripto} onChange={(e) => setValorCripto(e.target.value)} />
        <TextField label="Valor em Moeda Fiduciária" type="number" value={valorFiat} disabled />
      </Box>
      </MainCard>
    </div>
  );
}
export default Conversor;
