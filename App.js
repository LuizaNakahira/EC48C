import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import  { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContet from './src/screens/DrawerContent';
import Home from './src/screens/Home';
import Icon from 'react-native-vector-icons/MaterialIcons';
import 'react-native-gesture-handler'


//const Stack = createStackNavigator();
const Drawer = createDrawerNavigator()

const App = () => {
  return (
    <NavigationContainer 
      screenOptions={{
       
      }}
    >
      {/*
        <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Drawer" component={Drawer} />
      </Stack.Navigator>
      */}

      <Drawer.Navigator 
      screenOptions={{ 
        headerStyle: {
          backgroundColor: '#372775'
        },
        headerTintColor: '#FFF',
        headerShadowVisible: false,
        headerTitle: '',
        drawerLabelStyle: {
          fontSize: 25, 
        }
        
      
      }} 
        initialRouteName='Home' 
        drawerContent={(props) => <DrawerContet {...props} />} 
      >
                
        <Drawer.Screen 
        name="Pesquisas" 
        component={Home}
        options={{ 
          drawerActiveBackgroundColor: '#2B1F5C',
          drawerActiveTintColor: '#FFF',
          drawerIcon: () => <Icon color="white" size={33} name="description" /> }} />
                
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