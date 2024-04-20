import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';

import Drawer from './src/screens/Drawer';

import NovaPesquisa from './src/screens/NovaPesquisa';
import Login from './src/screens/Login';
import NovaConta from './src/screens/NovaConta';
import RecuperacaoSenha from './src/screens/RecuperacaoSenha';
import Relatorio from './src/screens/Relatorio';
import ModifPesquisa from './src/screens/ModifPesquisa';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>


        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Relatorio" component={Relatorio} />
        <Stack.Screen name="Drawer" component={Drawer} />
        <Stack.Screen name="NovaPesquisa" component={NovaPesquisa} />
        <Stack.Screen name="NovaConta" component={NovaConta} />
        <Stack.Screen name="RecuperacaoSenha" component={RecuperacaoSenha} />
        <Stack.Screen name="ModifPesquisa" component={ModifPesquisa} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

//TELAS
//onPress = {() => props.navigation.navigate('App')}
//onPress = {() => props.navigation.pop()}
//onPress = {() => props.navigation.push('App')}

//onPress = {() => props.navigation.popToTop()}         desempilhar tudo

//PARA COMPONENTES
//passa por props na tela que está chamando o componente
