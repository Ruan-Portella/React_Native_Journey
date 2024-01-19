import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";

const TextScreen = () => {
  const [name, setName] = useState('');

  return (
    <View>
      <Text style={{fontSize: 30}}>Essa é a TextScreen</Text>
      <TextInput style={styles.input} autoCapitalize="none" autoCorrect={false} onChangeText={(value) => setName(value)} />
      <Text>Meu nome é {name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1
  }
});

export default TextScreen;