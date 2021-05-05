import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";

export interface PortfolioCoinProps {
  portfolioCoin: {
    image: string;
    name: string;
    symbol: string;
    amount: number;
    valueUSD: number;
  };
}
const PortfolioCoin = (props: PortfolioCoinProps) => {
  const {
    portfolioCoin: { image, name, symbol, amount, valueUSD },
  } = props;

  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Image style={styles.image} source={{ uri: image }} />
        <View style={styles.coin}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.symbol}>{symbol}</Text>
        </View>
      </View>

      <View style={styles.right}>
        <Text style={styles.valueUSD}>$ {valueUSD}</Text>
        <Text style={styles.amount}>
          {symbol} {amount}
        </Text>
      </View>
    </View>
  );
};

export default PortfolioCoin;
