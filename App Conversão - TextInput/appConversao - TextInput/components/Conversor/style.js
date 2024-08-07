import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  containerInfo: {
    backgroundColor: "rgba(255,255,255,0.5)",
    borderRadius: 10,
    paddingVertical: 40,
    paddingHorizontal: 20,
    marginHorizontal: 20,
    marginVertical: 20,
  },

  titulo: {
    color: "#fff",
    fontSize: 26,
    textAlign: "center",
    marginBottom: 20,
  },

  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 35,
  },
  inputPrequelContainer: {
    backgroundColor: "#a2ffa2",
    width: 100,
    height: 36,
    borderRadius: 10,
    justifyContent: "center",
  },
  inputPrequel: {
    fontSize: 18,
    textAlign: "center",
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 10,
    height: 36,
    width: 200,
    fontSize: 18,
    paddingHorizontal: 10,
  },

  resultContainer: {
    marginVertical: 40,
  },
  result: {
    fontSize: 150,
    color: "#fff",
    textAlign: "center",
  },
  resultText: {
    fontSize: 32,
    color: "#fff",
    textAlign: "center",
  },
});

export default style;
