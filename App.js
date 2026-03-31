import React, { useState, useEffect } from 'react';
import { 
  View, Text, TextInput, TouchableOpacity, 
  StyleSheet, SafeAreaView, ScrollView, KeyboardAvoidingView, Platform 
} from 'react-native';

export default function App() {
  const [screen, setScreen] = useState('splash'); // splash, login, signup, otp
  const [formData, setFormData] = useState({});

  useEffect(() => {
    setTimeout(() => setScreen('login'), 2500);
  }, []);

  // --- COMPONENT: Splash Screen ---
  if (screen === 'splash') {
    return (
      <View style={styles.splashContainer}>
        <Text style={styles.splashLogo}>🚀</Text>
        <Text style={styles.splashText}>STUDENT HUB</Text>
      </View>
    );
  }

  // --- COMPONENT: OTP Screen ---
  if (screen === 'otp') {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Verify Phone</Text>
        <Text style={styles.subtitle}>Enter the 6-digit code sent to your phone.</Text>
        <TextInput style={styles.input} placeholder="000000" keyboardType="number-pad" maxLength={6} />
        <TouchableOpacity style={styles.primaryButton} onPress={() => alert('Account Verified!')}>
          <Text style={styles.buttonText}>Verify & Finish</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setScreen('signup')}>
          <Text style={styles.linkText}>Back to Sign Up</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          
          {screen === 'login' ? (
            <>
              <Text style={styles.title}>Welcome Back</Text>
              <Text style={styles.subtitle}>Login to continue your journey.</Text>
              
              <TextInput style={styles.input} placeholder="Phone Number" keyboardType="phone-pad" />
              <TextInput style={styles.input} placeholder="Password" secureTextEntry />
              
              <TouchableOpacity style={styles.primaryButton}>
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
              
              <TouchableOpacity onPress={() => setScreen('signup')}>
                <Text style={styles.linkText}>Don't have an account? <Text style={{fontWeight: 'bold'}}>Sign Up</Text></Text>
              </TouchableOpacity>
            </>
          ) : (
            <>
              <Text style={styles.title}>Create Account</Text>
              <Text style={styles.subtitle}>Join our student community today.</Text>
              
              <TextInput style={styles.input} placeholder="Full Name" />
              <TextInput style={styles.input} placeholder="Phone Number" keyboardType="phone-pad" />
              <TextInput style={styles.input} placeholder="Email Address" keyboardType="email-address" />
              <TextInput style={styles.input} placeholder="School Name" />
              <TextInput style={styles.input} placeholder="Grade (e.g., 12)" />
              <TextInput style={styles.input} placeholder="Password" secureTextEntry />
              <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry />
              
              <TouchableOpacity style={styles.primaryButton} onPress={() => setScreen('otp')}>
                <Text style={styles.buttonText}>Get OTP Code</Text>
              </TouchableOpacity>
              
              <TouchableOpacity onPress={() => setScreen('login')}>
                <Text style={styles.linkText}>Already have an account? <Text style={{fontWeight: 'bold'}}>Login</Text></Text>
              </TouchableOpacity>
            </>
          )}

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // Splash Styles
  splashContainer: { flex: 1, backgroundColor: '#000', justifyContent: 'center', alignItems: 'center' },
  splashLogo: { fontSize: 80, marginBottom: 10 },
  splashText: { color: '#fff', fontSize: 24, fontWeight: '900', letterSpacing: 2 },
  
  // General Layout
  scrollContainer: { padding: 30, justifyContent: 'center', minHeight: '100%' },
  container: { flex: 1, padding: 30, justifyContent: 'center', backgroundColor: '#fff' },
  
  // Typography
  title: { fontSize: 32, fontWeight: '900', color: '#000', marginBottom: 10 },
  subtitle: { fontSize: 16, color: '#666', marginBottom: 40 },
  linkText: { textAlign: 'center', marginTop: 25, color: '#000', fontSize: 14 },
  
  // Inputs
  input: {
    backgroundColor: '#f5f5f5',
    padding: 18,
    borderRadius: 12,
    fontSize: 16,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#eee',
    color: '#000'
  },
  
  // Buttons
  primaryButton: {
    backgroundColor: '#000', // Your requested black primary color
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5
  },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' }
});  