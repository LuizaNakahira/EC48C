import {View, StyleSheet} from 'react-native';
import Botao1 from '../components/Botao1';
import InputText from '../components/InputText';
import Header from '../components/Header';
import {useState} from 'react';

const RecuperacaoSenha = (props) => {
  const [email, setEmail] = useState('');

  return (
    <View style={estilos.fundo}>
      
      <View style={estilos.headerContainer}>
        <Header texto="Recuperação de senha" onPress={() => props.navigation.goBack()}/>
      </View>
      <View style={estilos.fundoContainer}>
        <View>
          <InputText
            tipoInput="email-address"
            texto="E-mail"
            placeholder="jurandir.pereira@hotmail.com"
          />
        </View>
        <Botao1 texto="RECUPERAR" />
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

  fundoContainer: {
    display: 'flex',
    width: '80%',
    flex: 1,
    justifyContent: 'center',
    rowGap: 60,
  },
});

export default RecuperacaoSenha;
