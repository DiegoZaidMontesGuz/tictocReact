import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');

  const handlePress = () => {
    setGreeting(`Hello, ${name}!`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to React Native</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        onChangeText={setName}
      />
      <Button title="Greet Me" onPress={handlePress} />
      <Text style={styles.greeting}>{greeting}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20,
  },
  heading: {
    fontSize: 24, marginBottom: 20,
  },
  input: {
    borderWidth: 1, borderColor: '#ccc', width: '100%',
    padding: 10, marginBottom: 10, borderRadius: 5,
  },
  greeting: {
    marginTop: 20, fontSize: 20, color: 'blue',
  },
});