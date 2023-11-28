// src/CryptoCard.js

import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from '@mui/material';

const CryptoCard = ({ title, data }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <List>
          {data.map((item) => (
            <ListItem key={item.id}>
              <ListItemAvatar>
                <Avatar alt={item.name} src={item.image} />
              </ListItemAvatar>
              <ListItemText primary={item.name} secondary={`Preço: ${item.current_price}`} />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default CryptoCard;
