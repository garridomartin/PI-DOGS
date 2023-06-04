import React, { useState, useEffect } from 'react';
import style from './SearchBar.module.css';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
//import { filterByTemperament } from '../../redux/actions';

const SearchBar = () => {
  const [orderByName, setOrderByName] = useState('A→Z');
  const [orderByWeight, setOrderByWeight] = useState('kg→KG');
  const [searchValue, setSearchValue] = useState('');
  const temperaments = useSelector((state) => state.temperaments);
  //const dispatch = useDispatch();
  //obtengo todos los temperamentos, que los mandaré al select↓↓↓↓
  useEffect(() => {
    const fetchTemperaments = async () => {
      try {
        await axios.get('http://localhost:3001/temperaments');
        // dispatch(setTemperaments(response.data));
      } catch (error) {
        console.error('Error al obtener los temperamentos:', error);
      }
    };
    fetchTemperaments();
  }, []);

  const handleNameOrder = () => {
    if (orderByName === 'A→Z') {
      setOrderByName('Z→A');
    } else {
      setOrderByName('A→Z');
    }
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

  /*const handleTemperamentChange = (event) => {
    const selectedTemperament = event.target.value;
    dispatch(filterByTemperament(selectedTemperament));
  };*/

  const handleSearch = () => {
    console.log('Realizando búsqueda con el valor:', searchValue);
  };

  return (
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
      <button onClick={handleNameOrder}>{orderByName}</button>
      <button onClick={handleWeightOrder}>{orderByWeight}</button>
      <select>
        <option value='temperament'>Temperamento</option>
        {temperaments &&
          temperaments.map((temperament) => (
            <option key={temperament.id} value={temperament.name}>
              {temperament.name}
            </option>
          ))}
      </select>
    </div>
  );
};

export default SearchBar;
