import React from "react";
import { AppRegistry, StyleSheet, Text, View, StatusBar } from "react-native";

import UserNavigation from "./app/navigations/User";

export default function App() {
  return (
    <View style={styles.container}>
      <UserNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
