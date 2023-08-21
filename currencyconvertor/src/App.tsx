import { FlatList, Pressable, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { currencyByRupee } from './constans';
import Snackbar from 'react-native-snackbar';
import CurrencyButton from './components/CurrencyButton';

export default function App(): JSX.Element {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');
    const [target, setTarget] = useState('');

    const buttonPressed = (targetValue: Currency) => {
        if (!input) {
            return Snackbar.show({
                text: "Please enter a value",
                backgroundColor: '#ea7773'
            })
        }

        const amount = parseFloat(input);
        if (!isNaN(amount)) {
            const converted = amount * targetValue.value;
            const res = `${targetValue.symbol} ${converted.toFixed(2)}`
            setResult(res)
            setTarget(targetValue.name)
        }
        else {
            return Snackbar.show({
                text: "Please enter a number",
                backgroundColor: '#ea7773'
            })
        }
    }

    return (
        <>
            <StatusBar />
            <View style={styles.container}>
                <View style={styles.topContainer}>
                    <View style={styles.rupeesContainer}>
                        <Text style={styles.rupee}>₹</Text>
                        <TextInput maxLength={14} value={input} clearButtonMode='always' onChangeText={setInput} keyboardType='numeric' placeholder='Enter Amount in Rupees-' />
                    </View>
                    {result && (
                        <Text style={styles.resultTxt}>{result}</Text>
                    )}
                </View>
                <View style={styles.bottomContainer}>
                    <FlatList
                    numColumns={3}
                    data={currencyByRupee}
                    keyExtractor={item => item.name}
                    renderItem={({item}) => (
                        <Pressable
                        style={[
                            styles.button,
                            target === item.name && styles.selected
                        ]}
                        onPress={() => buttonPressed(item)}
                        >
                            <CurrencyButton {...item}></CurrencyButton>
                        </Pressable>
                    )}
                    />
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#515151',
    },
    topContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    resultTxt: {
        fontSize: 32,
        color: '#000000',
        fontWeight: '800',
    },
    rupee: {
        marginRight: 8,

        fontSize: 22,
        color: '#000000',
        fontWeight: '800',
    },
    rupeesContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputAmountField: {
        height: 40,
        width: 200,
        padding: 8,
        borderWidth: 1,
        borderRadius: 4,
        backgroundColor: '#FFFFFF',
    },
    bottomContainer: {
        flex: 3,
    },
    button: {
        flex: 1,

        margin: 12,
        height: 60,

        borderRadius: 12,
        backgroundColor: '#fff',
        elevation: 2,
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowColor: '#333',
        shadowOpacity: 0.1,
        shadowRadius: 1,
    },
    selected: {
        backgroundColor: '#ffeaa7',
    },
});