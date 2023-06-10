import React from 'react';
import style from '../components/CreateDog.module.css';

const validate = (input) => {
  const error = {};

  if (!input.name) {
    error.name = <span className={style.text}>Race is required!</span>;
  } else if (!/^[a-zA-Z\s]+$/.test(input.name)) {
    error.name = <span className={style.text}>Race only accepts letters</span>;
  }

  const errorNum = [
    'heightMin',
    'heightMax',
    'weightMin',
    'weightMax',
    'expectativaDeVida',
  ];

  errorNum.forEach((value) => {
    if (input[value] === '' || isNaN(input[value])) {
      error[value] = `🔺${value} is required`;
    } else if (input[value] < 0 || input[value] > 200) {
      error[value] = `🔺${value} must be a number between 0 and 200`;
    }
  });

  if (input['min'] && input['max'] && input['min'] > input['max']) {
    error['min'] = '🔺min cannot be greater than max';
    error['max'] = '🔺max cannot be less';
  }

  if (!input.temperamento) {
    error.temperamento = 'Temperament is required!';
  }

  return error;
};

export default validate;
