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
        <DrawerContentScrollView {...props} contentContainerStyle={{ display: 'flex', flex: 1, justifyContent: 'space-between' }} style={{ backgroundColor: 'purple', }}>
            <View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', paddingVertical: 10 }}>
                    <Text style={{ color: 'white' }}>giovanni@alunos.utfpr.edu.br</Text>
                </View>
                <Divider style={{ borderWidth: 1.5, borderColor: 'white' }} />
                <DrawerItemList {...props} />
            </View>

            <DrawerItem labelStyle={{ color: 'white' }} label="Sair" icon={() => <Icon name="logout" size={20} color="white" />} onPress={() => console.log("Adios muchacho")} />
        </DrawerContentScrollView>
    )
}

export default DrawerContent