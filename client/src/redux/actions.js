import axios from 'axios';
import {
  GET_DOGS,
  GET_DOGS_BY_ID,
  GET_TEMPERAMENTS,
  FILTER_BY_VALUE,
  FILTER_CREATED,
  FILTER_BY_TEMPERAMENT,
  SEARCH_NAME,
  DOGS_DETAIL,
  POST_DOG,
  ORDER_BY_NAME,
} from './indexTypes';

const URL_BASE = 'http://localhost:3001';

export const getDogs = () => {
  return async function (dispatch) {
    const apiData = await axios.get(`${URL_BASE}/dogs`);
    const dogs = apiData.data;
    dispatch({ type: GET_DOGS, payload: dogs });
  };
};
