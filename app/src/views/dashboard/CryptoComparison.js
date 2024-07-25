import React, { useState, useEffect } from 'react';
import { Card, CardContent, MenuItem, TextField, Typography } from '@mui/material';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import { Chart, registerables } from 'chart.js';

<<<<<<< HEAD
=======

>>>>>>> 2d27298a3149859f70b2ae9a0ba41ae43054c53a
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
<<<<<<< HEAD
    tether: null,
    bnb: null,
    solana: null,
    xrp: null,
    usdc: null,
    toncoin: null,
    dogecoin: null,
=======
    ripple: null,
    litecoin: null,
    cardano: null,
    polkadot: null,
    dogecoin: null,
    binancecoin: null,
>>>>>>> 2d27298a3149859f70b2ae9a0ba41ae43054c53a
  });

  const [vsCurrency, setVsCurrency] = useState('brl');

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/simple/price',
          {
            params: {
<<<<<<< HEAD
              ids: 'bitcoin,ethereum,tether,bnb,solana,xrp,usdc,toncoin,dogecoin',
=======
              ids: 'bitcoin,ethereum,ripple,litecoin,cardano,polkadot,dogecoin,binancecoin',
>>>>>>> 2d27298a3149859f70b2ae9a0ba41ae43054c53a
              vs_currencies: vsCurrency,
            },
          }
        );

        setCryptoData({
          bitcoin: response.data.bitcoin[vsCurrency],
          ethereum: response.data.ethereum[vsCurrency],
<<<<<<< HEAD
          tether: response.data.tether[vsCurrency],
          bnb: response.data.bnb[vsCurrency],
          solana: response.data.solana[vsCurrency],
          xrp: response.data.xrp[vsCurrency],
          usdc: response.data.usdc[vsCurrency],
          toncoin: response.data.toncoin[vsCurrency],
          dogecoin: response.data.dogecoin[vsCurrency],
=======
          ripple: response.data.ripple[vsCurrency],
          litecoin: response.data.litecoin[vsCurrency],
          cardano: response.data.cardano[vsCurrency],
          polkadot: response.data.polkadot[vsCurrency],
          dogecoin: response.data.dogecoin[vsCurrency],
          binancecoin: response.data.binancecoin[vsCurrency],
>>>>>>> 2d27298a3149859f70b2ae9a0ba41ae43054c53a
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
<<<<<<< HEAD
      'Tether',
      'BNB',
      'Solana',
      'XRP',
      'USDC',
      'Toncoin',
      'Dogecoin',
=======
      'Ripple',
      'Litecoin',
      'Cardano',
      'Polkadot',
      'Dogecoin',
      'Binance Coin',
>>>>>>> 2d27298a3149859f70b2ae9a0ba41ae43054c53a
    ],
    datasets: [
      {
        label: `Preço em ${vsCurrency.toUpperCase()}`,
        data: [
          cryptoData.bitcoin || 0,
          cryptoData.ethereum || 0,
<<<<<<< HEAD
          cryptoData.tether || 0,
          cryptoData.bnb || 0,
          cryptoData.solana || 0,
          cryptoData.xrp || 0,
          cryptoData.usdc || 0,
          cryptoData.toncoin || 0,
          cryptoData.dogecoin || 0,
=======
          cryptoData.ripple || 0,
          cryptoData.litecoin || 0,
          cryptoData.cardano || 0,
          cryptoData.polkadot || 0,
          cryptoData.dogecoin || 0,
          cryptoData.binancecoin || 0,
>>>>>>> 2d27298a3149859f70b2ae9a0ba41ae43054c53a
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
<<<<<<< HEAD
        type: 'logarithmic', // Altere a escala para logarítmica
        min: 1,
        max: 300000,
        ticks: {
          callback: (value) => {
            // Formata o valor sem decimais
            return new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(value);
          },
        },
=======
        min: 1000, // Set the minimum value to 1,000 reais
        max: 250000, // Set the maximum value to 300,000 reais
        beginAtZero: false, // Remove this line if you want the y-axis to start from the minimum value
>>>>>>> 2d27298a3149859f70b2ae9a0ba41ae43054c53a
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.dataset.label || '';
            const value = context.parsed.y || 0;
<<<<<<< HEAD
            // Formata o valor no tooltip sem decimais
            return `${label}: ${new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(value)} ${vsCurrency.toUpperCase()}`;
=======
            return `${label}: ${value} ${vsCurrency.toUpperCase()}`;
>>>>>>> 2d27298a3149859f70b2ae9a0ba41ae43054c53a
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
<<<<<<< HEAD
          <Typography variant="h4" sx={{ my: 2 }}>Escolha a moeda de comparação:</Typography>
=======
          <Typography variant="h5" sx={{my:2}}>Escolha a moeda de comparação:</Typography>
>>>>>>> 2d27298a3149859f70b2ae9a0ba41ae43054c53a
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
