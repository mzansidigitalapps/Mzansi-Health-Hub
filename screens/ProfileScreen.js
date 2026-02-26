import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../theme/colors';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>User Profile</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.background },
  text: { fontSize: 22, color: colors.primary }
});
