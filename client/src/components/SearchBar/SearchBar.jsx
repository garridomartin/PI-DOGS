import React, { useState } from 'react';
import style from './SearchBar.module.css';

const SearchBar = () => {
  const [orderByName, setOrderByName] = useState('A-->Z');
  const [orderByWeight, setOrderByWeight] = useState('kg-->KG');
  const [searchValue, setSearchValue] = useState('');

  const handleNameOrder = () => {
    if (orderByName === 'A-->Z') {
      setOrderByName('Z-->A');
    } else {
      setOrderByName('A-->Z');
    }
  };

  const handleWeightOrder = () => {
    if (orderByWeight === 'kg-->KG') {
      setOrderByWeight('KG-->kg');
    } else {
      setOrderByWeight('kg-->KG');
    }
  };

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = () => {
    // Aquí puedes realizar la acción de búsqueda con el valor ingresado
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
      </select>
    </div>
  );
};

export default SearchBar;
