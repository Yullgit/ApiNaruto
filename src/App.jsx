import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePages/HomePage';
import CharacterDetailPage from './pages/CharacterDetailPage/CharacterDetailPage';
import FavoritePage from './pages/FavoritesPage/FavoritesPage';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <Router>
      <div className="container">
        <NavBar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/character/:id" element={<CharacterDetailPage />} />
            <Route path="/favorites" element={<FavoritePage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
