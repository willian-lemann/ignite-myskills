import React, { useState, useEffect } from "react";
import { Text, View, TextInput, FlatList, Keyboard } from "react-native";
import { Button } from "../../components/Button";
import { Skillitem } from "../../components/Skillitem";

import { styles } from "./styles";

export const Home = () => {
  const [greeting, setGreeting] = useState("");
  const [newSkill, setNewSkill] = useState("");
  const [skills, setSkills] = useState<Array<string>>([]);

  function handleAddNewSkill() {
    setSkills((state) => [...state, newSkill]);
    Keyboard.dismiss();
  }

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      setGreeting("Good Morning!");
      return;
    }

    if (currentHour >= 12 && currentHour < 18) {
      setGreeting("Good Afternoon!");
      return;
    } else {
      setGreeting("Good Evening!");
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Willian</Text>

      <Text style={styles.greetings}>{greeting}</Text>

      <TextInput
        style={styles.input}
        placeholder="New skill"
        placeholderTextColor="#555"
        value={newSkill}
        onChangeText={setNewSkill}
      />

      <Button onPress={handleAddNewSkill} />

      <Text style={[styles.title, { marginVertical: 50 }]}>My Skills</Text>

      <FlatList
        data={skills}
        keyExtractor={(item) => item}
        renderItem={({ item: skill }) => (
          <Skillitem key={skill} skill={skill} />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
