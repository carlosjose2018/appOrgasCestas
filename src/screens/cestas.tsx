import React from 'react';
import { Image, StyleSheet, Dimensions, Text } from 'react-native';

import topo from "../assets/topo.png"

const width = Dimensions.get('screen').width;

export function Cestas() {
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
      textAlign:"center"
    }
})