import {View, Text, TouchableOpacity, StyleSheet, ScrollView, Image} from 'react-native';
import { useState } from 'react';
import {collection, addDoc, doc, updateDoc} from 'firebase/firestore'
import { db, storage } from '../config/firebase';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { uploadBytes, ref, getDownloadURL } from 'firebase/storage';


import Header from '../components/Header';
import Botao from '../components/Botao1';
import InputText from '../components/InputText';
import InputText_icon from '../components/InputText_icon';


const NovaPesquisa = (props) => {
    const pesquisaCollection = collection(db, "novaPesquisa")

    const [nome, setNome] = useState('')
    const [data, setData] = useState('')
    const [imagem, setImagem] = useState('')
    const [foto, setFoto] = useState()
    const [coleta, setColeta] = useState('')

    const [nomeErro, setNomeErro] = useState('')
    const [dataErro, setDataErro] = useState('')

    const capturarImagem = () => {
        launchCamera({mediaType: 'photo', cameraType: 'back', quality: 1})
        .then((result) => {
            setImagem(result.assets[0].uri)
            setFoto(result.assets[0])
        }
        )
        .catch((error) => {
            console.log("Erro capturar imagem: " + JSON.stringify(error))
        }

        )
    }

    const handleCadastro = async () => {
        let valid = true;
    
        if (nome.trim() === '') {
          setNomeErro('Preencha o nome da pesquisa');
          valid = false;
        } 
    
        if (data.trim() === '') {
          setDataErro('Preencha a data');
          valid = false;
        } 
    
        if (valid) {

            const docPesquisa = {
                nome: nome,
                data: data,
                imagemUrl: '',
                coleta: ''
            }

            const docRef = await addDoc(pesquisaCollection, docPesquisa)
            const id = docRef.id;
            

            const imagemRef = ref(storage, `imagens/${id}_img.jpeg`);
            const file = await fetch(imagem);
            const blob = await file.blob();

            uploadBytes(imagemRef, blob, { contentType: 'image/jpeg' })
            .then( (result) => {
                getDownloadURL(imagemRef)
                .then( (url) => {
                    updateDoc(docRef, {
                        imagemUrl: url
                    }).then(() => {
                        console.log("Pesquisa cadastrada: " + docRef.id);

                        props.navigation.pop();
                    }).catch((error) => {
                        console.log("Erro ao cadastrar a pesquisa: " + JSON.stringify(error));
                    });
                })
                .catch((error) => {
                    console.log("Erro ao pegar URL: " + JSON.stringify(error))
                })
            })
            .catch((error) => {
                console.log("Erro ao enviar o arquivo imagem: " + JSON.stringify(error))
            })
        }
      };

      const voltar = () => {
          props.navigation.goBack() //volta pra tela anterior a essa, nesse caso a home já que pra acessar essa tela é pela home
      }

  return (
    <View style={estilos.containerGeral}>
        <Header texto={"Nova pesquisa"} funcao={voltar} onPress={() => props.navigation.goBack()}/>
        <ScrollView style={estilos.containerSecundario} contentContainerStyle={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View style={estilos.containerForms}>
                <View style={estilos.containerInputs}>
                    <InputText texto={"Nome"} erro={nomeErro} secure={false} tipoInput="default" onChangeText={setNome} value={nome}/>
                
                    <InputText_icon texto={"Data"} onChangeText={setData} erro={dataErro} value={data} placeholder={"DD/MM/YYYY"}/>
                    
                    <View>
                        <Text style={estilos.label}>Imagem</Text>
                        <TouchableOpacity style={estilos.inputImage} onPress={capturarImagem}>
                            
                            {
                                imagem ?
                                    <Image source={{uri: imagem}} style={{width: 100, height: 75}} />
                                    :
                                    <Text style={estilos.labelImage}>Câmera/Galeria de imagens</Text>
                            }
                            
                        </TouchableOpacity>
                    </View>
                </View>
                
                <Botao texto="CADASTRAR" funcao={handleCadastro}/>
            </View>
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

    labelImage: {
        color: "#939393",
        fontSize: 14,
        fontFamily: "AveriaLibre-Regular"
    }

})

export default NovaPesquisa
