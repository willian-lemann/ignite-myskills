import React from "react";
import { StatusBar } from "react-native";
import { Home } from "./src/screens/home";

const App = () => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        networkActivityIndicatorVisible={false}
      />
      <Home />
    </>
  );
};
export default App;
