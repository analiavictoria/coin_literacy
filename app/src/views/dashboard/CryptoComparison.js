import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
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
  eur: 'https://flagsapi.com/EU/flat/64.png',
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
    ripple: null,
    litecoin: null,
    cardano: null,
    polkadot: null,
    dogecoin: null,
    binancecoin: null,
  });

  const [vsCurrency, setVsCurrency] = useState('brl');

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/simple/price',
          {
            params: {
              ids: 'bitcoin,ethereum,ripple,litecoin,cardano,polkadot,dogecoin,binancecoin',
              vs_currencies: vsCurrency,
            },
          }
        );

        setCryptoData({
          bitcoin: response.data.bitcoin[vsCurrency],
          ethereum: response.data.ethereum[vsCurrency],
          ripple: response.data.ripple[vsCurrency],
          litecoin: response.data.litecoin[vsCurrency],
          cardano: response.data.cardano[vsCurrency],
          polkadot: response.data.polkadot[vsCurrency],
          dogecoin: response.data.dogecoin[vsCurrency],
          binancecoin: response.data.binancecoin[vsCurrency],
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
      'Ripple',
      'Litecoin',
      'Cardano',
      'Polkadot',
      'Dogecoin',
      'Binance Coin',
    ],
    datasets: [
      {
        label: `Preço em ${vsCurrency.toUpperCase()}`,
        data: [
          cryptoData.bitcoin || 0,
          cryptoData.ethereum || 0,
          cryptoData.ripple || 0,
          cryptoData.litecoin || 0,
          cryptoData.cardano || 0,
          cryptoData.polkadot || 0,
          cryptoData.dogecoin || 0,
          cryptoData.binancecoin || 0,
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
        min: 1000, // Set the minimum value to 1,000 reais
        max: 250000, // Set the maximum value to 300,000 reais
        beginAtZero: false, // Remove this line if you want the y-axis to start from the minimum value
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.dataset.label || '';
            const value = context.parsed.y || 0;
            return `${label}: ${value} ${vsCurrency.toUpperCase()}`;
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
          <Typography variant="body2">Escolha a moeda de comparação:</Typography>
          <Select value={vsCurrency} onChange={handleCurrencyChange} variant="outlined" fullWidth>
            {supportedCurrencies.map((currency) => (
              <MenuItem key={currency} value={currency}>
                <img src={currencyImages[currency]} alt={currency} style={{ marginRight: '10px', height: '20px' }} />
                {`${currency.toUpperCase()} - ${currencyDescriptions[currency]}` }
              </MenuItem>
            ))}
          </Select>
        </div>
      </CardContent>
    </Card>
  );
};

export default CryptoComparison;
