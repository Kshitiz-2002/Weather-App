import React from "react";
import { Text, View, StyleSheet, StatusBar } from "react-native";
import { Feather } from "@expo/vector-icons";

const ListItem = (props) => {
    const { dt_txt, min, max, condition } = props
    const { date, temp, item } = styles
    return (
        <View style={item}>
            <Feather name={'sun'} size={50} color={'white'} />
            <Text style={date}>{dt_txt}</Text>
            <Text style={temp}>{min}</Text>
            <Text style={temp}>{max}</Text>
        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: 'royalblue'
    },
    image: {
        flex:1
    }
});

export default ListItem;