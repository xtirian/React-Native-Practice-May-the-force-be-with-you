import React from "react";
import { Text, View, ImageBackground, ScrollView } from "react-native";

//Imagens
import background from "../../assets/background.png";
import bandeiraBrasil from '../../assets/bandeiras/brasil.png';
import card1Background from "../../assets/estadios/estadio_brasil.png";
import uruguai from '../../assets/bandeiras/uruguai.png';
import card2Background from "../../assets/estadios/estadio_suecia.png";
import suecia from '../../assets/bandeiras/suecia.png';
import card3Background from "../../assets/estadios/estadio_chile.png";
import chile from '../../assets/bandeiras/chile.png';
import card4Background from "../../assets/estadios/estadio_mexico.png";
import card5Background from "../../assets/estadios/estadio_eua.png";
import italia from '../../assets/bandeiras/italia.png';
import card6Background from "../../assets/estadios/estadio_franca.png";
import franca from '../../assets/bandeiras/franca.png';
import card7Background from "../../assets/estadios/estadio_japao.png";
import alemanha from '../../assets/bandeiras/alemanha.png';






// Importar Cards
import { Card24Finais } from "../../componentes/Cards";

//Estilização
import Estilo from "../../assets/styles";

export default function Finais() {
  return (
    <View style={Estilo.container}>
      <ImageBackground source={background} style={Estilo.background}>
        <ScrollView>
        <Text style={Estilo.titulo}>Finais</Text>

        <Card24Finais titulo="1950 - Maracanã, Brasil" 
        imagemCard={card1Background}
        time1={uruguai}
        time2={bandeiraBrasil}
        placar="2x1" />
        <Card24Finais titulo="1958 - Rasunda, Suécia"
        imagemCard={card2Background}
        time1={bandeiraBrasil}
        time2={suecia}
        placar="5x2" />
        <Card24Finais titulo="1962 - Estadio Nacional, Chile"
        imagemCard={card3Background}
        time1={bandeiraBrasil}
        time2={chile}
        placar="3x1" />
        <Card24Finais titulo="1970 - Estádio Azteca, México"
        imagemCard={card4Background}
        time1={bandeiraBrasil}
        time2={italia}
        placar="4x1" />
        <Card24Finais titulo="1994 - Rose Bowl, EUA"
        imagemCard={card5Background}
        time1={bandeiraBrasil}
        time2={italia}
        placar="0x0" />
        <Card24Finais titulo="1998 - Stade de France, França"
        imagemCard={card6Background}
        time1={franca}
        time2={bandeiraBrasil}
        placar="3x0" />
        <Card24Finais titulo="2002 - Yokohama, Japão"
        imagemCard={card7Background}
        time1={bandeiraBrasil}
        time2={alemanha}
        placar="2x0" />
        </ScrollView>
      </ImageBackground>
    </View>
  );
}
