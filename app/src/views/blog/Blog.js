import React, { useState, useEffect } from 'react';
import { Grid, Container } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import Header from './Header';
import Banner from './Banner';
import FeaturedPost from './FeaturedPost';

import api from '../../api/api';

const sections = [
  { title: 'Blockchain', url: '#blockchain' },
  { title: 'Economia Digital', url: '#economia-digital' },
  { title: 'Criptomoedas', url: '#criptomoedas' },
  { title: 'Bitcoin', url: '#bitcoin' },
  { title: 'Investimentos', url: '#investimentos' },
  { title: 'Finanças', url: '#financas' },
  { title: 'Segurança', url: '#seguranca' },
  { title: 'Compra e Venda', url: '#compra-venda' },
];

const banner = {
  title: 'Desvendando o Universo das Criptomoedas: Uma Jornada Rumo ao Futuro Financeiro!',
  description:
    "Você já se perguntou como as criptomoedas estão redefinindo o cenário financeiro global? Prepare-se para embarcar em uma jornada fascinante pelo mundo das moedas digitais e descobrir o que o futuro reserva para a nossa economia.",
  image: 'https://source.unsplash.com/random?trading',
  imageText: 'Crypto',
};

export default function Blog() {
  const [blogPosts, setblogPosts] = useState([]);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await api.get('/AllblogPost', {
          headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${JSON.parse(token)}`,
          },
        });
        console.log(response);
        setblogPosts(response.data.blogPosts);
        console.log(blogPosts);
      } catch (error) {
        console.error('Error fetching blog data:', error);
      }
    };
    fetchBlogData();
  }, []);

  return (
    <MainCard>
      <Container maxWidth="lg">
        <Header sections={sections} />
        <Banner post={banner} />
        <Grid container spacing={4}>
          {blogPosts.map((post) => (
            <FeaturedPost key={post.title} post={post} />
          ))}
        </Grid>
      </Container>
    </MainCard>
  );
}
