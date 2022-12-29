import React from 'react';

import { StyleSheet, Text as Texto} from 'react-native';

export function Text({children, style}) {
  
let estilo = stylo.formatacao;
  
if(style?.fontWeight === "bold"){
    this.estilo = stylo.textoNegrito
}

  return  <Texto style={[style, stylo.formatacao]}>{children}  </Texto>
}

const stylo = StyleSheet.create({
    formatacao:{
        fontFamily:"MontserratRegular"
    },
    textoNegrito:{
        fontWeight:"bold"
    }
})