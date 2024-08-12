import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Botao1 from '../components/Botao1';
import Search from '../components/Search';
import MyCarousel from '../components/MyCarousel';
import AcoesPesquisa from './AcoesPesquisa';
import { useDispatch } from 'react-redux'
import { reducerSetPesquisa } from '../../redux/pesquisaSlice'
import React, { useState } from 'react';


const Home = (props) => {

  const dispatch = useDispatch()
  const [searchText, setSearchText] = useState(''); 


  const goToDrawer = () => {
    props.navigation.navigate('Drawer');
  }

  const goToNovaPesquisa = () => {
    props.navigation.navigate('NovaPesquisa')
  }

  const goToAcoesPesquisa = (pesquisa) => {
    dispatch(reducerSetPesquisa(pesquisa)) //redux
    props.navigation.navigate('AcoesPesquisa')
  }

  const handleSearch = (query) => {
    setSearchText(query);
  }; //

  return (
    <View style={estilos.fundo}>     

      <View style={estilos.containerHome}>
        <Search onSearch={handleSearch}/> 
        
        <View style={estilos.containerCarousel}>
        <MyCarousel onPress={goToAcoesPesquisa} searchText={searchText}/>
        </View>
        
        <Botao1 texto="NOVA PESQUISA" funcao={goToNovaPesquisa}/>
      </View>

    </View>
  );
};

const estilos = StyleSheet.create({
  fundo: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#372775',
    alignItems: 'center', 
  },
  headerContainer: {
    width: '100%',
  },
  containerCarousel: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerHome: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    width: '90%',
    justifyContent: 'space-evenly'
  },
});

export default Home;