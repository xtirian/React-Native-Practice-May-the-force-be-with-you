import React from "react";
import { ScrollView, View, Text, Image } from "react-native";

// IMAGENS
import Capa from "../../assets/foto-capa.jpg";
import ReiChuva from "../../assets/rei-da-chuva.png";
import ReiMonaco from "../../assets/rei-de-monaco.png";
import Silvastone from "../../assets/silvastone.png";
import Preparacao from "../../assets/preparacao.png";

import Estilo from "./style";

export default function Sobre() {
  return (
    <View style={Estilo.containerSobre}>
      <View style={Estilo.cardSobre}>
        <Text style={Estilo.tituloCardSobre}>Ayrton Senna</Text>
        <Image source={Capa} style={Estilo.capaCardSobre} />
        <Text style={Estilo.informacoesCardSobre}>
          No esporte mais global e veloz do mundo, um piloto é considerado o
          mais rápido de todos os tempos: Ayrton Senna. Seus expressivos números
          ajudam a explicar porque o piloto ganhou status de mito do esporte.
          Mas Senna é mais do que isso: o brasileiro foi o responsável por
          alguns dos momentos mais mágicos da principal categoria do
          automobilismo mundial.
        </Text>
      </View>
      <ScrollView style={Estilo.minicardGrade}>
        <View style={Estilo.minicardSobre}>
          <Image source={ReiChuva} style={Estilo.imgMinicardSobre} />
          <View style={Estilo.textoContainerMinicardSobre}>
            <Text style={Estilo.tituloMinicardSobre}>Rei da Chuva</Text>
            <Text style={Estilo.contentMinicardSobre}>
              Aprimorou a pilotagem no asfalto molhado e mostrou ser um piloto
              de determinação, garra e persistência.
            </Text>
          </View>
        </View>
        <View style={Estilo.minicardSobre}>
          <Image source={ReiMonaco} style={Estilo.imgMinicardSobre} />
          <View style={Estilo.textoContainerMinicardSobre}>
            <Text style={Estilo.tituloMinicardSobre}>Rei de Mônaco</Text>
            <Text style={Estilo.contentMinicardSobre}>
              Conquistou o posto por ser o maior recordista de vitórias, com seis conquistas.
            </Text>
          </View>
        </View>
        <View style={Estilo.minicardSobre}>
          <Image source={Silvastone} style={Estilo.imgMinicardSobre} />
          <View style={Estilo.textoContainerMinicardSobre}>
            <Text style={Estilo.tituloMinicardSobre}>Silvastone</Text>
            <Text style={Estilo.contentMinicardSobre}>
               Por seu currículo impressionante em Silverstone, Ayrton recebeu o apelido de 'Silvastone' pela imprensa inglesa.
            </Text>
          </View>
        </View>
        <View style={Estilo.minicardSobre}>
          <Image source={Preparacao} style={Estilo.imgMinicardSobre} />
          <View style={Estilo.textoContainerMinicardSobre}>
            <Text style={Estilo.tituloMinicardSobre}>Preparação</Text>
            <Text style={Estilo.contentMinicardSobre}>
              Para vencer corridas e campeonatos o piloto precisava ter uma
              preparação física de atleta.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
