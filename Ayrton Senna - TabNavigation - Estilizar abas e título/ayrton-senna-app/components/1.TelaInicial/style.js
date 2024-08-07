import { StyleSheet } from "react-native";

const Estilo = StyleSheet.create({
 containerInicio:{
  flex:1,
  justifyContent:'center',
  alignItems: 'center',
 },

 // capa
  capaInicio:{
  width:250,
  height:250,
  borderRadius: 125,
  borderWidth:3,
  borderColor:'#292828',
  marginVertical:20,
 }, 

 // card
 cardInicio:{
  backgroundColor:'rgba(0,0,0,0.75)',
  width:300,
  borderRadius:20,
  paddingVertical: 20,
  paddingHorizontal:20,
  marginVertical:20
 },
 tituloCardInicio:{
  color:'#fff',
  textAlign: 'center',
  fontSize:24,
  fontWeight:'bold',
  marginBottom:15,
 },
 descricaoCardInicio:{
  color:'gray',
  textAlign: 'center',
  fontSize:16
 },
})

export default Estilo;