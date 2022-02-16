import React, {FC, Fragment} from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Text,
} from 'react-native';
import {useTypedSelector} from '../customHooks/useTypedSelector';
import {InfoItem} from '../Components/InfoItem';
import {SvgXml} from 'react-native-svg';
import {search_Icon} from '../Components/svgs';
import {StackParamsNavigationProps} from '../Routes/StackParams';
const blackListImage = require('../Assets/blackList.png');

const {height} = Dimensions.get('window');

export const Favourites: FC<StackParamsNavigationProps<'Favourites'>> = ({
  navigation,
}) => {
  const {favorites} = useTypedSelector(state => state.storageList);
  return (
    <Fragment>
      <View style={styles.root}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate('BlackList')}>
            <Image source={blackListImage} style={styles.blackList} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.search}
            onPress={() => navigation.navigate('SearchScreen')}>
            <SvgXml width={20} height={20} xml={search_Icon} />
          </TouchableOpacity>
        </View>

        {!favorites?.length ? (
          <View style={styles.empty}>
            <Text>Favorites Is Empty</Text>
          </View>
        ) : (
          <FlatList
            style={styles.flatHeigth}
            data={favorites || []}
            renderItem={({item}) => <InfoItem item={item} />}
            keyExtractor={item => item?.id}
          />
        )}
      </View>
    </Fragment>
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
    paddingRight: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
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
  blackList: {
    width: 30,
    height: 30,
    borderRadius: 20,
  },
  search: {
    width: 35,
    height: 35,
    borderRadius: 5,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  empty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
