import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export function Visor() {
  const [visor, setVisor] = useState(0);

  return (
    <View style={styles.visor}>
      <Text style={styles.textVisor}>{visor}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  visor: {
    width: '100%',
    height: 250,
    padding: 20,
    backgroundColor: '#7676',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  textVisor: {
    fontSize: 50,
    fontFamily: 'SemiBold',
    color: '#dddd',
  },
});
