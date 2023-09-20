import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStockData } from "../../redux/slice/stockDataSlice";
import { useEffect } from "react";
export default function MarketList() {
  const dispatch = useDispatch();
  const stockData = useSelector((state) => state.stockData.data);

  useEffect(() => {
    // Fetch stock data when the component mounts
    dispatch(fetchStockData());
  }, [dispatch]);

  return (
    <View style={styles.IndexBox}>
      {Array.isArray(stockData) &&
        stockData.map((dataItem, index) => (
          <View key={index}>
            <Text style={styles.IndexText}>{dataItem.index}</Text>
            <Text style={styles.IndexText2}>High: {dataItem.high}</Text>
            <Text style={styles.IndexText2}>Low: {dataItem.low}</Text>
            {/* Add more data fields as needed */}
          </View>
        ))}
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
