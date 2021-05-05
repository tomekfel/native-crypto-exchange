import React from "react";
import { View, Text, Image, FlatList } from "react-native";
import MarketCoin from "../../components/MarketCoin";
import DATA from "../../../assets/marketcap.json";
import styles from "./styles";

const image = require("../../../assets/images/Saly-17-1.png");
const marketCoins = DATA;

const MarketScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={marketCoins}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <MarketCoin marketCoin={item} />}
        ListHeaderComponent={() => (
          <>
            <Image style={styles.image} source={image} />
            <View>
              <Text style={styles.label}>Market</Text>
            </View>
          </>
        )}
        ListHeaderComponentStyle={{ alignItems: "center" }}
      />
    </View>
  );
};

export default MarketScreen;
