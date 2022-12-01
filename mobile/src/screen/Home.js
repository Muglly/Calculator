import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Visor } from '../components/Visor';

export function Home() {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [operator, setOperator] = useState('');

  return (
    <View style={styles.container}>
      <Visor />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#353535',
    alignItems: 'center',
  },
});
