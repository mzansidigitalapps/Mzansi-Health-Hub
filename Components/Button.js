import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import colors from '../theme/colors';

export default function Button({ title, onPress, color }) {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: color || colors.primary }]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: { padding: 12, margin: 10, borderRadius: 8, alignItems: 'center' },
  text: { color: '#fff', fontSize: 16, fontWeight: 'bold' }
});
