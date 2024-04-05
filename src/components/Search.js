import {StyleSheet,View} from 'react-native';
import { useState } from 'react';
import {PaperProvider , MD3LightTheme as DefaultTheme} from 'react-native-paper';
import { Searchbar } from 'react-native-paper';

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: 'tomato',
        secondary: 'yellow'
    }
}

const Search = (props) => {
    const [searchQuery, setSearchQuery] = useState('');

    return(
        <PaperProvider theme={theme}>
           
                <Searchbar style={estilos.pesquisa} placeholder="Insira o termo de busca..." onChangeText={setSearchQuery} value={searchQuery}  />           

        </PaperProvider>
    )
}

const estilos = StyleSheet.create({
    pesquisa: {
        backgroundColor: 'white',
        height: 'auto',
        width: 'auto',
        borderRadius: 0
    }
})

export default Search;