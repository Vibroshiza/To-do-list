import React from "react";
import { StyleSheet, View, Text} from "react-native";

export default function Header(){
    return(
        <View style = {styles.main}>
            <Text style={styles.text}>ВАЖНЫЕ ДЕЛА</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    main:{
        backgroundColor:"#2196F3",
        padding:"20px",
    },
    text: {
        
        textAlign:"center",
        fontSize: "150%",
        color:"white",
        fontWeight:"800",
        display: "flex",
        margin: "auto",
        width: "50%",
    },
})