import {View, StyleSheet, Text} from 'react-native';
import Botao1 from '../components/Botao1';
import HeaderHome from '../components/HeaderHome';
import Search from '../components/Search';

import {useState} from 'react';

const Home = () => {
  return (
    <View style={estilos.fundo}>
      <View style={estilos.headerContainer}>
        <HeaderHome />
      </View>

      <View style={estilos.containerHome}>
        <Search />

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
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContainer: {
    width: '100%',
  },
  containerHome: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    flex: 1,
    backgroundColor: 'blue',
    width: '80%',
    paddingVertical: 20,
  },
});

export default Home;
