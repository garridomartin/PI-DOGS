import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDogs } from '../redux/actions';
import { Link } from 'react-router-dom';
import { Card } from './index';
import style from './Home.module.css';
import axios from 'axios';

const Home = () => {
  const allDogs = useSelector((state) => state.dogs);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);

  const handleClick = (event) => {
    event.preventDefault();
    dispatch(getDogs());
  };

  return (
    <>
      <Link to='/create'>CREAR PERRO</Link>
      <h1>ALL DOGS ON HEARTH</h1>
      <button
        onClick={(event) => {
          handleClick(event);
        }}
      >
        RELOAD DOGS
      </button>
      <div>
        <select>
          <option value='ascendente'>ASCEDENT</option>
          <option value='descendente'>DESCENDENT</option>
        </select>
        <select>
          <option value='liviano'>LIGHTER</option>
          <option value='pesado'>HEAVIER</option>
        </select>
        <select>
          <option value='all'>ALL</option>
          <option value='api'>API</option>
          <option value='daatabase'>DATABASE</option>
        </select>
      </div>
      <div className={style.CardsContainer}>
        {allDogs &&
          allDogs.map((dog) => (
            <Card
              key={dog.id}
              id={dog.id}
              name={dog.name}
              altura={dog.altura}
              peso={dog.peso}
              expectativaDeVida={dog.expectativaDeVida}
              temperamento={dog.temperamento}
              imagen={dog.imagen}
            />
          ))}
      </div>
    </>
  );
};

export default Home;
