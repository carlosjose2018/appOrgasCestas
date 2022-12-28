import React from 'react';
import { Image, StyleSheet, Dimensions, Text, View } from 'react-native';

import topo from "../assets/topo.png"
import logo from "../assets/logo.png"

const width = Dimensions.get('screen').width;

export function Cestas() {
  return (
  <>
      <Image source={topo} style={topoImg.topStyle}/>
      <Text style={topoImg.textDescription}>Detalhes da Cestas</Text>
      <View style={topoImg.view}>
         <Text style={topoImg.nome}>Cesta de Verduras</Text>
         <View style={topoImg.viewFazenda}>
          <Image source={logo} style={topoImg.imagemFazenda}/>
          <Text style={topoImg.nomeFazenda}>Jenny Jack Farm</Text>
         </View>
         <Text style={topoImg.descricao}>Uma cesta com produtos selecionados
           cuidadosamente da fazenda direto para sua cozinha.</Text>
           <Text style={topoImg.preco}>40.00</Text>
      </View>
  </>   
  );
}

const topoImg = StyleSheet.create({
    topStyle:{
      width:"100%",
      height: 578 / 768 * width,
    },
    textDescription:{
      width:"100%",
      position:"absolute",
      textAlign:"center",
      fontSize:16,
      lineHeight:26,
      color:"white",
      fontWeight:"bold",
      padding:16,
    },
    view:{
      paddingVertical:16,
    paddingHorizontal:16,
    },
    nome:{
      color:"#464646",
      fontSize:26,
      lineHeight:42,
      fontFamily:"MontserratBold"
    },
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