import {getFilmAction, getFilmState, getFilmTypes} from '../../types';

const initialState: getFilmState = {
  films: [],
  error: null,
};

export const getFilmReducer = (
  state = initialState,
  action: getFilmAction,
): getFilmState => {
  switch (action.type) {
    case getFilmTypes.GET_FILMS:
      return {...state, films: action.payload};
    case getFilmTypes.GET_FILMS_ERROR:
      return {...state, error: action.payload};
    default:
      return state;
  }
};
