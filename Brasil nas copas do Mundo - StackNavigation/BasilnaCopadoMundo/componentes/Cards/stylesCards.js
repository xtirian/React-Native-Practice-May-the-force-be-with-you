import { StyleSheet } from "react-native";

const Style = StyleSheet.create({
  //GERAL
  cardBackground: {
    width: "100%",
    height: "100%",
  },

  //CARDS 2x4

  //CARD FINAIS
  card24Container: {
    width: "100%",
    height: 160,
    marginVertical: 10,
  },
  cardTituloFinais: {
    fontSize: 26,
    color: "#fff",
    letterSpacing: 2,
  },
  CardFinaisPlacar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 15,
  },
  cardTituloPlacar: {
    fontSize: 36,
    color: "#fff",
    letterSpacing: 2,
    marginHorizontal: 10,
  },
  CardFinaisBandeira: {
    height: 86,
    width: 137,
    resizeMode: "contain",
  },

  //CARD TITULOS
  cardTituloAno: {
    fontSize: 100,
    color: "#fff",
    fontWeight: "bold",
    letterSpacing: 2,
    textAlign: "center",
  },

  // CARDS 3X4

  //CARD INICIO
  card34Container: {
    width: "100%",
    height: 200,
    marginVertical: 17,
  },

  cardTituloInicio: {
    fontSize: 66,
    color: "#fff",
    letterSpacing: 2,
  },

  //CARD ARTILHEIROS
  cardArtilheiroTitulo: {
    fontSize: 42,
    color: "#fff",
    letterSpacing: 2,
    textTransform: "uppercase",
  },
  cardArtilheiroGols: {
    fontSize: 26,
    color: "#fff",
    textTransform: "uppercase",
    backgroundColor: "darkblue",
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 10,
  },
  cardArtilheiroAnos: {
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
  },
});

export default Style;
