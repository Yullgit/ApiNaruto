import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className="navbar">
      <h1>API DE NARUTO</h1>
      <Link to="/">Inicio</Link>
      <Link to="/favorites">Favoritos</Link>
    </div>
  );
};

export default NavBar;
