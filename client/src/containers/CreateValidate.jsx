import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import style from '../components/CreateDog.module.css';

const validate = (input) => {
  let error = {};

  if (!input.name) {
    error.name = <span className={style.text}>Race is required!</span>;
  }
  if (!input.heightMin) {
    error.heightMin = (
      <span className={style.text}>Please enter the minumum height!</span>
    );
  }

  if (
    input.heightMin &&
    input.heightMax &&
    parseInt(input.heightMin) >= parseInt(input.heightMax)
  ) {
    error.height = (
      <span className={style.text}>
        The maximum weight must be greater than the minimum weight!
      </span>
    );
  }
  if (!input.heightMax) {
    error.heightMax = (
      <span className={style.text}>Please enter the maximum height!</span>
    );
  }
  if (!input.weightMin || input.weightMin < 0) {
    error.weightMin = (
      <span className={style.text}>Please enter the minimum weight!</span>
    );
  }
  if (
    input.weightMin &&
    input.weightMax &&
    parseInt(input.weightMin) >= parseInt(input.weightMax)
  ) {
    error.weight = (
      <span className={style.text}>
        The maximum weight must be greater than minimum weight!
      </span>
    );
  }
  if (!input.weightMax) {
    error.weightMax = (
      <span className={style.text}>Please enter the maximum weight!</span>
    );
  }

  if (!input.lifeSpan) {
    error.lifeSpan = <span className={style.text}>Life Span is required!</span>;
  }

  return error;
};
export default validate;
