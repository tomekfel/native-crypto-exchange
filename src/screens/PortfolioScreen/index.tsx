import React from "react";
import { View, Text, Image, FlatList } from "react-native";
import PortfolioCoin from "../../components/PortfolioCoin";
import styles from "./styles";

const image = require("../../../assets/images/Saly-10.png");
const portfolioCoins = [
  {
    id: "1",
    name: "Virtual Dollars",
    symbol: "USD",
    amount: 69.42,
    valueUSD: 6942,
    image: "https://assets.coingecko.com/coins/images/1/small/bitcoin.png",
  },
  {
    id: "2",
    name: "Bitcoin",
    symbol: "BTC",
    amount: 1.12,
    valueUSD: 42350,
    image: "https://assets.coingecko.com/coins/images/1/small/bitcoin.png",
  },
  {
    id: "3",
    name: "Ethereum",
    symbol: "ETH",
    amount: 30,
    valueUSD: 300120,
    image: "https://assets.coingecko.com/coins/images/1/small/bitcoin.png",
  },
];

const PortfolioScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View style={styles.balanceContainer}>
        <Text style={styles.label}>Portfolio balance</Text>
        <Text style={styles.balance}>$69,420</Text>
      </View>

      <FlatList
        style={styles.list}
        data={portfolioCoins}
        renderItem={({ item }) => <PortfolioCoin portfolioCoin={item} />}
      />
    </View>
  );
};

export default PortfolioScreen;
