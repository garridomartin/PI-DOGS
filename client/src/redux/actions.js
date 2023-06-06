import axios from 'axios';
import {
  GET_DOGS,
  ORDER_BY_NAME,
  ORDER_BY_WEIGHT,
  DOGS_DETAIL,
  GET_DOGS_BY_ID,
  GET_TEMPERAMENTS,
  FILTER_CREATED,
  FILTER_BY_TEMPERAMENT,
  SEARCH_NAME,
  POST_DOG,
} from './indexTypes';

const URL_BASE = 'http://localhost:3001';

export const getDogs = () => {
  return async function (dispatch) {
    const apiData = await axios.get(`${URL_BASE}/dogs`);
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
    const json = await axios.get(`http://localhost:3001/dogs/${id}`);
    return dispatch({
      type: DOGS_DETAIL,
      payload: json.data,
    });
  };
};
