import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import Icon from 'react-native-vector-icons/MaterialIcons';


const AcoesPesquisa  = (props) => {

  const {id, nome} = props.route.params;

    const goToModifPesquisa = () => {
      props.navigation.navigate('ModifPesquisa', {id})
    }

    const goToColeta = () => {
      props.navigation.navigate('Coleta', {id})
    }

    const goToRelatorio = () => {
      props.navigation.navigate('Relatorio', {id})
    }

    return (

      <View style={estilos.containerGeral}>
        <Header texto={nome} onPress={() => props.navigation.goBack()}/>
        
        <View style={estilos.containerBotoes}>

          <TouchableOpacity onPress={goToModifPesquisa}>
            <View style={estilos.containerBotao}>
              <Icon name="edit-note" size={70} color="#fff" />  
              <Text style={estilos.legenda}> Modificar </Text>  
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={goToColeta}>
            <View style={estilos.containerBotao}>
              <Icon name="library-add-check" size={70} color="#fff" /> 
              <Text style={estilos.legenda}> Coletar dados </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={goToRelatorio}>
            <View style={estilos.containerBotao}>
              <Icon name="donut-large" size={70} color="#fff" />
              <Text style={estilos.legenda}> Relatório </Text>
            </View>
          </TouchableOpacity>

          </View>

        </View>
      );
}

const estilos = StyleSheet.create({
    containerGeral: {
        flex: 1,
        backgroundColor: '#372775',
        flexDirection: 'column',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },

      containerBotoes: {
        flex: 1,
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 65,
      },

      containerBotao: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',    
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#312464',   
        width: 180,
        borderRadius: 10,
        marginHorizontal: 25,
        padding: 15,
      },

      legenda: {
        fontSize: 20, //36
        fontFamily: 'AveriaLibre-Regular',
        color: '#fff',
        textAlign: 'center',
      }

});
  
export default AcoesPesquisa;