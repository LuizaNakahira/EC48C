import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';

import Header from '../components/Header'
import Botao from '../components/Botao1'

const NovaPesquisa = () => {
  return (
    <View>
      <Header texto={"Nova pesquisa"}/>
      <View style={estilos.containerForms}>
        <View style={estilos.containerInputs}>
            <View style={estilos.camposInput}>
                <Text style={estilos.label}>Nome</Text>
                <TextInput placeholder="Digite seu nome"/>
                <Text>Preencha no nome da pesquisa</Text>
            </View>
            <View style={estilos.camposInput}>
                <Text style={estilos.label}>Data</Text>
                <TextInput placeholder="Digite seu nome"/>
                <Text>Preencha a data</Text>
            </View>
            <View style={estilos.camposInput}>
                <Text style={estilos.label}>Imagem</Text>
                <TouchableOpacity><Text>Câmera/Galeria de imagens</Text></TouchableOpacity>
            </View>
        </View>
        
        <Botao texto="CADASTRAR"/>
    </View>
    </View>
    
  )
}

const estilos = StyleSheet.create({
    containerForms: {
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 46,
        width: '100%',
        paddingHorizontal: 60,
        paddingVertical: 30
    },

    containerInputs: {
        gap: 13,
        width: '100%'
    },

    camposInput: {
        width: '100%'
    },

    label: {
        color: 'white',
        
    }

})

export default NovaPesquisa
