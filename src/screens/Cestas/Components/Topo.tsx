import React from 'react';

import { Image, Text, Dimensions,  StyleSheet } from 'react-native';
const width = Dimensions.get('screen').width;

import topo from "../../../assets/topo.png"

export function Topo() {
  return (
    <>
      <Image source={topo} style={topoImg.topStyle}/>
      <Text style={topoImg.textDescription}>Detalhes da Cestas</Text>
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
})