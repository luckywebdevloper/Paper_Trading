import { View, Text, StyleSheet, StatusBar, Image } from "react-native";
import React from "react";
import { Colors, Images } from "../contants";
import { useEffect } from "react";
export default function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Welcome");
    }, 1500);
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={Colors.Default_GREEN}
      />
      <Image
        source={Images.SPLASH_LOGO}
        style={styles.Image}
        resizeMode="contain"
      />
      <Text style={styles.titleText}>Paper Trading</Text>
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
  Image: {
    height: 300,
    width: 300,
  },
  titleText: {
    color: Colors.Default_TEXT,
    fontSize: 20,
    fontFamily: "Inter-Black",
  },
});
