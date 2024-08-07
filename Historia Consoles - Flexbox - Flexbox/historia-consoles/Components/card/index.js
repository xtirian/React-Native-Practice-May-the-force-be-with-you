import React from "react";
import { View, Image, Text } from "react-native";

import Estilo from "../../assets/estilos/style";

export default function CardGrade4x4(props) {
  return (
    <View style={Estilo.cardContainer}>
      <Image source={props.imagem} style={Estilo.cardImg} />
      <Text style={Estilo.cardTxt}>{props.texto1}</Text>
      <Text style={Estilo.cardTxt}>{props.texto2}</Text>
    </View>
  );
}
