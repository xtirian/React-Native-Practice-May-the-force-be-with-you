import React from "react";
import { View, ScrollView, Text } from "react-native";

//Importar componente
import { ItemValor1 } from "../ItemValor";

//Importar Array
import Array from "../../assets/Array";

//Importr Estilos
import Estilos from "./style";

export default function PgSalario() {
  const TelaItens = [];

  for (let i = 0; i < Array.length; i++) {
    let background = (i + 1) % 2;
    TelaItens.push(
      <View
        style={
          background == 0
            ? { backgroundColor: "lightgray" }
            : { backgroundColor: "#fff" }
        }
      >
        <ItemValor1
          ano={Array[i].ano}
          info={`R$ ${parseFloat(Array[i].salario)
            .toFixed(2)
            .replace(".", ",")}`}
        />
      </View>
    );
  }
  return (
    <View style={Estilos.container}>
      <ScrollView>
        <View style={Estilos.titulo}>
          <ItemValor1 ano="Ano" info="Salario" />
        </View>
        {TelaItens}
      </ScrollView>
    </View>
  );
}
