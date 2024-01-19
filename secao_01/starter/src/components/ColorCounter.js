import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
  return (
    <View>
      <Text style={{fontSize: 30}}>{color}</Text>
      <Button title={`Increase ${color}`} onPress={() => onIncrease()} />
      <Button title={`Decrease ${color}`} onPress={() => onDecrease()} />
    </View>
  )
}

const styles = StyleSheet.create({});

export default ColorCounter;