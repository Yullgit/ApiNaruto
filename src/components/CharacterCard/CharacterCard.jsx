import React from 'react';
import { useNavigate } from 'react-router-dom';
import FavoriteButton from '../FavoriteButton/FavoriteButton';
import './CharacterCard.css';

const CharacterCard = ({ character, onFavorite, isFavorited }) => {
  const navigate = useNavigate();
  const imageUrl = character.image ? character.image[0] : 'ruta-imagen-predeterminada'; 

  return (
    <div className="card" onClick={() => navigate(`/character/${character.id}`)}>
      <h3>{character.name}</h3>
      {imageUrl ? (
        <img src={imageUrl} alt={character.name} onError={(e) => (e.target.src = 'ruta-imagen-predeterminada')} />
      ) : (
        <p>Imagen no disponible</p>
      )}
      <FavoriteButton onClick={(e) => { e.stopPropagation(); onFavorite(character); }} isFavorited={isFavorited} />
    </div>
  );
};

export default CharacterCard;
