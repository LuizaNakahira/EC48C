import React from 'react';
import {View, StyleSheet, FlatList, Dimensions, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const {width} = Dimensions.get('window');

const MyCarousel = () => {
  const data = [
    {
      title: 'SECOMP 2023',
      iconName: 'devices',
      color: '#A52A2A',
      date: '10/10/2023',
    },
    {
      title: 'UBUNTU 2022',
      iconName: 'groups',
      color: '#708090',
      date: '05/06/2022',
    },
    {
      title: 'MENINAS CPU',
      iconName: 'woman',
      color: '#800000',
      date: '01/04/2022',
    },
    {
      title: 'GUARDA-CHUVA',
      iconName: 'beach-access',
      color: '#00FF00',
      date: '07/04/2024',
    },
  ];

  const renderItem = ({item}) => (
    <View style={styles.itemContainer}>
      <View style={styles.square}>
        <Icon name={item.iconName} size={100} color={item.color} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
    </View>
  );

  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => index.toString()}
      showsHorizontalScrollIndicator={false}
      snapToOffsets={[...Array(data.length)].map(
        (_, i) => i * (width * 0.8 - 40) + (i - 1) * 40,
      )}
      horizontal
      contentContainerStyle={{gap: 20}}
      snapToAlignment={'start'}
      scrollEventThrottle={16}
      decelerationRate="fast"
      renderItem={renderItem}
    />
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

export default MyCarousel;
