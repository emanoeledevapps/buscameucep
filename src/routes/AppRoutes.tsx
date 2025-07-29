import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeScreen, ZipCodeDetailsScreen } from "@screens";

export type AppStackParamsList = {
  HomeScreen: undefined;
  ZipCodeDetailsScreen: {
    zipCode: string;
  }
}

const Stack = createNativeStackNavigator<AppStackParamsList>();

export function AppRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false, fullScreenGestureEnabled: true }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen}/>
        <Stack.Screen name="ZipCodeDetailsScreen" component={ZipCodeDetailsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
