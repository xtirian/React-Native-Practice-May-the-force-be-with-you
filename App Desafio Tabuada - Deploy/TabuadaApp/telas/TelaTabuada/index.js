import React from "react";
import { View, Text, ImageBackground, Pressable } from "react-native";

import background from "../../assets/tabuada.webp";

import Estilo from "./style";

export default function TelaTabuada(props) {
  const Voltar = () => {
    props.navigation.goBack();
  };

  return (
    <View style={Estilo.container}>
      <ImageBackground
        source={background}
        style={Estilo.background}
        resizeMode="contain"
      >
        <Pressable style={Estilo.ContainerBtnVoltar}
        onPress={Voltar}>
          <Text style={Estilo.TextoBtn}>Responder</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
}
