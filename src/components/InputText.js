import { StyleSheet, View, Text, TextInput } from 'react-native'

const InputText = (props) => {
    const texto = props.texto
    
    return(
        <View style={estilos.containerEmail}>
          <Text style={estilos.textoInput}>{texto}</Text>
          <TextInput style={estilos.TextInput} placeholder='jurandir.pereira@hotmail.com' placeholderTextColor={'#3F92C5'}/>
          <Text style={estilos.textoErrado}>E-mail parece ser inválido</Text>
        </View>
        
    )
}

const estilos = StyleSheet.create({
    
    textoInput: {
        fontSize: 20,
        color: 'white', 
    },
    TextInput: {
        backgroundColor: 'white',
        width: 300,
        height: 35,
        paddingLeft: 15
    },
    textoErrado: {
        color: '#FD7979'
    }
})

export default InputText