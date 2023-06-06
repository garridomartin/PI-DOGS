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

const initialState = {
  dogs: [],
  detail: [],
  backupDogs: [],
  temperaments: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DOGS:
      return { ...state, dogs: action.payload };

    case ORDER_BY_NAME:
      let sortedArr = [...state.dogs];
      sortedArr.sort((a, b) => {
        if (action.payload === 'AZ') {
          return a.name.localeCompare(b.name);
        } else if (action.payload === 'ZA') {
          return b.name.localeCompare(a.name);
        }
        return 0;
      });
      return {
        ...state,
        dogs: sortedArr,
      };

    case ORDER_BY_WEIGHT:
      let sortedArr3 = state.dogs.sort(function (a, b) {
        const weightA = Number(a.peso.split('-')[0]);
        const weightB = Number(b.peso.split('-')[0]);

        if (action.payload === 'HIGH') {
          return weightB - weightA;
        } else if (action.payload === 'LESS') {
          return weightA - weightB;
        } else {
          return 0;
        }
      });

      return {
        ...state,
        dogs: sortedArr3,
      };
    case DOGS_DETAIL:
      return {
        ...state,
        detail: action.payload,
      };
    case SEARCH_NAME:
      return {
        ...state,
        dogs: action.payload,
      };
    case CLEAR_DETAIL:
      return {
        ...state,
        detail: [],
      };
    case CREATE_DOG:
      return {
        ...state,
      };
    case GET_TEMPERAMENTS:
      return {
        ...state,
        temperaments: action.payload,
      };

    default:
      return initialState;
  }
};

export default rootReducer;
