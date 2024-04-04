import { StyleSheet, Text, View } from 'react-native';

import Header from '../components/Header';


const Relatorio = () => {
  return (
    <View style={estilos.containerGeral}>
      <Header texto='Relatório' />
      <Text>relatorio</Text>
    </View>
  );
};

const estilos = StyleSheet.create({
  containerGeral: {
    flex: 1,
    backgroundColor: '#372775',
    display: 'flex',
    alignItems: 'center',
  },
})

export default Relatorio;
