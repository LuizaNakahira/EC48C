import React from 'react';
import { View, StyleSheet, FlatList, Dimensions, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width } = Dimensions.get('window');

const MyCarousel = () => {
    const data = [
        { title: 'Item 1', iconName: 'arrow-back', date: '10/1023'},
        { title: 'Item 2' },
        { title: 'Item 3'},
        { title: 'Item 4'}
    ];

    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <View style={styles.square}>
                <Icon name={item.iconName} size={60} color='#573FBA' />
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.date}>{item.date}</Text>
            </View>
        </View>
    );

    return (
        <FlatList
            data={data}
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
            snapToOffsets={[...Array(data.length)].map(
                (_, i) => i * (width * 0.8 - 40) + (i - 1) * 40,
            )}
            horizontal
            snapToAlignment={'start'}
            scrollEventThrottle={16}
            decelerationRate="fast"
            renderItem={renderItem}
        />
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        alignItems: 'center',
        marginHorizontal: 10
    },
    square: {
        backgroundColor: 'white',
        height: width / 1.6,
        width: width * 0.8 - 20,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: 'blue',
        fontSize: 16,
        justifyContent: 'flex-end'
    },
    icon: {
        marginTop: 5
    },
    date: {
        color: 'black',
        fontSize: 10
    }
});

export default MyCarousel;
