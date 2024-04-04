import {StyleSheet, Text, View, TouchableOpacity, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import InputText from '../components/InputText';
import Botao1 from '../components/Botao1';

const Login = () => {
  return (
    <View style={estilos.containerGeral}>
      <View style={estilos.tituloContainer}>
        <Text style={estilos.titulo}>Satisfying.you</Text>
        <Icon name="sentiment-satisfied" size={55} color="#fff" />
      </View>

      <ScrollView style={estilos.containerSecundario} contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', gap: 60, }}>
        <View style={estilos.formularioContainer}>
          <InputText
            tipoInput="email-address"
            texto="E-mail"
            placeholder="jurandir.pereira@hotmail.com"
          />
          <InputText
            tipoInput="default"
            texto="Senha"
            placeholder="*********"
            erro="E-mail e/ou senha inválidos."
            
          />
          <Botao1 texto="Entrar" />
        </View>

        <View style={estilos.botoesContainer}>
          <TouchableOpacity style={estilos.fundoBotaoAzul}>
            <Text style={estilos.textoBotao}>Criar minha conta</Text>
          </TouchableOpacity>

          <TouchableOpacity style={estilos.fundoBotaoCinza}>
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
    paddingVertical: 30,
  },

  tituloContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 28,
    paddingBottom: 20,
  },

  containerSecundario: {
    width: '80%',
    display: 'flex',
  },

  titulo: {
    fontSize: 44,
    fontFamily: 'AveriaLibre-Regular',
    color: '#fff',
  },

  formularioContainer: {
    width: '100%',
    display: 'flex',
    gap: 20,
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
    fontSize: 20,
    color: 'white',
    fontFamily: 'AveriaLibre-Regular',
  },
});

export default Login;
