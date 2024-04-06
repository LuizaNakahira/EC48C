import {View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';

import { useState } from 'react';

import Header from '../components/Header';
import Botao from '../components/Botao1';
import InputText from '../components/InputText';
import InputText_icon from '../components/InputText_icon';

const nova_pesquisa = () => {
    console.log('nova pesquisa')
}

const NovaPesquisa = () => {
    const [nome, setNome] = useState('')
    const [data, setData] = useState('')
    const [imagem, setImagem] = useState('')


  return (
    <View style={estilos.containerGeral}>
        <Header texto={"Nova pesquisa"}/>
        <ScrollView style={estilos.containerSecundario} contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', gap: 60, }}>
            <View style={estilos.containerForms}>
                <View style={estilos.containerInputs}>
                    <InputText texto={"Nome"} erro="Preencha no nome da pesquisa" secure={false} tipoInput="default"/>
                
                    <InputText_icon texto={"Data"} erro="Preencha a data" />
                    
                    <View style={estilos.camposInput}>
                        <Text style={estilos.label}>Imagem</Text>
                        <TouchableOpacity style={estilos.inputImage}><Text style={estilos.labelImage}>Câmera/Galeria de imagens</Text></TouchableOpacity>
                    </View>
                </View>
                
                <Botao texto="CADASTRAR" funcao={"nova_pesquisa"}/>
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
        width: '80%',
        display: 'flex',
      },

    containerForms: {
        width: '100%',
        display: 'flex',
        gap: 46,
        paddingVertical: 30,
    },

    containerInputs: {
        gap: 13,
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
