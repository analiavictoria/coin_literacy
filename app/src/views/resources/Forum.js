import React, { useState } from 'react';
import { Typography, TextField, Button, List, ListItem, ListItemText } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';

function Forum() {
  const [newTopic, setNewTopic] = useState('');
  const [topics, setTopics] = useState([]);

  const addTopic = () => {
    if (newTopic.trim() !== '') {
      setTopics([...topics, newTopic]);
      setNewTopic('');
    }
  };

  return (
    <MainCard>
      <Typography variant="h4" align="center" gutterBottom>
        Fórum de Discussão
      </Typography>
      <TextField label="Novo Tópico" variant="outlined" fullWidth value={newTopic} onChange={(e) => setNewTopic(e.target.value)} />
      <Button variant="contained" color="primary" onClick={addTopic} style={{ marginTop: '16px' }}>
        Adicionar Tópico
      </Button>
      <List style={{ marginTop: '16px' }}>
        {topics.map((topic, index) => (
          <ListItem key={index}>
            <ListItemText primary={topic} />
          </ListItem>
        ))}
      </List>
    </MainCard>
  );
}

export default Forum;
