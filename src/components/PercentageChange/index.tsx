import React from "react";
import { View, Text } from "react-native";

const PercentageChange = ({ value }: { value: any }) => {
  return (
    <Text
      style={{
        color: value && value > 0 ? "green" : "red",
      }}
    >
      {value ? value.toFixed(2) : 0}%
    </Text>
  );
};

export default PercentageChange;
