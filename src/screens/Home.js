import {View, StyleSheet, Text} from 'react-native';
import Botao1 from '../components/Botao1';
import HeaderHome from '../components/HeaderHome';
import Search from '../components/Search';
import MyCarousel from '../components/MyCarousel';

import {useState} from 'react';

const Home = () => {
  return (
    <View style={estilos.fundo}>
      <View style={estilos.headerContainer}>
        <HeaderHome />
      </View>

      <View style={estilos.containerHome}>
        <Search />

        <View style={estilos.containerCarousel}>
          <MyCarousel />
        </View>
  
        <Botao1 texto="NOVA PESQUISA" />
       
        
      </View>
    </View>
  );
};

const estilos = StyleSheet.create({
  fundo: {
    display: 'flex',
    width: '100%',
    flex: 1,
    backgroundColor: '#372775',
    alignItems: 'center',
  },
  headerContainer: {
    width: '100%',
  },
  containerCarousel: {
    display: 'flex',
  },
  containerHome: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    width: '80%',
    backgroundColor: 'yellow',
    justifyContent: 'space-between'
  }
  
});

export default Home;
