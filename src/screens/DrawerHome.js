import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const DrawerHome = () => {
  return (
    <View style={estilos.fundoDrawer}>
      <View style={estilos.fundoHeader}>
        <Text style={estilos.textoEmail}>usuario@dominio.com</Text>

        <View style={estilos.divisor} />

        <TouchableOpacity style={estilos.fundoTouchable}>
          <Icon name="description" size={40} color="#FFF" />
          <Text style={estilos.textos}>Pesquisas</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={estilos.fundoTouchable}>
        <Icon name="logout" size={40} color="#FFF" backgroundColor="yellow" />
        <Text style={estilos.textos}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
};

const estilos = StyleSheet.create({
  fundoDrawer: {
    display: 'flex',
    width: '100%',
    flex: 1,
    backgroundColor: '#372775',
    justifyContent: 'space-around',
  },
  fundoHeader: {
    display: 'flex',
    flexDirection: 'column',
    height: '20%',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'orange',
  },
  divisor: {
    display: 'flex',
    backgroundColor: '#FFF',
    alignItems: 'center',
    width: 250,
    height: 2,
    borderRadius: 3,
  },
  fundoTouchable: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'red',
    paddingHorizontal: 60,
  },
  textos: {
    color: '#FFF',
    fontFamily: 'AveriaLibre-Bold',
    fontSize: 25,
    backgroundColor: 'green',
  },
  textoEmail: {
    color: '#FFF',
    fontFamily: 'AveriaLibre-Bold',
    fontSize: 25,
  },
});

export default DrawerHome;
