import React from "react";
import { View, ImageBackground } from "react-native";

import background from "../../assets/background.jpg";

import estilo from "../../assets/estilo";

import InputConversao from "../inputConvesao";
import ResultConversao from "../resultadoConversao";

export default function KM() {
  return (
    <View>
      <ImageBackground
        source={background}
        blurRadius={150}
        style={estilo.fundo}
      >
        <InputConversao />
        <ResultConversao />
      </ImageBackground>
    </View>
  );
}
