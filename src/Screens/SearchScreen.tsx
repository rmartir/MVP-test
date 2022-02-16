import React, {useState, FC} from 'react';
import {
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Dimensions,
  FlatList,
} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {useTypedSelector} from '../customHooks/useTypedSelector';
import {useActions} from '../customHooks/useActions';
import {RenderItem} from '../Components/RenderItem';
import {search_Icon, arrow} from '../Components/svgs';
import {StackParamsNavigationProps} from '../Routes/StackParams';
const {height} = Dimensions.get('window');

export const SearchScreen: FC<StackParamsNavigationProps<'SearchScreen'>> = ({
  navigation,
}) => {
  const {films} = useTypedSelector(state => state.getFilms);
  const {blackList} = useTypedSelector(state => state.storageList);
  const [text, onChangeText] = useState<string>('');
  const {getFilms} = useActions();

  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.searchIcon}
          onPress={() => navigation.goBack()}>
          <SvgXml width={20} height={20} xml={arrow} />
        </TouchableOpacity>
        <View style={styles.search}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
          />

          <TouchableOpacity
            style={styles.searchIcon}
            onPress={() => getFilms(text)}>
            <SvgXml width={20} height={20} xml={search_Icon} />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        style={styles.flatHeigth}
        data={
          films.filter(film => {
            return !blackList.find(item => item.id === film.id);
          }) || []
        }
        renderItem={({item}) => <RenderItem item={item} />}
        keyExtractor={item => item?.id}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    flex: 1,
  },

  header: {
    paddingTop: 60,
    // alignItems: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingRight: 20,
  },

  input: {
    height: 40,
    width: 250,
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
  searchIcon: {
    width: 40,
    height: 40,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  goBack: {
    width: 40,
    height: 40,
  },
  search: {flexDirection: 'row'},
});
