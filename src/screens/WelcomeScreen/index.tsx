import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { Auth } from "aws-amplify";
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth/lib/types";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
const image = require("../../../assets/images/Saly-1.png");
const googleButtonImage = require("../../../assets/images/google.png");

const WelcomeScreen = () => {
  const navigation = useNavigation();

  React.useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await Auth.currentAuthenticatedUser();
        if (user) {
          navigation.navigate("Root");
        } else {
          console.log("no user found");
        }
      } catch (e) {}
    };

    fetchUser();
  }, []);

  const signInGoogle = async () => {
    console.log("signInGoogle");
    await Auth.federatedSignIn({
      provider: CognitoHostedUIIdentityProvider.Google,
    });

    // Auth.federatedSignIn({ provider: "Google" });
  };

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
