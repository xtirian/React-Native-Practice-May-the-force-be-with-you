import { StyleSheet } from "react-native";

const Estilos = StyleSheet.create ({
 container:{
  flex:1,
  backgroundColor:'#fff'
  
 },

 background:{  
  height:'100%',
  alignItems:'center',
  justifyContent:'center',
  alignItems:'center',
 },

 ContainerPrincipal:{
  width:275,
  alignItems:'center',
  paddingHorizontal:15,
  backgroundColor:'rgba(255,255,255,0.5)',
  borderRadius:10  
 },
 
 titulo:{
  textTransform:'uppercase',
  fontSize:32,
  fontWeight:'bold',
  color:'darkblue',
  textAlign:'center',
  marginVertical:15
 },

 
 ContainerInput:{
  flexDirection:'row',  
  justifyContent:'space-between',
  width: '90%',
  marginVertical:15
 },
 questao:{
  fontSize:32
 },
 input:{
  borderWidth:1,
  borderColor:'black',
  width:100
 },


 ContainerBtnRespostas:{
  flexDirection:'row',
  justifyContent:'space-between',
  width:'100%',
  heigth:50,
  marginVertical:15
 },
 ContainerBtnPular:{
  backgroundColor:"#e53b62",
  width:110,
  padding: 5
 },
 ContainerBtnResponder:{
  backgroundColor:"#a0df52",
  width:110,
  padding: 5
 },

 ContainerBtnTabuada:{
  backgroundColor:"#1f4f66",
  width:300,
  marginVertical:15,
 },

 TextoBtn:{
  color:'#fff',
  textAlign:'center',
  textTransform:'uppercase',
  fontSize:17,
  padding: 5
 },
});

export default Estilos