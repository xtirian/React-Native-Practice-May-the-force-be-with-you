import { StyleSheet } from "react-native";

const Estilo = StyleSheet.create({
  containerSobre: {
    flex: 1,
    backgroundColor:'#fff'
  },

  //primeiro card de apresentação
  cardSobre: {
    paddingHorizontal: "6%",
    paddingVertical: 10,
    marginVertical: 10,
    flex:1
  },
  tituloCardSobre: {
    fontSize: 24,
    fontWeight: "bold",
    letterSpacing: 1,
    marginBottom: 15,
  },
  capaCardSobre: {
    width: "100%",
    height: 150,
    borderRadius:10,
    resizeMode:'contain'
  },
  informacoesCardSobre:{
   color:"grey",
   fontWeight:'bold',
   lineHeight:20,
   fontSize:16.5,
   marginTop:10,
  },

  //mini cards da parte com scrollview
  minicardGrade:{
   flex:1
  },
  minicardSobre:{
   flexDirection:'row',
   marginVertical:10,
   borderTopWidth:1,
   borderBottomWidth:1,
   borderColor:'lightgray',
  },
  imgMinicardSobre:{   
   flex:1,
   width:90,
   height:90,
  },
  textoContainerMinicardSobre:{
   flex:3,
   justifyContent:'center'
  },
  tituloMinicardSobre:{
   fontSize:20,
   fontWeight:'bold',
   letterSpacing: 1,
   marginLeft:10,

  },
  contentMinicardSobre:{
   fontSize:16,
   marginLeft:10,
  },

});

export default Estilo;
