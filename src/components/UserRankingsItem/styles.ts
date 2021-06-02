import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 50,
    marginVertical: 10,
  },
  image: {
    height: 50,
    width: 50,
    marginRight: 10,
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
  },
  right: {
    alignItems: "flex-end",
  },
  name: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  coin: {
    justifyContent: "space-around",
  },
  symbol: {
    color: "#6b6b6b",
    textTransform: "uppercase",
  },
  priceChange: {},
  currentPrice: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 5,
  },
  place: {
    fontSize: 18,
    fontWeight: "bold",
    width: 20,
  },
});

export default styles;
