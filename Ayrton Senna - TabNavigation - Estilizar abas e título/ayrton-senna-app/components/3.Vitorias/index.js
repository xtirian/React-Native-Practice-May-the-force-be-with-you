import React from "react";
import { ImageBackground, Image, View, Text, ScrollView } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

// IMPORTANDO IMAGENS
import BackgroundVitorias from "../../assets/corrida1.jpg";
import Vitoria1 from "../../assets/vitoria1.jpg";
import Vitoria2 from "../../assets/vitoria2.jpg";
import Vitoria3 from "../../assets/vitoria3.jpg";

import Estilo from "./style";

export default function Vitorias() {
  return (
    <ScrollView style={Estilo.containerVitorias}>
      <ImageBackground
        style={Estilo.backgroundContainer}
        source={BackgroundVitorias}
        blurRadius={10}
        resizeMode="cover"
      >
        <View style={Estilo.cardDadosVitorias}>
          <Text style={Estilo.tituloCardDados}>Senna em Números</Text>
          <Text style={Estilo.paragrafoCardDados}>
            Ele conquistou três campeonatos mundiais em 1988, 1990, 1991, e
            ganhou 41 Grandes Prêmios e 65 pole positions.
          </Text>
          <View style={Estilo.gradeCardDados}>
            <View style={Estilo.linhaGradeCard}>
              <View style={Estilo.iconeGrade}>
                <FontAwesome5 name="trophy" size={22} color="gold" />
              </View>
              <View style={Estilo.gradetextosCardDados}>
                <Text style={Estilo.enfaseTextoGrade}>161</Text>
                <Text style={Estilo.textoNormalGrade}>GPS DISPUTADOS</Text>
              </View>
            </View>
            <View style={Estilo.linhaGradeCard}>
              <View style={Estilo.iconeGrade}>
                <FontAwesome5 name="trophy" size={22} color="gold" />
              </View>
              <View style={Estilo.gradetextosCardDados}>
                <Text style={Estilo.enfaseTextoGrade}>65</Text>
                <Text style={Estilo.textoNormalGrade}>POLE POSITIONS</Text>
              </View>
            </View>
            <View style={Estilo.linhaGradeCard}>
              <View style={Estilo.iconeGrade}>
                <FontAwesome5 name="trophy" size={22} color="gold" />
              </View>
              <View style={Estilo.gradetextosCardDados}>
                <Text style={Estilo.enfaseTextoGrade}>41</Text>
                <Text style={Estilo.textoNormalGrade}>VITÓRIAS</Text>
              </View>
            </View>
            <View style={Estilo.linhaGradeCard}>
              <View style={Estilo.iconeGrade}>
                <FontAwesome5 name="trophy" size={22} color="gold" />
              </View>
              <View style={Estilo.gradetextosCardDados}>
                <Text style={Estilo.enfaseTextoGrade}>3X</Text>
                <Text style={Estilo.textoNormalGrade}>CAMPEÃO MUNDIAL</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={Estilo.minicardContainerVitoria}>
          <View style={Estilo.tituloContainerMinicard}>
            <Text style={Estilo.tituloMinicardVitoria}>
              Campeão Mundial - 1988
            </Text>
          </View>
          <Image style={Estilo.imgMinicardVitoria} source={Vitoria1} />
        </View>
        <View style={Estilo.minicardContainerVitoria}>
          <View style={Estilo.tituloContainerMinicard}>
            <Text style={Estilo.tituloMinicardVitoria}>
              Campeão Mundial - 1990
            </Text>
          </View>
          <Image style={Estilo.imgMinicardVitoria} source={Vitoria2} />
        </View>
        <View style={Estilo.minicardContainerVitoria}>
          <View style={Estilo.tituloContainerMinicard}>
            <Text style={Estilo.tituloMinicardVitoria}>
              Campeonato Mundial - 1991
            </Text>
          </View>
          <Image style={Estilo.imgMinicardVitoria} source={Vitoria3} />
        </View>
      </ImageBackground>
    </ScrollView>
  );
}
