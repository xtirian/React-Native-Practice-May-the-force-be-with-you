import React from "react";
import { Text, View, ImageBackground, ScrollView } from "react-native";

//Imagens
import background from "../../assets/background.png";
import card1Background from "../../assets/artilheiros/ronaldo.png";
import card2Background from "../../assets/artilheiros/pele.png";
import card3Background from "../../assets/artilheiros/ademir.png";
import card4Background from "../../assets/artilheiros/vava.png";
import card5Background from "../../assets/artilheiros/jairzinho.png";

// Importar Cards
import { Card34Artilheiros } from "../../componentes/Cards";

//Estilização
import Estilo from "../../assets/styles";

export default function Artilheiros(props) {
  return (
    <View style={Estilo.container}>
      <ImageBackground source={background} style={Estilo.background}>
        <ScrollView>
          <Text style={Estilo.titulo}>Artilheiros</Text>

          <Card34Artilheiros
            titulo="Ronaldo"
            gols="15"
            anos="1994 - 1998 - 2002 - 2006 "
            imagemCard={card1Background}
          />
          <Card34Artilheiros
            titulo="PELÉ"
            gols="12"
            anos="1958 - 1962 - 1966 - 1970"
            imagemCard={card2Background}
          />
          <Card34Artilheiros
            titulo="ADEMIR"
            gols="9"
            anos="1950"
            imagemCard={card3Background}
          />
          <Card34Artilheiros
            titulo="VAVÁ"
            gols="9"
            anos="1958 - 1952"
            imagemCard={card4Background}
          />
          <Card34Artilheiros
            titulo="JAIRZINHO"
            gols="9"
            anos="1966 - 1970 - 1974"
            imagemCard={card5Background}
          />
        </ScrollView>
      </ImageBackground>
    </View>
  );
}
