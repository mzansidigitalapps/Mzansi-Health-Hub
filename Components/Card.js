import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../theme/colors';

export default function Card({ title }) {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { padding: 15, margin: 10, borderRadius: 10, backgroundColor: '#f5f5f5', shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 5 },
  text: { fontSize: 16, color: colors.text }
});
