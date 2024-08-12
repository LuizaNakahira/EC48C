import React from 'react';
import {View, StyleSheet, Text, Dimensions, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const {width} = Dimensions.get('window');

const Card = ({item}) => {

  const imagemUrl = item.imagemUrl

  return (
    <View style={styles.itemContainer}>
      <View style={styles.square}>
        {
          imagemUrl ?
            <Image source={{uri: imagemUrl}} style={{width: 100, height: 90}}/>
            :
            null
        }
        <View style={styles.infos}>
          <Text style={styles.title}>{item.nome}</Text>
          <Text style={styles.date}>{item.data}</Text>
        </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  square: {
    backgroundColor: 'white',
    height: width / 5.0,
    width: width * 0.3,
    borderRadius: 12,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  infos: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    gap: 2,
  },
  title: {
    color: '#419ED7',
    fontSize: 26,
    justifyContent: 'flex-end',
    fontFamily: 'AveriaLibre-Regular',
  },
  date: {
    color: '#80808080',
    fontSize: 14,
    fontFamily: 'AveriaLibre-Regular',
  },
});

export default Card;
