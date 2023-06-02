import { GET_DOGS, GET_DOGS_BY_ID } from './actions';

const initialState = {
  dogs: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DOGS:
      return { ...state, dogs: action.payload };
    case GET_DOGS_BY_ID:
      return { ...state, dogs: action.payload };

    default:
      return { ...state };
  }
};

export default rootReducer;
