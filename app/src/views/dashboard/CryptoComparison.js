import React, { useState, useEffect } from 'react';
import { Card, CardContent, MenuItem, TextField, Typography } from '@mui/material';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const currencyDescriptions = {
  brl: 'Real Brasileiro',
  usd: 'Dólar Americano',
  eur: 'Euro',
  jpy: 'Iene Japonês',
  gbp: 'Libra Esterlina',
  aud: 'Dólar Australiano',
  cad: 'Dólar Canadense',
  cny: 'Yuan Chinês',
  inr: 'Rupia Indiana',
  krw: 'Won Sul-Coreano'
};

const currencyImages = {
  brl: 'https://flagsapi.com/BR/flat/64.png',
  usd: 'https://flagsapi.com/US/flat/64.png',
  eur: 'https://flagsapi.com/DE/flat/64.png',
  jpy: 'https://flagsapi.com/JP/flat/64.png',
  gbp: 'https://flagsapi.com/GB/flat/64.png',
  aud: 'https://flagsapi.com/AU/flat/64.png',
  cad: 'https://flagsapi.com/CA/flat/64.png',
  cny: 'https://flagsapi.com/CN/flat/64.png',
  inr: 'https://flagsapi.com/IN/flat/64.png',
  krw: 'https://flagsapi.com/KR/flat/64.png'
};

const supportedCurrencies = Object.keys(currencyDescriptions);

const CryptoComparison = () => {
  const [cryptoData, setCryptoData] = useState({
    bitcoin: null,
    ethereum: null,
    tether: null,
    bnb: null,
    solana: null,
    xrp: null,
    usdc: null,
    toncoin: null,
    dogecoin: null,
  });

  const [vsCurrency, setVsCurrency] = useState('brl');

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/simple/price',
          {
            params: {
              ids: 'bitcoin,ethereum,tether,bnb,solana,xrp,usdc,toncoin,dogecoin',
              vs_currencies: vsCurrency,
            },
          }
        );

        setCryptoData({
          bitcoin: response.data.bitcoin[vsCurrency],
          ethereum: response.data.ethereum[vsCurrency],
          tether: response.data.tether[vsCurrency],
          bnb: response.data.bnb[vsCurrency],
          solana: response.data.solana[vsCurrency],
          xrp: response.data.xrp[vsCurrency],
          usdc: response.data.usdc[vsCurrency],
          toncoin: response.data.toncoin[vsCurrency],
          dogecoin: response.data.dogecoin[vsCurrency],
        });
      } catch (error) {
        console.error('Error fetching crypto data:', error);
      }
    };

    fetchCryptoData();
  }, [vsCurrency]);

  const chartData = {
    labels: [
      'Bitcoin',
      'Ethereum',
      'Tether',
      'BNB',
      'Solana',
      'XRP',
      'USDC',
      'Toncoin',
      'Dogecoin',
    ],
    datasets: [
      {
        label: `Preço em ${vsCurrency.toUpperCase()}`,
        data: [
          cryptoData.bitcoin || 0,
          cryptoData.ethereum || 0,
          cryptoData.tether || 0,
          cryptoData.bnb || 0,
          cryptoData.solana || 0,
          cryptoData.xrp || 0,
          cryptoData.usdc || 0,
          cryptoData.toncoin || 0,
          cryptoData.dogecoin || 0,
        ],
        backgroundColor: '#4bc0c0',
        borderColor: '#25C998',
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: {
        type: 'logarithmic', // Altere a escala para logarítmica
        min: 1,
        max: 300000,
        ticks: {
          callback: (value) => {
            // Formata o valor sem decimais
            return new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(value);
          },
        },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.dataset.label || '';
            const value = context.parsed.y || 0;
            // Formata o valor no tooltip sem decimais
            return `${label}: ${new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(value)} ${vsCurrency.toUpperCase()}`;
          },
        },
      },
    },
  };

  const handleCurrencyChange = (event) => {
    setVsCurrency(event.target.value);
  };

  return (
    <Card>
      <CardContent>
        <div>
          <Line data={chartData} options={chartOptions} />
        </div>
        <div style={{ marginTop: '10px' }}>
          <Typography variant="h4" sx={{ my: 2 }}>Escolha a moeda de comparação:</Typography>
          <TextField select value={vsCurrency} onChange={handleCurrencyChange} variant="outlined" fullWidth>
            {supportedCurrencies.map((currency) => (
              <MenuItem key={currency} value={currency}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img src={currencyImages[currency]} alt={currency} style={{ marginRight: '10px', height: '30px' }} />
                  <span>{`${currency.toUpperCase()} - ${currencyDescriptions[currency]}`}</span>
                </div>
              </MenuItem>
            ))}
          </TextField>
        </div>
      </CardContent>
    </Card>
  );
};

export default CryptoComparison;
