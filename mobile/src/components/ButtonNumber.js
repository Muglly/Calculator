import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

export function ButtonNumber() {
  const number = [];

  for (let i = 0; i <= 9; i++) {
    number.push(i);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.box}>
        <Text style={styles.textBox}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box}>
        <Text style={styles.textBox}>-</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box}>
        <Text style={styles.textBox}>=</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box}>
        <Text style={styles.textBox}>x</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box}>
        <Text style={styles.textBox}>/</Text>
      </TouchableOpacity>
      {number.map((nbr) => {
        return (
          <TouchableOpacity style={styles.box}>
            <Text style={styles.textBox}>{nbr}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap-reverse',
    justifyContent: 'center',
    marginTop: 50,
  },
  box: {
    width: 85,
    height: 85,
    backgroundColor: '#7676',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 45,
    margin: 10,
  },
  textBox: {
    fontFamily: 'Regular',
    fontSize: 40,
    color: '#ddd',
  },
});
