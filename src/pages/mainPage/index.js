import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';

import styles from './styles';

import logo from '../../assets/logo.png';
import dice from '../../assets/dice.png';

export default function mainPage() {
  const [maxNumber, setMaxNumber] = useState(0);
  const [number, setNumber] = useState('?');

  function randomNumber() {
    if (maxNumber === 0) {
      alert('Preencha o campo para ter um número máximo!');
    }
    setNumber(Math.floor(Math.random() * maxNumber + 1));
  }

  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <Text style={styles.textWelcome}>Seja Bem-vindo!</Text>
        <Image source={logo} />
      </View>

      <Text style={styles.textNumberSort}>Número:</Text>

      <View style={styles.viewMax}>
        <Text style={styles.textMax}>*Máx:</Text>
        <TextInput
          onChangeText={(value) => setMaxNumber(parseInt(value, 10))}
          keyboardType="numeric"
          textAlign="center"
          textAlignVertical="center"
          style={styles.inputNumber}
        />
      </View>

      <View style={styles.viewSortNumber}>
        <Text style={styles.numberSort}>{number}</Text>
      </View>

      <View style={styles.viewButton}>
        <TouchableOpacity onPress={randomNumber} style={styles.buttonSort}>
          <Text style={styles.textButtonSort}>Sortear</Text>
          <Image style={styles.imgDice} source={dice} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
