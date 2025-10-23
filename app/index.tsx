import { router } from 'expo-router';
import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function WelcomeScreen() {
  const handleContinue = () => {
    router.push('/dashboard');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Main content */}
      <View style={styles.content}>
        {/* Title */}
        <Text style={styles.title}>
          Simplifying Property{'\n'}Waste Management
        </Text>

        {/* Illustration */}
        <View style={styles.illustration}>
          <Image 
            source={require('../assets/images/Home Screen.png')} 
            style={styles.illustrationImage}
            resizeMode="contain"
          />
        </View>

        {/* Buttons */}
        <View style={styles.buttonContainer}>
          <View style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Login</Text>
          </View>
          <View style={styles.createAccountButton}>
            <Text style={styles.createAccountButtonText}>Create Account</Text>
          </View>
        </View>

        {/* Continue button */}
        <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a237e', // Dark blue background
  },
  content: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    lineHeight: 44,
    marginBottom: 20,
  },
  illustration: {
    width: 800,
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  illustrationImage: {
    width: '100%',
    height: '100%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 15,
    gap: 15,
    width: '100%',
  },
  loginButton: {
    flex: 1,
    backgroundColor: 'white',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    maxWidth: 150,
  },
  loginButtonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  createAccountButton: {
    flex: 1,
    borderWidth: 2,
    borderColor: '#4caf50',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    maxWidth: 150,
  },
  createAccountButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  continueButton: {
    backgroundColor: '#4caf50',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
    width: 315,
  },
  continueButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
