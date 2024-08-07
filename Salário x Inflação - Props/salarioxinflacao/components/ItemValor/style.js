import { StyleSheet } from "react-native";

const Estilos = StyleSheet.create({
  Linha: {
    flexDirection: "row",
    height: 70,
  },
  Coluna1: {
    flex: 2,
    justifyContent: "center",
    paddingHorizontal: 30,
  },
  Coluna2: {
    flex: 2,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  Coluna3: {
   flex: 1,
   justifyContent: "center",
   paddingHorizontal: 10,
 },
  

  Paragrafo: {
    fontSize: 16,
    textAlign: "center"
  },
});

export default Estilos;
