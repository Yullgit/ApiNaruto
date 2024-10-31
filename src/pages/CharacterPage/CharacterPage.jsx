import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CharacterDetailPage = () => {
  const { id } = useParams(); // Obtener el id de la URL
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    axios.get(`https://dattebayo-api.onrender.com/characters`)
      .then(response => {
        const foundCharacter = response.data.characters.find(char => char.id === parseInt(id));
        setCharacter(foundCharacter);
      })
      .catch(error => console.error('Error fetching character details:', error));
  }, [id]);

  // Mostrar un mensaje de carga mientras se obtienen los datos
  if (!character) {
    return <p>Cargando detalles del personaje...</p>;
  }

  // Renderizar los detalles del personaje cuando se obtienen los datos
  return (
    <div>
      <h1>{character.name}</h1>
      <img src={character.image[0]} alt={character.name} />
      <p><strong>Fecha de Nacimiento:</strong> {character.personal?.birthdate || "No disponible"}</p>
      <p><strong>Debut:</strong> {character.debut || "No disponible"}</p>
      <p><strong>Familia:</strong> {character.family || "No disponible"}</p>
      <p><strong>Clan:</strong> {character.clan || "No disponible"}</p>
      <p><strong>Técnicas Especiales:</strong> {character.jutsu ? traducirJutsu(character.jutsu).join(", ") : "No disponible"}</p>
    </div>
  );
};

export default CharacterDetailPage;
