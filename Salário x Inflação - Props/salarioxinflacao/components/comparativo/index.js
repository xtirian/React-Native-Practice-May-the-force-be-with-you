import React from "react";
import { View, ScrollView, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

//Importar componente
import { ItemValor2 } from "../ItemValor";

//Importar Array
import Array from "../../assets/Array";

//Importr Estilos
import Estilos from "./style";

function SalAnterior(Lista, i) {
  if (i <= 0) {
    return 0;
  } else {
    return parseFloat(Lista[i - 1].salario);
  }
}

function CalcCresc(Lista, Salario, i) {
  let salAnterior = SalAnterior(Lista, i);

  let crescimento;

  if (salAnterior == 0) {
    crescimento = "-";
  } else {
    crescimento = `${(((Salario - salAnterior) / salAnterior) * 100).toFixed(
      2
    )}`;
  }

  return crescimento;
}

function Status(ipca, cresc) {
  if (cresc === "-") {
    ("");
  } else if (cresc - ipca > 0) {
    return <AntDesign name="arrowup" size={24} color="green" />;
  } else {
    return <AntDesign name="arrowdown" size={24} color="red" />;
  }
}

function TelaItens (){
  const TelaItens = [];

  for (let i = 0; i < Array.length; i++) {
    let background = (i + 1) % 2;
    let salario = Array[i].salario.toFixed(2);
    let inflacao = Array[i].inflacao.toFixed(2);
    let crescimento = CalcCresc(Array, salario, i);
    let status = Status(inflacao, crescimento);

    TelaItens.push(
      <View
        style={
          background == 0
            ? { backgroundColor: "lightgray" }
            : { backgroundColor: "#fff" }
        }
      >
        <ItemValor2
          ano={Array[i].ano}
          salario={`R$ ${salario.replace(".", ",")}`}
          inflacao={`${inflacao.replace(".", ",")}%`}
          crescimento={`${crescimento.replace(".", ",")}${
            crescimento === "-" ? "" : "%"
          }`}
          status={status}
        />
      </View>
    );
  }

  return TelaItens
}

export default function PgComparativo() {
  return (
    <ScrollView>
      <View style={Estilos.titulo}>
        <ItemValor2
          ano="Ano"
          salario="Salário"
          inflacao="Inflação"
          crescimento="Cresc. Salarial"
          status="Status Salário"
        />
      </View>
      {TelaItens()}
    </ScrollView>
  );
}
