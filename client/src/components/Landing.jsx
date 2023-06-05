import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div>
      <h1>BIENVENIDOS A MI APP DE DOGS</h1>
      <Link to='/home'>
        <button>INGRESAR</button>
      </Link>
    </div>
  );
};

export default Landing;
