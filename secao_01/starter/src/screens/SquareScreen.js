import React, { useState } from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import ColorCounter from "../components/ColorCounter";

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const setColor = (color, value) => {
    switch (color) {
      case 'red':
        red + value > 255 || red + value < 0 ? null : setRed(red + value);
        break;
      case 'green':
        green + value > 255 || green + value < 0 ? null : setGreen(green + value);
        break;
      default:
        blue + value > 255 || blue + value < 0 ? null : setBlue(blue + value);
        break;
    }
  }

  return (
    <View>
      <Text style={{fontSize: 30}}>Essa é a SquareScreen</Text>
      <ColorCounter color="Red" onDecrease={() => setColor('red', -25)} onIncrease={() => setColor('red', 25)} />
      <ColorCounter color="Blue" onDecrease={() => setColor('blue', -25)} onIncrease={() => setColor('blue', 25)} />
      <ColorCounter color="Green" onDecrease={() => setColor('green', -25)} onIncrease={() => setColor('green', 25)} />
      <View style={{height: 150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})` }} />
    </View>
  )
}

const styles = StyleSheet.create({});

export default SquareScreen;