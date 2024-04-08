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

      <Search />

      <View style={estilos.containerHome}>
        <View style={estilos.containerCarousel}>
          <MyCarousel />
        </View>
      </View>
      <Botao1 texto="NOVA PESQUISA" />
    </View>
  );
};

const estilos = StyleSheet.create({
  fundo: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#372775',
  },
  headerContainer: {
    width: '100%',
  },
  containerCarousel: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerHome: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    width: '100%',
    backgroundColor: 'yellow',
    justifyContent: 'center',
  },
});

export default Home;
