import React from 'react';
import {FlatList, Dimensions} from 'react-native';
import Card from './Card';

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

  const renderItem = ({item}) => <Card item={item} />;

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

export default MyCarousel;
