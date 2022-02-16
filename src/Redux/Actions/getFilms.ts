import axios from 'axios';
import {Dispatch} from 'react';
import {getFilmAction, getFilmTypes} from '../../types';

export const getFilms = (search: string) => {
  return async (dispatch: Dispatch<getFilmAction>) => {
    try {
      const res = await axios.get(
        `https://imdb-api.com/en/API/AdvancedSearch/k_f0nchc1z/?title=${search}`,
      );

      dispatch({
        type: getFilmTypes.GET_FILMS,
        payload: res?.data?.results,
      });
    } catch (e: any) {
      dispatch({
        type: getFilmTypes.GET_FILMS_ERROR,
        payload: e,
      });
    }
  };
};
