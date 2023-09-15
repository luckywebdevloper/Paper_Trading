import { View, Text, StyleSheet, StatusBar, FlatList } from "react-native";
import React from "react";
import Colors from "../contants/Colors";

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={"dark-content"}
        backgroundColor={Colors.Default_GREEN}
        translucent
      />

      <View style={styles.welcomeListContiner}>
        <FlatList />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.Default_BG,
  },
});
