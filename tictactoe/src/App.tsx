import { FlatList, Pressable, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Snackbar from 'react-native-snackbar'
import Icons from './components/icons'

export default function App(): JSX.Element {
  const [isCross, setIsCross] = useState<boolean>(false)
  const [winner, setWinner] = useState<string>('')
  const [state, setState] = useState(new Array(9).fill('empty', 0, 9))

  const reload = () => {
    setIsCross(false)
    setWinner('')
    setState(new Array(9).fill('empty', 0, 9))
  }

  const check = () => {
    if (
      state[0] === state[1] &&
      state[0] === state[2] &&
      state[0] !== 'empty'
    ) {
      setWinner(`${state[0]} won the game! 🥳`);
    } else if (
      state[3] !== 'empty' &&
      state[3] === state[4] &&
      state[4] === state[5]
    ) {
      setWinner(`${state[3]} won the game! 🥳`);
    } else if (
      state[6] !== 'empty' &&
      state[6] === state[7] &&
      state[7] === state[8]
    ) {
      setWinner(`${state[6]} won the game! 🥳`);
    } else if (
      state[0] !== 'empty' &&
      state[0] === state[3] &&
      state[3] === state[6]
    ) {
      setWinner(`${state[0]} won the game! 🥳`);
    } else if (
      state[1] !== 'empty' &&
      state[1] === state[4] &&
      state[4] === state[7]
    ) {
      setWinner(`${state[1]} won the game! 🥳`);
    } else if (
      state[2] !== 'empty' &&
      state[2] === state[5] &&
      state[5] === state[8]
    ) {
      setWinner(`${state[2]} won the game! 🥳`);
    } else if (
      state[0] !== 'empty' &&
      state[0] === state[4] &&
      state[4] === state[8]
    ) {
      setWinner(`${state[0]} won the game! 🥳`);
    } else if (
      state[2] !== 'empty' &&
      state[2] === state[4] &&
      state[4] === state[6]
    ) {
      setWinner(`${state[2]} won the game! 🥳`);
    } else if (!state.includes('empty', 0)) {
      setWinner('Draw game... ⌛️');
    }
  }

  const change = (itemNumber: number) => {
    if (winner) {
      return Snackbar.show({
        text: winner,
        backgroundColor: '#000000',
        textColor: '#ffffff'
      })
    }
    if (state[itemNumber] === 'empty') {
      state[itemNumber] = isCross ? 'cross' : 'circle';
      setIsCross(!isCross)
    }
    else {
      return Snackbar.show({
        text: "Position Taken",
        backgroundColor: 'red',
        textColor: '#fff'
      })
    }

    check()
  }

  return (
    <SafeAreaView>
      <StatusBar />
      {winner ? (
        <View style={[styles.playerInfo, styles.winnerInfo]}>
          <Text style={styles.winnerTxt}>{winner}</Text>
        </View>
      ) : (
        <View style={[
          styles.playerInfo,
          isCross ? styles.playerX : styles.playerO
        ]}>
          <Text style={styles.gameBtnText}>Player {isCross ? 'X' : 'O'}'s Turn</Text>
        </View>
      )}
      <FlatList
        numColumns={3}
        data={state}
        style={styles.grid}
        renderItem={({ item, index }) => (
          <Pressable
            key={index}
            style={styles.card}
            onPress={() => change(index)}
          >
            <Icons name={item} />
          </Pressable>
        )}
      />
      <Pressable
        style={styles.gameBtn}
        onPress={reload }
      >
        <Text style={styles.gameBtnText}>{winner ? 'Start New Game' : 'Reload Game'}</Text>
      </Pressable>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  playerInfo: {
    height: 56,

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 4,
    paddingVertical: 8,
    marginVertical: 12,
    marginHorizontal: 14,

    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
  },
  gameTurnTxt: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  playerX: {
    backgroundColor: '#38CC77',
  },
  playerO: {
    backgroundColor: '#F7CD2E',
  },
  grid: {
    margin: 12,
  },
  card: {
    height: 100,
    width: '33.33%',

    alignItems: 'center',
    justifyContent: 'center',

    borderWidth: 1,
    borderColor: '#333',
  },
  winnerInfo: {
    borderRadius: 8,
    backgroundColor: '#38CC77',

    shadowOpacity: 0.1,
  },
  winnerTxt: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  gameBtn: {
    alignItems: 'center',

    padding: 10,
    borderRadius: 8,
    marginHorizontal: 36,
    backgroundColor: '#8D3DAF',
  },
  gameBtnText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: '500',
  },
});