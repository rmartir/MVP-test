import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Favourites: object | undefined;
  SearchScreen: object | undefined;
  BlackList: object | undefined;
};

export type StackParamsNavigationProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;
