import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Colors, General } from "../contants";
import { Separator, WelcomeCard } from "../components";
import { display } from "../utils";

const Pagination = () => {
  return (
    <View style={styles.pageContainer}>
      <View style={styles.page}></View>
      <View style={styles.page}></View>
    </View>
  );
};
export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={"dark-content"}
        backgroundColor={Colors.Default_GREEN}
        translucent
      />
      <Separator height={StatusBar.currentHeight} />
      <Separator height={display.setHeight(8)} />
      <View style={styles.welcomeListContiner}>
        <FlatList
          data={General.WELCOME_CONTENTS}
          keyExtractor={(item) => item.title}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          overScrollMode="never"
          renderItem={({ item }) => <WelcomeCard {...item} />}
        />
      </View>
      <Separator height={display.setHeight(8)} />
      <Pagination />
      <Separator height={display.setHeight(8)} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity>
          <Text style={styles.buttonText}>SKIP</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
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
  pageContainer: {
    flexDirection: "row",
  },
  welcomeListContiner: {
    height: display.setHeight(60),
  },
  page: {
    height: 8,
    width: 15,
    backgroundColor: Colors.Default_GREEN,
    borderRadius: 32,
    marginHorizontal: 5,
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: display.setWidth(90),
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
  },
});
