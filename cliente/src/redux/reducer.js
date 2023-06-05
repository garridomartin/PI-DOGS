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
    case GET_DOGS_BY_ID:
      return { ...state, dogs: action.payload };

    case ORDER_BY_NAME:
      let sortedArr =
        action.payload === 'AZ'
          ? state.dogs.sort(function (a, b) {
              if (a.name > b.name) {
                return 1;
              }
              if (b.name > a.name) {
                return -1;
              }
              return 0;
            })
          : state.dogs.sort(function (a, b) {
              if (a.name > b.name) {
                return -1;
              }
              if (b.name > a.name) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        dogs: sortedArr,
      };

    case FILTER_BY_TEMPERAMENT:
      const allDogs = state.dogs;
      const statusFiltered =
        action.payload === 'temperament'
          ? allDogs
          : allDogs.filter((el) => el.status === action.payload);
      return { ...state, statusFiltered };
    default:
      return { ...state };
  }
};

export default rootReducer;
