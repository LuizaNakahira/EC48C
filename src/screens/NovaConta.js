import {StyleSheet, Text, View, TouchableOpacity, ScrollView} from 'react-native';

import Header from '../components/Header';
import InputText from '../components/InputText';
import Botao1 from '../components/Botao1';
import { useState } from 'react';

const Cadastrar = () => {
  console.log('cadastrar')
}

const NovaConta = () => {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [novaSenha, setNovaSenha] = useState('')

  return (
    <View style={estilos.containerGeral}>
      <Header texto="Nova Conta"/>

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
            
          />
          <InputText
            tipoInput="default"
            texto="Repetir senha"
            erro="O campo repetir senha difere da senha"
            
          />
          <Botao1 texto="Cadastrar" funcao={Cadastrar} />
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
