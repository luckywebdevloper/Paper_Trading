import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../contants";

const TradeHistory = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>History</Text>
      {/* Trade History */}
      <View></View>
    </View>
  );
};

export default TradeHistory;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  title: {
    color: Colors.Default_GREY,

    fontSize: 20,
    fontWeight: "500",
  },
});
