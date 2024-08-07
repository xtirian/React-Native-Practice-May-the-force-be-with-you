import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, FontAwesome5 } from "@expo/vector-icons";

//<Entypo name="ruler" size={24} color="black" />
//<FontAwesome5 name="ruler-combined" size={24} color="black" />

import KM from "./component/km_mi";
import ML from "./component/mi_km";

const Aba = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Aba.Navigator
      screenOptions={{
        headerShown: false
      }}>
        <Aba.Screen
          name="Quilômetros para Milhas"
          component={KM}
          options={{
            tabBarIcon: () => <Entypo name="ruler" size={24} color="black" />,
          }}
        />
        <Aba.Screen
          name="Milhas para Quilômetros"
          component={ML}
          options={{
            tabBarIcon: () => <FontAwesome5 name="ruler-combined" size={24} color="black" />,
          }}
        />
      </Aba.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
