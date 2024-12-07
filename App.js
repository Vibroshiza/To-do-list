import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from "./components/header"
import React, {useState} from "react";
import ListItem from './components/list';
import Form from './components/form';


export default function App() {
  const [listOfItems, setListOfItems] = useState([
    {text: "Погладить кота", key: "1"},
    {text: "Купить чипсов", key: "2"},
    {text: "Дописать код", key: "3"},
  ])

  const addHandler = (text) => {
    setListOfItems((list) => {
      
      return[
        {text: text, key: Math.random().toString(36).substring(7)},
        ...list
      ];
    });
  };
  const deleteHandler = (key) => {
    setListOfItems((list) => {
      return list.filter((listOfItems) => listOfItems.key != key);
    });
  };

  return (
    <View style={styles.header}>
      
      <Header />
      <Form addHandler={addHandler}/>
      <FlatList
        data = {listOfItems}
        renderItem = {({ item }) => (
        <ListItem el={item} deleteHandler={deleteHandler}/>
      )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: '#DCF0FF',
    flex:1,
  },
  container: {
    flex: 1,
    backgroundColor: '#EFF8FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});