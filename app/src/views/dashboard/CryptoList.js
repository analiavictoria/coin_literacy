import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CryptoCard from './CryptoCard';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Grid, Paper} from '@mui/material';

const CryptoList = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [selectedCurrency, setSelectedCurrency] = useState('brl');

  const currencies = [
    { label: 'BRL - Real Brasileiro', value: 'brl', flag: 'https://flagsapi.com/BR/flat/64.png' },
    { label: 'USD - Dólar Americano', value: 'usd', flag: 'https://flagsapi.com/US/flat/64.png' },
    { label: 'EUR - Euro', value: 'eur', flag: 'https://flagsapi.com/DE/flat/64.png' },
    { label: 'JPY - Iene Japonês', value: 'jpy', flag: 'https://flagsapi.com/JP/flat/64.png' },
    { label: 'GBP - Libra Esterlina', value: 'gbp', flag: 'https://flagsapi.com/GB/flat/64.png' },
    { label: 'AUD - Dólar Australiano', value: 'aud', flag: 'https://flagsapi.com/AU/flat/64.png' },
    { label: 'CAD - Dólar Canadense', value: 'cad', flag: 'https://flagsapi.com/CA/flat/64.png' },
    { label: 'CNY - Yuan Chinês', value: 'cny', flag: 'https://flagsapi.com/CN/flat/64.png' },
    { label: 'INR - Rúpia Indiana', value: 'inr', flag: 'https://flagsapi.com/IN/flat/64.png' },
    { label: 'KRW - Won Sul-Coreano', value: 'krw', flag: 'https://flagsapi.com/KR/flat/64.png' },
  ];

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/coins/markets',
          {
            params: {
              vs_currency: selectedCurrency,
              order: 'market_cap_desc',
              per_page: 10,
              page: 1,
              sparkline: false,
            },
          }
        );

        setCryptoData(response.data);
      } catch (error) {
        console.error('Error fetching cryptocurrency data:', error);
      }
    };

    fetchCryptoData();
  }, [selectedCurrency]);

  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
  };

  // Split the cryptoData into two columns
  const midIndex = Math.ceil(cryptoData.length / 2);
  const firstColumn = cryptoData.slice(0, midIndex);
  const secondColumn = cryptoData.slice(midIndex);

  return (
    <div>
      <div>
        <TextField 
          select
          id="currencySelector"
          label="Escolha a Moeda"
          value={selectedCurrency}
          onChange={handleCurrencyChange}
          fullWidth
        >
          {currencies.map((currency) => (
            
            <MenuItem key={currency.value} value={currency.value}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src={currency.flag} alt={currency.value} style={{ marginRight: '10px', height: '30px' }} />
              {currency.label}
              </div> 
            </MenuItem>
          ))}
        </TextField>
      </div>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Paper elevation={0} style={{ padding: '10px' }}>
            <CryptoCard data={firstColumn} />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper elevation={0} style={{ padding: '10px' }}>
            <CryptoCard data={secondColumn} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default CryptoList;
