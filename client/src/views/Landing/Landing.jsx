import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
const Landing = () => {
  return (
    <>
      <h1>ESTA ES LA PAGINA LANDING</h1>
      <Link to='/home'>
        <button>ENTRAR</button>
      </Link>
    </>
  );
};

export default Landing;
