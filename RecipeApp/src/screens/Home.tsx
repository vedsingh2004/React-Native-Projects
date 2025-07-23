import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../assets/bg.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>🍽️ Come on, let’s discover what to cook today!
</Text>
        <Text style={styles.subtitle}>Search delicious meals by ingredient</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Ingredients')}
        >
          <Text style={styles.buttonText}>Let's Cook </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)', // Dim effect
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#ddd',
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#FF7043',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 30,
    elevation: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
