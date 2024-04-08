import {StyleSheet, View} from 'react-native';
import {useState} from 'react';
import {PaperProvider, MD3LightTheme as DefaultTheme} from 'react-native-paper';
import {Searchbar} from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    secondary: 'yellow',
  },
};

const Search = props => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Searchbar
      style={estilos.pesquisa}
      placeholder="Insira o termo de busca..."
      placeholderTextColor='gray'
      iconColor='gray'
      inputStyle={{fontFamily: 'AveriaLibre-Regular'}}
      onChangeText={setSearchQuery}
      value={searchQuery}
    />
  );
};

const estilos = StyleSheet.create({
  fundoSearch: {
    display: 'flex',
  },
  pesquisa: {
    backgroundColor: 'white',
    borderRadius: 0,
  },
  placeholder: {
    fontFamily: 'AveriaLibre-Regular',
  },
});

export default Search;
