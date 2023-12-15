import React from 'react';
import { Typography} from '@mui/material';
import SubCard from 'ui-component/cards/SubCard';

const Crypto101 = () => (
  <SubCard  title="Cripto 101: dando os primeiros passos" style={{ padding: '16px', marginBottom: '16px' }}>
    
    <Typography variant="body2" paragraph sx={{textAlign:'justify'}}>
    As criptomoedas têm conquistado espaço e atenção nos últimos anos, tornando-se uma parte intrigante e, para muitos, um tanto misteriosa do mundo financeiro. Se você está se sentindo um pouco perdido no meio desse universo de códigos e blockchain, não se preocupe. Vamos dar os primeiros passos juntos no fascinante mundo da cripto.
    <br />
    <br />
    <Typography variant='h5'>
    Compreendendo o básico: O que são Criptomoedas?
    </Typography>
    <br />
    Em termos simples, criptomoedas são formas de dinheiro digital que utilizam a criptografia para garantir transações seguras e para controlar a criação de novas unidades. Diferentemente das moedas tradicionais, as criptomoedas operam em uma tecnologia descentralizada chamada blockchain, que é um registro público e imutável de todas as transações.
    <br />
    <br />
    <Typography variant='h5'>
    Escolhendo a criptomoeda certa: Bitcoin e Além
    </Typography>
    <br />
    O Bitcoin, a primeira e mais conhecida criptomoeda, é um ponto de partida comum. Contudo, o universo das criptomoedas é vasto, e você pode explorar altcoins como Ethereum, Ripple e Litecoin. Cada uma tem suas características únicas, propósitos e tecnologias subjacentes.
    <br />
    <br />
    <Typography variant='h5'>
    Selecionando uma Exchange: Onde Comprar e Vender
    </Typography>
    <br />
    Para adquirir criptomoedas, você precisará de uma plataforma de negociação, conhecida como exchange. Exemplos populares incluem Coinbase, Binance e Kraken. Escolha uma exchange confiável, verifique as taxas associadas e siga os procedimentos de segurança recomendados.
    <br />
    <br />
    <Typography variant='h5'>
    Carteiras Digitais: Armazenando com Segurança
    </Typography>
    <br />
    Após comprar suas criptomoedas, é crucial armazená-las de forma segura. As carteiras digitais são projetadas para esse fim. Carteiras como Ledger Nano S e Trezor oferecem um nível extra de segurança, mantendo suas chaves privadas offline.
    <br />
    <br />
    <Typography variant='h5'>
    Educação Contínua: Mantenha-se Informado
    </Typography>
    <br />
    O mercado de criptomoedas é dinâmico, com mudanças frequentes. Mantenha-se informado através de fontes confiáveis, como blogs, podcasts e sites de notícias especializados. Compreender as tendências do mercado e as atualizações tecnológicas é fundamental para tomar decisões informadas.
    <br />
    <br />
    <Typography variant='h5'>
    Conclusão: Seu Jornada nas Criptomoedas Começa Agora
    </Typography>
    <br />
    Ao seguir essas orientações, você está pronto para dar seus primeiros passos no emocionante mundo das criptomoedas. Lembre-se de que a jornada é contínua, e a educação constante é a chave para o sucesso. Seja curioso, esteja ciente dos riscos e aproveite a revolução financeira digital que está apenas começando.
    </Typography>
  </SubCard>
);

export default Crypto101;
