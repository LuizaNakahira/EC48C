import {View, Text, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';
import { useState } from 'react';

import Header from '../components/Header';
import Botao from '../components/Botao1';
import InputText from '../components/InputText';
import InputText_icon from '../components/InputText_icon';


const NovaPesquisa = (props) => {
    const [nome, setNome] = useState('')
    const [data, setData] = useState('')
    const [imagem, setImagem] = useState('')

    const [nomeErro, setNomeErro] = useState('')
    const [dataErro, setDataErro] = useState('')

    const handleCadastro = () => {
        let valid = true;
    
        if (nome.trim() === '') {
          setNomeErro('Preencha o nome da pesquisa');
          valid = false;
        } else {
          setNomeErro('');
        }
    
        if (data.trim() === '') {
          setDataErro('Preencha a data');
          valid = false;
        } else {
          setDataErro('');
        }
    
        if (valid) {
          console.log('Cadastro realizado com sucesso'); //apenas para saber que funcionou
          props.navigation.goBack()
          // prosseguir com a lógica de cadastro
        }
      };

      const voltar = () => {
          props.navigation.goBack() //volta pra tela anterior a essa, nesse caso a home já que pra acessar essa tela é pela home
      }

  return (
    <View style={estilos.containerGeral}>
        <Header texto={"Nova pesquisa"} funcao={voltar} onPress={() => props.navigation.goBack()}/>
        <ScrollView style={estilos.containerSecundario} contentContainerStyle={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View style={estilos.containerForms}>
                <View style={estilos.containerInputs}>
                    <InputText texto={"Nome"} erro={nomeErro} secure={false} tipoInput="default" onChangeText={setNome}/>
                
                    <InputText_icon texto={"Data"} onChangeText={setData} erro={dataErro}  />
                    
                    <View style={estilos.camposInput}>
                        <Text style={estilos.label}>Imagem</Text>
                        <TouchableOpacity style={estilos.inputImage}><Text style={estilos.labelImage}>Câmera/Galeria de imagens</Text></TouchableOpacity>
                    </View>
                </View>
                
                <Botao texto="CADASTRAR" funcao={handleCadastro}/>
            </View>
        </ScrollView>
        
    </View>
    
  )
}

const estilos = StyleSheet.create({
    containerGeral: {
        flex: 1,
        backgroundColor: '#372775',
        display: 'flex',
        alignItems: 'center',
      },

      containerSecundario: {
        width: '100%',
        display: 'flex',
      },

    containerForms: {
        width: '80%',
        display: 'flex',
        gap: 46,
        paddingVertical: 30,
    },

    containerInputs: {
        gap: 10,
        width: '100%'
    },

    label: {
        color: 'white',
        fontSize: 25,
        fontFamily: "AveriaLibre-Bold"
        
    },

    textInput: {
        height: 40,
        width: "100%",
        backgroundColor: "white",
        color: "black",
        paddingHorizontal: 10
    },

   
    inputImage: {
        height: 75,
        width: "65%",
        backgroundColor: "white",

        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },

    labelImage: {
        color: "#939393",
        fontSize: 14,
        fontFamily: "AveriaLibre-Regular"
    }

})

export default NovaPesquisa
