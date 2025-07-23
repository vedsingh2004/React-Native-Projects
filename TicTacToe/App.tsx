import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Alert,
} from 'react-native';

const App = () => {
  const [gameState, setGameState] = useState(Array(9).fill('empty'));
  const [isCross, setIsCross] = useState(true);
  const [winMessage, setWinMessage] = useState('');

  const reloadGame = () => {
    setGameState(Array(9).fill('empty'));
    setIsCross(true);
    setWinMessage('');
  };

  useEffect(() => {
    checkIsWinner();
  }, [gameState]);

  const checkIsWinner = () => {
    const combos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let [a, b, c] of combos) {
      if (
        gameState[a] !== 'empty' &&
        gameState[a] === gameState[b] &&
        gameState[b] === gameState[c]
      ) {
        setWinMessage(`${gameState[a]} wins!`);
        return;
      }
    }

    if (!gameState.includes('empty') && !winMessage) {
      setWinMessage('Draw! 😐');
    }
  };

  const onChangeItem = (index: number) => {
    if (winMessage) {
      Alert.alert('Game Over', 'Press "New Game" to play again!');
      return;
    }

    if (gameState[index] === 'empty') {
      const newGame = [...gameState];
      newGame[index] = isCross ? 'X' : '0';
      setGameState(newGame);
      setIsCross(!isCross);
    } else {
      Alert.alert('Invalid Move', 'That spot is already filled.');
    }
  };

  const renderItem = ({ item, index }: any) => (
    <TouchableOpacity
      style={styles.box}
      onPress={() => onChangeItem(index)}
    >
      <Text style={styles.boxText}>
        {item !== 'empty' ? item : ''}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topSection}>
        <Text style={styles.title}>Tic Tac Toe</Text>
      </View>

      <FlatList
        numColumns={3}
        data={gameState}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
        style={styles.grid}
      />

      <Text style={styles.turnText}>
        {winMessage ? winMessage : `${isCross ? 'X' : '0'}'s Turn`}
      </Text>

      <TouchableOpacity style={styles.btn} onPress={reloadGame}>
        <Text style={styles.btnText}>New Game</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:  '#2E1A47',
    padding: 20,
    paddingTop: 60,
    alignItems: 'center',
  },
  topSection: {
    marginBottom: 30,
  },
  title: {
    color: '#fff',
    fontSize: 36,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  grid: {
    alignSelf: 'center',
  },
  box: {
    borderWidth: 1,
    borderColor: '#fff',
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxText: {
    fontSize: 36,
    color: '#fff',
    fontWeight: 'bold',
  },
  turnText: {
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 20,
  },
  btn: {
    backgroundColor: '#38CC77',
    padding: 15,
    borderRadius: 10,
    alignSelf: 'center',
  },
  btnText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
