import { StyleSheet, Text, View } from "react-native";

export default function ProfileScreen() {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.textStyle}>Profile Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
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
