import React from 'react';
import { ActivityIndicator, StyleSheet, View } from "react-native";

export function Loanding() {
  return (
 <View style={[styles.container, styles.horizontal]}>
    <ActivityIndicator />
    <ActivityIndicator size="small" color="#0000ff" />
 </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center"
    },
    horizontal: {
      flexDirection: "row",
      justifyContent: "space-around",
      padding: 10
    }
  });