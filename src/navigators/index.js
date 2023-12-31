import * as React from "react";
import * as eva from "@eva-design/eva";
import { NavigationContainer } from "@react-navigation/native";
import { ApplicationProvider, Layout } from "@ui-kitten/components";
import { default as theme } from "../../theme.json";
import { createStackNavigator } from "@react-navigation/stack";
import {
  SplashScreen,
  WelcomeScreen,
  Market,
  SigninScreen,
  SignupScreen,
  ForgetPassword,
  RegisterPhone,
  VerificationScreen,
} from "../screens";
import { useFonts } from "expo-font";

import Profile from "../screens/Profile";

const Stack = createStackNavigator();
const Navigators = () => {
  const [fontsLoaded] = useFonts({
    "Inter-Black": require("../assets/fonts/ClashDisplay-Bold.otf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
  });

  const onLayoutRootView = React.useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Market"
        >
          {/* <Stack.Screen name="Login" component={LoginScreen} /> */}
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Signin" component={SigninScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
          <Stack.Screen name="RegisterPhone" component={RegisterPhone} />

          {/* <Stack.Screen name="Login" component={LoginScreen} /> */}

          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Market" component={Market} />
          <Stack.Screen name="Verification" component={VerificationScreen} />
        </Stack.Navigator>
      </ApplicationProvider>
    </NavigationContainer>
  );
};
export default Navigators;
