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
    <PaperProvider theme={theme}>
      <View style={estilos.fundoSearch}>
        <Searchbar
          style={estilos.pesquisa}
          placeholder="Insira o termo de busca..."
          onChangeText={setSearchQuery}
          value={searchQuery}
          placeholderStyle={{fontFamily: 'AveriaLibre-Regular'}}
        />
      </View>
    </PaperProvider>
  );
};

const estilos = StyleSheet.create({
  fundoSearch: {
    display: 'flex',
    height: 'auto',
    width: 'auto',
  },
  pesquisa: {
    backgroundColor: 'white',
    borderRadius: 0,
  },
});

export default Search;
