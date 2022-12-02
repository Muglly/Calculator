import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { ButtonNumber, Numbers } from '../components/ButtonNumber';
import { Visor } from '../components/Visor';

export function Home() {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [operator, setOperator] = useState('');

  return (
    <View style={styles.container}>
      <Visor />
      <ButtonNumber />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#353535',
  },
});
