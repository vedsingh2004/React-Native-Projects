import React, { useEffect, useState } from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
  Easing,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

// Dice Assets
import secondary1 from './assets/secondary-1.png';
import secondary2 from './assets/secondary-2.png';
import secondary3 from './assets/secondary-3.png';
import secondary4 from './assets/secondary-4.png';
import secondary5 from './assets/secondary-5.png';
import secondary6 from './assets/secondary-6.png';
import primary1 from './assets/primary-1.png';
import primary2 from './assets/primary-2.png';
import primary3 from './assets/primary-3.png';
import primary4 from './assets/primary-4.png';
import primary5 from './assets/primary-5.png';
import primary6 from './assets/primary-6.png';

const App = () => {
  const [dice1, setDice1] = useState(secondary1);
  const [dice2, setDice2] = useState(primary1);
  const diceOpacity = new Animated.Value(1);

  const secondaryDice = [secondary1, secondary2, secondary3, secondary4, secondary5, secondary6];
  const primaryDice = [primary1, primary2, primary3, primary4, primary5, primary6];

  const rollDice = () => {
    Animated.sequence([
      Animated.timing(diceOpacity, {
        toValue: 0,
        duration: 150,
        useNativeDriver: true,
        easing: Easing.out(Easing.ease),
      }),
      Animated.timing(diceOpacity, {
        toValue: 1,
        duration: 250,
        useNativeDriver: true,
        easing: Easing.in(Easing.ease),
      }),
    ]).start();

    const dice1Num = Math.floor(Math.random() * 6);
    const dice2Num = Math.floor(Math.random() * 6);

    setDice1(secondaryDice[dice1Num]);
    setDice2(primaryDice[dice2Num]);
  };

  useEffect(() => {
    rollDice();
  }, []);

  return (
    
    <LinearGradient
      colors={['#00ff9f', '#2c003e']}

      style={styles.background}
    >
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>🎲 Roll the Dice</Text>

        <View style={styles.diceContainer}>
          <Animated.View style={[styles.diceBox, { opacity: diceOpacity }]}>
            <Image source={dice1} style={styles.diceImage} />
          </Animated.View>
          <Animated.View style={[styles.diceBox, { opacity: diceOpacity }]}>
            <Image source={dice2} style={styles.diceImage} />
          </Animated.View>
        </View>

        <TouchableOpacity activeOpacity={0.8} onPress={rollDice}>
          <LinearGradient
            colors={['#00ff9f', '#2c003e']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.rollButton}
          >
            <Text style={styles.rollButtonText}>Roll Dice</Text>
          </LinearGradient>
        </TouchableOpacity>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default App;

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  title: {
    fontSize: 36,
    fontWeight: '800',
    color: '#fff',
    marginBottom: 40,
  },
  diceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 40,
  },
  diceBox: {
    width: 120,
    height: 120,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
  },
  diceImage: {
    width: 80,
    height: 80,
  },
  rollButton: {
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
  },
  rollButtonText: {
    color: '#00ff9f',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

