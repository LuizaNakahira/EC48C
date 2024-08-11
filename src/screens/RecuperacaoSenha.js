import {View, StyleSheet} from 'react-native';
import Botao1 from '../components/Botao1';
import InputText from '../components/InputText';
import Header from '../components/Header';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth_mod } from '../config/firebase';

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
      recuperarSenha();
    }
  };

  const recuperarSenha = () => {
    sendPasswordResetEmail(auth_mod, email)
      .then(() => {
        setEmail('')
        props.navigation.goBack();
      })

      .catch((error) => {
        switch (error.code) {
          case 'auth/invalid-email':
            setSenhaErro('O endereço de e-mail não é válido.');
            break;
          case 'auth/user-not-found':
            setSenhaErro('Não há usuário correspondente a este endereço de e-mail.');
            break;
          case 'auth/network-request-failed':
            setSenhaErro('Falha na rede. Verifique sua conexão com a internet.');
            break;
          default:
            setSenhaErro('Erro ao enviar email de redefinição. Tente novamente.');
            break;
        }
      })
  }

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
            onChangeText={setEmail}
            erro={emailErro}
            value={email}
          />
        </View>
        <Botao1 texto="Recuperar" funcao={handleRecuperacao} />
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