import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";
import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
export default function MarketList() {
  const [stockName, setStockName] = useState([]);

  useEffect(() => {
    fetchStockName();
  }, []);
  const fetchStockName = async () => {
    try {
      const response = await axios.get(
        "https://stock-data-251j.onrender.com/api/allSymbols"
      );
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const renderItem = ({ item }) => (
    <View style={styles.IndexBox} key={item}>
      <Text style={styles.name} key={item}>
        {item}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <ScrollView style={styles.main}>
        <FlatList
          data={stockName}
          renderItem={renderItem}
          keyExtractor={(item) => item.symbol}
          scrollEnabled={true}
        />
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  IndexBox: {
    borderRadius: 15,
    marginVertical: 6,
    marginHorizontal: 15,
    gap: 15,

    borderColor: "#CCCED0",
    borderStyle: "solid",
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 14,
  },
  IndexText: {
    fontSize: 17,
    fontWeight: "500",
  },
  IndexText2: {
    fontSize: 18,
    color: "gray",
  },
});
