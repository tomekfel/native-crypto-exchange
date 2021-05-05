import React from "react";
import { View, Text, Image, FlatList } from "react-native";
import UserRankingsItem from "../../components/UserRankingsItem";
import DATA from "../../../assets/marketcap.json";
import styles from "./styles";

const image = require("../../../assets/images/Saly-20.png");
const portfolioCoins = [
  {
    id: "1",
    name: "Prince Charming",
    image: "https://assets.coingecko.com/coins/images/1/small/bitcoin.png",
    netWorth: 69420,
  },
  {
    id: "2",
    name: "Donkey",
    image: "https://assets.coingecko.com/coins/images/1/small/bitcoin.png",
    netWorth: 420,
  },
  {
    id: "3",
    name: "Fiona",
    image: "https://assets.coingecko.com/coins/images/1/small/bitcoin.png",
    netWorth: 6420,
  },
];

const RankingsScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={portfolioCoins}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <UserRankingsItem user={item} place={index + 1} />
        )}
        ListHeaderComponent={() => (
          <>
            <Image style={styles.image} source={image} />

            <Text style={styles.label}>Rankings</Text>
          </>
        )}
        ListHeaderComponentStyle={{ alignItems: "center" }}
      />
    </View>
  );
};

export default RankingsScreen;
