import React from "react";
import { Text, TouchableOpacity } from "react-native";

import { styles } from "./styles";

interface ButtonProps {
  onPress: () => void;
}

export const Button = ({ onPress }: ButtonProps) => {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>Add</Text>
    </TouchableOpacity>
  );
};
