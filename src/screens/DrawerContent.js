import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem

} from '@react-navigation/drawer';
import { Text, Pressable, View } from 'react-native';
import { Divider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

const DrawerContent = (props) => {
    return(
        <DrawerContentScrollView {...props} contentContainerStyle={{ display: 'flex', flex: 1, justifyContent: 'space-between'}} style={{ backgroundColor: '#2B1F5C'}}>
            <View  style={{ display: 'flex',  paddingVertical: 50,}} >
               
                <View style={{ display: 'flex', flexDirection: 'row',paddingVertical: 20,  justifyContent: 'center'}}>
                    <Text style={{ color: 'white', fontSize: 25 }}>usuario@dominio.com</Text>
                </View>

                <View style={{ display: 'flex', alignItems: 'center', paddingVertical: 20,}}>
                    <Divider style={{ borderWidth: 1.1, borderColor: 'white', width: '80%' }} />
                </View>

                <DrawerItemList {...props} />
          
            </View>

            <DrawerItem 
            contentContainerStyle={{justifyContent: 'flex-end'}}
            labelStyle={{display: 'flex', color: 'white', fontSize: 25}} label="Sair" icon={() => <Icon name="logout" size={33} color="white" />} onPress={() => console.log("Adios muchacho")} />
        </DrawerContentScrollView>
    )
}

export default DrawerContent