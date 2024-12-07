import React, { useState } from "react";
import { StyleSheet, TextInput, Text, Button, View, TouchableOpacity } from "react-native";


export default function Form({addHandler}){
    const[text, setValue] = useState("");
    const onChange = (text) => {
        setValue(text)
    }

    return(
        <View>
            <TextInput style = {styles.input} onChangeText = {onChange} placeholder="Что надо сделать?"/>
            <Button
            style = {styles.button}
            onPress={() => addHandler(text)}
            title="Добавить задачу"/>

        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        borderRadius:5,
        backgroundColor: '#D1C9FD',
        padding: 20,
        borderRadius: 5,
        alignItems: 'center',
        width: "60%",
        marginLeft: "20%",
        marginTop: 10,
        height: "20px",
      },
      
    input:{
        padding:"20px",
        
        borderWidth: 0, 
        borderBottomWidth: 2,
        borderColor: "#095DA0",
        marginTop: 20,
        width: "60%",
        marginLeft: "20%",
        marginBottom: "20px",
        backgroundColor: "#fff",
        fontSize: "17px",
        borderRadius: "5px",
    },
    inputFocused: {
        borderWidth: 1,
      },
});