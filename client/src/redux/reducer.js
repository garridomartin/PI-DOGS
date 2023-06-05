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

const initialState = {
  dogs: [],
  backupDogs: [],
  temperaments: [],
  detail: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DOGS:
      return { ...state, dogs: action.payload };

    default:
      return { ...state };
  }
};

export default rootReducer;
