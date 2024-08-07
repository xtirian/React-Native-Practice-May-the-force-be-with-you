import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  TextInput,
  ImageBackground,
} from "react-native";

import { gerarNumero, validarResposta } from "./funcoes";

import Estilo from "./style";

import background from '../../assets/inicio.jpg'

//para fazer a navegação entre telas uso a propriedade props.navigation.navigate('name da página desejada')

export default function TelaInicio(props) {
  const [numero1, setNumero1] = useState(gerarNumero);
  const [numero2, setNumero2] = useState(gerarNumero);
  const [respostaUsuario, setRespostaUsuario] = useState(0);

  function criarQuestao() {
    setNumero1(gerarNumero());
    setNumero2(gerarNumero());
    setRespostaUsuario("");
  }

  function responder() {
    validarResposta(numero1, numero2, respostaUsuario)
      ? props.navigation.navigate("RespostaCorreta")
      : props.navigation.navigate("RespostaErrada");

    criarQuestao();
  }

  function abrirTabuada() {
    props.navigation.navigate("Tabuada");
  }

  return (
    <View style={Estilo.container}>
      <ImageBackground
      style={Estilo.background}
      source={background}
      resizeMode="cover"
      blurRadius={5}>
        <View style={Estilo.ContainerPrincipal}>
          <Text style={Estilo.titulo}>Duvido você acertar!</Text>

          <View style={Estilo.ContainerInput}>
            <Text style={Estilo.questao}>
              {numero1} x {numero2} =
            </Text>
            <TextInput
              textAlign="center"
              keyboardType="numeric"
              onChangeText={setRespostaUsuario}
              value={respostaUsuario.toString()}
              autoFocus={true}
              maxLength={3}
              style={Estilo.input}
            />
          </View>

          <View style={Estilo.ContainerBtnRespostas}>
            <Pressable style={Estilo.ContainerBtnPular} onPress={criarQuestao}>
              <Text style={Estilo.TextoBtn}>Pular</Text>
            </Pressable>

            <Pressable style={Estilo.ContainerBtnResponder} onPress={responder}>
              <Text style={Estilo.TextoBtn}>Responder</Text>
            </Pressable>
          </View>
        </View>

        <Pressable style={Estilo.ContainerBtnTabuada} onPress={abrirTabuada}>
          <Text style={Estilo.TextoBtn}>Ver Tabuada</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
}
