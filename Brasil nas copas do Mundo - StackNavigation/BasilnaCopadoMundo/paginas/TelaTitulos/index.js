import React from "react";
import { Text, View, ImageBackground, ScrollView } from "react-native";

//Imagens
import background from "../../assets/background.png";
import card1Background from "../../assets/cidades/solna.png";
import card2Background from "../../assets/cidades/santiago.png";
import card3Background from "../../assets/cidades/cidademexico.png";
import card4Background from "../../assets/cidades/pasadena.png";
import card5Background from "../../assets/cidades/yokohama.png";

import Campeao from "../../assets/1.png";
import Bicampeao from "../../assets/2.png";
import Tricampeao from "../../assets/3.png";
import Tetracampeao from "../../assets/4.png";
import Pentacampeao from "../../assets/5.png";

// Importar Cards
import { Card24Titulos } from "../../componentes/Cards";

//Estilização
import Estilo from "../../assets/styles";

export default function Titulos() {
  return (
    <View style={Estilo.container}>
      <ImageBackground source={background} style={Estilo.background}>
        <ScrollView>
          <Text style={Estilo.titulo}>Titulos</Text>

          <Card24Titulos
            titulo="Suécia"
            estrela={Campeao}
            ano="1958"
            imagemCard={card1Background}
          />
          <Card24Titulos
            titulo="Chile"
            estrela={Bicampeao}
            ano="1962"
            imagemCard={card2Background}
          />
          <Card24Titulos
            titulo="México"
            estrela={Tricampeao}
            ano="1970"
            imagemCard={card3Background}
          />
          <Card24Titulos
            titulo="EUA"
            estrela={Tetracampeao}
            ano="1994"
            imagemCard={card4Background}
          />
          <Card24Titulos
            titulo="Japão"
            estrela={Pentacampeao}
            ano="2002"
            imagemCard={card5Background}
          />
        </ScrollView>
      </ImageBackground>
    </View>
  );
}
