import {View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '../components/Header';
import Botao from '../components/Botao1';

const NovaPesquisa = () => {
  return (
    <ScrollView style={estilos.container}>
        <Header texto={"Nova pesquisa"}/>
        <View style={estilos.containerForms}>
            <View style={estilos.containerInputs}>
                <View style={estilos.camposInput}>
                    <Text style={estilos.label}>Nome</Text>
                    <TextInput style={estilos.textInput}/>
                    <Text style={estilos.labelWarn}>Preencha no nome da pesquisa</Text>
                </View>
                <View style={estilos.camposInput}>
                    <Text style={estilos.label}>Data</Text>
                    <View style={estilos.containerData}>
                        <TextInput style={estilos.textInput} />
                        <TouchableOpacity style={estilos.calendarInput}>
                            <Icon name="calendar-month" size={40} color="#999998"/>
                        </TouchableOpacity>
                    </View>
                    <Text style={estilos.labelWarn}>Preencha a data</Text>
                </View>
                <View style={estilos.camposInput}>
                    <Text style={estilos.label}>Imagem</Text>
                    <TouchableOpacity style={estilos.inputImage}><Text style={estilos.labelImage}>Câmera/Galeria de imagens</Text></TouchableOpacity>
                </View>
            </View>
            
            <Botao texto="CADASTRAR"/>
        </View>
    </ScrollView>
    
  )
}

const estilos = StyleSheet.create({
    container: {
        backgroundColor: "#372775",
        height: "100%"
    },

    containerForms: {
        backgroundColor: "#372775",
        display: 'flex',
        alignItems: 'center',
        gap: 46,
        height: "100%",
        paddingHorizontal: 90,
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

    labelWarn: {
        color: "#FD7979",
        fontSize: 15,
        fontFamily: "AveriaLibre-Regular"
    },

    containerData: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white"
    },

    calendarInput: {
        position: "absolute",
        right: 0
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
