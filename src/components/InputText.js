import {StyleSheet, View, Text, TextInput} from 'react-native';

const InputText = (props, erro) => {
  const texto = props.texto;
  const secure = props.secure 

  return (
    <View style={estilos.containerEmail}>
      <Text style={estilos.textoInput}>{texto}</Text>
      <TextInput
        keyboardType={props.tipoInput}
        style={estilos.TextInput}
        placeholder={props.placeholder}
        placeholderTextColor={'#3F92C5'}
        secureTextEntry={secure} //passe por props 'true' ou 'false'
        onChangeText={props.onChangeText}
        value={props.value}
      />
      {erro ? <Text style={estilos.textoErrado}>{props.erro}</Text> : null}
    </View>
  );
};

const estilos = StyleSheet.create({
  textoInput: {
    fontSize: 16,
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
    fontSize: 16
  },
  textoErrado: {
    color: '#FD7979',
    fontFamily: 'AveriaLibre-Regular',
    marginVertical: 0,
  },
});

export default InputText;
