import React from "react";
import { View, Text } from "react-native";

import Estilo from "../../assets/estilos/style";

export default function Conclusao (props) {
 return(
  <View style={Estilo.container}>
   <Text style={Estilo.titulo}>{props.titulo}</Text>
   <Text style={Estilo.paragrafo}>{props.paragrafo1}</Text>
  </View>
 )
}