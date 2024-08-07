import { StyleSheet } from "react-native";

const Estilo = StyleSheet.create({
  container: {
    paddingHorizontal: '7%',
    backgroundColor: "#fff",
  },
  imagemHistoria: {
    width: "100%",
    height: 250,
    resizeMode: "cover",
    marginVertical:10,
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical:10
  },
  paragrafo: {
    fontSize: 18,
    lineHeight: 30,
    marginVertical:10,
  },

  //CARD
  cardGrade: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 20,
    justifyContent: "center",
    marginVertical: 10,
  },
  cardContainer: {
    width: 160,
    height: 160,
    justifyContent: "center",
    alignItems: "center",
  },
  cardImg: {
    width: 70,
    tintColor: "#fff",
    alignSelf: "center",
    resizeMode: "contain",
    marginBottom:8
  },
  cardTxt: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
  },
});

export default Estilo;
