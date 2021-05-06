import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import PercentageChange from "../../components/PercentageChange";
import styles from "./styles";
import DATA from "../../../assets/marketcap.json";

const CoinDetailsScreen = () => {
  const [coin, setCoin] = React.useState(DATA[0]);
  const [amount, setAmount] = React.useState(0.002);

  const onBuy = () => {
    console.warn("buy");
  };

  const onSell = () => {
    console.warn("sell");
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.left}>
          <Image style={styles.image} source={{ uri: coin.image }} />

          <View>
            <Text style={styles.name}>{coin.name}</Text>
            <Text style={styles.symbol}>{coin.symbol}</Text>
          </View>
        </View>

        <View style={{ alignItems: "flex-end" }}>
          <AntDesign name="staro" size={30} color="#2f95dc" />
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.valueContainer}>
          <Text style={styles.label}>Current price</Text>
          <Text style={styles.value}>${coin.current_price}</Text>
        </View>

        <View style={{ flexDirection: "row" }}>
          <View style={styles.valueContainer}>
            <Text style={styles.label}>1 hour</Text>
            <PercentageChange value={coin.price_change_percentage_24h} />
          </View>

          <View style={styles.valueContainer}>
            <Text style={styles.label}>1 day</Text>
            <PercentageChange value={coin.price_change_percentage_24h} />
          </View>

          <View style={styles.valueContainer}>
            <Text style={styles.label}>7 days</Text>
            <PercentageChange value={coin.price_change_percentage_24h} />
          </View>
        </View>
      </View>

      <View style={styles.row}>
        <Text>Position</Text>
        <Text>
          {coin.symbol} {amount} (${coin.current_price * amount})
        </Text>
      </View>

      <View style={[styles.row, { marginTop: "auto" }]}>
        <Pressable
          style={[styles.button, { backgroundColor: "green" }]}
          onPress={onBuy}
        >
          <Text style={styles.buttonText}>Buy</Text>
        </Pressable>

        <Pressable
          style={[styles.button, { backgroundColor: "red" }]}
          onPress={onSell}
        >
          <Text style={styles.buttonText}>Sell</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CoinDetailsScreen;
