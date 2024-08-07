import { StyleSheet } from "react-native";

const Estilo = StyleSheet.create({
 containerVitorias:{
 },
 backgroundContainer:{  
  paddingHorizontal:'10%',
  alignItems:'center',
  paddingVertical:10,
 },

 //Card Vitorias
 cardDadosVitorias:{  
  marginVertical:10,
  backgroundColor:'rgba(0,0,0,0.4)',
  paddingHorizontal:'10%',
  paddingVertical:10
 },
 tituloCardDados:{
  fontSize:22,
  color:'#fff',
  fontWeight:'bold',
  marginVertical:5,
  textAlign:'center',
 },
 paragrafoCardDados:{
  color:'darkgray',
  marginVertical:5,
  lineHeight:20,
  textAlign:'center',
 },
 gradeCardDados:{
  marginVertical:10,
 },
 linhaGradeCard:{
  flexDirection:'row',
  marginVertical:5,
 },
 iconeGrade:{
 },
 gradetextosCardDados:{
  flexDirection:'row',
  alignItems:'center',
 },
 enfaseTextoGrade:{
  color:'gold',
  marginLeft: 15,
  fontSize: 18,
  fontWeight:'bold',
 },
 textoNormalGrade:{
  fontSize: 14,
  color:'darkgray',
  marginLeft: 5,
 },

 //Minicards
 minicardContainerVitoria:{
  marginVertical:10,
 },
 tituloContainerMinicard:{
  backgroundColor:'rgba(0,0,0,0.4)',
  paddingVertical:15,
 },
 tituloMinicardVitoria:{
  textAlign:'center',
  color:'#fff',
  fontSize:16,
 },
 imgMinicardVitoria:{
  width:280,
  height:180,
 },

})

export default Estilo;