import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { orderByName } from '../redux/actions';

export function FilterByAlphabet() {
  const dispatch = useDispatch();
  const [orderByFilter, setOrderByFilter] = useState('A→Z');

  useEffect(() => {
    if (orderByFilter === 'A→Z') {
      dispatch(orderByName('AZ'));
    } else {
      dispatch(orderByName('ZA'));
    }
  }, [orderByFilter, dispatch]);

  function handleFilter() {
    if (orderByFilter === 'A→Z') {
      setOrderByFilter('Z→A');
    } else {
      setOrderByFilter('A→Z');
    }
  }

  return (
    <div>
      <button onClick={handleFilter}>{orderByFilter}</button>
    </div>
  );
}
