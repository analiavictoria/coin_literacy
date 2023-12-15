/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Typography, Grid, Container } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import Header from './Header';
import Banner from './Banner';
import FeaturedPost from './FeaturedPost';

import api from '../../api/api';

const sections = [
  { title: 'Blockchain', url: '#' },
  { title: 'Economia Digital', url: '#' },
  { title: 'Criptomoedas', url: '#' },
  { title: 'Bitcoin', url: '#' },
  { title: 'Investimentos', url: '#' },
  { title: 'Finanças', url: '#' },
  { title: 'Segurança', url: '#' },
  { title: 'Compra e Venda', url: '#' },
];


const banner = {
  title: 'Desvendando o Universo das Criptomoedas: Uma Jornada Rumo ao Futuro Financeiro!',
  description:
  "Você já se perguntou como as criptomoedas estão redefinindo o cenário financeiro global? Prepare-se para embarcar em uma jornada fascinante pelo mundo das moedas digitais e descobrir o que o futuro reserva para a nossa economia.",  
  image: 'https://source.unsplash.com/random?trading',
  imageText: 'Ethereum',
};

// const featuredPosts = [
//   {
//     title: 'Ethereum e seus Contratos Inteligentes: Transformando a Maneira como Fazemos Negócios',
//     date: 'Nov 12',
//     description:
//     "Vamos aprofundar nosso conhecimento sobre o Ethereum, uma das principais criptomoedas. Destacaremos como seus contratos inteligentes estão mudando a paisagem dos negócios, introduzindo automação e transparência. Esta postagem oferece uma visão essencial para aqueles interessados no potencial disruptivo do Ethereum.",
//     image: 'https://source.unsplash.com/random?ethereum',
//     imageLabel: 'Ethereum',
//   },
//   {
//     title: 'Navegando pelo Mundo das Criptomoedas: Estratégias Inovadoras para Acumular Seu Tesouro Digital',
//     date: 'Dez 11',
//     description:
//       'No universo em constante evolução das criptomoedas, explorar estratégias inovadoras para acumular ativos digitais tornou-se crucial. Neste artigo, mergulharemos em abordagens práticas e eficazes para obter criptomoedas, desde métodos tradicionais até alternativas menos conhecidas.',
//     image: 'https://source.unsplash.com/random?crypto',
//     imageLabel: 'Image Text',
//   },
// ];

export default function Blog() {
  const [blogPosts, setblogPosts] = useState([]);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const token =  localStorage.getItem('token');
        const response = await api.get('/AllblogPost', {
          headers: {
            'Content-Type': 'application/json',
            // Adicione o token ao cabeçalho da solicitação se estiver disponível
            authorization: `Bearer ${JSON.parse(token)}`,
          }
        });
        console.log(response)
        setblogPosts(response.data.blogPosts);
        console.log(cryptoNews)
      } catch (error) {
        console.error('Error fetching cryptocurrency data:', error);
      }
    };
    fetchBlogData();
  }, []);

  return (
    <MainCard>
      <Container maxWidth="lg">
        <Typography variant='h1' sx={{textAlign:'center'}}>Blog</Typography>
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