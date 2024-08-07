import { View, Text } from "react-native";

import Estilos from "./style";

export function ItemValor1(props) {
  return (
    <View style={props.background}>
      <View style={Estilos.Linha}>
        <View style={Estilos.Coluna1}>
          <Text style={Estilos.Paragrafo}>{props.ano}</Text>
        </View>
        <View style={Estilos.Coluna1}>
          <Text style={Estilos.Paragrafo}>{props.info}</Text>
        </View>
      </View>
    </View>
  );
}

export function ItemValor2(props) {
  return (
    <View style={props.background}>
      <View style={Estilos.Linha}>
        <View style={Estilos.Coluna3}>
          <Text style={Estilos.Paragrafo}>{props.ano}</Text>
        </View>
        <View style={Estilos.Coluna2}>
          <Text style={Estilos.Paragrafo}>{props.salario}</Text>
        </View>
        <View style={Estilos.Coluna2}>
          <Text style={Estilos.Paragrafo}>{props.inflacao}</Text>
        </View>
        <View style={Estilos.Coluna2}>
          <Text style={Estilos.Paragrafo}>{props.crescimento}</Text>
        </View>
        <View style={Estilos.Coluna3}>
          <Text style={Estilos.Paragrafo}>{props.status}</Text>
        </View>
      </View>
    </View>
  );
}
