import {Text, View, Transform} from 'react-native';
import React from 'react';
import Marcador from '../Marcador';
import Estilo from './style';

import FundoVerde from '../../assets/fundo-verde.jpg'
import FundoAzul from '../../assets/fundo-azul.jpg'

export default function TelaInicial(){
 return (
  <View style={Estilo.container}>   
   <Marcador Player="1" Tabuleiro={FundoAzul}/>
   <Marcador Tabuleiro={FundoVerde} />
  </View>
 )
}