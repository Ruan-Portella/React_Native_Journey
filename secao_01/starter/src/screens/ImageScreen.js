import React from "react";
import { Text, StyleSheet, View } from "react-native";
import ImageDetails from "../components/ImageDetails";

const ImageScreen = () => {
  return (
    <View>
      <Text style={{fontSize: 30}}>Essa é a ImageScreen</Text>
      <ImageDetails title="Forest" imageSource={require('../../assets/forest.jpg')} score={9} />
      <ImageDetails title="Beach" imageSource={require('../../assets/beach.jpg')} score={7} />
      <ImageDetails title="Mountain" imageSource={require('../../assets/mountain.jpg')} score={10} />
    </View>
  )
}

const styles = StyleSheet.create({});

export default ImageScreen;