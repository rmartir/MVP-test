import React, {FC} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch} from 'react-redux';
import {useTypedSelector} from '../customHooks/useTypedSelector';
import {IFilms, storageTypes} from '../types';
const {height} = Dimensions.get('window');
interface IProps {
  item: IFilms;
  onPress?: () => void;
  onAddBlackList?: () => void;
}
export const InfoItem: FC<IProps> = ({item, onPress, onAddBlackList}) => {
  const dispatch = useDispatch();
  const {favorites, blackList} = useTypedSelector(state => state.storageList);

  return (
    <SafeAreaView>
      <View style={{alignItems: 'center', marginTop: 10}}>
        <View>
          <Text style={styles.textPosition}>Name:{item?.title}</Text>
          <Text style={styles.textPosition}>
            Raiting:{item.imDbRating || 'no raiting'}
          </Text>
        </View>
        <Text style={styles.textPosition}>{item.plot || 'No Description'}</Text>
        <View style={styles.imagePosition}>
          <Image
            source={{
              uri: item.image
                ? `${item.image}`
                : 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg',
            }}
            style={styles.image}
          />
        </View>

        {!blackList.some(blackListItem => blackListItem.id === item.id) && (
          <View style={styles.buttons}>
            {!favorites.some(favorite => favorite.id === item.id) ? (
              <TouchableOpacity onPress={onPress} style={styles.buttonGreen}>
                <Text>Add to Favorites</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => {
                  dispatch({
                    type: storageTypes.REMOVE_FROM_FAVORITE,
                    payload: item.id,
                  });
                }}
                style={styles.buttonRed}>
                <Text>Remove From Favorites</Text>
              </TouchableOpacity>
            )}
          </View>
        )}
        {!favorites.some(favorite => favorite.id === item.id) && (
          <View style={styles.buttons}>
            {!blackList.some(blackListItem => blackListItem.id === item.id) ? (
              <TouchableOpacity
                onPress={onAddBlackList}
                style={styles.buttonBlack}>
                <Text style={styles.buttonColor}>Add to Blacklist</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => {
                  dispatch({
                    type: storageTypes.REMOVE_FROM_BLACK_LIST,
                    payload: item.id,
                  });
                }}
                style={styles.buttonBlack}>
                <Text style={styles.buttonColor}>Remove From BlackList</Text>
              </TouchableOpacity>
            )}
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  content: {
    alignItems: 'center',
  },
  header: {
    paddingTop: 60,
    alignItems: 'flex-end',
    paddingRight: 20,
  },
  modalHeader: {
    flexDirection: 'row',
    paddingTop: 60,
    alignItems: 'center',
    paddingRight: 20,
  },
  input: {
    height: 40,
    width: 250,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  flatHeigth: {height: height * 0.8},

  image: {height: 400, width: 400, resizeMode: 'contain'},
  imagePosition: {alignItems: 'center', justifyContent: 'center'},
  textPosition: {textAlign: 'center', marginVertical: 5, paddingHorizontal: 5},
  buttons: {
    flexDirection: 'row',
    paddingTop: 20,
  },
  buttonGreen: {
    width: 150,
    height: 50,
    backgroundColor: 'green',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  buttonRed: {
    height: 50,
    width: 180,
    backgroundColor: 'red',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  buttonBlack: {
    height: 50,
    width: 180,
    backgroundColor: 'black',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  buttonColor: {
    color: 'white',
  },
});
