import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

const Ingredients = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
      navigation.navigate('Recipes', { searchTerm });
    }
  };

  return (
    <ImageBackground
      source={require('../assets/bg.jpg')} // make sure this path is correct
      style={styles.background}
      resizeMode="cover"
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.overlay}
      >
        <Text style={styles.title}>🥗 Enter an Ingredient</Text>
        <Text style={styles.subtitle}>We’ll find delicious recipes for you</Text>

        <TextInput
          placeholder="e.g. Chicken, Rice, Tomato"
          placeholderTextColor="#ccc"
          style={styles.input}
          value={searchTerm}
          onChangeText={setSearchTerm}
        />

        <TouchableOpacity style={styles.button} onPress={handleSearch}>
          <Text style={styles.buttonText}>🔍 Find Recipes</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default Ingredients;

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)', // dark overlay
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#ddd',
    textAlign: 'center',
    marginBottom: 30,
    fontStyle: 'italic',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    padding: 12,
    marginBottom: 20,
    backgroundColor: 'rgba(255,255,255,0.9)',
    color: '#000',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#FF7043',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 30,
    elevation: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 19,
    fontWeight: 'bold',
  },
});
