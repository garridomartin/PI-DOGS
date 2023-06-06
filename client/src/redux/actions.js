import axios from 'axios';
import {
  GET_DOGS,
  ORDER_BY_NAME,
  ORDER_BY_WEIGHT,
  DOGS_DETAIL,
  SEARCH_NAME,
  CLEAR_DETAIL,
  CREATE_DOG,
  GET_TEMPERAMENTS,
  FILTER_CREATED,
  FILTER_BY_TEMPERAMENT,
} from './indexTypes';

const URL_BASE = 'http://localhost:3001/dogs';

export const getDogs = () => {
  return async function (dispatch) {
    const apiData = await axios.get(`${URL_BASE}`);
    const dogs = apiData.data;
    dispatch({ type: GET_DOGS, payload: dogs });
  };
};

export const orderByName = (value) => {
  return {
    type: ORDER_BY_NAME,
    payload: value,
  };
};
export const filterByWeight = (payload) => {
  return {
    type: ORDER_BY_WEIGHT,
    payload,
  };
};

export const dogsDetail = (id) => {
  return async (dispatch) => {
    const apiData = await axios.get(`${URL_BASE}/${id}`);
    return dispatch({
      type: DOGS_DETAIL,
      payload: apiData.data,
    });
  };
};

export const searchByName = (name) => {
  return async (dispatch) => {
    //try {
    const apiData = await axios.get(`${URL_BASE}?name=${name}`);
    return dispatch({
      type: SEARCH_NAME,
      payload: apiData.data,
    });
    //   } catch (error) {
    //     const errorMessage = 'Error al realizar la búsqueda.';
    //     return dispatch({
    //      type: SEARCH_NAME,
    //       payload: { error: errorMessage },
    //     });
  };
};
//};

export const clearDetail = () => {
  return {
    type: CLEAR_DETAIL,
  };
};

export const postDog = ({
  imagen,
  name,
  heightMin,
  heightMax,
  weightMin,
  weightMax,
  expectativaDeVida,
  temperamento,
}) => {
  return async (dispatch) => {
    await axios.post('http://localhost:3001/dogs', {
      imagen,
      name,
      altura: heightMin + ' - ' + heightMax,
      peso: weightMin + ' - ' + weightMax,
      expectativaDeVida: expectativaDeVida + ' years',
      temperamento,
    });
    dispatch({
      type: CREATE_DOG,
    });
  };
};

export const getTemperament = () => {
  return async function (dispach) {
    let temp = await axios.get('http://localhost:3001/temperaments');
    return dispach({
      type: GET_TEMPERAMENTS,
      payload: temp.data,
    });
  };
};
