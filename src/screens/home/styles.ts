import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121015",
    paddingHorizontal: 30,
    paddingVertical: 70,
  },

  greetings: {
    color: "#ffffff",
  },

  title: {
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "bold",
  },

  input: {
    marginTop: 30,
    backgroundColor: "#1f1e25",
    color: "#ffffff",
    fontSize: 18,
    padding: Platform.OS === "ios" ? 15 : 10,
    paddingLeft: 15,
    borderRadius: 7,
  },
});
