import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// IMPORTAR AS PÁGINAS
import SalarioxInflacao from './components/comparativo';
import Salario from './components/salario';
import Inflacao from './components/inflacao';

// IMPORTAR OS ÍCONES
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'; 


const Tabs = createBottomTabNavigator()

export default function App() {
  return (    
    <NavigationContainer>
      <Tabs.Navigator
      screenOptions={{
        headerTitleStyle:{
          fontSize: 30,
          textTransform:'uppercase'
        },
        headerTitleAlign: 'center',
        tabBarLabelStyle:{
          fontSize:12,
        },        
        tabBarActiveTintColor:'gray',
        tabBarInactiveTintColor:'#fff',
        tabBarInactiveBackgroundColor:'gray',
        tabBarStyle:{
          height:50
        }
        
      }}>
        <Tabs.Screen name="Salário" component={Salario} options={{
          tabBarIcon:({color})=> (
            <MaterialIcons name="attach-money" size={24} color={color} />
          )
        }} />
        <Tabs.Screen name="Inflação" component={Inflacao} options={{
          tabBarIcon:({color})=> (
            <MaterialCommunityIcons name="trending-up" size={24} color={color} />
          )
        }} />
        <Tabs.Screen name="Salário x Inflação" component={SalarioxInflacao}  options={{
          tabBarIcon:({color})=> (
            <MaterialIcons name="compare-arrows" size={24} color={color} />
          )
        }} />
      </Tabs.Navigator>
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
