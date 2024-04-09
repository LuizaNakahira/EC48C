import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './src/screens/Home';
import RecuperacaoSenha from './src/screens/RecuperacaoSenha';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
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