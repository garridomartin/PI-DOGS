import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterTemperament, getTemperament } from '../redux/actions';
import style from './FilterByTemperament.module.css';

export default function FilterByTemperament({ setCurrentPage, setOrder }) {
  const dispatch = useDispatch();
  const allTemperaments = useSelector((state) => state.temperamentsArr);

  useEffect(() => {
    dispatch(getTemperament());
  }, [dispatch]);

  function handleFilterTemp(e) {
    e.preventDefault();
    dispatch(filterTemperament(e.target.value));
    setCurrentPage(1);
    setOrder(`ordenado ${e.target.value}`);
  }

  return (
    <select onChange={(e) => handleFilterTemp(e)} className={style.nameFilter}>
      <option key={0} value='ALL'>
        Temperaments
      </option>
      {allTemperaments?.map((temp) => (
        <option value={temp.name} key={temp.id}>
          {temp.name}
        </option>
      ))}
    </select>
  );
}
