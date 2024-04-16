import {StyleSheet, View, ScrollView} from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native'

import Header from '../components/Header';
import InputText from '../components/InputText';
import Botao1 from '../components/Botao1';

const Cadastrar = () => {
  console.log('cadastrar')
}

const NovaConta = () => {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [novaSenha, setNovaSenha] = useState('')

  const [senhaErro, setSenhaErro] = useState('')

  const navigation = useNavigation()

  const handlePassword = () => {
    let valid = true;

    if (senha.trim() === novaSenha.trim()) {
      setSenhaErro('');
      valid = false;
      navigation.navigate('Login')

    } else {
      setSenhaErro('O campo repetir senha difere da senha');
    }

    if (valid) {
      console.log('Nova Conta realizado com sucesso');
    }
  }

  return (
    <View style={estilos.containerGeral}>
      <Header texto="Nova Conta" onPress={() => navigation.goBack()}/>

      <ScrollView style={estilos.containerSecundario} contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', gap: 60, }}>
        <View style={estilos.formularioContainer}>
          <InputText
            tipoInput="email-address"
            texto="E-mail"
            placeholder="jurandir.pereira@hotmail.com"
            onChangeText={setEmail}
          />
          <InputText
            tipoInput="default"
            texto="Senha"
            placeholder="*********"
            onChangeText={setSenha}
            
          />
          <InputText
            tipoInput="default"
            texto="Repetir senha"
            onChangeText={setNovaSenha}
            erro={senhaErro}
          />
          <Botao1 texto="Cadastrar" funcao={handlePassword} />
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
  },

  containerSecundario: {
    width: '80%',
    display: 'flex',
  },

  formularioContainer: {
    width: '100%',
    display: 'flex',
    gap: 20,
    paddingVertical: 30,
  },
});

export default NovaConta;
