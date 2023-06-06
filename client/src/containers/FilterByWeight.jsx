import React from 'react';
import { useDispatch } from 'react-redux';
import { filterByWeight } from '../redux/actions';
import Styles from './FilterByWeight.module.css';

const FilterByWeight = ({ setCurrentPage, setOrder }) => {
  const dispatch = useDispatch();

  const handleChangeFilter = (event) => {
    event.preventDefault();
    dispatch(filterByWeight(event.target.value));
    setCurrentPage(1);
    setOrder(`ordenado ${event.target.value}`);
  };

  return (
    <div className={Styles.container}>
      <select
        onChange={(event) => handleChangeFilter(event)}
        className={Styles.nameFilter}
        defaultValue=''
      >
        <option value=''>ORDER WEIGHT</option>
        <option value='LESS'>- WEIGHT</option>
        <option value='HIGH'>+ WEIGHT</option>
      </select>
    </div>
  );
};

export default FilterByWeight;
