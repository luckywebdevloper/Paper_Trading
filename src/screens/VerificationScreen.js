import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Separator } from "../components";
import { Colors } from "../contants";
import { useRef } from "react";
import { display } from "../utils";

const VerificationScreen = ({
  navigation,
  route: {
    params: { phoneNumber },
  },
}) => {
  const firstInput = useRef();
  const secondInput = useRef();
  const thirdInput = useRef();
  const fourthInput = useRef();
  const [otp, setOtp] = useState({ 1: "", 2: "", 3: "", 4: "" });

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={"dark-content"}
        backgroundColor={Colors.Default_GREEN}
      />
      <Separator height={StatusBar.currentHeight} />

      <View style={styles.headerContainer}>
        <Ionicons
          name="arrow-back-circle-outline"
          size={30}
          color="black"
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.headerText}> OTP Verification </Text>
      </View>
      <Text style={styles.title}> OTP Verification </Text>
      <Text style={styles.content}>
        Enter the otp number just sent you at
        <Text style={styles.phoneNumbertext}> {phoneNumber}</Text>
      </Text>

      <View style={styles.otpContainer}>
        <View style={styles.otpBox}>
          <TextInput
            style={styles.otpText}
            keyboardType="number-pad"
            maxLength={1}
            ref={firstInput}
            onChange={(text) => {
              setOtp({ ...otp, 1: text });
              text && secondInput.current.focus();
            }}
          />
        </View>
        <View style={styles.otpBox}>
          <TextInput
            style={styles.otpText}
            keyboardType="number-pad"
            maxLength={1}
            ref={secondInput}
            onChange={(text) => {
              setOtp({ ...otp, 2: text });
              text ? thirdInput.current.focus() : firstInput.current.focus();
            }}
          />
        </View>
        <View style={styles.otpBox}>
          <TextInput
            style={styles.otpText}
            keyboardType="number-pad"
            maxLength={1}
            ref={thirdInput}
            onChange={(text) => {
              setOtp({ ...otp, 3: text });

              text ? fourthInput.current.focus() : secondInput.current.focus();
            }}
          />
        </View>
        <View style={styles.otpBox}>
          <TextInput
            style={styles.otpText}
            keyboardType="number-pad"
            maxLength={1}
            ref={fourthInput}
            onChange={(text) => {
              setOtp({ ...otp, 4: text });

              !text && thirdInput.current.focus();
            }}
          />
        </View>
      </View>
      <TouchableOpacity
        style={styles.signinButton}
        onPress={() => navigation.navigate("Profile")}
      >
        <Text style={styles.signinButtonText}>Resend OTP</Text>
      </TouchableOpacity>
    </View>
  );
};

export default VerificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Default_WHITE,
  },

  headerContainer: {
    alignItems: "center",
    // justifyContent: "center",
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: "Poppins-Regular",
    lineHeight: 20 * 1.4,
    marginTop: 50,
    marginBottom: 10,
    marginHorizontal: 20,
  },
  content: {
    fontSize: 20,
    fontFamily: "Poppins-Regular",
    marginTop: 10,
    marginBottom: 20,

    marginHorizontal: 20,
  },
  phoneNumbertext: {
    color: Colors.Default_GREEN,
  },
  otpContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
  },
  otpBox: {
    borderRadius: 5,
    borderColor: Colors.Default_GREEN,
    borderWidth: 0.5,
  },
  otpText: {
    fontSize: 25,
    color: Colors.Default_Black,
    padding: 0,
    textAlign: "center",
    paddingHorizontal: 18,
    paddingVertical: 10,
  },
  signinButton: {
    backgroundColor: Colors.Default_GREEN,
    borderRadius: 8,
    marginHorizontal: 20,
    height: display.setHeight(6),

    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  signinButtonText: {
    color: Colors.Default_WHITE,
    fontFamily: "Poppins-Regular",
    fontSize: 18,
    lineHeight: 18 * 1.4,
  },
});
