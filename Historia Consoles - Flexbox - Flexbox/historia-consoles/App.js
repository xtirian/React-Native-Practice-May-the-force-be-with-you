import React from "react";
import { Image, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//PÁGINAS
import PlayStation from "./Pages/PlayStation";
import Xbox from "./Pages/Xbox";
import Nintendo from "./Pages/Nintendo";

//ÍCONES
import IconePS from "./assets/ps.png";
import IconeXb from "./assets/xbox.png";
import IconeNt from "./assets/nintendo.png";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "bold",
          },
          
        }}
      >
        <Tab.Screen
          name="Xbox"
          component={Xbox}
          options={{
            tabBarIcon: ({color}) => (
              <Image
                source={IconeXb}
                tintColor= {color}
                
              />
            ),
            tabBarActiveTintColor: "#0e7a0d",
          }}
        />
        <Tab.Screen
          name="PlayStation"
          component={PlayStation}
          options={{
            tabBarIcon: ({color}) => (
              <Image source={IconePS} tintColor= {color}
                 />
            ),
            tabBarActiveTintColor: "#0000FF",
          }}
        />
        <Tab.Screen
          name="Nintendo"
          component={Nintendo}
          options={{
            tabBarIcon: ({color, size}) => (
              <Image source={IconeNt} 
                tintColor={color} />
            ),
            tabBarActiveTintColor: "#FE0016",
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const IconStyle = StyleSheet.create({
  
})
