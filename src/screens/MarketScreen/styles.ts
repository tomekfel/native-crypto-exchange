import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "white",
  },
  image: {
    height: 175,
    resizeMode: "contain",
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#777777",
  },
  balance: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#000",
  },
  list: {
    width: "100%",
  },
});

export default styles;
