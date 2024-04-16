import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Drawer from './src/screens/Drawer';
import Home from './src/screens/Home';
import 'react-native-gesture-handler'
import NovaPesquisa from './src/screens/NovaPesquisa';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        
        
        <Stack.Screen name="Drawer" component={Drawer}/>
        <Stack.Screen name="NovaPesquisa" component={NovaPesquisa}/>

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