import React from 'react';
import { Link } from 'react-router-dom';
import style from './Card.module.css';

const Card = ({ name, peso, temperamento, imagen, id }) => {
  console.log(temperamento);

  return (
    <div className={style.Card}>
      <p className={style.Title}>{name}</p>
      <p>Peso: {peso} kg.</p>
      <p>Temperamento: {temperamento.join(', ')}.</p>
      <Link to={`/dogs/${id}`}>
        <img src={imagen} alt='Imagen' className={style.Image} />
      </Link>
    </div>
  );
};

export default Card;
