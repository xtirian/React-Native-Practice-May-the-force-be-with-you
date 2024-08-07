import { StyleSheet } from "react-native";

const Estilos = StyleSheet.create ({
 background:{  
  height:'100%',
  alignItems:'center',
  justifyContent:'center',
  alignItems:'center',
 },

 ContainerPrincipal:{
  width:'80%',
  alignItems:'center',
  paddingHorizontal:15,
  backgroundColor:'rgba(255,255,255,0.5)',
  borderRadius:10  
 },

 titulo:{
  textTransform:'uppercase',
  fontSize:38,
  fontWeight:'bold',
  color:'darkblue',
  textAlign:'center',
  marginVertical:15
 },

 ContainerBotoes:{
  flexDirection:'row',
  justifyContent:'space-around',
  width:'100%',
  heigth:50,
  marginVertical:15
 },
 ContainerBtnVoltar:{
  backgroundColor:"#a0df52",
  width:110,
  padding: 5,
  marginVertical:15
 },
 ContainerBtnTabuada:{
  backgroundColor:"#1f4f66",
  width:110,
  padding: 5,
  marginVertical:15,
 },
 TextoBtn:{
  color:'#fff',
  textAlign:'center',
  textTransform:'uppercase',
  fontSize:18,
  lineHeight:28,
  padding: 5
 },
});

export default Estilos