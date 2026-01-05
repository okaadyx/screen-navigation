import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function setting() {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.textStyle}>Settings Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    // flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  textStyle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
