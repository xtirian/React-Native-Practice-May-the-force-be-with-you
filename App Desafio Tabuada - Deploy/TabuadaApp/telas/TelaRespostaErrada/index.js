import React from "react";
import { View, Text, ImageBackground, Pressable } from "react-native";

import Estilo from "./style";

import background from "../../assets/respostaErrada.webp";

export default function TelaRespostaErrada(props) {
  const Voltar = () => {
    props.navigation.goBack();
  };
  const abrirTabuada = () => {
    props.navigation.navigate("Tabuada");
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
          <Text style={Estilo.titulo}>
            Ops! Resposta errada, que tal ver a tabuada?
          </Text>

          <View style={Estilo.ContainerBotoes}>
          <Pressable style={Estilo.ContainerBtnTabuada} onPress={abrirTabuada}>
            <Text style={Estilo.TextoBtn}>Ver Tabuada</Text>
          </Pressable>

          <Pressable style={Estilo.ContainerBtnVoltar} onPress={Voltar}>
            <Text style={Estilo.TextoBtn}>Tentar Outro</Text>
          </Pressable>
        </View>
        </View>
        
      </ImageBackground>
    </View>
  );
}
