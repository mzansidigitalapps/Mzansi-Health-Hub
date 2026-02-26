import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import colors from '../theme/colors';

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Button title="Login (mock)" onPress={() => navigation.replace('Home')} color={colors.primary} />
      <Button title="Register" onPress={() => navigation.navigate('Register')} color={colors.secondary} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.background },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: colors.primary }
});
