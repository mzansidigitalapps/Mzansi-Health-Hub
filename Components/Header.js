import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../theme/colors';

export default function Header({ title }) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: { height: 60, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.primary },
  title: { color: '#fff', fontSize: 20, fontWeight: 'bold' }
});
