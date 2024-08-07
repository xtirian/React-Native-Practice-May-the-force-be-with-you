import { Text, View, Pressable, ImageBackground } from "react-native";
import React, { useState } from "react";

import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import Estilo from "./style";

export default function Marcador(props) {
  let [pontuacao, setPontuacao] = useState(20);

  const Adicionar = () => {
    let novaPontuacao = pontuacao + 1;

    return setPontuacao(novaPontuacao);
  };
  const Subtrair = () => {
    let novaPontuacao = pontuacao - 1;

    return setPontuacao(novaPontuacao);
  };
  const Resetar = () => {
    let novaPontuacao = 20;

    return setPontuacao(novaPontuacao);
  };

  let jogador = props.Player

  


  return (
    <View style={Estilo.Container}>
     <ImageBackground 
     source={props.Tabuleiro}
     style={jogador? {flex:1,transform:[{rotate:'180deg'}]} : {flex:1} }>      
        {/* //Este aqui define se é player 1 ou player 2 */}

        <View style={Estilo.LinhaTitulo}></View>
        <View style={Estilo.LinhaPontuacao}>
          <View>
            <Pressable onPress={Subtrair}>
              <AntDesign name="minuscircleo" size={50} color="#fff" />
            </Pressable>
          </View>
          <View>
            <Text style={Estilo.PontuacaoTexto}>{pontuacao}</Text>
          </View>
          <View>
            <Pressable onPress={Adicionar}>
              <AntDesign name="pluscircleo" size={50} color="#fff" />
            </Pressable>
          </View>
        </View>
        <View style={Estilo.LinhaReset}>
          <Pressable onPress={Resetar}>
            <MaterialIcons name="refresh" size={50} color="#fff" />
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
}
