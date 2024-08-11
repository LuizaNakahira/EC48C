import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import DrawerContent from './DrawerContent';
import Home from './Home';
import Icon from 'react-native-vector-icons/MaterialIcons';

const DrawerNavigator = createDrawerNavigator()

const Drawer = (props) => {
    return(
        <DrawerNavigator.Navigator 
      screenOptions={{ 
        headerStyle: {
          backgroundColor: '#372775'
        },
        headerTintColor: '#FFF',
        headerShadowVisible: false,
        headerTitle: '',
        drawerLabelStyle: {
          fontSize: 22, 
        }
        
      
      }} 
        initialRouteName='Home' 
        drawerContent={(props) => <DrawerContent {...props} />} 
      >

       
        <DrawerNavigator.Screen 
        name="Pesquisas" 
        component={Home}
        options={{ 
          drawerActiveBackgroundColor: '#2B1F5C',
          drawerActiveTintColor: '#FFF',
          drawerIcon: () => <Icon color="white" size={33} name="description" /> }} />
                
      </DrawerNavigator.Navigator>
    )
}

export default Drawer