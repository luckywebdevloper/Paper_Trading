import * as React from "react";
import * as eva from "@eva-design/eva";
import { NavigationContainer } from "@react-navigation/native";
import { ApplicationProvider, Layout } from "@ui-kitten/components";
import { default as theme } from "../../theme.json";
import { createStackNavigator } from "@react-navigation/stack";
import { SplashScreen, WelcomeScreen } from "../screens";
import { useFonts } from "expo-font";
const Stack = createStackNavigator();
const Navigators = () => {
  const [fontsLoaded] = useFonts({
    "Inter-Black": require("../assets/fonts/ClashDisplay-Bold.otf"),
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
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {/* <Stack.Screen name="Login" component={LoginScreen} /> */}
          <Stack.Screen name="Welcome" component={WelcomeScreen} />

          <Stack.Screen name="Splash" component={SplashScreen} />
        </Stack.Navigator>
      </ApplicationProvider>
    </NavigationContainer>
  );
};
export default Navigators;
