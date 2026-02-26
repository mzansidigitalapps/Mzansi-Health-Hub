import React from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import colors from '../theme/colors';

export default function SOSScreen() {
  const triggerSOS = () => {
    Alert.alert('SOS Triggered!', 'Emergency services have been notified.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Emergency SOS</Text>
      <Button title="Send SOS" onPress={triggerSOS} color={colors.emergency} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.background },
  text: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, color: colors.emergency }
});
