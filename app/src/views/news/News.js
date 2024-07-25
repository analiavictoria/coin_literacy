/* eslint-disable react/prop-types */
import * as React from 'react';
import { useState, useEffect } from 'react';
import { Grid, Container, Typography, Divider } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import NewsPosts from './NewsPosts';
import axios from 'axios';



export default function News() {
  const [cryptoNews, setCryptoNews] = useState([]);
  

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await axios.get(
          'https://min-api.cryptocompare.com/data/v2/news/?lang=PT',
        );
        console.log(response)
        setCryptoNews(response.data.Data);
        console.log(cryptoNews)
      } catch (error) {
        console.error('Error fetching cryptocurrency data:', error);
      }
    };
    fetchCryptoData();
  }, []);

  return (
    <MainCard>
      <Container>
        <Typography
          noWrap
          variant="h1"
          color="primary"
          align="center"
          sx={{ flex: 1, my:1 }}
        >
         Notícias
        </Typography>
        <Divider sx={{m:2}}></Divider>
          <Grid container spacing={4}>
            {cryptoNews.map((post) => (
              <NewsPosts key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
          </Grid>
      </Container>
    </MainCard>
  );
}