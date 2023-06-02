import axios from "axios";

const URL_BASE = "http://localhost:3001";

export const GET_DOGS = "GET_DOGS";
export const getDogs = () => {
  return async function (dispatch) {
    const apiData = await axios.get(`${URL_BASE}/dogs`);
    const dogs = apiData.data;
    dispatch({ type: GET_DOGS, payload: dogs });
  };
};

export const GET_DOGS_BY_ID = "GET_DOGS_BY_ID";
export const getDogById = (id) => {
  return async function (dispatch) {
    const apiData = await axios.get(`${URL_BASE}/dogs/${id}`);
    const dogById = apiData.data;
    dispatch({ type: GET_DOGS_BY_ID, payload: dogById });
  };
};
