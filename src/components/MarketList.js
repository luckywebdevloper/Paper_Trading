import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";
import React, { useState } from "react";
import axios from "axios";
import { StaticImageService } from "../services";
import { useEffect } from "react";
import { NseIndia } from "stock-nse-india";
const nseIndia = new NseIndia();
export default function MarketList() {
  const [stockNames, setStockNames] = useState([]);
  const [stockDetails, setStockDetails] = useState([]);
  // const percentage = (stockDetail.priceInfo.pChange * 1).toFixed(3);
  const data = "SBIN";

  useEffect(() => {
    nseIndia.getAllStockSymbols().then((symbols) => {
      setStockNames(symbols);
    });
  }, []);
  useEffect(() => {
    stockNames.forEach((stockName) => {
      nseIndia.getEquityDetails(stockName).then((details) => {
        if (details) {
          setStockDetails((prevStockDetails) => [...prevStockDetails, details]);
          // console.log(data === stockDetails.info.identifier);
          // console.log(details.priceInfo.pChange);
        }
      });
    });
  }, [stockNames]);
  // Fetch Stock Name

  // Fetch Stock Detail

  return (
    <View style={styles.container}>
      <ScrollView style={styles.main}>
        <View>
          {stockDetails.map((StockDetail) => (
            <View
              style={styles.IndexBox}
              key={StockDetail.info.symbol + `${Math.random(Number)}`}
            >
              <Text
                style={styles.IndexText}
                key={StockDetail.info.symbol + `${Math.random(Number)}`}
                onPress={() => console.log(StockDetail.info.companyName)}
              >
                {StockDetail.info.symbol}
              </Text>
              <Text>{StockDetail.priceInfo.lastPrice}</Text>
              <Text>{StockDetail.priceInfo.pChange}</Text>
            </View>
          ))}
        </View>
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    borderColor: "#CCCED0",
    borderStyle: "solid",
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 14,
  },
  name: {
    width: 100,
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
