import {useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as getFilms from '../Redux/Actions/getFilms';
export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(getFilms, dispatch);
};
