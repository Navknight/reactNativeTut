import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
    return (
        <View>
            <Text style={styles.HeadingText}>Flat Cards</Text>
            <View style={styles.container}>
                <View style={[styles.box, styles.boxOne]}>
                    <Text>Red</Text>
                </View>
                <View style={[styles.box, styles.boxTwo]}>
                    <Text>Blue</Text>
                </View>
                <View style={[styles.box, styles.boxThree]}>
                    <Text>Three</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    HeadingText: {
        fontSize: 28,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    container: {
        flex: 1,
        flexDirection: 'row',

    },
    box: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 8,
        borderRadius: 8
    },
    boxOne: {
        backgroundColor: '#df1b1b',
        height: 100,
        width: 100,
    },
    boxTwo: {
        backgroundColor: '#1b5adf',
        height: 100,
        width: 100,
    },
    boxThree: {
        backgroundColor: '#1bdf55',
        height: 100,
        width: 100,
    }
})