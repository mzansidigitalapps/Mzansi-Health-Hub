import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import colors from '../theme/colors';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mzansi Health Hub</Text>

      <Button title="Remedies" onPress={() => navigation.navigate('Remedies')} color={colors.primary} />
      <Button title="Doctors Nearby" onPress={() => navigation.navigate('Doctors')} color={colors.secondary} />
      <Button title="Pharmacy Nearby" onPress={() => navigation.navigate('Pharmacy')} color={colors.primary} />
      <Button title="SOS" onPress={() => navigation.navigate('SOS')} color={colors.emergency} />
      <Button title="Profile" onPress={() => navigation.navigate('Profile')} color={colors.secondary} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.background },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: colors.primary }
});
