import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Colors } from "../contants";
import { Button, Icon, IconElement } from "@ui-kitten/components";
import { MarketList } from "../components";

export default function Market({ navigation }) {
  return (
    <View className=" h-full w-ful flex  bg-white ">
      <StatusBar
        barStyle="light-content"
        backgroundColor={Colors.Default_GREEN}
      />
      <View className=" p-4" style={styles.Nav}>
        <Text className=" text-3xl leading-loose my-2 w-1/2   text-black  font-bold">
          Market
        </Text>
        <Button
          style={styles.button}
          status="success"
          // accessoryRight={}
        >
          Go to Watchlist
        </Button>
      </View>
      {/* <Button onPress={(e) => dispatch(fetchStocks())}>Data </Button> */}
      <ScrollView>
        <MarketList />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  Nav: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-between",
  },
  button: {
    borderRadius: 50,
    backgroundColor: "#16A34A",
    // color: "@",
  },
});
