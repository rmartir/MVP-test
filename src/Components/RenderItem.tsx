import React, {FC, Fragment, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Modal,
} from 'react-native';
import {IFilms, storageTypes} from '../types';
import {useDispatch} from 'react-redux';
import {InfoItem} from './InfoItem';
const {width} = Dimensions.get('window');
interface IProps {
  item: IFilms;
}
export const RenderItem: FC<IProps> = ({item}) => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <Fragment>
      <View style={styles.alignCenter}>
        <TouchableOpacity
          onPress={() => {
            setVisible(true);
          }}
          style={styles.container}>
          <View>
            <Text style={styles.textPosition}>Name:{item?.title}</Text>
            <Text style={styles.textPosition}>
              Raiting:{item?.imDbRating || 'no raiting'}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <Modal animationType="slide" visible={visible}>
        <TouchableOpacity
          style={styles.header}
          onPress={() => setVisible(false)}>
          <Text>Close Modal</Text>
        </TouchableOpacity>
        <InfoItem
          onAddBlackList={() => {
            dispatch({
              type: storageTypes.ADD_TO_BLACK_LIST,
              payload: item,
            });
            setVisible(false);
          }}
          onPress={() => {
            dispatch({
              type: storageTypes.ADD_TO_FAVORITE,
              payload: item,
            });
            setVisible(false);
          }}
          item={item}
        />
      </Modal>
    </Fragment>
  );
};
const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    width: width * 0.9,
    height: 60,
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 10,
  },
  header: {
    paddingTop: 60,
    alignItems: 'flex-end',
    paddingRight: 20,
  },
  textPosition: {textAlign: 'center', marginVertical: 5, paddingHorizontal: 5},
  alignCenter: {alignItems: 'center'},
});
