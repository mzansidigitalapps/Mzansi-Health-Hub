import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../theme/colors';

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>Mzansi Health Hub © 2026</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: { height: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.secondary },
  text: { color: '#fff', fontSize: 14 }
});
