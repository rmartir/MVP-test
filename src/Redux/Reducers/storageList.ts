import {storageAction, storageState, storageTypes} from '../../types';

const initialState: storageState = {
  favorites: [],
  blackList: [],
};

export const storageListReducer = (
  state = initialState,
  action: storageAction,
): storageState => {
  switch (action.type) {
    case storageTypes.ADD_TO_FAVORITE:
      return {...state, favorites: [...state.favorites, action.payload]};
    case storageTypes.REMOVE_FROM_FAVORITE:
      const new_favorites = state.favorites.filter(
        item => item.id !== action.payload,
      );
      return {...state, favorites: new_favorites};
    case storageTypes.ADD_TO_BLACK_LIST:
      return {...state, blackList: [...state.blackList, action.payload]};
    case storageTypes.REMOVE_FROM_BLACK_LIST:
      const newBlackList = state.blackList.filter(
        item => item.id !== action.payload,
      );
      return {...state, blackList: newBlackList};
    default:
      return state;
  }
};
