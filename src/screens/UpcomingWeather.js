import React from "react";
import { Text, SafeAreaView, StyleSheet, FlatList, StatusBar, ImageBackground } from 'react-native';
import ListItem from "../components/ListItem";

const DATA = [
    {
        "dt_txt": "2022-08-30 16:00:00",
        "main": {
            "temp_min": 296.34,
            "temp_max": 298.24
        },
        "weather": [
            {
                "main": "Rain",
            }
        ]
    },
    {
        "dt_txt": "2022-08-30 17:00:00",
        "main": {
            "temp_min": 296.2,
            "temp_max": 296.31
        },
        "weather": [
            {
                "main": "Rain",
            }
        ]
    },
    {
        "dt_txt": "2022-08-30 18:00:00",
        "main": {
            "temp_min": 292.84,
            "temp_max": 294.94
        },
        "weather": [
            {
                "main": "Rain",
            }
        ]
    }
]



const UpcomingWeather = () => {
    const renderItem = ({ item }) => (
        <ListItem condition={item.weather[0].main} dt_txt={item.dt_txt} min={item.main.temp_min} max={item.main.temp_max} />
    )
    const { container, image } = style
    return (
        <SafeAreaView style={container}>
            <ImageBackground
                source={require('../../assets/upcoming-background.jpg')} style={image}
            >
            <Text>Upcoming Weather</Text>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.dt_txt}
                />
            </ImageBackground>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: 'royalblue'
    },
    item: {
        padding: 20,
        marginHorizontal: 16,
        marginVertical: 8,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderWidth: 5,
        backgroundColor: 'pink'
    },
    temp: {
        color: 'white',
        fontSize: 20
    },
    date: {
        color: 'white',
        fontSize: 15
    },
    image: {
        flex:1
    }
});

export default UpcomingWeather;