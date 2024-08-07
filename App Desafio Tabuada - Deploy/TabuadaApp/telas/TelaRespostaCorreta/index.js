import React from "react";
import { View, Text, ImageBackground, Pressable } from "react-native";

import Estilo from "./style";

import background from '../../assets/respostaCerta.jpg'


export default function TelaRespostaCorreta(props) {
  const Voltar = () => {
    props.navigation.goBack();
  };
  return (
    <View style={Estilo.container}>
      <ImageBackground
      style={Estilo.background}
      source={background}
      resizeMode="cover"
      blurRadius={5}
      >
      <View style={Estilo.ContainerPrincipal}>
        <Text style={Estilo.titulo}>Parabéns, você Acertou!</Text>
      </View>

      <Pressable style={Estilo.ContainerBtnVoltar}
        onPress={Voltar}>
          <Text style={Estilo.TextoBtn}>Responder Outro</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
}
