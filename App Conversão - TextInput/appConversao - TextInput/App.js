import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

// Importar as Páginas
import KM2ML from "./paginas/KM2ML";
import ML2KM from "./paginas/ML2KM";

const Abas = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Abas.Navigator
        screenOptions={{
          headerShown:false,          
        }}  
      >
        <Abas.Screen
          name="Quilômetros para Milhas"
          component={KM2ML}
          options={{
            tabBarIcon: () => <Entypo name="ruler" size={24} color="black" />,
          }}
        />
        <Abas.Screen
          name="Milhas para Quilômetros"
          component={ML2KM}
          options={{
            tabBarIcon: () => (
              <FontAwesome5 name="ruler-combined" size={24} color="black" />
            ),
          }}
        />
      </Abas.Navigator>
    </NavigationContainer>
  );
};
