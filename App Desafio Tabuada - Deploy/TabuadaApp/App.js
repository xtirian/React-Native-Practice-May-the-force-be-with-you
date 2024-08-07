
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//IMPORTAR TELAS
import TelaInicio from "./telas/TelaInicio";
import TelaRespostaCorreta from "./telas/TelaRespostaCorreta";
import TelaRespostaErrada from "./telas/TelaRespostaErrada";
import TelaTabuada from "./telas/TelaTabuada";

const Navegacao = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Navegacao.Navigator 
      screenOptions={{
        headerShown: false
      }}>
        <Navegacao.Screen 
        name="Inicio" 
        component={TelaInicio}/>
        <Navegacao.Screen
          name="RespostaCorreta"
          component={TelaRespostaCorreta}
          options={{title:'Não foi dessa vez'}}
        />
        <Navegacao.Screen
          name="RespostaErrada"
          component={TelaRespostaErrada}
        />
        <Navegacao.Screen 
        name="Tabuada" 
        component={TelaTabuada}/>
      </Navegacao.Navigator>
    </NavigationContainer>
  );
}
