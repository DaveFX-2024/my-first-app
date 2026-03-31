import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [email, setEmail] = useState('');

  // The 2-second Splash Screen timer
  useEffect(() => {
    setTimeout(() => { setIsLoaded(true); }, 2000);
  }, []);

  if (!isLoaded) {
    return (
      <View style={styles.splash}>
        <Text style={styles.logoText}>🚀 MY APP</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <TextInput 
        placeholder="Email" 
        style={styles.input} 
        onChangeText={setEmail}
      />
      <TextInput 
        placeholder="Password" 
        secureTextEntry 
        style={styles.input} 
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  splash: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#2ecc71' },
  logoText: { fontSize: 40, color: 'white', fontWeight: 'bold' },
  container: { flex: 1, padding: 40, justifyContent: 'center' },
  title: { fontSize: 32, marginBottom: 40, fontWeight: 'bold' },
  input: { borderBottomWidth: 1, borderColor: '#ccc', marginBottom: 20, padding: 10 },
  button: { backgroundColor: '#3498db', padding: 15, borderRadius: 10, alignItems: 'center' },
  buttonText: { color: 'white', fontWeight: 'bold' }
});