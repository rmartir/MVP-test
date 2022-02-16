import {TypedUseSelectorHook, useSelector} from 'react-redux';
import {RootStateType} from '../Redux/Reducers';

export const useTypedSelector: TypedUseSelectorHook<RootStateType> =
  useSelector;
