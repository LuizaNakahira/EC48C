import {StyleSheet, View, ScrollView} from 'react-native';
import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth_mod } from '../config/firebase';

import Header from '../components/Header';
import InputText from '../components/InputText';
import Botao1 from '../components/Botao1';

const NovaConta = (props) => {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [novaSenha, setNovaSenha] = useState('')

  const [senhaErro, setSenhaErro] = useState('')

  const validarEmail = email => {
    //validar email
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
  }

  const handlePassword = () => {
    let valid = true;

    if (senha.trim() === '' || novaSenha.trim() === '' || email.trim() === '') {
      valid = false
      setSenhaErro('Preencha todos os campos')

    } else if (!validarEmail(email)) {
      setSenhaErro('E-mail e/ou senha inválidos.')
      valid = false

    } else if (senha.trim() === novaSenha.trim()){
      setSenhaErro('');
      
    } else {
      valid = false
      setSenhaErro('O campo repetir senha difere da senha')
    }

    if (valid) {
      cadastrarUsuario();
    }
  }

  const cadastrarUsuario = () => {
    createUserWithEmailAndPassword(auth_mod, email, senha)
      .then(() => {
        setEmail('');
        setSenha('');
        setNovaSenha('');
        props.navigation.navigate('Login')
      })

      .catch((error) => {
        switch (error.code) {
          case 'auth/invalid-email':
            setSenhaErro('E-mail e/ou senha inválidos.');
            break;
          case 'auth/email-already-in-use':
            setSenhaErro('Este endereço de e-mail já está sendo usado por outra conta.');
            break;
          case 'auth/operation-not-allowed':
            setSenhaErro('O cadastro de novos usuários está desativado.');
            break;
          case 'auth/weak-password':
            setSenhaErro('A senha é muito fraca. Escolha uma senha mais forte.');
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
      <Header texto="Nova Conta" onPress={() => props.navigation.goBack()}/>

      <ScrollView style={estilos.containerSecundario} contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', gap: 60, }}>
        <View style={estilos.formularioContainer}>
          <InputText
            tipoInput="email-address"
            texto="E-mail"
            placeholder="jurandir.pereira@hotmail.com"
            onChangeText={setEmail}
            value={email}
          />
          <InputText
            tipoInput="visible-password"
            texto="Senha"
            placeholder="*********"
            onChangeText={setSenha}
            value={senha}
            
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
    paddingVertical: 20,
  },
});

export default NovaConta;
