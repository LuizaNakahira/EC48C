import {View, StyleSheet, Text, TextInput} from 'react-native';
import Botao1 from '../components/Botao1';
import HeaderHome from '../components/HeaderHome';
import Search from '../components/Search';
import MyCarousel from '../components/MyCarousel';

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
    justifyContent: 'space-around'
  },
});

export default Home;
