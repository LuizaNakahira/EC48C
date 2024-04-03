import { TouchableOpacity, Text, StyleSheet } from "react-native";

const Botao1 = (props) => {
    const texto = props.texto
    
    return(
        <TouchableOpacity style={estilos.fundoBotao} onPress={props.funcao}>
            <Text style={estilos.textoBotao}>{texto}</Text>
        </TouchableOpacity>
    )
}

const estilos = StyleSheet.create({
    fundoBotao: {
        backgroundColor: '#37BD6D',
        width: 300,
        height: 35,
        alignItems: 'center', 
        justifyContent: 'center'
    },
    textoBotao: {
        fontSize: 20,
        color: 'white',        
    }
})

export default Botao1