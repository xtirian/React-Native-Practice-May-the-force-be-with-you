import React from "react";
import { Text, View, ImageBackground, Pressable } from "react-native";

//Imagens
import background from "../../assets/background.png";
import imgCard1 from "../../assets/bg_finais.png";
import imgCard2 from "../../assets/bg_artilheiros.png";
import imgCard3 from "../../assets/bg_titulos.png";

// Importar Cards
import { Card34Inicio } from "../../componentes/Cards";

//Estilização
import Estilo from "../../assets/styles";

export default function Inicio(props) {
  return (
    <View style={Estilo.container}>
      <ImageBackground source={background} style={Estilo.background}>
        <Text style={Estilo.titulo}>Brasil Nas Copas do Mundo</Text>        
        <View>
      <Pressable onPress={() => props.navigation.navigate("Finais")}>
        <Card34Inicio titulo="FINAIS" imagemCard={imgCard1} />
      </Pressable>
      <Pressable onPress={() => props.navigation.navigate("Artilheiros")}>
        <Card34Inicio titulo="ARTILHEIROS" imagemCard={imgCard2} />
      </Pressable>
      <Pressable onPress={() => props.navigation.navigate("Titulos")}>
        <Card34Inicio titulo="TITULOS" imagemCard={imgCard3} />
      </Pressable>
    </View>
      </ImageBackground>
    </View>
  );
}
