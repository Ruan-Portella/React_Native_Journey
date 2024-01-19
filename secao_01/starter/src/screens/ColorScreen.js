import React, { useState } from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const ColorScreen = () => {
  const [colors, setColors] = useState([]);

  return (
    <View>
      <Text style={{fontSize: 30}}>Essa é a ColorScreen</Text>
      <Button title="Add a Color" onPress={() => setColors([...colors, randomRgb()])} />
      <FlatList 
        keyExtractor={(item) => item}
        data={colors} 
        renderItem={({item}) => {
          return <View style={{ height: 100, width: 100, backgroundColor: item}} />
      }} />
    </View>
  )
}

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256); // 0 - 255
  const green = Math.floor(Math.random() * 256); // 0 - 255
  const blue = Math.floor(Math.random() * 256); // 0 - 255
  return `rgb(${red},${green},${blue})`;
}

const styles = StyleSheet.create({});

export default ColorScreen;