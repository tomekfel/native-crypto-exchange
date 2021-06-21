import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import styles from "./styles";
const image = require("../../../assets/images/Saly-1.png");
const googleButtonImage = require("../../../assets/images/google.png");

const WelcomeScreen = () => {
  const signInGoogle = () => {};

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <Text style={styles.header}>Welcome to VCrypto</Text>
      <Text style={styles.subtitle}>
        Invest your virtual $100.000 and compete with others
      </Text>

      <Pressable onPress={signInGoogle} style={styles.googleButton}>
        <Image style={styles.buttonImage} source={googleButtonImage} />
      </Pressable>
    </View>
  );
};

export default WelcomeScreen;
