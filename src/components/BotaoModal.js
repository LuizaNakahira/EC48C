import {View, TouchableOpacity, Text, StyleSheet} from 'react-native'

const BotaoModal = (props) => {
    const backColor = props.backColor
    return(
        <TouchableOpacity style={[estilos.modalButton, {backgroundColor: backColor}]} onPress={props.onPress}>
            <Text style={estilos.modalButtonText}>{props.texto}</Text>
        </TouchableOpacity>
    )
}

const estilos = StyleSheet.create({
    modalButton: {
        width: '50%',
        height: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },

    modalButtonText: {
        fontFamily: 'AveriaLibre-Regular',
        fontSize: 26,
    }
})

export default BotaoModal