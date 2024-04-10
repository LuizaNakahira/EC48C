import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import  { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContet from './src/screens/DrawerContent';
import Home from './src/screens/Home';
import Icon from 'react-native-vector-icons/MaterialIcons';


//const Stack = createStackNavigator();
const Drawer = createDrawerNavigator()

const App = () => {
  return (
    <NavigationContainer >
      {/*
        <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Drawer" component={Drawer} />
      </Stack.Navigator>
      */}

      <Drawer.Navigator 
      screenOptions={{ 
        drawerLabelStyle: { display: 'flex' , color: 'white', fontSize: 24} }} 
        initialRouteName='Home' 
        drawerContent={(props) => <DrawerContet {...props} />} 
      >
                
        <Drawer.Screen name="Pesquisas" component={Home} 
        options={{ 
          drawerIcon: () => <Icon color="white" size={20} name="description" /> }} />
                
      </Drawer.Navigator>

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