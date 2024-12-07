import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default function ListItem ({el, deleteHandler}){
    return(
        <TouchableOpacity onPress={() => deleteHandler(el.key)}>
            <Text style={styles.text}>{el.text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    text:{
        padding:"20px",
        textAlign:"center",
        borderRadius:5,
        backgroundColor: "#F4FAFF",
        borderWidth: 2, 
        borderColor: '#095DA0',
        marginTop: 20,
        width: "60%",
        marginLeft: "20%",
        fontWeight: "bold",
        color: "#095DA0",
    },
})

