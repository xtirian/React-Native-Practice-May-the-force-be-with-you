import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5, Entypo } from "@expo/vector-icons";

import TelaInicial from "./components/1.TelaInicial";
import Sobre from "./components/2.Informacoes";
import Vitorias from "./components/3.Vitorias";

const Aba = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Aba.Navigator screenOptions={{
        headerStyle:{
          backgroundColor:'rgb(207,14,14)',
        },
        headerTitleStyle:{
          color:'gold',
          fontWeight:'bold',
          fontSize:24,          
        },

        tabBarActiveBackgroundColor:'rgb(207,14,14)',
        tabBarInactiveTintColor: 'rgb(207,14,14)',
        tabBarActiveTintColor:'gold',

      }}>
        <Aba.Screen
          name="Início"
          component={TelaInicial}
          options={{
            tabBarIcon: ({ color }) => (
              <Entypo name="home" size={22} color={color} />
            ),
          }}
        />
        <Aba.Screen
          name="Sobre"
          component={Sobre}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="question-circle" size={22} color={color} />
            ),
          }}
        />
        <Aba.Screen
          name="Vitórias"
          component={Vitorias}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="trophy" size={22} color={color} />
            ),
          }}
        />
      </Aba.Navigator>
    </NavigationContainer>
  );
}
