import React, { useState } from "react";
import { View, Text, ImageBackground, TextInput } from "react-native";

//importar os estilos
import style from "./style";

export default function Conversor(props) {
  let tipo = props.resultadoEsperado;
  let flag = tipo == "ml" ? 0 : 1;
  let titulo = [
    "Conversor de quilômetros para milhas",
    "Conversor de milhas para quilômetros",
  ];
  let prequel = ["Quilômetros", "Milhas"];
  let result = ["Milhas", "Quilômetros"];

  let [valorObtido, setValorObtido] = useState("");

  function Converter() {
    //alfa é o valor comum que é usado para converter os dados.
    const alfa = 1.609;

    if (valorObtido == 0) {
      return 0;
    } else if (tipo == "ml") {
      return (valorObtido / alfa).toFixed(2);
    } else {
      return (valorObtido * alfa).toFixed(2);
    }
  }

  if (valorObtido < 0) {
    alert("Digite um valor maior que ZERO!");
  } else if (isNaN(valorObtido) == true) {
    alert("Digite um Números!");
  }

  return (
    <View>
      <View style={style.containerInfo}>
        <Text style={style.titulo}>{titulo[flag]}</Text>
        <View style={style.inputContainer}>
          <View style={style.inputPrequelContainer}>
            <Text style={style.inputPrequel}>{prequel[flag]}</Text>
          </View>
          <TextInput
            style={style.input}
            onChangeText={(valor) => setValorObtido(valor)}
            value={valorObtido.toString()}
            keyboardType="numeric"
          />
        </View>
      </View>
      <View style={style.containerInfo}>
        <View style={style.resultContainer}>
          <Text style={style.result}>{Converter()}</Text>
          <Text style={style.resultText}>{result[flag]}</Text>
        </View>
      </View>
    </View>
  );
}
