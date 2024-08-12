import { useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';
import { doc, updateDoc, getDoc, increment } from 'firebase/firestore';
import { db } from '../config/firebase'; 

const Coleta = (props) => {
    const id = useSelector((state) => state.pesquisa.id);
    const nome = useSelector((state) => state.pesquisa.nome);

    const registrarResposta = (tipo) => {
        const pesquisaRef = doc(db, 'novaPesquisa', id);
    
        // Atualiza o campo correspondente no Firestore, incrementando o valor
        updateDoc(pesquisaRef, {
            [`coleta.${tipo}`]: increment(1)
        })
        .then(() => {
            console.log(`${tipo} atualizado com sucesso`);
            props.navigation.navigate('Agradecimento');
        })
        .catch((error) => {
            console.error("Erro ao atualizar avaliação: ", error);
        });
    };
    
    return (
        <View style={estilos.containerGeral}>
            <TouchableOpacity style={estilos.botaoInvisivel} onPress={() => props.navigation.goBack()}>
            </TouchableOpacity>

            <View style={estilos.containerTexto}>
                <Text style={estilos.texto}>O que você achou do {nome}?</Text>
            </View>

            <View style={estilos.containerBotoes}>
                <View style={estilos.containerBotao}>
                    <TouchableOpacity onPress={() => registrarResposta('pessimo')}>
                        <Icon name="sentiment-very-dissatisfied" size={70} color="#D71616" />
                    </TouchableOpacity>
                    <Text style={estilos.legenda}>Péssimo</Text>
                </View>

                <View style={estilos.containerBotao}>
                    <TouchableOpacity onPress={() => registrarResposta('ruim')}>
                        <Icon name="sentiment-dissatisfied" size={70} color="#FF360A" />
                    </TouchableOpacity>
                    <Text style={estilos.legenda}>Ruim</Text>
                </View>

                <View style={estilos.containerBotao}>
                    <TouchableOpacity onPress={() => registrarResposta('neutro')}>
                        <Icon name="sentiment-neutral" size={70} color="#FFC632" />
                    </TouchableOpacity>
                    <Text style={estilos.legenda}>Neutro</Text>
                </View>

                <View style={estilos.containerBotao}>
                    <TouchableOpacity onPress={() => registrarResposta('bom')}>
                        <Icon name="sentiment-satisfied-alt" size={70} color="#37BD6D" />
                    </TouchableOpacity>
                    <Text style={estilos.legenda}>Bom</Text>
                </View>

                <View style={estilos.containerBotao}>
                    <TouchableOpacity onPress={() => registrarResposta('excelente')}>
                        <Icon name="sentiment-very-satisfied" size={70} color="#25BC22" />
                    </TouchableOpacity>
                    <Text style={estilos.legenda}>Excelente</Text>
                </View>
            </View>
        </View>
    );
}

const estilos = StyleSheet.create({

    botaoInvisivel: {
        width: 50,
        height: 50,
        position: 'absolute',
        top: 0,
        right:0
    },

    containerGeral: {
        flex: 1,
        backgroundColor: '#372775',
        flexDirection: 'column',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    containerTexto: {
        flex: 1,
        marginTop: 70, //107
        alignItems: 'center',
    },

    containerBotoes: {
        paddingBottom: 80, //Top: 106
        flex: 1,
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 35,
        marginRight: 35,
    },

    containerBotao: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
    },

    texto: {
        fontSize: 30, //48
        fontFamily: 'AveriaLibre-Regular',
        color: '#fff',
        textAlign: 'center'
    },

    legenda: {
        fontSize: 18, //36
        fontFamily: 'AveriaLibre-Regular',
        color: '#fff',
        textAlign: 'center',
        lineHeight: 40
    }

});

export default Coleta;