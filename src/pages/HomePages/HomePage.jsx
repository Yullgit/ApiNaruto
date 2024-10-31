import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterCard from '../../components/CharacterCard/CharacterCard';
import './HomePage.css';

const HomePage = () => {
  const [characters, setCharacters] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    axios.get('https://dattebayo-api.onrender.com/characters')
      .then(response => setCharacters(response.data.characters))
      .catch(error => console.error('Error fetching characters:', error));
  }, []);

  const toggleFavorite = (character) => {
  };

  return (
    <div className="grid">
      {characters.map(character => (
        <CharacterCard
          key={character.id}
          character={character}
          onFavorite={toggleFavorite}
          isFavorited={favorites.some(fav => fav.id === character.id)}
        />
      ))}
    </div>
  );
};

export default HomePage;
