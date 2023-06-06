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

    default:
      return { ...state };
  }
};

export default rootReducer;
