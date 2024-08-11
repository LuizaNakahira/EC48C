import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth_mod } from '../config/firebase';
import { useDispatch } from 'react-redux';
import { reducerSetLogin } from '../../redux/loginSlice';

import InputText from '../components/InputText'
import Botao1 from '../components/Botao1'


const Login = (props) => {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const [senhaErro, setSenhaErro] = useState('')

  const dispatch = useDispatch()

  const validarEmail = email => {
    //validar email
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
  };

  const handleLogin = () => {
    let valid = true

    if (email.trim() === '' || senha.trim() === '') {
      setSenhaErro('E-mail e/ou senha inválidos.')
      valid = false

    } else if (!validarEmail(email)) {
      setSenhaErro('E-mail e/ou senha inválidos.')
      valid = false

    } else {
      setSenhaErro('')
    }

    if (valid) {
      autenticar();
    }
  };

  const autenticar = () => {
    signInWithEmailAndPassword(auth_mod, email, senha)
      .then(() => {
        setEmail('');
        setSenha('');

        dispatch(reducerSetLogin({email: email, senha: senha}))
        
        props.navigation.navigate('Drawer')
      })

      .catch((error) => {
        switch (error.code) {
          case 'auth/invalid-email':
            setSenhaErro('E-mail e/ou senha inválidos.');
            break;
          case 'auth/user-disabled':
            setSenhaErro('Usuário desativado.');
            break;
          case 'auth/user-not-found':
            setSenhaErro('Usuário não encontrado.');
            break;
          case 'auth/wrong-password':
            setSenhaErro('E-mail e/ou senha inválidos.');
            break;
          case 'auth/network-request-failed':
            setSenhaErro('Falha na rede. Verifique sua conexão com a internet.');
            break;
          default:
            setSenhaErro('Erro ao autenticar. Tente novamente.');
            break;
        }
      })
  }

  return (
    <View style={estilos.containerGeral}>
      <View style={estilos.tituloContainer}>
        <Text style={estilos.titulo}>Satisfying.you</Text>
        <Icon name="sentiment-satisfied" size={44} color="#fff" />
      </View>

      <ScrollView
        style={estilos.containerSecundario}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
          gap: 16,
        }}>
        <View style={estilos.formularioContainer}>
          <InputText
            tipoInput="email-address"
            texto="E-mail"
            onChangeText={setEmail}
            value={email}
          />
          <InputText
            tipoInput="visible-password"
            texto="Senha"
            onChangeText={setSenha}
            erro={senhaErro}
            value={senha}
          />
          <Botao1 texto="Entrar" funcao={handleLogin} />
        </View>

        <View style={estilos.botoesContainer}>
          <TouchableOpacity style={estilos.fundoBotaoAzul} onPress={() => {
            setEmail('');
            setSenha('');
            setSenhaErro('');
            props.navigation.navigate('NovaConta')
          }}>
            <Text style={estilos.textoBotao}>Criar minha conta</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={estilos.fundoBotaoCinza}
            onPress={() => {
              setEmail('');
              setSenha('');
              setSenhaErro('');
              props.navigation.navigate('RecuperacaoSenha')
            }}>
            <Text style={estilos.textoBotao}>Esqueci minha senha</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const estilos = StyleSheet.create({
  containerGeral: {
    flex: 1,
    backgroundColor: '#372775',
    display: 'flex',
    alignItems: 'center',
    paddingVertical: 20,
  },

  tituloContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 28,
    paddingBottom: 16,
  },

  containerSecundario: {
    width: '80%',
    display: 'flex',
  },

  titulo: {
    fontSize: 34,
    fontFamily: 'AveriaLibre-Regular',
    color: '#fff',
  },

  formularioContainer: {
    width: '100%',
    display: 'flex',
  },

  botoesContainer: {
    width: '100%',
    display: 'flex',
    gap: 10,
  },

  fundoBotaoAzul: {
    backgroundColor: '#419ED7',
    width: '100%',
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
  },

  fundoBotaoCinza: {
    backgroundColor: '#B0CCDE',
    width: '100%',
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
  },

  textoBotao: {
    fontSize: 16,
    color: 'white',
    fontFamily: 'AveriaLibre-Regular',
  },
});

export default Login;
