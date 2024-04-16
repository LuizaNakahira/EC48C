import {View, StyleSheet} from 'react-native';
import Botao1 from '../components/Botao1';
import InputText from '../components/InputText';
import Header from '../components/Header';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const RecuperacaoSenha = props => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [emailErro, setEmailErro] = useState('');

  const voltar = () => {
    props.navigation.goBack();
  };

  const validarEmail = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleRecuperacao = () => {
    let valid = true;

    if (email.trim() === '') {
      setEmailErro('E-mail parece ser inválido.');
      valid = false;
    } else if (!validarEmail(email)) {
      setEmailErro('E-mail parece ser inválido.');
      valid = false;
    }
    if (valid) {
      props.navigation.goBack();
    }
  };

  return (
    <View style={estilos.fundo}>
      <View style={estilos.headerContainer}>
        <Header
          texto="Recuperação de senha"
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={estilos.fundoContainer}>
        <View>
          <InputText
            tipoInput="email-address"
            texto="E-mail"
            placeholder="jurandir.pereira@hotmail.com"
            onChangeText={setEmail}
            erro={emailErro}
          />
        </View>
        <Botao1 texto="RECUPERAR" funcao={handleRecuperacao} />
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