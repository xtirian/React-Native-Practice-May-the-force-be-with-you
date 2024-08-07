import React from "react";
import { ImageBackground, Image, View, Text } from "react-native";

// IMPORTANDO IMAGENS
import Background from "../../assets/fundo.jpg";
import Capa from "../../assets/foto-capa.jpg";

import Estilo from "./style";

export default function TelaInicial() {
  return (
    <ImageBackground
      style={Estilo.containerInicio}
      source={Background}
      blurRadius={10}
      resizeMode="cover"
    >
      <Image source={Capa} style={Estilo.capaInicio} />

      <View style={Estilo.cardInicio}>
        <Text style={Estilo.tituloCardInicio}>Ayrton Senna</Text>
        <Text style={Estilo.descricaoCardInicio}>Através desse App, você vai conhecer um pouco sobre quem foi esse grande piloto</Text>
      </View>
    </ImageBackground>
  );
}
