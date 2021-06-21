import { useRoute, RouteProp } from "@react-navigation/native";
import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { TextInput } from "react-native-gesture-handler";
const image = require("../../../assets/images/Saly-31.png");
import styles from "./styles";

type StackParamsList = {
  params: {
    isBuy: boolean;
    coin: {
      current_price: number;
      amount: string;
      symbol: string;
      name: string;
    };
  };
};

const CoinExchangeScreen = () => {
  const route = useRoute<RouteProp<StackParamsList, "params">>();
  const { isBuy, coin } = route.params;
  const maxUSD = 100000;

  const [coinAmount, setCoinAmount] = React.useState("0");
  const [coinValue, setCoinValue] = React.useState("");

  React.useEffect(() => {
    const amount = parseFloat(coinAmount);
    if (!amount && amount !== 0) {
      setCoinAmount("");
      setCoinValue("");
      return;
    }
    setCoinValue((amount * coin?.current_price).toString());
  }, [coinAmount]);

  React.useEffect(() => {
    const amount = parseFloat(coinValue);
    if (!amount && amount !== 0) {
      setCoinAmount("");
      setCoinValue("");
      return;
    }
    setCoinAmount((amount / coin?.current_price).toString());
  }, [coinValue]);

  const onPlaceOrder = () => {
    console.log("onPlaceOrder", parseFloat(coinValue).toFixed(2));
    if (isBuy && parseFloat(coinValue) > maxUSD) {
      console.log("Error", `Not enough USD coins. Max: ${maxUSD}`);
      return;
    }

    if (!isBuy && coinAmount > coin.amount) {
      console.log(
        "Error",
        `Not enough ${coin.symbol} coins. Max: ${coin.amount}`
      );
      return;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {isBuy ? "Buy" : "Sell"} {coin.name}
      </Text>
      <Text style={styles.subtitle}>
        1 {coin.symbol} = {coin.current_price}
      </Text>
      <Image style={styles.image} source={image} />
      <View style={styles.inputContainer}>
        <View style={styles.input}>
          <TextInput
            placeholder="0"
            keyboardType="numeric"
            value={coinAmount}
            onChangeText={setCoinAmount}
          />
          <Text
            style={{
              fontSize: 15,
              textTransform: "uppercase",
              fontWeight: "bold",
            }}
          >
            {coin?.symbol}
          </Text>
        </View>
        <Text style={{ fontSize: 30 }}>=</Text>
        <View style={styles.input}>
          <TextInput
            placeholder="0"
            keyboardType="decimal-pad"
            value={coinValue}
            onChangeText={setCoinValue}
          />
          <Text
            style={{
              fontSize: 15,
              textTransform: "uppercase",
              fontWeight: "bold",
            }}
          >
            USD
          </Text>
        </View>
      </View>

      <Pressable style={styles.button} onPress={onPlaceOrder}>
        <Text style={styles.buttonText}>Place Order</Text>
      </Pressable>
    </View>
  );
};

export default CoinExchangeScreen;
