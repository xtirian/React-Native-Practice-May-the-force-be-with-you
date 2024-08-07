import React from "react";
import { View, Text } from "react-native";

import Card from "../card";

import imgCPU from "../../assets/especificacoes/cpu.png";
import imgGPU from "../../assets/especificacoes/gpu.png";
import imgHDD from "../../assets/especificacoes/hdd.png";
import imgRAM from "../../assets/especificacoes/ram.png";

import Estilo from "../../assets/estilos/style";

export default function Especificacoes(props) {
 let Array = [
  {Tipo:props.nomeCPU,
  Capacidade:props.capacidadeCPU},
  {Tipo:props.nomeGPU,Capacidade:props.capacidadeGPU},
  {Tipo:props.nomeRAM,Capacidade:props.capacidadeRAM},
  {Tipo:props.nomeHDD,Capacidade:props.capacidadeHDD}
 ]

  return (
    <View style={Estilo.container}>
      <Text style={Estilo.titulo}>Especificações Técnicas</Text>
      <Text style={Estilo.paragrafo}>{props.paragrafo}</Text>
      <View style={Estilo.cardGrade}>
        <View backgroundColor={props.corCard}>
          <Card
            imagem={imgCPU}
            texto1={Array[0].Tipo}
            texto2={Array[0].Capacidade}
          />
        </View>     
        <View backgroundColor={props.corCard}>
        <Card
            imagem={imgGPU}
            texto1={Array[1].Tipo}
            texto2={Array[1].Capacidade}
          />

        </View>
        <View backgroundColor={props.corCard} >
          <Card
            imagem={imgRAM}
            texto1={Array[2].Tipo}
            texto2={Array[2].Capacidade}
          />
        </View> 
        <View backgroundColor={props.corCard}>
          <Card
            imagem={imgHDD}
            texto1={Array[3].Tipo}
            texto2={Array[3].Capacidade}
          />
        </View>  
      </View>
    </View>
  );
}
