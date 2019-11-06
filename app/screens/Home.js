import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class Home extends Component {
  render() {
    <View style={style.viewBody}>
      <Text>Home Screens... </Text>
    </View>;
  }
}

const styles = StyleSheet.create({
  viewBody: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff"
  }
});
