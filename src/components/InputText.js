import {StyleSheet, View, Text, TextInput} from 'react-native';

const InputText = props => {
  const texto = props.texto;

  return (
    <View style={estilos.containerEmail}>
      <Text style={estilos.textoInput}>{texto}</Text>
      <TextInput
        keyboardType={props.tipoInput}
        style={estilos.TextInput}
        placeholder={props.placeholder}
        placeholderTextColor={'#3F92C5'}
        secureTextEntry={true}
      />
      <Text style={estilos.textoErrado}>{props.erro}</Text>
    </View>
  );
};

const estilos = StyleSheet.create({
  textoInput: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'AveriaLibre-Regular',
    marginBottom: 5,
  },
  TextInput: {
    backgroundColor: 'white',
    width: '100%',
    height: 'auto',
    paddingLeft: 15,
    fontFamily: 'AveriaLibre-Regular',
    color: '#3F92C5',
  },
  textoErrado: {
    color: '#FD7979',
    fontFamily: 'AveriaLibre-Regular',
    marginVertical: 5,
  },
});

export default InputText;
