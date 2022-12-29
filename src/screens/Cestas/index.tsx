import React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';



//Import components
import { Topo } from './Components/Topo';
import { Detalhes } from '../../components/Detalhes';

export function Cestas() {
  return (
  <>
   <Topo/>
      <View style={topoImg.view}>
         <Text style={topoImg.nome}>Cesta de Verduras</Text>
         <Detalhes/>
      </View>
  </>   
  );
}

const topoImg = StyleSheet.create({
    view:{
      paddingVertical:16,
    paddingHorizontal:16,
    },
    nome:{
      color:"#464646",
      fontSize:26,
      lineHeight:42,
      fontFamily:"MontserratBold"
    }
})