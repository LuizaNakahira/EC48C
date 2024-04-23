import React from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const {width} = Dimensions.get('window');

const Card = ({item}) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.square}>
        <Icon name={item.iconName} size={100} color={item.color} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  square: {
    backgroundColor: 'white',
    height: width / 5.0,
    width: width * 0.3,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#419ED7',
    fontSize: 20,
    justifyContent: 'flex-end',
    fontFamily: 'AveriaLibre-Regular',
  },
  date: {
    color: '#80808080',
    fontSize: 12,
    fontFamily: 'AveriaLibre-Regular',
  },
});

export default Card;
