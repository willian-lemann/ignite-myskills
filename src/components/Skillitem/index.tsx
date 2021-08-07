import React from "react";
import { Text, TouchableOpacity } from "react-native";

import { styles } from "./styles";

interface SkillitemProps {
  skill: string;
}

export const Skillitem = ({ skill }: SkillitemProps) => {
  return (
    <TouchableOpacity style={styles.listTile} activeOpacity={0.8}>
      <Text style={styles.skillTitle}>{skill}</Text>
    </TouchableOpacity>
  );
};
