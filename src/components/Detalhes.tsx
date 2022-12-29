import React from 'react';

import { View, Image, StyleSheet, Text } from 'react-native';


import logo from "../assets/logo.png"

import { Text as Texto } from '../components/Text';

export function Detalhes() {
  return (
   <>
    <View style={topoImg.viewFazenda}>
          <Image source={logo} style={topoImg.imagemFazenda}/>
          <Text style={topoImg.nomeFazenda}>Jenny Jack Farm</Text>
       </View>
          <Texto style={topoImg.descricao}>Uma cesta com produtos selecionados
           cuidadosamente da fazenda direto para sua cozinha.</Texto>
           <Texto style={topoImg.preco}>40.00</Texto>
    </>
  );
}

const topoImg = StyleSheet.create({
    viewFazenda:{
        flexDirection:"row",
        paddingVertical:12
      },
      imagemFazenda:{
         width:32,
         height:32,
      },
     nomeFazenda:{
      fontSize:16,
      lineHeight:26,
      marginLeft:12,
      fontFamily:"MontserratRegular"
     },
     descricao:{
      color:'#A3A3A3',
      fontSize:16,
      lineHeight:26
     },
     preco:{
      color:"#2A9F85",
      fontWeight:"bold",
      fontSize:26,
      lineHeight:42,
      marginTop:8
     }
})