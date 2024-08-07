import React from "react";
import { Text, View, ImageBackground, Image } from "react-native";

import Estilo from "./stylesCards";

//NESTA TELA IREI CRIAR OS CARDS QUE SERÃO USADOS EM TODOS AS TELAS

//CARDS 2X4 - FINAIS E TITULOS

//FINAIS
export const Card24Finais = (props) => (
  <View style={Estilo.card24Container}>
    <ImageBackground
      source={props.imagemCard}
      style={Estilo.cardBackground}
      imageStyle={{ borderRadius: 25 }}
      resizeMode="cover"
    >
      <View
        style={{
          backgroundColor: "rgba(0,0,0,.4)",
          height: "100%",
          borderRadius: 25,
          padding: 15,
        }}
      >
        <Text style={Estilo.cardTituloFinais}>{props.titulo}</Text>
        <View style={Estilo.CardFinaisPlacar}>
          <Image source={props.time1} style={Estilo.CardFinaisBandeira} />
          <Text style={Estilo.cardTituloPlacar}>{props.placar}</Text>
          <Image source={props.time2} style={Estilo.CardFinaisBandeira} />
        </View>
      </View>
    </ImageBackground>
  </View>
);

//TITULOS
export const Card24Titulos = (props) => (
  <View style={Estilo.card24Container}>
    <ImageBackground
      source={props.imagemCard}
      style={Estilo.cardBackground}
      imageStyle={{ borderRadius: 25 }}
      resizeMode="cover"
    >
      <View
        style={{
          backgroundColor: "rgba(0,0,0,.4)",
          height: "100%",
          borderRadius: 25,
          padding: 15,
        }}
      >
        <View style={{
          flexDirection:'row',
          justifyContent:'space-between'
        }}>
          <Text style={Estilo.cardTituloFinais}>{props.titulo}</Text>
          <Image source={props.estrela} />
        </View>
        <View >
          <Text style={Estilo.cardTituloAno}>{props.ano}</Text>
        </View>
      </View>
    </ImageBackground>
  </View>
);

//CARDS 3X4 - INICIO E ARTILHEIROS

//INICIO
export const Card34Inicio = (props) => (
  <View style={Estilo.card34Container}>
    <ImageBackground
      source={props.imagemCard}
      style={Estilo.cardBackground}
      imageStyle={{ borderRadius: 25 }}
      resizeMode="cover"
    >
      <View
        style={{
          backgroundColor: "rgba(0,0,0,.4)",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 25,
        }}
      >
        <Text style={Estilo.cardTituloInicio}>{props.titulo}</Text>
      </View>
    </ImageBackground>
  </View>
);

//ARTILHEIROS

export const Card34Artilheiros = (props) => (
  <View style={Estilo.card34Container}>
    <ImageBackground
      source={props.imagemCard}
      style={Estilo.cardBackground}
      imageStyle={{ borderRadius: 25 }}
      resizeMode="cover"
    >
      <View
        style={{
          backgroundColor: "rgba(0,0,0,.4)",
          height: "100%",
          borderRadius: 25,
        }}
      >
        <View style={{
          flexDirection:'row',
          justifyContent:'space-between',
          alignItems:'center',
          padding: 15,
        }}>
          <Text style={Estilo.cardArtilheiroTitulo}>{props.titulo}</Text>
          <Text style={Estilo.cardArtilheiroGols}>{props.gols} gols</Text>
        </View>      
        <View style={{
          position:"absolute",
          bottom:0,          
          backgroundColor:'#2fa871',
          width:'100%',
          borderBottomEndRadius:25,
          borderBottomStartRadius:25,
        }}>
          <Text style={Estilo.cardArtilheiroAnos}>{props.anos}</Text>
        </View>  
      </View>      
    </ImageBackground>
  </View>
);
