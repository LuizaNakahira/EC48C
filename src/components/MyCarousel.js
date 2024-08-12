import React, {useEffect, useState} from 'react';
import {FlatList, Dimensions, TouchableOpacity} from 'react-native';
import Card from './Card';
import { db } from '../config/firebase';
import {collection, query, onSnapshot} from 'firebase/firestore'

const {width} = Dimensions.get('window');

const MyCarousel = (props) => {
  const pesquisaCollection = collection(db, "novaPesquisa")
  const [listaPesquisa, setListaPesquisa] = useState()

  useEffect( () => {
    const q = query (pesquisaCollection)

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const pesquisa = []
      snapshot.forEach((doc) => {
        pesquisa.push({
          id: doc.id,
          ...doc.data()
        })
      })

      setListaPesquisa(pesquisa)

    })
  }, [])

  const itemPesquisa = ({item}) => (
    <TouchableOpacity onPress={() => props.onPress(item)}>
      <Card item={item} />
    </TouchableOpacity>
  );

  return (
    <FlatList 
      data={listaPesquisa}
      renderItem = {itemPesquisa}
      keyExtractor={(item, index) => index.toString()}
      showsHorizontalScrollIndicator={false}
      // snapToOffsets={[...Array(pesquisa.length)].map(
      //   (_, i) => i * (width * 0.8 - 40) + (i - 1) * 40,
      // )}
      horizontal
      contentContainerStyle={{gap: 20}}
      snapToAlignment={'start'}
      scrollEventThrottle={16}
      decelerationRate="fast"
    />
  );
};

export default MyCarousel;
