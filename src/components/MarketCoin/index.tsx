import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";

export interface MarketCoinProps {
  marketCoin: {
    id: string;
    symbol: string;
    name: string;
    image: string;
    current_price?: number;
    market_cap?: number;
    market_cap_rank?: number;
    fully_diluted_valuation?: any;
    total_volume?: number;
    high_24h?: number;
    low_24h?: number;
    price_change_24h?: number;
    price_change_percentage_24h?: number;
    market_cap_change_24h?: number;
    market_cap_change_percentage_24h?: number;
    circulating_supply?: number;
    total_supply?: number | null;
    max_supply?: number | null;
    ath?: number;
    ath_change_percentage?: number;
    ath_date?: string;
    atl?: number;
    atl_change_percentage?: number;
    atl_date?: string;
    roi?: any;
    last_updated?: string;
    amount?: number;
    valueUSD?: number;
  };
}
const MarketCoin = (props: MarketCoinProps) => {
  const {
    marketCoin: {
      image,
      name,
      symbol,
      current_price,
      price_change_percentage_24h,
    },
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
        <Text style={styles.currentPrice}>${current_price}</Text>
        <Text
          style={{
            color:
              price_change_percentage_24h && price_change_percentage_24h > 0
                ? "green"
                : "red",
          }}
        >
          {price_change_percentage_24h
            ? price_change_percentage_24h.toFixed(2)
            : 0}
          %
        </Text>
      </View>
    </View>
  );
};

export default MarketCoin;
