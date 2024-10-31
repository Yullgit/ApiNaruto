import React from 'react';
import { ListItem, ListItemText } from '@mui/material';

const FavoriteListItem = ({ name, birthday }) => (
  <ListItem>
    <ListItemText primary={name} secondary={`Cumpleaños: ${birthday}`} />
  </ListItem>
);

export default FavoriteListItem;
