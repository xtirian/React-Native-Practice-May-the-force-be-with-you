import React from "react";
import {
  ImageBackground,  
} from "react-native";

//importar os estilos
import style from "../style";

//importar os componentes da tela
import Conversor from "../../components/Conversor";

//importar Imagem do Background:
import background from "../../assets/background_b.jpeg";

export default function TelaKM2ML() {
  return (
    <ImageBackground source={background} style={style.backgroundContainer} 
    blurRadius={100}>
      <Conversor
      resultadoEsperado="km" />
    </ImageBackground>
  );
}
