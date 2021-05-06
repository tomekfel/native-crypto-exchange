import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import styles from "./styles";

const image = require("../../../assets/images/Saly-16.png");

const ProfileScreen = () => {
  const [user, setUser] = React.useState({
    id: "1",
    name: "Prince Charming",
    email: "email@email.com",
    image: "https://assets.coingecko.com/coins/images/1/small/bitcoin.png",
    netWorth: 100000,
  });

  const signOut = () => {
    console.warn("Sign out");
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View style={styles.userContainer}>
        <View style={styles.left}>
          <Image style={styles.userImage} source={{ uri: user.image }} />
          <View>
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.email}>{user.email}</Text>
          </View>
        </View>

        <View style={styles.right}>
          <Text style={styles.netWorth}>${user.netWorth}</Text>
        </View>
      </View>
      <Pressable onPress={signOut} style={styles.signout}>
        <Text>Sign out</Text>
      </Pressable>
    </View>
  );
};

export default ProfileScreen;
