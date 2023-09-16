import { View, Text } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Layout,
  Radio,
  Tab,
  Input,
  TabView,
  Button,
} from "@ui-kitten/components";

export default function LoginScreen({ navigation }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = React.useState(false);
  const shouldLoadComponent = (index): boolean => index === selectedIndex;
  return (
    <View className=" h-full w-full bg-black flex  ">
      <StatusBar style=" light" />
      <View className=" h-2/6 mt-11 p-4">
        <Text className=" text-4xl leading-loose my-2  text-white  font-bold">
          Hi, Welcome to the Stockology
        </Text>
        <Text className=" text-xs text-gray-200 ">
          Lorem ipsum dolor sit amet consectetur. Quis platea id amet sit ornare
        </Text>
      </View>
      <View className=" bg-white p-4 h-full rounded-t-xl ">
        <TabView
          selectedIndex={selectedIndex}
          shouldLoadComponent={shouldLoadComponent}
          onSelect={(index) => setSelectedIndex(index)}
        >
          <Tab title="Login">
            <Layout style={styles.tabContainer}>
              <Input
                placeholder="Enter your email address"
                size="large"
                label="Email address"
                value={email}
                onChangeText={(nextValue) => setEmail(nextValue)}
              />
              <Input
                placeholder="Enter Password"
                size="large"
                label="Password"
                value={password}
                onChangeText={(nextValue) => setPassword(nextValue)}
              />

              <View className="flex flex-row justify-between">
                <Radio
                  checked={checked}
                  onChange={(nextChecked) => setChecked(nextChecked)}
                  style={{ width: "60%" }}
                >
                  Remember me
                </Radio>
                <Text className="text-green-500">Forget Password</Text>
              </View>
              <Button
                style={styles.button}
                appearance="filled"
                onPress={() => navigation.navigate("Profile")}
              >
                Login
              </Button>
            </Layout>
          </Tab>
          <Tab title="Register">
            <Layout style={styles.tabContainer}>
              <Text category="h5">register</Text>
            </Layout>
          </Tab>
        </TabView>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  tabContainer: {
    height: "80%",
    display: "flex",
    gap: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    margin: 2,
    width: "100%",
    borderRadius: 100,
  },
});
