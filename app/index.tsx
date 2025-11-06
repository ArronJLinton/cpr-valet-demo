import { router } from 'expo-router';
import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { PRIMARY_RED, BLACK, WHITE, CHARCOAL_GRAY } from '../constants/Colors';

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
    backgroundColor: WHITE,
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
    color: BLACK,
    textAlign: 'center',
    lineHeight: 44,
    marginBottom: 20,
  },
  illustration: {
    width: '80%',
    aspectRatio: 2, // maintains 2:1 ratio (was 800:400)
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
    backgroundColor: PRIMARY_RED,
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    maxWidth: 150,
  },
  loginButtonText: {
    color: WHITE,
    fontSize: 16,
    fontWeight: 'bold',
  },
  createAccountButton: {
    flex: 1,
    borderWidth: 2,
    borderColor: PRIMARY_RED,
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    maxWidth: 150,
  },
  createAccountButtonText: {
    color: PRIMARY_RED,
    fontSize: 16,
    fontWeight: 'bold',
  },
  continueButton: {
    backgroundColor: PRIMARY_RED,
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
    width: '100%',
  },
  continueButtonText: {
    color: WHITE,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
