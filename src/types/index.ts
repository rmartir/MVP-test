export interface getFilmState {
  films: IFilms[];
  error: null | string;
}

export interface IFilms {
  id: string;
  title: string;
  imDbRating: number;
  plot: string;
  image: string;
}

export interface storageState {
  favorites: IFilms[];
  blackList: IFilms[];
}

export enum storageTypes {
  ADD_TO_FAVORITE = 'ADD_TO_FAVORITE',
  REMOVE_FROM_FAVORITE = 'REMOVE_FROM_FAVORITE',
  ADD_TO_BLACK_LIST = 'ADD_TO_BLACK_LIST',
  REMOVE_FROM_BLACK_LIST = 'REMOVE_FROM_BLACK_LIST',
}
export enum getFilmTypes {
  GET_FILMS = 'GET_FILMS',
  GET_FILMS_ERROR = 'GET_FILMS_ERROR',
}

interface getFilm {
  type: getFilmTypes.GET_FILMS;
  payload: IFilms[];
}
interface getFilmErrorAction {
  type: getFilmTypes.GET_FILMS_ERROR;
  payload: string;
}
interface addToFavorite {
  type: storageTypes.ADD_TO_FAVORITE;
  payload: IFilms;
}
interface removeFromFavorite {
  type: storageTypes.REMOVE_FROM_FAVORITE;
  payload: number | string;
}
interface addToBlackList {
  type: storageTypes.ADD_TO_BLACK_LIST;
  payload: IFilms;
}
interface removeFromBlackList {
  type: storageTypes.REMOVE_FROM_BLACK_LIST;
  payload: number | string;
}
export type getFilmAction = getFilm | getFilmErrorAction;
export type storageAction =
  | addToFavorite
  | removeFromFavorite
  | addToBlackList
  | removeFromBlackList;
