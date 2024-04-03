import {View, StyleSheet} from 'react-native'
import Botao1 from '../components/Botao1'
import InputText from '../components/InputText'
import Header from '../components/Header'
import { useState } from 'react'

const RecuperacaoSenha = () => {
    const [email, setEmail] = useState('')

    return(
        <View style={estilos.fundo}>
            <View>
                <Header texto='Recuperação de senha'/>
            </View>
            <View style={estilos.fundoContainer}>
                <View>
                    <InputText texto='E-mail' />
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
    fundoContainer: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        rowGap: 80 
    }
})

export default RecuperacaoSenha