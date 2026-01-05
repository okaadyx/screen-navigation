import { StyleSheet, Text, View } from "react-native";

export default function ContactUsScreen() {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.textStyle}>Contact Screen</Text>
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
