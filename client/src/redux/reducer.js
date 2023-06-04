import { GET_DOGS, FILTER_BY_TEMPERAMENT, GET_DOGS_BY_ID } from './actions';

const initialState = {
  dogs: [],
  statusFiltered: 'temperament',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DOGS:
      return { ...state, dogs: action.payload };
    case GET_DOGS_BY_ID:
      return { ...state, dogs: action.payload };
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
