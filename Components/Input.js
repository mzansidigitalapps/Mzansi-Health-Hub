import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import colors from '../theme/colors';

export default function Input(props) {
  return <TextInput style={styles.input} {...props} />;
}

const styles = StyleSheet.create({
  input: { borderWidth: 1, borderColor: colors.primary, padding: 10, margin: 10, borderRadius: 8, width: '90%' }
});
