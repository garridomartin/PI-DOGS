import React, { useState, useEffect } from 'react';
import style from './SearchBar.module.css';
import axios from 'axios';

import { FilterByAlphabet } from '../../utils/orderByName';

const SearchBar = () => {
  const [orderByWeight, setOrderByWeight] = useState('kg→KG');
  const [searchValue, setSearchValue] = useState('');
  const [temperaments, setTemperaments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
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
  );
};

export default SearchBar;
