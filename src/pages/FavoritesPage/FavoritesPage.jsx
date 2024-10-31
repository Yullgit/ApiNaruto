import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import FavoriteListItem from '../../components/FavoriteListltem/FavoriteListltem';

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      const querySnapshot = await getDocs(collection(db, "favorites"));
      setFavorites(querySnapshot.docs.map(doc => doc.data()));
    };
    fetchFavorites();
  }, []);

  return (
    <div>
      <h1>Mis Favoritos</h1>
      <div>
        {favorites.map((favorite, index) => (
          <FavoriteListItem key={index} name={favorite.name} birthday={favorite.personal?.birthdate || 'No disponible'} />
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
