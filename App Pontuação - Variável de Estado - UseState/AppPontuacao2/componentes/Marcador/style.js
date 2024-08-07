import {StyleSheet} from 'react-native';

const Estilo = StyleSheet.create({ 
 Estilo:{},

 Container:{
  flex:1
 },

 LinhaTitulo:{
  flexDirection:'row',
  flex:1
 },
 LinhaPontuacao:{
  flexDirection:'row',
  flex:2,
  justifyContent:'center',
  alignItems:'center',  
 },
 PontuacaoTexto:{
  fontSize:200,
  marginHorizontal:30,
  color:'#fff',
  textShadowColor:'#000',
  textShadowRadius:15

 },
 LinhaReset:{
  flexDirection:'row',
  flex:2,
  justifyContent:'center',  
 },

})

export default Estilo