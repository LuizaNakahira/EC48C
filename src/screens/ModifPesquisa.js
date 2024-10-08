import {ScrollView, StyleSheet, View, Text, TouchableOpacity, Modal, Image} from 'react-native'
import { useState, useEffect } from 'react'
import { db, storage } from '../config/firebase'
import {doc, updateDoc, deleteDoc, onSnapshot} from 'firebase/firestore'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { uploadBytes, ref, getDownloadURL, deleteObject } from 'firebase/storage';
import { useSelector } from 'react-redux';

import Header from '../components/Header'
import InputText  from '../components/InputText'
import InputText_icon from '../components/InputText_icon'
import Botao1 from '../components/Botao1'
import BotaoModal from '../components/BotaoModal'

import Icon from 'react-native-vector-icons/MaterialIcons';

const ModifPesquisa = (props) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [nome, setNome] = useState('');
    const [data, setData] = useState('');
    const [imagemUrl, setImagemUrl] = useState('');
    const [foto, setFoto] = useState();

    const id = useSelector((state) => state.pesquisa.id)

    useEffect(() => {
        const docRef = doc(db, 'novaPesquisa', id);

        const unsubscribe = onSnapshot(docRef, (snapshot) => {
            if (snapshot.exists()) {
                const pesquisa = snapshot.data();
                setNome(pesquisa.nome);
                setData(pesquisa.data);
                setImagemUrl(pesquisa.imagemUrl);

            } else {
                setNome('');
                setData('');
            }
        });

    }, []);
    
    const capturarImagem = () => {
        launchCamera({mediaType: 'photo', cameraType: 'back', quality: 1})
        .then((result) => {
            setImagemUrl(result.assets[0].uri)
            setFoto(result.assets[0])
        }
        )
        .catch((error) => {
            console.log("Erro capturar imagem: " + JSON.stringify(error))
        }

        )
    }

    const handleModifPesquisa = async () => {
        const pesquisaRef = doc(db, "novaPesquisa", id)

        if (foto) {
            const imagemRef = ref(storage, `imagens/${id}_img.jpeg`);
            const file = await fetch(foto.uri);
            const blob = await file.blob();

            uploadBytes(imagemRef, blob, { contentType: 'image/jpeg' })
            .then( (result) => {
                console.log("Arquivo atualizado com sucesso");
                getDownloadURL(imagemRef)
                .then((url) => {
                    updateDoc(pesquisaRef, {
                        nome,
                        data,
                        imagemUrl: url
                    })
                })
                .catch((error) => {
                    console.log("Erro ao pegar URL: " + JSON.stringify(error))
                })
            })
            .catch((error) => {
                console.log("Erro ao enviar o arquivo: " + JSON.stringify(error))
            })
    
            // Limpa o estado da foto após o upload
            setFoto(null);
        }else {
            // Se nenhuma nova imagem foi capturada, atualiza apenas os outros dados
            updateDoc(pesquisaRef, {
                nome,
                data,
                imagemUrl
            });
        }

        props.navigation.navigate('Drawer');
    }

    const handleDeletePesquisa = () => {
        if(imagemUrl){
            const imagemRef = ref(storage, `imagens/${id}_img.jpeg`);
            deleteObject(imagemRef);
        }
        deleteDoc(doc(db, "novaPesquisa", id))
        props.navigation.navigate('Drawer');
    }

    return (
        <View style={estilos.containerGeral}>
            <Header texto={"Modificar Pesquisa"} onPress={() => props.navigation.pop(2)} />
            <ScrollView style={estilos.containerSecundario} contentContainerStyle={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View style={estilos.containerForms}>
                    <View style={estilos.containerInputs}>
                        <InputText texto={"Nome"} secure={false} tipoInput="default" value={nome} onChangeText={setNome}/>

                        <InputText_icon texto={"Data"} tipoInput="default" value={data} onChangeText={setData}/>

                        <View>
                            <Text style={estilos.label}>Imagem</Text>
                            <TouchableOpacity style={estilos.inputImage} onPress={capturarImagem} >
                                {
                                    imagemUrl ?
                                        <Image source={{uri: imagemUrl}} style={{width: 100, height: 75}} />
                                        :
                                        <Text style={estilos.labelImage}>Sem imagem</Text>
                                }
                            </TouchableOpacity>
                        </View>
                    </View>

                    <Botao1 texto="SALVAR" funcao={handleModifPesquisa} />
                </View>

                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={()=>{
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={estilos.centeredView}>
                        <View style={estilos.modalView}>
                            <Text style={estilos.modalText}>Tem certeza de apagar essa pesquisa?</Text>
                            <View style={estilos.modalButtons}>
                                <BotaoModal texto="SIM" backColor="#FF8383" 
                                    onPress={handleDeletePesquisa}
                                />
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
        gap: 25,
        paddingVertical: 30,
    },

    containerInputs: {
        width: '100%'
    },

    label: {
        fontSize: 16,
        color: 'white',
        fontFamily: 'AveriaLibre-Regular',
        marginBottom: 5,
        
    },

    textInput: {
        height: 40,
        width: "100%",
        backgroundColor: "white",
        color: "black",
        paddingHorizontal: 10
    },

   
    inputImage: {
        height: 100,
        width: "50%",
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
        width: '50%',
        paddingVertical: 25,
        paddingHorizontal: 50,
        alignItems: 'center',
        elevation: 5,
        gap: 30
      },

      modalText: {
        fontFamily: 'AveriaLibre-Bold',
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