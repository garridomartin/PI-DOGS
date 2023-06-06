import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDogs } from '../redux/actions';
import { Link } from 'react-router-dom';
import { Card } from './index';
import {
  Paginado,
  FilterByAlphabet,
  FilterByWeight,
} from '../containers/index';
import style from './Home.module.css';

const Home = () => {
  const allDogs = useSelector((state) => state.dogs);
  const [order, setOrder] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [dogsPerPage] = useState(8);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);

  //!PAGINADO
  const getCurrentDogs = () => {
    const positionOfLastDog = currentPage * dogsPerPage;
    const positionOfFirstDog = positionOfLastDog - dogsPerPage;
    return allDogs.slice(positionOfFirstDog, positionOfLastDog);
  };
  const currentDogs = getCurrentDogs();
  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  //!RELOAD
  const handleClick = (event) => {
    event.preventDefault();
    dispatch(getDogs());
  };
  /*
  //!RESET FILTERS
  const    = () => {
    setOrder('');
    setCurrentPage(1);
  };
  const handleResetFilters = () => {
    resetFilters();
    dispatch(getDogs());
  };

  //!FILTRO ALFABETICO
  const handleOrderChange = (event) => {
    const selectedOrder = event.target.value;
    setOrder(selectedOrder);
  };
*/
  return (
    <div className={style.container}>
      <button
        className={style.button}
        onClick={() => (window.location.href = '/create')}
      >
        CREAR PERRO
      </button>
      <button className={style.button} onClick={handleClick}>
        RESET FILTERS
      </button>
      <div>
        <div>
          <FilterByAlphabet
            setCurrentPage={setCurrentPage}
            order={order}
            setOrder={setOrder}
          />
          <FilterByWeight
            setCurrentPage={setCurrentPage}
            order={order}
            setOrder={setOrder}
          />
        </div>
        <select className={style.button}>
          <option value='all'>ALL</option>
          <option value='api'>API</option>
          <option value='database'>DATABASE</option>
        </select>
      </div>
      <Paginado
        dogsPerPage={dogsPerPage}
        allDogs={allDogs.length}
        paginado={paginado}
      />
      <div className={style.CardsContainer}>
        {currentDogs &&
          currentDogs.map((dog) => (
            <Card
              key={dog.ID}
              id={dog.ID}
              name={dog.name}
              altura={dog.altura}
              peso={dog.peso}
              expectativaDeVida={dog.expectativaDeVida}
              temperamento={dog.temperamento}
              imagen={dog.imagen}
            />
          ))}
      </div>
    </div>
  );
};
export default Home;
