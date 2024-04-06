import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HeaderHome = props => {
  return (
    <View style={estilos.headerContainer}>
      <TouchableOpacity onPress={console.log('menuLateral')}>
        <Icon name="menu" size={36} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
};

const estilos = StyleSheet.create({
  headerContainer: {
    width: '100%',
    backgroundColor: '#2B1D62',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 17,
    paddingHorizontal: 14,
    gap: 30,
  }
});

export default HeaderHome;
