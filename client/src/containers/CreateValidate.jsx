import React from 'react';
import style from '../components/CreateDog.module.css';

const validate = (input) => {
  let error = {};

  if (!input.name) {
    error.name = <span className={style.text}>Race is required!</span>;
  } else if (!/^[a-zA-Z\s]+$/.test(input.name)) {
    error.name = <span className={style.text}>Race only accepts letters</span>;
  }

  if (!input.heightMin) {
    error.heightMin = (
      <span className={style.text}>Please enter the minimum height!</span>
    );
  }

  if (!input.heightMax) {
    error.heightMax = (
      <span className={style.text}>Please enter the maximum height!</span>
    );
  }

  if (input.heightMin && input.heightMax) {
    const parsedMinHeight = parseInt(input.heightMin);
    const parsedMaxHeight = parseInt(input.heightMax);
    if (
      isNaN(parsedMinHeight) ||
      isNaN(parsedMaxHeight) ||
      parsedMinHeight >= parsedMaxHeight
    ) {
      error.height = (
        <span className={style.text}>
          The maximum height must be greater than the minimum height!
        </span>
      );
    }
  } else {
    error.height = (
      <span className={style.text}>
        Please enter valid values for height range!
      </span>
    );
  }

  if (
    !input.weightMin ||
    isNaN(parseFloat(input.weightMin)) ||
    input.weightMin < 0
  ) {
    error.weightMin = (
      <span className={style.text}>Please enter a valid minimum weight!</span>
    );
  }

  if (!input.weightMax || isNaN(parseFloat(input.weightMax))) {
    error.weightMax = (
      <span className={style.text}>Please enter the maximum weight!</span>
    );
  }

  if (input.weightMin && input.weightMax) {
    const parsedMinWeight = parseFloat(input.weightMin);
    const parsedMaxWeight = parseFloat(input.weightMax);
    if (
      isNaN(parsedMinWeight) ||
      isNaN(parsedMaxWeight) ||
      parsedMinWeight >= parsedMaxWeight
    ) {
      error.weight = (
        <span className={style.text}>
          The maximum weight must be greater than the minimum weight!
        </span>
      );
    }
  } else {
    error.weight = (
      <span className={style.text}>
        Please enter valid values for weight range!
      </span>
    );
  }

  if (!input.expectativaDeVida) {
    error.expectativaDeVida = (
      <span className={style.text}>Life Span is required!</span>
    );
  }

  return error;
};

export default validate;
