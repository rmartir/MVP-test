import {combineReducers} from 'redux';
import {getFilmReducer} from './getFilms';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {storageListReducer} from './storageList';
export type RootStateType = ReturnType<typeof rootReducer>;
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['getFilms'],
};
const stogrageConfig = {
  key: 'storageList',
  storage: AsyncStorage,
  whitelist: ['favorites', 'blackList'],
};
const rootReducer = combineReducers({
  getFilms: getFilmReducer,
  storageList: persistReducer(stogrageConfig, storageListReducer),
});

export default persistReducer<RootStateType>(persistConfig, rootReducer);
