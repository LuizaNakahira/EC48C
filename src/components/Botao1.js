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
        display: 'flex',
        backgroundColor: '#37BD6D',
        width: "100%",
        height: 'auto',
        alignItems: 'center', 
        paddingVertical: 8,
        marginVertical: 8
    },
    textoBotao: {
        fontSize: 16,
        color: 'white',
        fontFamily: 'AveriaLibre-Regular'
    }
})

export default Botao1