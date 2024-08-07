import React from "react";
import { View, Text, Image } from "react-native";

import Estilo from "../../assets/estilos/style";

export default function Historia (props) {
 return(
  <View style={Estilo.container}>
   <Text style={Estilo.titulo}>{props.titulo}</Text>
   <Image source={props.imagem} style={Estilo.imagemHistoria} />
   <Text style={Estilo.paragrafo}>{props.paragrafo1}</Text>
   <Text style={Estilo.paragrafo}>{props.paragrafo2}</Text>
   <Text style={Estilo.paragrafo}>{props.paragrafo3}</Text>
  </View>
 )
}