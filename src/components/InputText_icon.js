import {StyleSheet, View, Text, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const InputText_icon = (props, erro) => {
  return (
    <View>
        <Text style={estilos.textoInput}>{props.texto}</Text>
        <View style={estilos.containerData}>
            <TextInput 
                keyboardType={props.tipoInput}
                style={estilos.textInput}
                placeholder={props.placeholder} 
                placeholderTextColor={'#3F92C5'}
                onChangeText={props.onChangeText}
            />
            <TouchableOpacity style={estilos.calendarInput}>
                <Icon name="calendar-month" size={40} color="#999998"/>
            </TouchableOpacity>
        </View>
        {erro ? <Text style={estilos.textoErrado}>{props.erro}</Text> : null}
    </View>
  );
};

const estilos = StyleSheet.create({
  textoInput: {
    fontSize: 25,
    color: 'white',
    fontFamily: 'AveriaLibre-Regular',
    marginBottom: 5,
  },

  textInput: {
    height: 40,
    width: "100%",
    height: "auto",
    backgroundColor: "white",
    color: "black",
    paddingHorizontal: 10,
    paddingLeft: 15,
    fontSize: 20,
    color: '#3F92C5',
},
  containerData: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white"
    },

    calendarInput: {
        position: "absolute",
        right: 0
    },

  textoErrado: {
    color: '#FD7979',
    fontFamily: 'AveriaLibre-Regular',
    marginVertical: 5,
  },
});

export default InputText_icon;
