import React from "react";
import { View, Text } from "react-native";

import disc from '../../assets/jogo/disc.png';
import money from '../../assets/jogo/money.png';
import ranking from '../../assets/jogo/ranking.png';
import sales from '../../assets/jogo/sales.png';

import Card from "../card";

import Estilo from "../../assets/estilos/style";

export default function Jogo (props) {
 let Obj = {Copias:props.Copias,
   Periodo:props.Periodo,
   Arrecadacao:props.Arrecadacao,
   TempoArrecadacao:props.Tempo,
   Aprovacao:props.Aprovacao,
   Revista:props.Revista,
   AnoRemake:props.AnoRemake,
   ConsoleRemake:props.ConsoleRemake  
  }
  
 return(
  <View style={Estilo.container}>
   <Text style={Estilo.titulo}>{props.titulo}</Text>
   <Text style={Estilo.paragrafo}>{props.paragrafo1}</Text>
   <Text style={Estilo.paragrafo}>{props.paragrafo2}</Text>
   <View style={Estilo.cardGrade}>
   <View backgroundColor={props.corCard}>
    <Card 
    imagem={sales}
    texto1={Obj.Copias}
    texto2={Obj.Periodo} />
   </View>
   <View backgroundColor={props.corCard}><Card 
    imagem={money}
    texto1={Obj.Arrecadacao}
    texto2={Obj.TempoArrecadacao} /></View>
   <View backgroundColor={props.corCard}><Card 
    imagem={ranking}
    texto1={Obj.Aprovacao}
    texto2={Obj.Revista} /></View>
   <View backgroundColor={props.corCard}><Card 
    imagem={disc}
    texto1={Obj.AnoRemake}
    texto2={Obj.ConsoleRemake} /></View>

   </View>
  </View>
 )
}