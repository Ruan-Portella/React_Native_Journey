import React, { useState } from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View>
      <Text style={{fontSize: 30}}>Essa é a CounterScreen</Text>
      <Button title="Increase" onPress={() => setCounter(counter + 1)} />
      <Button title="Decrease" onPress={() => setCounter(counter - 1)} />
      <Text>Current counter: {counter}</Text>
    </View>
  )
}

const styles = StyleSheet.create({});

export default CounterScreen;