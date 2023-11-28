import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CryptoCard from './CryptoCard';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const CryptoList = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [selectedCurrency, setSelectedCurrency] = useState('brl');

  const currencies = [
    { label: 'USD - Dólar Americano', value: 'usd' },
    { label: 'EUR - Euro', value: 'eur' },
    { label: 'JPY - Iene Japonês', value: 'jpy' },
    { label: 'GBP - Libra Esterlina', value: 'gbp' },
    { label: 'AUD - Dólar Australiano', value: 'aud' },
    { label: 'CAD - Dólar Canadense', value: 'cad' },
    { label: 'CNY - Yuan Chinês', value: 'cny' },
    { label: 'INR - Rúpia Indiana', value: 'inr' },
    { label: 'BRL - Real Brasileiro', value: 'brl' },
    { label: 'KRW - Won Sul-Coreano', value: 'krw' },
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

  return (
    <div>
      <div>
        <TextField
          id="currencySelector"
          select
          label="Escolha a Moeda"
          value={selectedCurrency}
          onChange={handleCurrencyChange}
          fullWidth
        >
          {currencies.map((currency) => (
            <MenuItem key={currency.value} value={currency.value}>
              {currency.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <CryptoCard title="Top Criptomoedas" data={cryptoData} />
    </div>
  );
};

export default CryptoList;
