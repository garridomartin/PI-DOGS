import React from 'react';
import { Link } from 'react-router-dom';
import style from './Card.module.css';

const Card = ({ name, peso, temperamento, imagen, id }) => {
  return (
    <Link to={`/dogs/${id}`} className={style.Card}>
      <p className={style.Title}>Nombre: {name}</p>
      <p>Peso: {peso} kg.</p>
      <p>Temperamento: {temperamento.join(', ')}.</p>
      <img src={imagen} alt='Imagen' className={style.Image} />
    </Link>
  );
};

export default Card;
