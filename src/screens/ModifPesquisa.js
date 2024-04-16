import {ScrollView, StyleSheet, View, Text, TouchableOpacity, Modal, Alert} from 'react-native'
import { useState } from 'react'

import Header from '../components/Header'
import InputText  from '../components/InputText'
import InputText_icon from '../components/InputText_icon'
import Botao1 from '../components/Botao1'
import BotaoModal from '../components/BotaoModal'

import Icon from 'react-native-vector-icons/MaterialIcons';

const ModifPesquisa = (props) => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={estilos.containerGeral}>
            <Header texto={"Modificar Pesquisa"} />
            <ScrollView style={estilos.containerSecundario} contentContainerStyle={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View style={estilos.containerForms}>
                    <View style={estilos.containerInputs}>
                        <InputText texto={"Nome"} secure={false} tipoInput="default" placeholder="Carnaval 2024"/>

                        <InputText_icon texto={"Data"} tipoInput="default" placeholder={"16/02/2024"}/>

                        <View>
                            <Text style={estilos.label}>Imagem</Text>
                            <TouchableOpacity style={estilos.inputImage}>
                                <Icon  name="celebration" size={50} color="#C60EB3"/>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <Botao1 texto="SALVAR" funcao={"modif_pesquisa"} />
                </View>

                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={()=>{
                        Alert.alert('Modal irá fechar');
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={estilos.centeredView}>
                        <View style={estilos.modalView}>
                            <Text style={estilos.modalText}>Tem certeza de apagar essa pesquisa?</Text>
                            <View style={estilos.modalButtons}>
                                <BotaoModal texto="SIM" backColor="#FF8383"/>
                                <BotaoModal texto="CANCELAR" backColor="#3F92C5" onPress={() => setModalVisible(!modalVisible)}/>
                            </View>
                        </View>
                    </View>
                    
                </Modal>

                <TouchableOpacity style={estilos.containerDel} onPress={() => setModalVisible(true)}>
                    <Icon name="delete" size={40} color="#FFFFFF"/>
                    <Text style={estilos.labelDel}>Apagar</Text>
                </TouchableOpacity>
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
        width: '100%',
        display: 'flex',
      },

    containerForms: {
        width: '80%',
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

    containerDel: {
        position: 'absolute',
        right: 16,
        bottom: 16,
        display: 'flex',
        alignItems: 'center'
    },

    labelDel: {
        fontFamily: 'AveriaLibre-Bold',
        fontSize: 16,
    },

    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        backdropFilter: 'blur(5px)'


      },

      modalView: {
        backgroundColor: '#2B1F5C',
        display: 'flex',
        width: '85%',
        paddingVertical: 25,
        paddingHorizontal: 50,
        alignItems: 'center',
        elevation: 5,
        gap: 30
      },

      modalText: {
        fontFamily: 'AveriaLibre-Bold',
        width: '50%',
        color: 'white',
        fontSize: 25,
        textAlign: 'center'
      },

      modalButtons: {
        display: 'flex',
        flexDirection: 'row',
        gap: 15
      },

      modalButtonYes: {
        backgroundColor: '#FF8383',
        width: '50%',
        height: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      },

      modalButtonNo: {
        backgroundColor: '#3F92C5',
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

export default ModifPesquisa