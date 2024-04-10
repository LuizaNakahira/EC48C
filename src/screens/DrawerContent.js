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
        <DrawerContentScrollView {...props} contentContainerStyle={{ display: 'flex', flex: 1}} style={{ backgroundColor: '#2B1F5C', }}>
            <View contentContainerStyle={{ display: 'flex', flex: 1}} >
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', paddingVertical: 30 }}>
                    <Text style={{ color: 'white', fontSize: 24 }}>usuario@dominio.com</Text>
                </View>

                <View style={{ display: 'flex', alignItems: 'center' }}>
                    <Divider style={{ borderWidth: 1.5, borderColor: 'white', width: '80%' }} />
                </View>

                <DrawerItemList {...props} />
            </View>

            <DrawerItem labelStyle={{display: 'flex', color: 'white', fontSize: 24}} label="Sair" icon={() => <Icon name="logout" size={20} color="white" />} onPress={() => console.log("Adios muchacho")} />
        </DrawerContentScrollView>
    )
}

export default DrawerContent