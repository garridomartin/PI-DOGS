/*import Card from '../Card/Card';
import style from './CardContainer.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import Paginado from '../Paginado/Paginado';
import { filterByTemperament } from '../../redux/actions';

const CardsContainer = () => {
  const allDogs = useSelector((state) => state.dogs);
  // const filteredTemperament = useSelector((state) => state.filteredTemperament);
  //  const dispatch = useDispatch();
  // Filtrar los perros por temperamento
  /*const filteredDogs =
    filteredTemperament !== 'temperament'
      ? allDogs.filter((dog) => dog.temperamento.includes(filteredTemperament))
      : allDogs;*/
/* useEffect(() => {
        dispatch(filterByTemperament('temperament'));
      }, [dispatch]);*/

// Código para el paginado
/*const [currentPage, setCurrentPage] = useState(1);
  const [dogsPerPage] = useState(8);

  const getCurrentDogs = () => {
    const positionOfLastDog = currentPage * dogsPerPage;
    const positionOfFirstDog = positionOfLastDog - dogsPerPage;
    return allDogs.slice(positionOfFirstDog, positionOfLastDog);
  };

  const currentDogs = getCurrentDogs();

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className={style.CardsContainer}>
      <Paginado
        dogsPerPage={dogsPerPage}
        allDogs={allDogs.length}
        paginado={paginado}
      />

      {currentDogs.map((dog) => (
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

export default CardsContainer; */

import React, { useState, useEffect } from 'react';
import style from './CardContainer.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { filterByTemperament } from '../../redux/actions';
import axios from 'axios';
import Card from '../Card/Card';
import Paginado from '../Paginado/Paginado';
import { FilterByAlphabet } from '../../utils/orderByName';

const CardContainer = () => {
  const allDogs = useSelector((state) => state.dogs);
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [dogsPerPage] = useState(8);
  const [orderByWeight, setOrderByWeight] = useState('kg→KG');
  const [searchValue, setSearchValue] = useState('');
  const [temperaments, setTemperaments] = useState([]);
  const [order, setOrder] = useState('');

  useEffect(() => {
    const fetchTemperaments = async () => {
      try {
        const response = await axios.get('http://localhost:3001/temperaments');
        setTemperaments(response.data);
      } catch (error) {
        console.error('Error al obtener los temperamentos:', error);
      }
    };
    fetchTemperaments();
  }, []);

  const getCurrentDogs = () => {
    const positionOfLastDog = currentPage * dogsPerPage;
    const positionOfFirstDog = positionOfLastDog - dogsPerPage;
    return allDogs.slice(positionOfFirstDog, positionOfLastDog);
  };

  const currentDogs = getCurrentDogs();

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleWeightOrder = () => {
    if (orderByWeight === 'kg→KG') {
      setOrderByWeight('KG→kg');
    } else {
      setOrderByWeight('kg→KG');
    }
  };

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = () => {
    console.log('Realizando búsqueda con el valor:', searchValue);
  };

  return (
    <div className={style.CardsContainer}>
      <div className={style.mainSearchBar}>
        <input
          type='text'
          value={searchValue}
          onChange={handleInputChange}
          placeholder='Buscar...'
        />
        <button onClick={handleSearch}>Buscar</button>
        <label>
          <input type='checkbox' />
          Base de datos
        </label>
        <label>
          <input type='checkbox' />
          API
        </label>
        <FilterByAlphabet setCurrentPage={setCurrentPage} setOrder={setOrder} />
        <button onClick={handleWeightOrder}>{orderByWeight}</button>
        <select>
          <option value='temperament'>Temperamento</option>
          {temperaments.map((temperament) => (
            <option key={temperament.id} value={temperament.name}>
              {temperament.name}
            </option>
          ))}
        </select>
      </div>

      <Paginado
        dogsPerPage={dogsPerPage}
        allDogs={allDogs.length}
        paginado={paginado}
      />

      {currentDogs.map((dog) => (
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

export default CardContainer;
