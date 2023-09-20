import { View, Text } from "react-native";
import React, { useState } from "react";

import {
  Layout,
  Radio,
  Tab,
  Input,
  TabView,
  Button,
} from "@ui-kitten/components";
import { StyleSheet } from "react-native";
export default function Register({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");
  const [fullName, setFullName] = useState("");

  return (
    <>
      <Input
        placeholder="Enter your full name"
        size="large"
        label="Full name"
        value={fullName}
        onChangeText={(nextValue) => setFullName(nextValue)}
      />
      <Input
        placeholder="Enter your email address"
        size="large"
        label="Email address"
        value={email}
        onChangeText={(nextValue) => setEmail(nextValue)}
      />
      <Input
        placeholder="Enter Your phone number"
        size="large"
        label="Phone"
        value={number}
        onChangeText={(nextValue) => setNumber(nextValue)}
      />
      <Input
        placeholder="Enter Password"
        size="large"
        label="Password"
        value={password}
        onChangeText={(nextValue) => setPassword(nextValue)}
      />
      <Button
        style={styles.button}
        appearance="filled"
        onPress={() => navigation.navigate("Market")}
      >
        Register
      </Button>
    </>
  );
}
const styles = StyleSheet.create({
  button: {
    margin: 2,
    width: "100%",
    borderRadius: 100,
  },
});
