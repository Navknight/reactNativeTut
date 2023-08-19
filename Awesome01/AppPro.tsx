import React from 'react'
import { SafeAreaView, Text, View, StyleSheet, useColorScheme } from 'react-native'

function AppPro() {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <View style={styles.container}>
            <Text style={isDarkMode ? styles.whiteText : styles.darkText}>Hello World</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    darkText: {
        color: '#000000'
    },
    whiteText: {
        color: '#ffffff'
    }
})

export default AppPro;