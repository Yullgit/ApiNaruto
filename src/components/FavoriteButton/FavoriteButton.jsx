import React from 'react';
import { IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

const FavoriteButton = ({ onClick, isFavorited }) => (
  <IconButton onClick={onClick} color={isFavorited ? 'error' : 'default'}>
    <FavoriteIcon />
  </IconButton>
);

export default FavoriteButton;
