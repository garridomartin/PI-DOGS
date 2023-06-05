// hasta aca funcionta todo bien, incluso la searchBar y el paginado

import Card from '../Card/Card';
import style from './CardContainer.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import Paginado from '../Paginado/Paginado';
//import { filterByTemperament } from '../../redux/actions';

const CardsContainer = () => {
  const allDogs = useSelector((state) => state.dogs);
  const filteredTemperament = useSelector((state) => state.filteredTemperament);
  const dispatch = useDispatch();
  // Filtrar los perros por temperamento
  /*const filteredDogs =
    filteredTemperament !== 'temperament'
      ? allDogs.filter((dog) => dog.temperamento.includes(filteredTemperament))
      : allDogs;*/

  // Código para el paginado
  const [currentPage, setCurrentPage] = useState(1);
  const [dogsPerPage] = useState(8);
  const positionOfLastDog = currentPage * dogsPerPage;
  const positionOfFirstDog = positionOfLastDog - dogsPerPage;
  const currentDog = allDogs.slice(positionOfFirstDog, positionOfLastDog);

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  /* useEffect(() => {
    dispatch(filterByTemperament('temperament'));
  }, [dispatch]);*/

  return (
    <div className={style.CardsContainer}>
      <Paginado
        dogsPerPage={dogsPerPage}
        allDogs={allDogs.length}
        paginado={paginado}
      />

      {currentDog.map((dog) => (
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
  );
};

export default CardsContainer;
