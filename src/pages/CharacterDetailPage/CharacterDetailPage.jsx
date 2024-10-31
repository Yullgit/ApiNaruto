import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CharacterCarousel from '../../components/CharacterCarousel/CharacterCarousel';
import FavoriteButton from '../../components/FavoriteButton/FavoriteButton';
import './CharacterDetailPage.css';

const CharacterDetailPage = ({ onFavorite, isFavorited }) => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    axios.get(`https://dattebayo-api.onrender.com/characters/${id}`)
      .then(response => {
        setCharacter(response.data);
      })
      .catch(error => console.error('Error fetching character details:', error));
  }, [id]);

  if (!character) {
    return <p>Cargando detalles del personaje...</p>;
  }

  const imageUrl = character.image && character.image.length > 0 
    ? character.image[0] 
    : 'ruta-imagen-predeterminada'; 

  return (
    <div className="character-detail">
      <h1>{character.name}</h1>
      <img 
        src={imageUrl} 
        alt={character.name} 
        onError={(e) => e.target.src = 'ruta-imagen-predeterminada'} // Reemplaza con una imagen de respaldo si falla
      />
      <p><strong>Fecha de Nacimiento:</strong> {character.personal?.birthdate || "No disponible"}</p>
      <p><strong>Debut:</strong> {character.debut || "No disponible"}</p>
      <p><strong>Familia:</strong> {character.family || "No disponible"}</p>
      <p><strong>Clan:</strong> {character.clan || "No disponible"}</p>
      <p><strong>Técnicas Especiales:</strong> {character.jutsu ? character.jutsu.join(", ") : "No disponible"}</p>
      <FavoriteButton onClick={() => onFavorite(character)} isFavorited={isFavorited} />
    </div>
  );
};

export default CharacterDetailPage;
