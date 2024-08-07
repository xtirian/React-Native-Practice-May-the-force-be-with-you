import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

//IMPORT PÁGINAS
import TelaInicio from './paginas/TelaInicio'
import TelaFinais from './paginas/TelaFinais'
import TelaArtilheiros from './paginas/TelaArtilheiros';
import TelaTitulos from './paginas/TelaTitulos'

//Cria navegação STACK
const Navegacao = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Navegacao.Navigator>
        <Navegacao.Screen name='Inicio' component={TelaInicio} />
        <Navegacao.Screen name='Finais' component={TelaFinais} />
        <Navegacao.Screen name='Artilheiros' component={TelaArtilheiros} />
        <Navegacao.Screen name='Titulos' component={TelaTitulos} />
      </Navegacao.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
