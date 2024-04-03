import {Text, TextInput, View, StyleSheet} from 'react-native'
import Botao1 from '../components/Botao1'
import InputText from '../components/InputText'
import Header from '../components/Header'
import { useState } from 'react'

const RecuperacaoSenha = () => {
    const [email, setEmail] = useState('')

    return(
        <View style={estilos.fundo}>
            <View>
                <Header />
            </View>
            <View>
                <View>

                </View>
                <Botao1  texto='RECUPERAR'/>
            </View>
        </View>
    )
}

const estilos = StyleSheet.create({
    fundo: {
        display: 'flex',
        flex: 1,
        backgroundColor: '#372775',
        alignItems: 'center'
    },

})

export default RecuperacaoSenha