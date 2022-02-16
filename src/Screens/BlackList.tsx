import React, {FC, Fragment} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Text,
} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {arrow} from '../Components/svgs';
import {useTypedSelector} from '../customHooks/useTypedSelector';
import {InfoItem} from '../Components/InfoItem';
import {StackParamsNavigationProps} from '../Routes/StackParams';
const {height} = Dimensions.get('window');

export const BlackList: FC<StackParamsNavigationProps<'BlackList'>> = ({
  navigation,
}) => {
  const {blackList} = useTypedSelector(state => state.storageList);
  return (
    <Fragment>
      <View style={styles.root}>
        <TouchableOpacity
          style={styles.arrow}
          onPress={() => navigation.navigate('Favourites')}>
          <SvgXml width={20} height={20} xml={arrow} />
        </TouchableOpacity>
        {!blackList?.length ? (
          <View style={styles.empty}>
            <Text>Blacklist Is Empty</Text>
          </View>
        ) : (
          <FlatList
            style={styles.flatHeigth}
            data={blackList || []}
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
  goBack: {
    width: 60,
    height: 60,
    borderRadius: 20,
  },
  arrow: {
    margin: 10,
    width: 30,
    height: 30,
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
