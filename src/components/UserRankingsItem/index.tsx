import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";

export interface UserRankingsItemProps {
  user: {
    id: string;
    name: string;
    image: string;
    netWorth: number;
  };
  place: number;
}
const UserRankingsItem = (props: UserRankingsItemProps) => {
  const {
    user: { id, name, image, netWorth },
    place,
  } = props;
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Text style={styles.place}>{place}</Text>
        <Image style={styles.image} source={{ uri: image }} />
        <View style={styles.coin}>
          <Text style={styles.name}>{name}</Text>
        </View>
      </View>

      <View style={styles.right}>
        <Text style={styles.currentPrice}>${netWorth}</Text>
        {/* <Text
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
        </Text> */}
      </View>
    </View>
  );
};

export default UserRankingsItem;
