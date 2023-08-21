import React from 'react'
import type { PropsWithChildren } from 'react'
import { StyleSheet, Text, View } from 'react-native';

type CurrencyButtonProps = PropsWithChildren<{
    name: string;
    flag: string;
     
}>

const CurrencyButton = (props: CurrencyButtonProps):JSX.Element => {
    return (
        <View style={styles.buttonContainer}>
            <Text style={styles.flag}>{props.flag}</Text> 
            <Text style={styles.name}>{props.name}</Text> 
        </View>
    )
}
const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'center',
    },
    flag:{
        fontSize: 28,
        color: '#FFFFFF',
        marginBottom: 4
    },
    name:{
        fontSize: 14,
        marginBottom: 4,
        color: '#FFFFFF'
    },
})


export default CurrencyButton