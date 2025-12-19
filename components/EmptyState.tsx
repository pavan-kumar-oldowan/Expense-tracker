import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EmptyState: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>No expenses yet 👀</Text>
      <Text>Add your first transaction</Text>
    </View>
  );
};

export default EmptyState;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 30,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
